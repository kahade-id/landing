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

// ─── Data ─────────────────────────────────────────────────────────────────────
const buyerProblems = [
  { id: "01", title: "Transfer dilakukan, penjual menghilang", desc: "Setelah pembayaran masuk, komunikasi terputus. Tidak ada mekanisme untuk menahan atau menarik kembali dana yang sudah dikirim." },
  { id: "02", title: "Barang berbeda jauh dari deskripsi", desc: "Foto produk tidak mencerminkan kondisi asli. Setelah barang tiba, tidak ada jalur klaim atau pengembalian yang bisa diakses." },
  { id: "03", title: "Tidak ada bukti transaksi yang sah", desc: "Tanpa dokumentasi resmi, pembeli tidak punya dasar hukum untuk mengajukan klaim jika terjadi sengketa di kemudian hari." },
  { id: "04", title: "Dipaksa bayar langsung tanpa jaminan", desc: '"Bayar dulu, baru dikirim" adalah skenario penipuan paling umum. Tidak ada pihak yang menjamin dana kembali jika penjual ingkar.' },
  { id: "05", title: "Tidak ada mediasi saat sengketa terjadi", desc: "Ketika terjadi perselisihan, pembeli tidak punya akses ke pihak ketiga yang netral. Sengketa diselesaikan sendiri atau tidak sama sekali." },
];

const sellerProblems = [
  { id: "01", title: "Pembeli hilang setelah barang tiba", desc: "Konfirmasi penerimaan tidak pernah datang. Dana tertahan tanpa kejelasan waktu pencairan, sementara stok sudah keluar." },
  { id: "02", title: "Chargeback sepihak setelah konfirmasi", desc: "Pembayaran dibatalkan secara sepihak oleh pembeli atau bank meskipun barang sudah diterima dan dikonfirmasi." },
  { id: "03", title: "Klaim palsu untuk memaksa refund", desc: "Pembeli beritikad buruk mengajukan klaim barang cacat untuk memaksa pengembalian dana tanpa dasar yang nyata." },
  { id: "04", title: "Tidak ada rekam jejak pengiriman resmi", desc: "Bukti pengiriman yang tidak terintegrasi dengan sistem transaksi membuat penjual kesulitan membuktikan bahwa barang sudah sampai." },
  { id: "05", title: "Tidak ada resolusi yang adil saat sengketa", desc: "Sengketa diselesaikan tanpa pihak ketiga yang netral. Penjual sering menjadi pihak yang kalah karena tidak punya akses ke mekanisme mediasi." },
];

// ─── Problem Item ─────────────────────────────────────────────────────────────
function ProblemItem({ item, active, onClick }: {
  item: { id: string; title: string; desc: string };
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
      {/* Active indicator */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 bg-ink rounded-full transition-all duration-300 ${
          active ? "h-12 opacity-100" : "h-0 opacity-0"
        }`}
      />

      <div className={`flex items-start gap-3 py-4 transition-all duration-300 ${active ? "pl-3" : ""}`}>
        <span className={`text-xs font-bold tabular-nums mt-0.5 w-5 flex-shrink-0 transition-colors ${
          active ? "text-ink-45" : "text-ink-20"
        }`}>
          {item.id}
        </span>

        <div className="flex-1 min-w-0">
          <p className={`font-semibold leading-snug transition-all duration-200 ${
            active ? "text-ink text-base" : "text-ink-45 text-sm"
          }`}>
            {item.title}
          </p>

          <div className={`overflow-hidden transition-all duration-400 ${active ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <p className="text-sm text-ink-45 leading-relaxed mb-3">{item.desc}</p>
            <a href="#" className="inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink-45 hover:text-ink border-b border-ink-20 pb-0.5 transition-colors">
              Pelajari lebih lanjut <ArrowIcon />
            </a>
          </div>
        </div>

        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 14 14" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`flex-shrink-0 mt-1 text-ink-20 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
        >
          <path d="M3 5l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ProblemSection() {
  const [sectionRef, inView] = useInView(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  const groupTag = activeIndex < 5 ? "Pembeli" : "Penjual";

  return (
    <section 
      id="problem" 
      ref={sectionRef} 
      className="section bg-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`section-header mb-12 lg:mb-16 ${inView ? "anim-fade-up in-view" : ""}`}>
          <p className="section-eyebrow">Problem</p>
          <h2 className="section-title">
            Dua pihak.{" "}
            <span className="text-ink-30 italic">Satu risiko</span>{" "}
            yang sama.
          </h2>
          <p className="section-lead">
            Setiap transaksi tanpa perlindungan meninggalkan celah — untuk pembeli dan penjual sekaligus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Problem Lists */}
          <div className={`grid sm:grid-cols-2 gap-8 lg:gap-10 ${inView ? "anim-fade-up delay-1 in-view" : ""}`}>
            {/* Pembeli */}
            <div>
              <p className="meta-label mb-2">Pembeli</p>
              <h3 className="text-lg font-semibold tracking-tight text-ink mb-4">
                Uang Pergi,<br />Barang Tak Datang
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
              <p className="meta-label mb-2">Penjual</p>
              <h3 className="text-lg font-semibold tracking-tight text-ink mb-4">
                Barang Terkirim,<br />Uang Tak Cair
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

          {/* Right: Visual */}
          <div className={`lg:sticky lg:top-24 ${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
            <div className="card aspect-[4/3] relative overflow-hidden flex items-center justify-center">
              <span className="absolute top-4 left-4 meta-label">Kahade</span>
              <span className="absolute top-4 right-4 meta-label transition-opacity">{groupTag}</span>

              {/* Visual content */}
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-ink-4 border border-ink-9 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-ink mb-2">
                  {activeIndex < 5 ? buyerProblems[activeIndex]?.title : sellerProblems[activeIndex - 5]?.title}
                </p>
                <p className="text-sm text-ink-45 max-w-xs mx-auto">
                  {activeIndex < 5 ? buyerProblems[activeIndex]?.desc : sellerProblems[activeIndex - 5]?.desc}
                </p>
              </div>

              {/* Dots */}
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

            <p className="mt-4 text-sm text-ink-30 leading-relaxed">
              Dua sisi. Dua risiko berbeda. Satu platform yang melindungi keduanya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
