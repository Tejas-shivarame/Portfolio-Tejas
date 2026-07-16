import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "A collection of backend and full-stack projects built with Django, FastAPI, PostgreSQL, React, and Next.js.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="container max-w-3xl">

          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I've built.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Search by name, or filter by technology to find what you're looking for.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <ProjectsGrid />
        </div>
      </section>
    </div>
  );
}
