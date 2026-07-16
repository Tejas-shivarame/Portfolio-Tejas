import type { Metadata } from "next";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

import { buildMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Aarav Sharma for backend engineering roles, freelance projects, or collaboration.",
  path: "/contact",
});

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tejas-s-20apr2000", href: "https://linkedin.com/in/tejas-s-20apr2000"},
  { icon: Github, label: "GitHub", value: "github.com/Tejas-shivarame", href: "https://github.com/Tejas-shivarame" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="container max-w-3xl">
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's talk about what you're building.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Whether it's a full-time role, a freelance project, or just a question
            about something I've built — I read every message.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                </div>
              );
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
