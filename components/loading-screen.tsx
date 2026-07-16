"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bootLines = [
  "booting portfolio.sh",
  "loading modules: react, next, tailwind",
  "connecting to tejas@s:~$",
  "ready.",
];

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < bootLines.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(false), 420);
    return () => clearTimeout(t);
  }, [lineIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden
        >
          <div className="w-[min(90vw,420px)] rounded-xl border border-border bg-card p-6 font-mono text-sm shadow-2xl">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>
            <div className="space-y-1.5 text-muted-foreground">
              {bootLines.slice(0, lineIndex + 1).map((line, i) => (
                <p key={line}>
                  <span className="text-primary">$</span> {line}
                  {i === lineIndex && (
                    <span className="ml-1 inline-block h-3.5 w-1.5 animate-blink bg-primary align-middle" />
                  )}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
