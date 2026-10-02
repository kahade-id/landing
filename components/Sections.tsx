"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { DrawIcon, EASE, Pop, Reveal, SectionHeading, staggerChild, staggerParent } from "./motion-helpers";

/* ================= Trust marquee ================= */

const TRUST = [
  { title: "Escrow di setiap transaksi", desc: "Dana pembeli ditahan aman." },
  { title: "Cair saat barang diterima", desc: "Dana diteruskan setelah konfirmasi." },
  { title: "Jejak transaksi jelas", desc: "Chat & status tercatat rapi." },
  { title: "Sengketa ada jalurnya", desc: "Tim Kahade membantu menengahi." },
];

function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
      <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustStrip() {
  const reduce = useReducedMotion();
  const items = reduce ? TRUST : [...TRUST, ...TRUST];

  return (
    <section id="keunggulan" aria-label="Keunggulan escrow" className="overflow-hidden border-y border-black/10 bg-white py-7">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div key={i} className="mx-3 flex shrink-0 items-center gap-3 rounded-full border border-black/10 bg-[#F3F4F6]/70 py-2.5 pl-3 pr-6" aria-hidden={i >= TRUST.length}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <TrustIcon />
              </span>
              <span className="whitespace-nowrap text-sm">
                <span className="font-semibold text-black">{item.title}</span>
                <span className="text-[#525252]"> — {item.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Problem & Solution ================= */

const WITHOUT = [
  "Transfer langsung ke penjual yang belum dikenal",
  "Barang tak kunjung datang, penjual menghilang",
  "Uang yang sudah terkirim sulit kembali",
];

const WITH = [
  "Dana ditahan aman oleh escrow",
  "Penjual kirim barang dulu, dana cair setelahnya",
  "Ada jalur penyelesaian jika terjadi sengketa",
];

export function ProblemSolution() {
  return (
    <section className="hairline-t relative bg-white">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          kicker="Kenapa Kahade"
          title="Belanja online seharusnya tidak bikin was-was."
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2">
          {/* VS badge */}
          <Pop
            delay={0.35}
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-bold tracking-wide text-black shadow-[0_14px_34px_-12px_rgb(0_0_0/0.3)]">
              VS
            </span>
          </Pop>

          {/* Tanpa escrow */}
          <Reveal>
            <motion.div
              whileHover={{ y: -5, rotate: -0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="stripes h-full rounded-[1.75rem] border border-black/10 bg-white p-7 sm:p-9"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#525252]">
                Tanpa escrow
              </p>
              <motion.ul
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                className="mt-7 space-y-5"
              >
                {WITHOUT.map((t) => (
                  <motion.li
                    key={t}
                    variants={staggerChild}
                    className="flex gap-3.5 text-[15px] leading-relaxed text-[#525252]"
                  >
                    <span className="mt-0.5 text-black/30">
                      <DrawIcon
                        paths={["M6 6l12 12", "M18 6L6 18"]}
                        className="h-5 w-5"
                        strokeWidth={2.2}
                        duration={0.45}
                      />
                    </span>
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Reveal>

          {/* Dengan Kahade */}
          <Reveal delay={140}>
            <motion.div
              whileHover={{ y: -5, rotate: 0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative h-full overflow-hidden rounded-[1.75rem] bg-black p-7 text-white shadow-[0_30px_60px_-24px_rgb(0_0_0/0.55)] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <p className="relative text-[13px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Dengan Kahade
              </p>
              <motion.ul
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                className="relative mt-7 space-y-5"
              >
                {WITH.map((t, i) => (
                  <motion.li
                    key={t}
                    variants={staggerChild}
                    className="flex gap-3.5 text-[15px] leading-relaxed text-white/90"
                  >
                    <motion.span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 380, damping: 17, delay: 0.25 + i * 0.16 }}
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= How it works ================= */

const STEPS = [
  {
    n: "01",
    title: "Bayar ke escrow",
    desc: "Dana ditahan aman oleh Kahade, bukan langsung ke penjual.",
    icon: ["M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z", "M4 10l2.5-5h11L20 10", "M12 14v3"],
  },
  {
    n: "02",
    title: "Penjual mengirim",
    desc: "Penjual mengirim barang sesuai kesepakatan di chat.",
    icon: ["M3 7h11v9H3z", "M14 10h4l3 3v3h-7z", "M7.5 19a1.8 1.8 0 1 0 0-.01", "M17.5 19a1.8 1.8 0 1 0 0-.01"],
  },
  {
    n: "03",
    title: "Konfirmasi terima",
    desc: "Periksa barang, lalu konfirmasi penerimaan di aplikasi.",
    icon: ["M12 21c-4.5-2-7-5.5-7-10V6l7-3 7 3v5c0 4.5-2.5 8-7 10z", "M9.5 12l2 2 3.5-4"],
  },
  {
    n: "04",
    title: "Dana cair",
    desc: "Setelah konfirmasi, dana diteruskan ke penjual.",
    icon: ["M4 9h16v10H4z", "M4 9l2-4h12l2 4", "M12 12.5v4", "M9.5 13.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.4-2.5 1.7-2.5.7-2.5 1.7 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7"],
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="cara-kerja" className="scroll-mt-20 bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          kicker="Cara kerja"
          title="Empat langkah, semua terlindungi."
          sub="Alurnya sederhana — kamu selalu tahu danamu ada di mana."
        />

        <div ref={ref} className="relative mt-16">
          {/* Connector line (desktop) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-10 hidden h-[3px] rounded-full bg-black/10 lg:block">
            <motion.div
              className="h-full origin-left rounded-full bg-black"
              style={{ scaleX: reduce ? 1 : progress }}
            />
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STEPS.map((s) => (
              <motion.div key={s.n} variants={staggerChild} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_16px_40px_-24px_rgb(0_0_0/0.25)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-8 -right-4 select-none text-[7rem] font-bold leading-none text-black/[0.045] transition-colors duration-500 group-hover:text-black/[0.08]"
                  >
                    {s.n}
                  </div>
                  <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-[0_12px_26px_-10px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-105">
                    <DrawIcon paths={s.icon} className="h-7 w-7" strokeWidth={1.7} duration={0.55} />
                  </span>
                  <h3 className="relative z-10 mt-6 text-lg font-semibold tracking-tight text-black">{s.title}</h3>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#525252]">{s.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= Features (bento) ================= */

function MiniFeed() {
  return (
    <div aria-hidden="true" className="relative mt-8 overflow-hidden rounded-2xl border border-black/10 bg-[#F3F4F6] p-4">
      <div className="flex gap-3">
        {["from-[#e4e4e4] to-[#c9c9c9]", "from-[#d8d8d8] to-[#efefef]", "from-[#e9e9e9] to-[#d2d2d2]"].map((art, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: EASE }}
            className="w-36 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${art}`} />
            <div className="p-2.5">
              <div className="h-2 w-3/4 rounded-full bg-black/10" />
              <div className="mt-1.5 h-2 w-1/2 rounded-full bg-black/25" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F3F4F6] to-transparent" />
    </div>
  );
}

function MiniChat() {
  return (
    <div aria-hidden="true" className="mt-8 space-y-2.5 rounded-2xl border border-black/10 bg-[#F3F4F6] p-4">
      {[
        { me: true, w: "w-4/5" },
        { me: false, w: "w-3/5" },
        { me: true, w: "w-2/3" },
      ].map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.14, duration: 0.5, ease: EASE }}
          className={`flex ${m.me ? "justify-end" : "justify-start"}`}
        >
          <div className={`h-8 rounded-2xl ${m.w} ${m.me ? "rounded-br-md bg-black" : "rounded-bl-md bg-white shadow-sm"}`} />
        </motion.div>
      ))}
    </div>
  );
}

function MiniVerified() {
  return (
    <div aria-hidden="true" className="mt-8 flex items-center gap-3 rounded-2xl border border-black/10 bg-[#F3F4F6] p-4">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.14, type: "spring", stiffness: 320, damping: 17 }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[13px] font-bold text-white"
        >
          {["T", "A", "R"][i]}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
        className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-[11px] font-semibold text-white"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Terverifikasi
      </motion.span>
    </div>
  );
}

function MiniEscrow() {
  const steps = ["Bayar", "Kirim", "Konfirmasi", "Cair"];
  return (
    <div aria-hidden="true" className="mt-8 rounded-2xl border border-black/10 bg-[#F3F4F6] p-5">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.18, type: "spring", stiffness: 340, damping: 18 }}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold ${
                  i < 2 ? "bg-black text-white" : i === 2 ? "border-2 border-black bg-white text-black" : "bg-white text-[#525252] shadow-sm"
                }`}
              >
                {i + 1}
              </motion.span>
              <span className="text-[11px] font-medium text-[#525252]">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-1 mb-6 h-px flex-1 bg-black/15">
                <motion.div
                  className="h-full bg-black"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: i < 2 ? 1 : 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.18, duration: 0.5, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const BENTO = [
  {
    title: "Feed yang personal",
    desc: "Jelajahi etalase produk seperti media sosial — like, komen, dan follow penjual favoritmu.",
    icon: ["M4 5h16v11H4z", "M4 20h16", "M9 9.5h6", "M9 12.5h4"],
    visual: <MiniFeed />,
    span: "lg:col-span-2",
  },
  {
    title: "Chat transaksi",
    desc: "Tawar, sepakati detail, dan pantau status pesanan — semua tercatat dalam satu chat.",
    icon: ["M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z", "M8.5 12h7"],
    visual: <MiniChat />,
    span: "",
  },
  {
    title: "Penjual terverifikasi",
    desc: "Lencana verifikasi membantu kamu mengenali penjual yang identitasnya sudah dicek.",
    icon: ["M12 3l2.4 2.4 3.4-.5 1 3.3 3.2 1.2-1.2 3.2 1.2 3.2-3.2 1.2-1 3.3-3.4-.5L12 22l-2.4-2.4-3.4.5-1-3.3-3.2-1.2L3.2 12 2 8.8l3.2-1.2 1-3.3 3.4.5L12 2z"],
    visual: <MiniVerified />,
    span: "",
  },
  {
    title: "Escrow di setiap transaksi",
    desc: "Dana ditahan aman, cair setelah barang dikonfirmasi. Tanpa pengecualian.",
    icon: ["M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z", "M9.5 12l2 2 3.5-4"],
    visual: <MiniEscrow />,
    span: "lg:col-span-2",
  },
];

function BentoCard({ item, index }: { item: (typeof BENTO)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, ease: EASE, delay: (index % 2) * 0.1 }}
      className={`h-full ${item.span}`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="spot-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-7 sm:p-8"
      >
        <div aria-hidden="true" className="spot-glow" />
        <span className="relative inline-flex w-fit items-center justify-center rounded-2xl bg-black p-3.5 text-white transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110">
          <DrawIcon paths={item.icon} className="h-6 w-6" strokeWidth={1.8} duration={0.6} />
        </span>
        <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-black">{item.title}</h3>
        <p className="relative mt-2.5 max-w-md text-[15px] leading-relaxed text-[#525252]">{item.desc}</p>
        <div className="relative mt-auto">{item.visual}</div>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="fitur" className="hairline-t scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          kicker="Fitur unggulan"
          title="Dibuat untuk jual beli yang tenang."
          sub="Empat pilar yang bekerja bersama — bukan sekadar daftar fitur."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENTO.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
