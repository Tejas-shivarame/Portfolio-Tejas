import nodemailer from "nodemailer";
import type { ContactFormData } from "@/schema/contactSchema";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MY_EMAIL = process.env.MY_EMAIL ?? EMAIL_USER;

if (!EMAIL_USER || !EMAIL_PASS) {
  // Logged only on the server, never exposed to the client.
  console.warn(
    "[mailer] EMAIL_USER or EMAIL_PASS is missing — emails will fail to send."
  );
}

// Single shared transporter instance, reused across requests.
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Escapes user input before interpolating into HTML email bodies, preventing
// stray HTML/markup in the message from breaking the email layout.
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
    replyTo: data.email, // lets you hit "reply" and respond directly to the sender
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
 * Sends an automatic "thanks for reaching out" confirmation back to the
 * person who submitted the form.
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