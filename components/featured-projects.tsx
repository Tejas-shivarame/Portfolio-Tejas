"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            title="Selected work"
            description="A few systems and tools I've designed and shipped end to end."
            className="mb-0"
          />
          <Button asChild variant="secondary" className="shrink-0">
            <Link href="/projects">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
