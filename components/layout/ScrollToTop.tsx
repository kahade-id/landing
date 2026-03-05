"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // FIX: Hormati prefers-reduced-motion — gunakan "instant" jika user prefer reduced motion.
    // "instant" is valid per the CSS scroll-behavior spec and supported in all modern browsers.
    // The `as ScrollBehavior` cast guards against older @types/dom that don't include "instant".
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: (prefersReducedMotion ? "instant" : "smooth") as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
