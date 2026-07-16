"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute inset-0 bg-engineering-grid opacity-40" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {"// let's build something"}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a backend problem worth solving? I'd like to hear about it.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/projects">See my work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
