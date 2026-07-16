

import { motion } from "framer-motion";
import { Skill } from "@/types";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="h-full rounded-full bg-signal-gradient"
        />
      </div>
    </motion.div>
  );
}
