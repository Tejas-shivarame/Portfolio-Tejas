import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must not exceed 80 characters.")
    .regex(/^[A-Za-z0-9._%+]+@[A-Za-z0-9.]+\.[A-Za-z]{2,}$/,
    "Enter a valid email address without spaces or hyphens."
    ),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject must not exceed 120 characters.")
    .refine((value) => value.trim().length > 0, {
      message: "Subject cannot be empty.",
    }),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must not exceed 2000 characters.")
    .refine((value) => value.trim().length > 0, {
      message: "Message cannot be empty.",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;