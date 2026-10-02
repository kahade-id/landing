"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { EASE, Reveal, Words } from "./motion-helpers";
import { Check, ShieldCheck } from "@/lib/icons";
import { DownloadActions } from "./DownloadActions";
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
    ry.set(px * 10);
    rx.set(-py * 8);
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

/* ---------- Static glass card beside the phone ---------- */

function SideCard({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 20, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div className="rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-[0_18px_44px_-16px_rgb(0_0_0/0.25)] backdrop-blur-xl">
        {children}
      </div>
    </motion.div>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F4F6] py-1.5 pl-3 pr-4 text-xs font-semibold text-[#525252]"
          >
            <span className="h-2 w-2 rounded-full bg-black" aria-hidden="true" />
            Segera hadir
          </motion.span>

          <h1 className="mt-7">
            <Words
              text="Jual beli di feed,"
              delay={0.22}
              className="type-display block text-black"
            />
            <Words
              text="aman dengan escrow."
              delay={0.42}
              className="type-display block text-[#525252]"
            />
          </h1>

          <Reveal delay={640} y={16}>
            <p className="type-body mt-6 max-w-md text-[#525252]">
              Social commerce rasa media sosial, setiap transaksi dilindungi escrow.
            </p>
          </Reveal>

          <Reveal delay={760} y={16}>
            <DownloadActions size="lg" className="mt-9" />
          </Reveal>
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="relative lg:justify-self-end"
        >
          <TiltPhone>
            <PhoneMockup />
          </TiltPhone>

          <SideCard className="-right-2 top-20 sm:-right-6" delay={0.9}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <ShieldCheck weight="regular" className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold text-black">Escrow aktif</p>
                <p className="text-[11px] text-[#525252]">Dana ditahan aman</p>
              </div>
            </div>
          </SideCard>

          <SideCard className="-left-2 bottom-24 sm:-left-8" delay={1.05}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6]">
                <Check weight="bold" className="h-4 w-4 text-black" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold text-black">Dana cair</p>
                <p className="text-[11px] text-[#525252]">Setelah barang diterima</p>
              </div>
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}
