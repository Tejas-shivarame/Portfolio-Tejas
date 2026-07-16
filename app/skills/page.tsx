import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "Frontend, backend, database, and tooling skills — from React and Next.js to Django, FastAPI, and PostgreSQL.",
  
});

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-4 sm:pt-24">
        <div className="container max-w-3xl">
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The stack behind the work.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Proficiency levels below are self-assessed and reflect hands-on production
            experience, not just familiarity.
          </p>
        </div>
      </section>
      <SkillsSection />
    </div>
  );
}
