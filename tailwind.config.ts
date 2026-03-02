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
      /* ── Typography scale — mirrors CSS token scale exactly ────────────── */
      fontSize: {
        "2xs":  ["10px", { lineHeight: "1.4" }],
        "xs":   ["12px", { lineHeight: "1.4" }],
        "sm":   ["14px", { lineHeight: "1.5" }],   /* matches --text-sm: 14px */
        "base": ["15px", { lineHeight: "1.6" }],
        "lg":   ["17px", { lineHeight: "1.4" }],
        "xl":   ["20px", { lineHeight: "1.3" }],   /* matches --text-xl: 20px */
        "2xl":  ["1.5rem",  { lineHeight: "2rem" }],
        "3xl":  ["1.875rem",{ lineHeight: "2.25rem" }],
        "4xl":  ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl":  ["3rem",    { lineHeight: "1" }],
        "6xl":  ["3.75rem", { lineHeight: "1" }],
        "7xl":  ["4.5rem",  { lineHeight: "1" }],
        "8xl":  ["6rem",    { lineHeight: "1" }],
        "9xl":  ["8rem",    { lineHeight: "1" }],
      },
      borderRadius: {
        /* Three locked design tokens — match globals.css exactly */
        btn:  "var(--radius-btn)",   /* all buttons, inputs, interactive boxes */
        card: "var(--radius-card)",  /* all cards, panels, dropdowns */
        full: "var(--radius-full)",  /* pill / badge / dot */
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
