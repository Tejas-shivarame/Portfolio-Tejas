import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsSection } from "@/components/skills-section";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn more about Aarav Sharma's background, education, and career objective as a software engineer and Python backend developer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40">
        <div className="container max-w-3xl">

          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The short version: I like systems that don't fall over.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I'm {siteConfig.name}, a software engineer based in {siteConfig.location}
              , specializing in Python backend development. I got into programming
              through a database systems course in college and never really left —
              there's something satisfying about designing a schema and API surface
              that makes the rest of the product easier to build.
            </p>
            <p>
            Most of my recent work has been in Django and Django REST Framework, building REST APIs,
            along with FastAPI — all backed by PostgreSQL. I also spend a fair amount of time on the
            front end with React, Next.js, and TypeScript, because I think backend engineers who understand 
            the client make better API decisions.
            </p>
            <p>
              Outside of work, I contribute to a couple of small open-source tools,
              read changelogs for fun, and am slowly working through a personal
              project that turns GitHub activity into shareable visual stories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Education</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Tech, Computer Science &amp; Engineering
              <br />
              M. S. Ramaiah University of Applied Sciences,Bengaluru — 2022–2024
              <br />
              Focus: Backend Engineering,Database Engineering, Web Engineering
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Career Objective</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              To join a product engineering team where I can own backend architecture
              decisions end to end, mentor on API design, and grow toward a
              staff-level generalist role.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            title="Experience & milestones"
            description="A condensed timeline of internships, freelance work, personal projects, and certifications."
          />
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <SkillsSection />
    </>
  );
}
