import nodemailer from "nodemailer";
import type { ContactFormData } from "@/schema/contactSchema";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MY_EMAIL = process.env.MY_EMAIL ?? EMAIL_USER;

// Debug environment variables (safe)
console.log("========== MAILER DEBUG ==========");
console.log("EMAIL_USER:", EMAIL_USER);
console.log("MY_EMAIL:", MY_EMAIL);
console.log("HAS_EMAIL_PASS:", !!EMAIL_PASS);
console.log("==================================");

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn(
    "[mailer] EMAIL_USER or EMAIL_PASS is missing — emails will fail to send."
  );
}

// Create transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Verify Error:", error);
  } else {
    console.log("✅ SMTP Server is ready");
  }
});

// Escapes user input before interpolating into HTML email bodies.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends the "you've got a new contact form message" email to yourself.
 */
export async function sendOwnerNotification(data: ContactFormData) {
  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
    to: MY_EMAIL,
    replyTo: data.email,
    subject: `New Portfolio Contact: ${data.subject}`,
    text: [
      "New Portfolio Contact",
      "",
      "Name:",
      data.name,
      "",
      "Email:",
      data.email,
      "",
      "Subject:",
      data.subject,
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong><br/>${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong><br/>${escapeHtml(data.email)}</p>
      <p><strong>Subject:</strong><br/>${escapeHtml(data.subject)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(data.message).replace(
        /\n/g,
        "<br/>"
      )}</p>
    `,
  });
}

/**
 * Sends an automatic confirmation back to the sender.
 */
export async function sendSenderConfirmation(
  data: ContactFormData,
  siteOwnerName = "Tejas"
) {
  await transporter.sendMail({
    from: `"${siteOwnerName}" <${EMAIL_USER}>`,
    to: data.email,
    subject: `Thanks for contacting ${siteOwnerName}`,
    text: [
      `Hi ${data.name},`,
      "",
      "Thank you for reaching out.",
      "",
      "I have received your message and will reply within 24 hours.",
      "",
      "Regards,",
      siteOwnerName,
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(data.name)},</p>
      <p>Thank you for reaching out.</p>
      <p>I have received your message and will reply within 24 hours.</p>
      <p>Regards,<br/>${siteOwnerName}</p>
    `,
  });
}