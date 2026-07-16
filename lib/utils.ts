import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts (e.g. p-2 vs p-4).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a "YYYY-MM" or "YYYY-MM-DD" date string into a readable label,
 * e.g. "Jan 2024". Falls back to the raw string ("Present") when it
 * cannot be parsed.
 */
export function formatMonthYear(value: string): string {
  if (value === "Present") return value;
  const [year, month] = value.split("-");
  if (!year || !month) return value;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Simple slugify helper used for anchor ids and filter keys.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
