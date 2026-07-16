"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, X } from "lucide-react";

import { projects, allProjectTags } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesQuery =
        query.trim().length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || project.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="pl-10"
            aria-label="Search projects"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
            !activeTag
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/40"
          )}
        >
          All
        </button>
        {allProjectTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
              activeTag === tag
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            no results — try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
