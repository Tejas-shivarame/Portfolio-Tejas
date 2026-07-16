import Link from "next/link";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

import { navLinks } from "@/data/nav-links";
import { socialLinks } from "@/data/social-links";
import { siteConfig } from "@/data/site-config";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  instagram: Github,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-gradient text-primary-foreground">
              <Terminal className="h-4 w-4" />
            </span>
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {siteConfig.shortBio}
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Quick links
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>{siteConfig.email}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
