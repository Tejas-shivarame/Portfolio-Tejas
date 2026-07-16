"use client";

import { motion } from "framer-motion";

/**
 * Ambient background used behind the hero: a faint engineering grid
 * with two slow-drifting color fields (indigo + amber) rather than a
 * generic blurred blob gradient.
 */
export function AnimatedGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-engineering-grid opacity-60" />
      <motion.div
        className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[110px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
