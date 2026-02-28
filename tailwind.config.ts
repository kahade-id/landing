import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        // Map Tailwind classes to design token CSS vars so rounded-card, rounded-btn etc. work
        xs:   "var(--radius-xs)",
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        lg:   "var(--radius-lg)",
        card: "var(--radius-card)",
        btn:  "var(--radius-btn)",
        full: "var(--radius-full)",
      },
      colors: {
        ink: {
          DEFAULT: "var(--color-ink)",
          60: "var(--color-ink-60)",
          45: "var(--color-ink-45)",
          30: "var(--color-ink-30)",
          12: "var(--color-ink-12)",
          9:  "var(--color-ink-09)",
          7:  "var(--color-ink-07)",
          4:  "var(--color-ink-04)",
        },
        surface: "var(--color-surface)",
        muted:   "var(--color-muted)",
      },
      transitionTimingFunction: {
        spring: "var(--ease-spring)",
        pop:    "var(--ease-pop)",
        smooth: "var(--ease-smooth)",
      },
      transitionDuration: {
        hover: "220ms",
        fast:  "150ms",
        anim:  "720ms",
      },
    },
  },
  plugins: [],
};

export default config;
