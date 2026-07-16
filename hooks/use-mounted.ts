"use client";

import { useEffect, useState } from "react";

/**
 * Guards against hydration mismatches for components that depend on
 * client-only state (theme, window size, etc.).
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
