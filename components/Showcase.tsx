"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE, Reveal, SectionHeading } from "./motion-helpers";
import { KahadeMark } from "./Logo";

/* ================= Device frame ================= */

function DeviceFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]" role="img" aria-label={label}>
      <div className="rounded-[3rem] bg-black p-[10px] shadow-[0_44px_90px_-32px_rgb(0_0_0/0.5)]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2.4rem] bg-white">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[4rem] bg-gradient-to-b from-[#F3F4F6] to-transparent blur-2xl"
      />
    </div>
  );
}

/* ================= Tab 1: Feed visual ================= */

function FeedVisual() {
  const cards = [
    { seller: "tokokamera", title: "Kamera mirrorless, mulus", price: "Rp4.250.000", art: "from-[#e8e8e8] to-[#cfcfcf]" },
    { seller: "audiohub", title: "Headphone wireless", price: "Rp1.890.000", art: "from-[#dcdcdc] to-[#f0f0f0]" },
  ];
  return (
    <DeviceFrame label="Tampilan feed produk Kahade">
      <div className="flex items-center justify-between px-4 pb-2 pt-11">
        <KahadeMark className="h-7 w-7" />
        <span className="text-sm font-bold text-black">Feed</span>
        <span className="h-5 w-5" />
      </div>
      <div className="space-y-3 px-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.seller}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.16, duration: 0.7, ease: EASE }}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)]"
          >
            <div className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${c.art}`}>
              <span className="absolute left-2.5 top-2.5 rounded-full bg-black/85 px-2 py-1 text-[10px] font-semibold text-white">
                Escrow
              </span>
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-[#262626]">@{c.seller}</p>
              <p className="mt-0.5 truncate text-[13px] text-[#525252]">{c.title}</p>
              <p className="mt-0.5 text-sm font-bold text-black">{c.price}</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 18 }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
            <path d="M12 20.7C6.4 17.2 3 13.6 3 9.9 3 7.2 5.1 5 7.8 5c1.7 0 3.2.9 4.2 2.3C13 5.9 14.5 5 16.2 5 18.9 5 21 7.2 21 9.9c0 3.7-3.4 7.3-9 10.8z" />
          </svg>
          Tambah ke favorit
        </motion.div>
      </div>
    </DeviceFrame>
  );
}

/* ================= Tab 2: Chat visual ================= */

function ChatVisual() {
  const msgs = [
    { from: "buyer", text: "Halo, kamera ini masih ada?", me: true },
    { from: "seller", text: "Masih kak, mulus like new 👍", me: false },
    { from: "buyer", text: "Bisa Rp4.000.000? Saya bayar via escrow.", me: true },
    { from: "seller", text: "Deal! Saya kirim hari ini ya.", me: false },
  ];
  return (
    <DeviceFrame label="Tampilan chat transaksi Kahade">
      <div className="flex items-center gap-2.5 border-b border-black/10 px-4 pb-3 pt-11">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">T</span>
        <div>
          <p className="text-[13px] font-bold text-black">tokokamera</p>
          <p className="flex items-center gap-1 text-[11px] text-[#525252]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" /> Terverifikasi
          </p>
        </div>
      </div>
      <div className="space-y-2.5 px-4 py-4">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.28, duration: 0.5, ease: EASE }}
            className={`flex ${m.me ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                m.me
                  ? "rounded-br-md bg-black text-white"
                  : "rounded-bl-md bg-[#F3F4F6] text-[#262626]"
              }`}
            >
              {m.text}
            </p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5, ease: EASE }}
          className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white p-3 shadow-sm"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-bold text-black">Transaksi #KD-2481 dibuat</p>
            <p className="text-[11px] text-[#525252]">Dana Rp4.000.000 ditahan escrow</p>
          </div>
        </motion.div>
      </div>
    </DeviceFrame>
  );
}

/* ================= Tab 3: Escrow visual ================= */

function EscrowVisual() {
  const steps = [
    { t: "Dana ditahan", d: "Rp4.000.000 aman di escrow", done: true },
    { t: "Barang dikirim", d: "Resi JNE-88213 tercatat", done: true },
    { t: "Konfirmasi terima", d: "Menunggu kamu", done: false, active: true },
    { t: "Dana cair", d: "Ke penjual setelah konfirmasi", done: false },
  ];
  return (
    <DeviceFrame label="Tampilan status escrow Kahade">
      <div className="px-4 pb-3 pt-11">
        <p className="text-sm font-bold text-black">Status transaksi</p>
        <p className="text-[11px] text-[#525252]">#KD-2481 · Kamera mirrorless</p>
      </div>
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          className="rounded-2xl bg-black p-4 text-white"
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">Dana ditahan</p>
          <p className="mt-1 text-2xl font-bold tracking-tight">Rp4.000.000</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "62%" }}
              transition={{ delay: 0.6, duration: 1.1, ease: EASE }}
            />
          </div>
        </motion.div>
        <div className="mt-4 space-y-1">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.22, duration: 0.55, ease: EASE }}
              className="flex gap-3 py-2.5"
            >
              <span className="flex flex-col items-center">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${
                    s.done ? "bg-black text-white" : s.active ? "border-2 border-black bg-white" : "bg-[#F3F4F6] text-[#525252]"
                  }`}
                >
                  {s.done ? (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span className={`h-2 w-2 rounded-full ${s.active ? "animate-pulse bg-black" : "bg-black/25"}`} />
                  )}
                </span>
                {i < steps.length - 1 && <span className={`mt-1 w-px flex-1 ${s.done ? "bg-black" : "bg-black/15"}`} />}
              </span>
              <div className="pb-1">
                <p className={`text-[13px] font-semibold ${s.done || s.active ? "text-black" : "text-[#525252]"}`}>{s.t}</p>
                <p className="text-[11px] text-[#525252]">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          type="button"
          tabIndex={-1}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5, ease: EASE }}
          className="mt-2 w-full rounded-full bg-black py-3 text-sm font-semibold text-white"
        >
          Konfirmasi barang diterima
        </motion.button>
      </div>
    </DeviceFrame>
  );
}

/* ================= Tabs ================= */

const TABS = [
  {
    id: "feed",
    label: "Feed",
    title: "Jualan semudah posting.",
    desc: "Unggah produk ke feed seperti memposting di media sosial. Pembeli menemukanmu lewat interaksi yang natural.",
    points: ["Etalase produk yang visual", "Like, komentar & share", "Follow penjual favorit"],
    visual: <FeedVisual />,
  },
  {
    id: "chat",
    label: "Chat",
    title: "Semua kesepakatan tercatat.",
    desc: "Tawar menawar, atur pengiriman, dan buat transaksi — dalam satu chat yang terhubung langsung ke escrow.",
    points: ["Riwayat chat tersimpan rapi", "Transaksi dibuat dari chat", "Status pesanan real-time"],
    visual: <ChatVisual />,
  },
  {
    id: "escrow",
    label: "Escrow",
    title: "Dana aman sampai barang diterima.",
    desc: "Setiap transaksi dilindungi escrow. Kamu selalu tahu persis danamu ada di mana.",
    points: ["Dana ditahan pihak netral", "Cair setelah konfirmasi", "Jalur sengketa yang jelas"],
    visual: <EscrowVisual />,
  },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % TABS.length), 7000);
    return () => clearInterval(t);
  }, [reduce, active]);

  const tab = TABS[active];

  return (
    <section id="aplikasi" className="hairline-t scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 section-pad sm:px-8">
        <SectionHeading
          kicker="Lihat aplikasinya"
          title="Satu aplikasi untuk seluruh jual beli."
          sub="Feed, chat, dan escrow bekerja sebagai satu alur — bukan tiga aplikasi terpisah."
        />

        {/* Tab bar */}
        <Reveal delay={120} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Tur produk"
            className="inline-flex rounded-full border border-black/10 bg-[#F3F4F6] p-1.5"
          >
            {TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative min-h-[44px] rounded-full px-6 text-sm font-semibold transition-colors sm:px-8 ${
                  active === i ? "text-white" : "text-[#525252] hover:text-black"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="showcase-pill"
                    className="absolute inset-0 rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-copy"}
              initial={{ opacity: 0, x: -26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
                {tab.title}
              </h3>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#525252]">{tab.desc}</p>
              <ul className="mt-7 space-y-3.5">
                {tab.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.09, duration: 0.45, ease: EASE }}
                    className="flex items-center gap-3 text-[15px] font-medium text-[#262626]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id + "-visual"}
                initial={{ opacity: 0, y: 34, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -22, scale: 0.98 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                {tab.visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-10 flex justify-center gap-2.5" aria-hidden="true">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              tabIndex={-1}
              onClick={() => setActive(i)}
              className="group flex min-h-[24px] min-w-[24px] items-center justify-center"
              aria-label={`Ke tab ${t.label}`}
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i ? "w-8 bg-black" : "w-1.5 bg-black/20 group-hover:bg-black/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
