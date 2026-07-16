"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Target } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
  { label: "Years writing Python", value: 3, suffix: "+" },
  { label: "Production APIs shipped", value: 20, suffix: "+" },
  { label: "Projects completed", value: 15, suffix: "+" },
  { label: "Cups of coffee", value: 900, suffix: "+" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          title="Backend-first, product-minded."
          description="I studied computer science, fell in love with how databases and APIs fit together, and now spend most of my time building systems that are boring in the best way: predictable, well-tested, and fast."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Education</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Tech in Computer Science and Engineering, M.S. Ramaiah University of Applied Sciences — graduated with a strong foundation in databases, 
              web engineering, and software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Code2 className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">What I do</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Design and develop scalable REST APIs for secure web applications.
              Build efficient database schemas and optimize backend performance using PostgreSQL and Django ORM.
              Develop modular backend services that power reliable, high-performance web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Target className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Objective</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Seeking to join a product engineering team where I can design and develop scalable backend systems and secure web applications.
              Contribute to backend architecture, REST API development, and efficient database design using Django and PostgreSQL.
              Build reliable, high-performance software by applying strong software engineering principles and performance optimization techniques.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface/50 p-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-3xl font-semibold text-primary sm:text-4xl"
              />
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
