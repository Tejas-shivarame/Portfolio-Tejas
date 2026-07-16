"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute left-3 top-3">
            <Badge className="gap-1 border-none bg-accent/90 text-accent-foreground">
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          {project.githubUrl && (
            <Button asChild variant="secondary" size="sm" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="sm" className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
