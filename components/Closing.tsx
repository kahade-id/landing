"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, Reveal, Words } from "./motion-helpers";
import { DownloadActions } from "./DownloadActions";
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
          <DownloadActions size="lg" layout="column" className="mt-11 items-center" />
          <motion.p
            className="mt-5 text-sm text-[#525252]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Gratis · Segera hadir
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
