import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

// This route validates and accepts contact form submissions.
// Wire it up to a real email provider (Resend, SendGrid, etc.) by
// filling in the TODO below with your provider's SDK call.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: send the email, e.g. using Resend:
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: process.env.CONTACT_EMAIL_TO,
    //   subject: `New message: ${result.data.subject}`,
    //   text: `${result.data.name} <${result.data.email}>\n\n${result.data.message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
