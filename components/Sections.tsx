"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE, Reveal, SectionHeading } from "./motion-helpers";
import { Bank, ChatCircleDots, Check, CheckCircle, Handshake, Minus, SealCheck, ShieldCheck, Storefront, Truck, Wallet, X } from "@/lib/icons";

/* ================= Trust strip ================= */

const TRUST = [
  { title: "Escrow di setiap transaksi", desc: "Dana pembeli ditahan aman." },
  { title: "Cair saat barang diterima", desc: "Dana diteruskan setelah konfirmasi." },
  { title: "Jejak transaksi jelas", desc: "Chat & status tercatat rapi." },
  { title: "Sengketa ada jalurnya", desc: "Tim Kahade membantu menengahi." },
];

export function TrustStrip() {
  return (
    <section id="keunggulan" aria-label="Keunggulan escrow" className="border-y border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-7 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-14">
        {TRUST.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} y={16}>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                <ShieldCheck weight="regular" className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold text-black">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-[#525252]">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= Problem & Solution ================= */

/* ================= Perbandingan ================= */

type CellStatus = "check" | "minus" | "x";

interface CompareRow {
  aspect: string;
  mp: { status: CellStatus; text: string };
  rekber: { status: CellStatus; text: string };
  kahade: string;
}

const COMPARE_ROWS: CompareRow[] = [
  {
    aspect: "Etalase produk",
    mp: { status: "check", text: "Katalog toko" },
    rekber: { status: "minus", text: "Foto dikirim via chat" },
    kahade: "Feed seperti media sosial",
  },
  {
    aspect: "Interaksi pembeli",
    mp: { status: "check", text: "Chat & ulasan" },
    rekber: { status: "minus", text: "Chat manual" },
    kahade: "Like, komen, share, follow",
  },
  {
    aspect: "Keamanan dana",
    mp: { status: "check", text: "Proteksi pembeli" },
    rekber: { status: "minus", text: "Via admin perantara" },
    kahade: "Escrow otomatis",
  },
  {
    aspect: "Alur transaksi",
    mp: { status: "check", text: "Dalam satu aplikasi" },
    rekber: { status: "x", text: "Chat & dana terpisah" },
    kahade: "Chat terhubung ke escrow",
  },
  {
    aspect: "Penyelesaian sengketa",
    mp: { status: "check", text: "CS platform" },
    rekber: { status: "minus", text: "Mediasi admin" },
    kahade: "Jalur jelas di aplikasi",
  },
];

function StatusIcon({ status, dark }: { status: CellStatus; dark?: boolean }) {
  if (status === "check")
    return (
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-white text-black" : "bg-black/[0.06] text-black"
        }`}
      >
        <Check weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    );
  if (status === "minus")
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-[#525252]">
        <Minus weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    );
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-black/40">
      <X weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
  );
}

const COMPARE_COLS = [
  {
    id: "mp",
    icon: <Storefront weight="regular" className="h-5 w-5" aria-hidden="true" />,
    title: "Marketplace",
    sub: "Platform jual beli besar",
  },
  {
    id: "rekber",
    icon: <Handshake weight="regular" className="h-5 w-5" aria-hidden="true" />,
    title: "Rekber",
    sub: "Jasa perantara manual",
  },
  {
    id: "kahade",
    icon: <ShieldCheck weight="regular" className="h-5 w-5" aria-hidden="true" />,
    title: "Kahade",
    sub: "Social commerce + escrow",
  },
];

export function ProblemSolution() {
  return (
    <section className="hairline-t relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          title="Marketplace, rekber, atau Kahade?"
          sub="Tiga pendekatan jual beli online yang berbeda. Bandingkan, lalu putuskan mana yang paling pas untukmu."
        />

        <Reveal className="mt-14">
          {/* Kartu perbandingan */}
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_60px_-32px_rgb(0_0_0/0.18)]">
            <div className="no-scrollbar overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-0">
                <caption className="sr-only">
                  Perbandingan marketplace, jasa rekber manual, dan Kahade
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-[26%] bg-[#F3F4F6]/60 p-0 text-left">
                      <span className="sr-only">Aspek</span>
                    </th>
                    {COMPARE_COLS.map((col) =>
                      col.id === "kahade" ? (
                        <th
                          key={col.id}
                          scope="col"
                          className="relative w-[24.66%] bg-black p-0"
                        >
                          {/* Aksen kuning brand */}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-1 bg-[#FFD500]"
                          />
                          <div className="flex flex-col items-center gap-1.5 px-4 pb-6 pt-7 text-center">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
                              {col.icon}
                            </span>
                            <span className="text-base font-semibold text-white">
                              {col.title}
                            </span>
                            <span className="text-[13px] text-white/60">
                              {col.sub}
                            </span>
                          </div>
                        </th>
                      ) : (
                        <th
                          key={col.id}
                          scope="col"
                          className="w-[24.66%] border-b border-black/10 bg-[#F3F4F6]/60 p-0"
                        >
                          <div className="flex flex-col items-center gap-1.5 px-4 pb-6 pt-7 text-center">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-sm ring-1 ring-black/10">
                              {col.icon}
                            </span>
                            <span className="text-base font-semibold text-black">
                              {col.title}
                            </span>
                            <span className="text-[13px] text-[#525252]">
                              {col.sub}
                            </span>
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, ri) => {
                    const last = ri === COMPARE_ROWS.length - 1;
                    return (
                      <motion.tr
                        key={row.aspect}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                        transition={{
                          duration: 0.5,
                          ease: EASE,
                          delay: ri * 0.06,
                        }}
                        className="group"
                      >
                        <th
                          scope="row"
                          className={`sticky left-0 border-b border-black/10 bg-white px-5 py-5 text-left align-top text-[15px] font-semibold text-black transition-colors group-hover:bg-[#F3F4F6]/50 sm:static sm:px-7 ${
                            last ? "border-b-0" : ""
                          }`}
                        >
                          {row.aspect}
                        </th>
                        {(
                          [
                            { key: "mp", cell: row.mp },
                            { key: "rekber", cell: row.rekber },
                          ] as const
                        ).map(({ key, cell }) => (
                          <td
                            key={key}
                            className={`border-b border-black/10 px-5 py-5 align-top transition-colors group-hover:bg-[#F3F4F6]/50 sm:px-7 ${
                              last ? "border-b-0" : ""
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <StatusIcon status={cell.status} />
                              <span className="text-[15px] leading-relaxed text-[#525252]">
                                {cell.text}
                              </span>
                            </div>
                          </td>
                        ))}
                        <td className="bg-black px-5 py-5 align-top sm:px-7">
                          <div className="flex items-start gap-2.5">
                            <StatusIcon status="check" dark />
                            <span className="text-[15px] font-medium leading-relaxed text-white">
                              {row.kahade}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] leading-relaxed text-[#525252]/80">
            Perbandingan berdasarkan pola umum masing-masing layanan. Detail
            ketentuan dapat berbeda di tiap penyedia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= How it works ================= */

const STEPS = [
  {
    n: "01",
    title: "Chat & sepakat",
    desc: "Tawar-menawar dan sepakati detail barang di chat.",
    icon: <ChatCircleDots weight="regular" className="h-7 w-7" aria-hidden="true" />,
    // posisi node pada wave (persen dari 1200x420)
    x: 9.17, y: 28.57, top: true,
  },
  {
    n: "02",
    title: "Bayar ke escrow",
    desc: "Dana ditahan aman oleh Kahade, bukan langsung ke penjual.",
    icon: <Wallet weight="regular" className="h-7 w-7" aria-hidden="true" />,
    x: 29.58, y: 71.43, top: false,
  },
  {
    n: "03",
    title: "Penjual mengirim",
    desc: "Penjual mengirim barang sesuai kesepakatan di chat.",
    icon: <Truck weight="regular" className="h-7 w-7" aria-hidden="true" />,
    x: 50, y: 28.57, top: true,
  },
  {
    n: "04",
    title: "Konfirmasi terima",
    desc: "Periksa barang, lalu konfirmasi penerimaan di aplikasi.",
    icon: <CheckCircle weight="regular" className="h-7 w-7" aria-hidden="true" />,
    x: 70.42, y: 71.43, top: false,
  },
  {
    n: "05",
    title: "Dana cair",
    desc: "Setelah konfirmasi, dana diteruskan ke penjual.",
    icon: <Bank weight="regular" className="h-7 w-7" aria-hidden="true" />,
    x: 90.83, y: 28.57, top: true,
  },
];

const WAVE_PATH =
  "M 0,210 C 40,160 70,120 110,120 C 190,120 275,300 355,300 C 435,300 520,120 600,120 C 680,120 765,300 845,300 C 925,300 1010,120 1090,120 C 1130,120 1160,160 1200,210";

/** Wave desktop: garis mengalir + node di atasnya, draw-in saat scroll. */
function WaveDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useRef(false);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !inView.current) {
          inView.current = true;
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative hidden h-[420px] lg:block" aria-hidden="true">
      {/* angka latar raksasa */}
      {STEPS.map((s) => (
        <span
          key={s.n}
          className="pointer-events-none absolute select-none text-[9rem] font-bold leading-none text-black/[0.05]"
          style={{
            left: `${s.x}%`,
            top: s.top ? "2%" : "58%",
            transform: "translateX(-50%)",
          }}
        >
          {s.n.replace(/^0/, "")}
        </span>
      ))}

      {/* garis wave */}
      <svg
        viewBox="0 0 1200 420"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d={WAVE_PATH}
          stroke="#000"
          strokeOpacity={0.22}
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={false}
          animate={{ pathLength: drawn && !reduce ? 1 : 0 }}
          transition={{ duration: 1.8, ease: EASE }}
          style={{ pathLength: drawn && !reduce ? undefined : 0 }}
        />
      </svg>

      {/* node */}
      {STEPS.map((s, i) => (
        <motion.div
          key={s.n}
          className="absolute w-52"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)" }}
          initial={{ opacity: 0, y: s.top ? -18 : 18, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ delay: 0.35 + i * 0.22, duration: 0.7, ease: EASE }}
        >
          <div className={`flex flex-col items-center ${s.top ? "flex-col-reverse" : ""}`}>
            <span className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_18px_40px_-16px_rgb(0_0_0/0.3)]">
              {s.icon}
            </span>
            <div className={`text-center ${s.top ? "mb-5" : "mt-5"}`}>
              <h3 className="text-lg font-semibold tracking-tight text-black">{s.title}</h3>
              <p className="mx-auto mt-1.5 max-w-[190px] text-sm leading-relaxed text-[#525252]">
                {s.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** Carousel mobile: swipe horizontal dengan snap + dots. */
function SwipeMobile() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const w = slide.offsetWidth + 20; // gap-5
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.round(el.scrollLeft / w))));
  };

  return (
    <div className="lg:hidden">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 pt-2"
      >
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="w-[76%] shrink-0 snap-center rounded-[1.75rem] bg-white p-7 shadow-[0_16px_40px_-24px_rgb(0_0_0/0.25)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                {s.icon}
              </span>
              <span className="text-5xl font-bold tracking-tight text-black/10">
                {s.n}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-black">
              {s.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#525252]">{s.desc}</p>
          </div>
        ))}
        {/* spacer akhir agar slide terakhir bisa center */}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>

      {/* dots */}
      <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span
            key={s.n}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-black" : "w-2 bg-black/15"
            }`}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Langkah {active + 1} dari {STEPS.length}
      </p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="scroll-mt-20 overflow-hidden bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          title="Lima langkah, semua terlindungi."
          sub="Alurnya sederhana — kamu selalu tahu danamu ada di mana."
        />

        <div className="mt-10 lg:mt-6">
          <WaveDesktop />
          <SwipeMobile />
        </div>
      </div>
    </section>
  );
}
/* ================= Features (bento) ================= */

function MiniFeed() {
  return (
    <div aria-hidden="true" className="relative mt-8 overflow-hidden rounded-2xl border border-black/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative aspect-[16/10] w-full"
      >
        <Image
          src="/IMG_20261003_200600_623.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-top"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

function MiniChat() {
  return (
    <div aria-hidden="true" className="relative mt-8 overflow-hidden rounded-2xl border border-black/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative aspect-[16/10] w-full"
      >
        <Image
          src="/IMG_20261003_200436_464.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-top"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
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
<Check weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
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
    icon: <Storefront weight="regular" className="h-6 w-6" aria-hidden="true" />,
    visual: <MiniFeed />,
    span: "lg:col-span-2",
  },
  {
    title: "Chat transaksi",
    desc: "Tawar, sepakati detail, dan pantau status pesanan — semua tercatat dalam satu chat.",
    icon: <ChatCircleDots weight="regular" className="h-6 w-6" aria-hidden="true" />,
    visual: <MiniChat />,
    span: "",
  },
  {
    title: "Penjual terverifikasi",
    desc: "Lencana verifikasi membantu kamu mengenali penjual yang identitasnya sudah dicek.",
    icon: <SealCheck weight="regular" className="h-6 w-6" aria-hidden="true" />,
    visual: <MiniVerified />,
    span: "",
  },
  {
    title: "Escrow di setiap transaksi",
    desc: "Dana ditahan aman, cair setelah barang dikonfirmasi. Tanpa pengecualian.",
    icon: <ShieldCheck weight="regular" className="h-6 w-6" aria-hidden="true" />,
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
      className={`h-full min-w-0 ${item.span}`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="spot-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-7 sm:p-8"
      >
        <div aria-hidden="true" className="spot-glow" />
        <span className="relative inline-flex w-fit items-center justify-center rounded-2xl bg-black p-3.5 text-white transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110">
          {item.icon}
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
