"use client";

import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "motion/react";
import {
  Fragment,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Global motion settings: honours the OS "reduce motion" preference. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/* ---------------- Scroll reveal (drop-in replacement API) ---------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, y = 30 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Word-by-word headline reveal ---------------- */

type WordsProps = {
  text: string;
  className?: string;
  /** base delay in seconds */
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2";
};

export function Words({ text, className = "", delay = 0, stagger = 0.055, as = "span" }: WordsProps) {
  const words = text.split(" ");
  const inner = (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.95, ease: EASE, delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </>
  );

  if (as === "h1") return <h1 className={className}>{inner}</h1>;
  if (as === "h2") return <h2 className={className}>{inner}</h2>;
  return <span className={className}>{inner}</span>;
}

/* ---------------- Section heading: kicker + animated title ---------------- */

type SectionHeadingProps = {
  kicker: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export function SectionHeading({ kicker, title, sub, align = "center", dark = false }: SectionHeadingProps) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      <Reveal>
        <p
          className={`inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-white/60" : "text-[#525252]"
          }`}
        >
          <motion.span
            aria-hidden="true"
            className={`inline-block h-1.5 w-1.5 rounded-full ${dark ? "bg-white" : "bg-black"}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 16 }}
          />
          {kicker}
        </p>
      </Reveal>
      <Words
        as="h2"
        text={title}
        delay={0.08}
        className={`mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[2.6rem] sm:leading-[1.1] ${
          dark ? "text-white" : "text-black"
        }`}
      />
      {sub ? (
        <Reveal delay={220}>
          <p className={`mt-4 max-w-xl text-[17px] leading-relaxed ${dark ? "text-white/70" : "text-[#525252]"}`}>
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- Stagger container / item ---------------- */

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* ---------------- Magnetic hover (desktop pointers only) ---------------- */

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className = "", strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 15, mass: 0.4 });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- SVG stroke-draw icon ---------------- */

type DrawIconProps = {
  paths: string[];
  className?: string;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
};

export function DrawIcon({ paths, className = "", strokeWidth = 2, delay = 0, duration = 0.7 }: DrawIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration, ease: "easeInOut", delay: delay + i * 0.14 }}
        />
      ))}
    </svg>
  );
}

/* ---------------- Pop-in (spring scale) ---------------- */

type PopProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Pop({ children, className = "", delay = 0 }: PopProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}
