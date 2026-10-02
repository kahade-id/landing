"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { EASE, Magnetic, Reveal, Words } from "./motion-helpers";
import { PhoneMockup } from "./PhoneMockup";

/* ---------- 3D tilt wrapper for the phone (fine pointers only) ---------- */

function TiltPhone({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16, mass: 0.6 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16, mass: 0.6 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 12);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      className="[perspective:1400px]"
    >
      {children}
    </motion.div>
  );
}

/* ---------- Floating glass card beside the phone ---------- */

function FloatCard({
  className = "",
  delay = 0,
  floatDelay = "0s",
  children,
}: {
  className?: string;
  delay?: number;
  floatDelay?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 240, damping: 19, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="animate-float rounded-2xl border border-black/10 bg-white/85 px-4 py-3 shadow-[0_18px_44px_-16px_rgb(0_0_0/0.28)] backdrop-blur-xl"
        style={{ animationDelay: floatDelay }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function ShieldMini() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
      <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Scroll cue ---------- */

function ScrollCue() {
  return (
    <motion.a
      href="#keunggulan"
      aria-label="Gulir ke bawah"
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#525252] md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Gulir</span>
      <span className="flex h-9 w-[22px] justify-center rounded-full border border-black/20 pt-1.5">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-black"
          animate={{ y: [0, 10, 0], opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.a>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90]);
  const copyY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 46]);
  const fade = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
        <motion.div
          className="absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-[#F3F4F6] blur-3xl"
          animate={reduce ? undefined : { x: [0, 46, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[4%] top-[30%] h-[360px] w-[360px] rounded-full bg-[#e9eaec] blur-3xl"
          animate={reduce ? undefined : { x: [0, -38, 0], y: [0, 44, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-32 lg:pt-44">
        {/* Copy */}
        <motion.div style={{ y: copyY, opacity: fade }} className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 py-1.5 pl-2 pr-4 text-xs font-semibold text-[#525252] shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
            </span>
            Segera hadir
          </motion.span>

          <h1>
            <Words
              text="Jual beli di feed,"
              delay={0.22}
              className="mt-7 block text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] text-black sm:text-6xl lg:text-[4.5rem]"
            />
            <Words
              text="aman dengan escrow."
              delay={0.42}
              className="block text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] text-black/45 sm:text-6xl lg:text-[4.5rem]"
            />
          </h1>

          <Reveal delay={640} y={20}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-[#525252]">
              Kahade memadukan serunya social commerce dengan perlindungan
              escrow di setiap transaksi.
            </p>
          </Reveal>

          <Reveal delay={760} y={20}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Magnetic>
                <a
                  href="#download"
                  className="btn-shine group inline-flex min-h-[58px] items-center gap-2 overflow-hidden rounded-full bg-black px-9 text-base font-semibold text-white shadow-[0_18px_38px_-14px_rgb(0_0_0/0.5)] transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
                >
                  Download Kahade
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    aria-hidden="true"
                    animate={reduce ? undefined : { y: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M12 5v13m0 0l-5-5m5 5l5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </a>
              </Magnetic>
              <a
                href="#cara-kerja"
                className="group inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-black"
              >
                Lihat cara kerja
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="mt-5 text-sm text-[#525252]">Gratis · Segera hadir</p>
          </Reveal>
        </motion.div>

        {/* Phone */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ opacity: 0, y: 70, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
          className="relative lg:justify-self-end"
        >
          <TiltPhone>
            <div className="animate-float-slow">
              <PhoneMockup />
            </div>
          </TiltPhone>

          <FloatCard className="-right-3 top-16 sm:-right-8" delay={1.0} floatDelay="0.4s">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <ShieldMini />
              </span>
              <div>
                <p className="text-xs font-bold text-black">Escrow aktif</p>
                <p className="text-[11px] text-[#525252]">Dana ditahan aman</p>
              </div>
            </div>
          </FloatCard>

          <FloatCard className="-left-3 bottom-24 sm:-left-10" delay={1.2} floatDelay="1.3s">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6] text-base">
                ✓
              </span>
              <div>
                <p className="text-xs font-bold text-black">Dana cair</p>
                <p className="text-[11px] text-[#525252]">Rp1.890.000 ke penjual</p>
              </div>
            </div>
          </FloatCard>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}
