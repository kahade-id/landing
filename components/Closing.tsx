"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, Magnetic, Reveal, Words } from "./motion-helpers";
import { KahadeMark } from "./Logo";

export function Closing() {
  const reduce = useReducedMotion();

  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden bg-white">
      {/* Concentric pulse rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="relative mt-24 h-[560px] w-[560px] sm:h-[720px] sm:w-[720px]">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0"
              initial={{ scale: 0.72, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE, delay: i * 0.18 }}
            >
              <motion.span
                aria-hidden="true"
                className="block h-full w-full rounded-full border border-black/[0.07]"
                animate={reduce ? undefined : { scale: [1, 1.045, 1] }}
                transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: i * 1.4 }}
              />
            </motion.span>
          ))}
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F3F4F6] blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -14 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <KahadeMark className="mx-auto h-16 w-16 drop-shadow-[0_18px_30px_rgb(0_0_0/0.22)]" />
          </motion.div>
        </motion.div>

        <Words
          as="h2"
          text="Belanja di feed, tanpa was-was."
          delay={0.15}
          className="mx-auto mt-9 block max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-black sm:text-[3.4rem] sm:leading-[1.08]"
        />

        <Reveal delay={420}>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#525252]">
            Setiap transaksi dilindungi escrow. Jadilah yang pertama saat
            Kahade meluncur.
          </p>
        </Reveal>

        <Reveal delay={540}>
          <div className="mt-11">
            <Magnetic strength={0.32}>
              <a
                href="#top"
                className="btn-shine inline-flex min-h-[60px] items-center gap-2 overflow-hidden rounded-full bg-black px-11 text-base font-semibold text-white shadow-[0_24px_50px_-16px_rgb(0_0_0/0.55)] transition-transform duration-300 ease-out hover:scale-[1.04] active:scale-[0.98]"
              >
                Download Kahade
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                  <path d="M12 5v13m0 0l-5-5m5 5l5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Magnetic>
            <motion.p
              className="mt-5 text-sm text-[#525252]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Gratis · Segera hadir
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <KahadeMark className="h-8 w-8" />
          <p className="text-sm text-[#525252]">© 2026 Kahade</p>
        </motion.div>
        <motion.nav
          aria-label="Tautan footer"
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center text-sm text-[#525252] transition-colors hover:text-black"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center text-sm text-[#525252] transition-colors hover:text-black"
          >
            Syarat &amp; Ketentuan
          </a>
        </motion.nav>
      </div>
    </footer>
  );
}
