"use client";

import { motion } from "framer-motion";
import { Briefcase, Laptop, FolderGit2, Award } from "lucide-react";

import { ExperienceItem, ExperienceType } from "@/types";
import { formatMonthYear } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const typeMeta: Record<ExperienceType, { label: string; icon: typeof Briefcase }> = {
  internship: { label: "Internship", icon: Briefcase },
  freelance: { label: "Freelance", icon: Laptop },
  personal: { label: "Personal Project", icon: FolderGit2 },
  certification: { label: "Certification", icon: Award },
};

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
      {items.map((item, index) => {
        const meta = typeMeta[item.type];
        const Icon = meta.icon;
        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[3.05rem]">
              <Icon className="h-4 w-4" />
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{meta.label}</Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {formatMonthYear(item.startDate)} — {formatMonthYear(item.endDate)}
              </span>
            </div>

            <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.organization}
              {item.location ? ` · ${item.location}` : ""}
            </p>

            <ul className="mt-3 space-y-1.5">
              {item.description.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {line}
                </li>
              ))}
            </ul>

            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </motion.li>
        );
      })}
    </ol>
  );
}
