"use client";

import { useEffect, useState } from "react";

/**
 * Tracks vertical scroll progress as a 0–1 value for the scroll
 * progress bar, and whether the user has scrolled past a threshold
 * (used to show/hide the scroll-to-top button and navbar shadow).
 */
export function useScrollProgress(threshold = 300) {
  const [progress, setProgress] = useState(0);
  const [pastThreshold, setPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setPastThreshold(scrollTop > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { progress, pastThreshold };
}
