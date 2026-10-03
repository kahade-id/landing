"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { EASE, Reveal, Words } from "./motion-helpers";
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

/* ---------- Hero (terpusat) ---------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-44">
        {/* Copy — terpusat */}
        <div className="mx-auto max-w-3xl text-center">
          <h1>
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
            <p className="type-body mx-auto mt-6 max-w-md text-[#525252]">
              Social commerce rasa media sosial, setiap transaksi dilindungi escrow.
            </p>
          </Reveal>

          <Reveal delay={760} y={16}>
            <DownloadActions size="lg" className="mt-9 justify-center" />
          </Reveal>
        </div>

        {/* Phone — terpusat di bawah */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="relative mt-16 flex justify-center sm:mt-20"
        >
          <TiltPhone>
            <PhoneMockup />
          </TiltPhone>
        </motion.div>
      </div>
    </section>
  );
}
