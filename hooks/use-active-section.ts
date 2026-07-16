"use client";

import { usePathname } from "next/navigation";

/**
 * Returns a helper that tells whether a given nav href matches the
 * current route, used to highlight the active link in the navbar.
 */
export function useActiveSection() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return { pathname, isActive };
}
