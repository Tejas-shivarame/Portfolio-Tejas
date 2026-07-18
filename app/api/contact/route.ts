import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/schema/contactSchema";
import { sendOwnerNotification, sendSenderConfirmation } from "@/lib/mailer";

// --- Rate limiting -----------------------------------------------------
// In-memory, per-serverless-instance limiter. This blocks rapid repeat
// submissions from the same IP within a single warm function instance.
// CAVEAT: Vercel can spin up multiple instances of this function under
// load, and each has its own memory — so this is a best-effort deterrent
// against casual spam, not a hard cross-instance guarantee. For strict
// rate limiting in production, use a shared store like Upstash Redis
// (@upstash/ratelimit) instead.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  try {
    // Identify caller for rate limiting.
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    // Parse JSON body safely — malformed JSON shouldn't crash the route.
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    // Validate + sanitize with Zod. Rejects empty values and invalid emails.
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form for errors.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Send both emails. If either fails, report a generic error — never
    // leak SMTP internals or credentials to the client.
try {
  console.log("Sending owner email...");
  await sendOwnerNotification(data);
  console.log("Owner email sent.");

  console.log("Sending confirmation email...");
  await sendSenderConfirmation(data);
  console.log("Confirmation email sent.");
} catch (mailError) {
  console.error("========== MAIL ERROR ==========");
  console.error(mailError);
  console.error("================================");

  return NextResponse.json(
    {
      success: false,
      message: "Unable to send email.",
      error:
        mailError instanceof Error ? mailError.message : "Unknown error",
    },
    { status: 502 }
  );
}

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/contact] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}