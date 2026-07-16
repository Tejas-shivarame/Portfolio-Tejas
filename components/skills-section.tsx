"use client";

import { skills, skillCategories } from "@/data/skills";
import { SkillCard } from "@/components/skill-card";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection({ compact = false }: { compact?: boolean }) {
  const categories = compact ? skillCategories.slice(0, 2) : skillCategories;

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          title="Tools I reach for"
          description="A working stack built around Python on the backend and TypeScript on the front end — chosen for reliability over novelty."
        />

        <div className="space-y-14">
          {categories.map((category) => {
            const items = skills.filter((s) => s.category === category);
            return (
              <div key={category}>
                <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  {category}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}