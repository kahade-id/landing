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

const FOOTER_COLS: { title: string; links: { label: string; href?: string }[] }[] = [
  {
    title: "Produk",
    links: [
      { label: "Aplikasi", href: "#aplikasi" },
      { label: "Cara kerja", href: "#cara-kerja" },
      { label: "Fitur", href: "#fitur" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Unduh",
    links: [
      { label: "Download Kahade", href: "#download" },
      { label: "Segera hadir di iOS & Android" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <a href="#top" aria-label="Kahade — kembali ke atas" className="inline-block">
              <KahadeMark className="h-10 w-10" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#525252]">
              Social commerce dengan escrow di setiap transaksi. Jual beli di
              feed, tanpa was-was.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F3F4F6] px-3.5 py-1.5 text-xs font-semibold text-[#525252]">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Segera hadir
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLS.map((col, ci) => (
              <motion.nav
                key={col.title}
                aria-label={`Tautan footer ${col.title}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 + ci * 0.07 }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#525252]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href ? (
                        <a
                          href={l.href}
                          className="inline-flex min-h-[40px] items-center text-[15px] text-[#262626] transition-colors hover:text-black"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <span className="inline-flex min-h-[40px] items-center text-[15px] text-[#525252]">
                          {l.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-7 sm:flex-row">
          <p className="text-sm text-[#525252]">© 2026 Kahade. Seluruh hak cipta dilindungi.</p>
          <p className="text-sm text-[#525252]">Dibuat dengan teliti di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
