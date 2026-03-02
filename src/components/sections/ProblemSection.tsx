"use client";

import React, { useEffect, useRef, useState } from "react";

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.05): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [iv, setIv] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIv(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, iv];
}

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

function ProblemIcon({ type }: { type: string }) {
  switch (type) {
    case "ghost":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 10h.01M15 10h.01" />
          <path d="M9 16c1-.8 2-.8 3-.8s2 0 3 .8" />
          <path d="M5 18V9a7 7 0 1 1 14 0v9l-2-1.5L15 18l-3-1.5L9 18l-2-1.5z" />
        </svg>
      );
    case "box":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8l-9-5-9 5 9 5 9-5z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <path d="M12 13v8" />
        </svg>
      );
    case "file":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h5" />
        </svg>
      );
    case "wallet":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M16 12h6" />
          <circle cx="16" cy="12" r="1" />
          <path d="M6 10h5" />
        </svg>
      );
    case "scale":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M7 7h10" />
          <path d="M5 7l-3 5h6L5 7zM19 7l-3 5h6l-3-5z" />
          <path d="M9 21h6" />
        </svg>
      );
    case "hourglass":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2h12M6 22h12" />
          <path d="M7 2v4a5 5 0 0 0 2 4l3 2 3-2a5 5 0 0 0 2-4V2" />
          <path d="M7 22v-4a5 5 0 0 1 2-4l3-2 3 2a5 5 0 0 1 2 4v4" />
        </svg>
      );
    case "refresh":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 15.3-6.3L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15.3 6.3L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      );
    case "alert":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.3 3.9a2 2 0 0 1 3.4 0l8 13.8A2 2 0 0 1 20 21H4a2 2 0 0 1-1.7-3.3z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      );
    case "truck":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const buyerProblems = [
  { id: "01", icon: "ghost", title: "Transfer dilakukan, penjual menghilang", desc: "Setelah pembayaran masuk, komunikasi terputus. Tidak ada mekanisme untuk menahan atau menarik kembali dana yang sudah dikirim." },
  { id: "02", icon: "box", title: "Barang berbeda jauh dari deskripsi", desc: "Foto produk tidak mencerminkan kondisi asli. Setelah barang tiba, tidak ada jalur klaim atau pengembalian yang bisa diakses." },
  { id: "03", icon: "file", title: "Tidak ada bukti transaksi yang sah", desc: "Tanpa dokumentasi resmi, pembeli tidak punya dasar hukum untuk mengajukan klaim jika terjadi sengketa di kemudian hari." },
  { id: "04", icon: "wallet", title: "Dipaksa bayar langsung tanpa jaminan", desc: '"Bayar dulu, baru dikirim" adalah skenario penipuan paling umum. Tidak ada pihak yang menjamin dana kembali jika penjual ingkar.' },
  { id: "05", icon: "scale", title: "Tidak ada mediasi saat sengketa terjadi", desc: "Ketika terjadi perselisihan, pembeli tidak punya akses ke pihak ketiga yang netral. Sengketa diselesaikan sendiri atau tidak sama sekali." },
];

const sellerProblems = [
  { id: "01", icon: "hourglass", title: "Pembeli hilang setelah barang tiba", desc: "Konfirmasi penerimaan tidak pernah datang. Dana tertahan tanpa kejelasan waktu pencairan, sementara stok sudah keluar." },
  { id: "02", icon: "refresh", title: "Chargeback sepihak setelah konfirmasi", desc: "Pembayaran dibatalkan secara sepihak oleh pembeli atau bank meskipun barang sudah diterima dan dikonfirmasi." },
  { id: "03", icon: "alert", title: "Klaim palsu untuk memaksa refund", desc: "Pembeli beritikad buruk mengajukan klaim barang cacat untuk memaksa pengembalian dana tanpa dasar yang nyata." },
  { id: "04", icon: "truck", title: "Tidak ada rekam jejak pengiriman resmi", desc: "Bukti pengiriman yang tidak terintegrasi dengan sistem transaksi membuat penjual kesulitan membuktikan bahwa barang sudah sampai." },
  { id: "05", icon: "scale", title: "Tidak ada resolusi yang adil saat sengketa", desc: "Sengketa diselesaikan tanpa pihak ketiga yang netral. Penjual sering menjadi pihak yang kalah karena tidak punya akses ke mekanisme mediasi." },
];

// ─── Problem Item ─────────────────────────────────────────────────────────────
function ProblemItem({ item, active, onClick }: {
  item: { id: string; icon: string; title: string; desc: string };
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="relative border-t border-ink-9 cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-expanded={active}
    >
      <div className="flex items-center gap-3 py-4 transition-all duration-300">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-ink">
          <ProblemIcon type={item.icon} />
        </span>

        <div className="flex-1 min-w-0">
          <p className={`card-title transition-colors duration-200 ${
            active ? "text-ink" : "text-ink-45"
          }`}>
            {item.title}
          </p>

          <div className={`overflow-hidden transition-all duration-400 ${active ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <p className="body text-ink-45 mb-3">{item.desc}</p>
            <a href="#" className="inline-flex items-center gap-1.5 small font-bold uppercase tracking-wider text-ink-45 hover:text-ink border-b border-ink-20 pb-0.5 transition-colors">
              Pelajari lebih lanjut <ArrowIcon />
            </a>
          </div>
        </div>

        <span className={`small font-bold tabular-nums w-5 flex-shrink-0 text-right transition-colors ${
          active ? "text-ink-45" : "text-ink-20"
        }`}>
          {item.id}
        </span>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ProblemSection() {
  const [sectionRef, inView] = useInView(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="problem" 
      ref={sectionRef} 
      className="section bg-surface"
    >
      <div className="container-base">
        {/* Header */}
        <div className={`section-header ${inView ? "anim-fade-up in-view" : ""}`}>
          <h2 className="section-title">
            Transaksi Online Penuh Risiko Yang Nyata.
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto mb-10 lg:mb-14 ${inView ? "anim-fade-up delay-1 in-view" : ""}`}>
          <div className="card aspect-[4/3] relative overflow-hidden flex items-center justify-center">
            <span className="absolute top-4 left-4 meta-label">Kahade</span>

            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-ink-30">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <p className="card-title text-ink mb-2">
                {activeIndex < 5 ? buyerProblems[activeIndex]?.title : sellerProblems[activeIndex - 5]?.title}
              </p>
              <p className="body text-ink-45 max-w-xs mx-auto">
                {activeIndex < 5 ? buyerProblems[activeIndex]?.desc : sellerProblems[activeIndex - 5]?.desc}
              </p>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    activeIndex === i ? "bg-ink-45 scale-125" : "bg-ink-12"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:gap-12 items-start">
          <div className={`grid sm:grid-cols-2 gap-8 lg:gap-10 ${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
            {/* Pembeli */}
            <div>
              <p className="meta-label mb-2">Risiko Pembeli</p>
              <h3 className="card-title text-ink mb-4">
                Uang Pergi, Barang Tak Datang
              </h3>
              <div>
                {buyerProblems.map((item, i) => (
                  <ProblemItem 
                    key={item.id} 
                    item={item} 
                    active={activeIndex === i}
                    onClick={() => setActiveIndex(i)} 
                  />
                ))}
                <div className="border-t border-ink-9" />
              </div>
            </div>

            {/* Penjual */}
            <div>
              <p className="meta-label mb-2">Risiko Penjual</p>
              <h3 className="card-title text-ink mb-4">
                Barang Terkirim, Uang Tak Cair
              </h3>
              <div>
                {sellerProblems.map((item, i) => (
                  <ProblemItem 
                    key={item.id} 
                    item={item} 
                    active={activeIndex === i + 5}
                    onClick={() => setActiveIndex(i + 5)} 
                  />
                ))}
                <div className="border-t border-ink-9" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
