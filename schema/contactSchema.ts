import { z } from "zod";

// Validates and sanitizes contact form input. .trim() strips leading/trailing
// whitespace before length checks, so " " alone can't pass as valid content.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormData = z.infer<typeof contactSchema>;