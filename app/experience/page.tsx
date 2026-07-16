import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experience } from "@/data/experience";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "Internships, freelance work, personal projects, and certifications — a full timeline of professional experience.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="container max-w-3xl">
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I've spent my time.
          </h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container max-w-3xl">
          <ExperienceTimeline items={experience} />
        </div>
      </section>
    </div>
  );
}
