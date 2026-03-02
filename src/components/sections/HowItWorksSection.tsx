"use client";

import React, { useState, useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const CheckSmall = ({ white = false }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <circle cx="6" cy="6" r="6" fill={white ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"} />
    <path d="M3.5 6L5 7.5L8.5 4" stroke={white ? "rgba(255,255,255,.8)" : "rgba(0,0,0,0.65)"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = ({ white = false }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={white ? "rgba(255,255,255,.5)" : "rgba(0,0,0,0.5)"} strokeWidth="1.5" strokeLinecap="round">
    <circle cx="7" cy="7" r="5.5" />
    <path d="M7 4v3l2 1.5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7 3l4 4-4 4" />
  </svg>
);

// ─── Steps Data ───────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01", label: "Buat Kesepakatan", featured: false,
    desc: "Pembeli dan penjual menyepakati detail transaksi — nominal, barang/jasa, tenggat, dan syarat secara tertulis di platform.",
    details: ["Buat transaksi dalam 60 detik", "Syarat tersimpan permanen", "Notifikasi instan ke kedua pihak"],
    time: "~1 menit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M11 7v4l3 2" />
      </svg>
    ),
  },
  {
    num: "02", label: "Dana Masuk Escrow", featured: true,
    desc: "Pembeli mentransfer ke rekening escrow Kahade yang terisolasi. Dana tidak bisa disentuh siapapun hingga kondisi terpenuhi.",
    details: ["Transfer via 15+ metode", "Konfirmasi real-time", "Dana ditahan sampai selesai"],
    time: "~2 menit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="9" width="14" height="10" rx="2" />
        <path d="M7 9V7a4 4 0 118 0v2" />
        <circle cx="11" cy="14" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "03", label: "Penjual Berkirim", featured: false,
    desc: "Dengan dana aman di escrow, penjual mengirimkan barang atau melaksanakan jasa sesuai kesepakatan. Tracking real-time.",
    details: ["Upload bukti pengiriman", "Tracking status transparan", "Reminder otomatis"],
    time: "Sesuai kesepakatan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="13" height="10" rx="1.5" />
        <path d="M15 9.5h2.5l2 3V17H15V9.5z" />
        <circle cx="6" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    num: "04", label: "Pembeli Konfirmasi", featured: false,
    desc: "Pembeli menerima dan memeriksa barang/jasa sesuai kesepakatan. Jika ada masalah, bisa ajukan dispute dengan bukti.",
    details: ["Periode konfirmasi fleksibel", "Dispute system adil", "Tim mediasi siap"],
    time: "1–3 hari",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "05", label: "Dana Dilepaskan", featured: false,
    desc: "Setelah konfirmasi, dana otomatis dicairkan ke rekening penjual dikurangi platform fee. Transaksi selesai & terdokumentasi.",
    details: ["Pencairan ke 50+ bank", "Rekap otomatis dikirim", "Riwayat tersimpan selamanya"],
    time: "Instan – 1x24 jam",
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="16" height="10" rx="2" />
        <path d="M11 13v3M9.5 16.5l1.5-1 1.5 1" />
        <path d="M7.5 9V7.5a3.5 3.5 0 015.9-2.5" />
      </svg>
    ),
  },
];

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.08): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
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

// ─── Step Card ────────────────────────────────────────────────────────────────
const StepCard = ({
  step,
  inView,
  delayS,
  isHovered,
  onHover,
}: {
  step: typeof steps[0];
  inView: boolean;
  delayS: number;
  isHovered: boolean;
  onHover: (v: boolean) => void;
}) => {
  const isFeatured = step.featured;

  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`step-card ${isFeatured ? "step-card-featured" : ""} ${inView ? "anim-fade-up in-view" : ""}`}
      style={{ animationDelay: `${delayS}s` }}
    >
      {/* Featured glow */}
      {isFeatured && (
        <div className="absolute inset-0 rounded-card pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,255,255,.05) 0%, transparent 70%)" }}
        />
      )}

      {/* Top row */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold ${
            isFeatured ? "bg-white/10 text-white/55" : "bg-ink-7 text-ink-45"
          }`}>
            {step.num}
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isFeatured ? "bg-white/10 text-white/80" : "bg-ink-7 text-ink-60"
          }`}>
            {step.icon}
          </div>
        </div>
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border ${
          isFeatured ? "border-white/10 bg-white/5" : "border-ink-9 bg-ink-4"
        }`}>
          <ClockIcon white={isFeatured} />
          <span className={`text-2xs font-semibold whitespace-nowrap ${isFeatured ? "text-white/45" : "text-ink-45"}`}>
            {step.time}
          </span>
        </div>
      </div>

      <h3 className={`text-base font-extrabold tracking-tight mb-2 ${isFeatured ? "text-white" : "text-ink"}`}>
        {step.label}
      </h3>
      
      <div className={`h-px mb-3 ${isFeatured ? "bg-white/10" : "bg-ink-9"}`} />
      
      <p className={`text-sm leading-relaxed mb-4 ${isFeatured ? "text-white/65" : "text-ink-45"}`}>
        {step.desc}
      </p>
      
      <div className="space-y-2">
        {step.details.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckSmall white={isFeatured} />
            <span className={`text-xs ${isFeatured ? "text-white/45" : "text-ink-45"}`}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  const [sectionRef, inView] = useInView(0.08);
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  return (
    <section
      id="cara-kerja"
      ref={sectionRef}
      className="section bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <div className={`${inView ? "anim-fade-up in-view" : ""}`}>
            <h2 className="section-title">
              Dari Kesepakatan
              <br />
              <span className="section-title-muted">Hingga Dana Cair.</span>
            </h2>
          </div>
        </div>

        {/* Progress track (desktop) */}
        <div className={`hidden lg:block mb-6 ${inView ? "anim-fade-in delay-2 in-view" : ""}`}>
          <div className="flex items-end gap-0">
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className={`flex-1 flex flex-col items-center gap-2 transition-opacity ${
                  hoveredIdx === i || s.featured ? "opacity-100" : "opacity-50"
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    s.featured ? "bg-ink" : hoveredIdx === i ? "bg-ink-12" : "bg-ink-7"
                  }`}>
                    <span className={`text-xs font-extrabold ${s.featured ? "text-white/70" : "text-ink-45"}`}>
                      {s.num}
                    </span>
                  </div>
                  <span className={`text-2xs font-semibold whitespace-nowrap text-center ${
                    s.featured ? "text-ink" : "text-ink-45"
                  }`}>
                    {s.label}
                  </span>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="flex-0 w-[8%] flex items-center pb-5 px-1">
                    <svg width="100%" height="12" viewBox="0 0 50 12" preserveAspectRatio="none" fill="none">
                      <path d="M0 6 L42 6" stroke="var(--color-ink-12)" strokeWidth="1.5" strokeDasharray="4 3" />
                      <path d="M38 3 L45 6 L38 9" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Desktop Cards Row */}
        <div className="hidden lg:flex gap-3 items-stretch">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <StepCard
                step={s}
                inView={inView}
                delayS={0.15 + i * 0.08}
                isHovered={hoveredIdx === i}
                onHover={(v) => setHoveredIdx(v ? i : -1)}
              />
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className={`flex-shrink-0 flex items-center ${inView ? "anim-fade-in in-view" : ""}`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <div className="w-7 h-7 rounded-full bg-ink-4 border border-ink-9 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 3l4 4-4 4" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden">
          <p className="text-xs text-ink-30 text-center mb-4 uppercase tracking-wider font-semibold">
            Geser untuk melihat semua langkah →
          </p>

          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {steps.map((s) => {
              const isF = s.featured;
              return (
                <div key={s.num} className={`flex-shrink-0 w-[85vw] max-w-[300px] snap-start step-card ${isF ? "step-card-featured" : ""}`}>
                  {isF && (
                    <div className="absolute inset-0 rounded-card pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,255,255,.05) 0%, transparent 70%)" }}
                    />
                  )}

                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                      isF ? "bg-white/10 text-white/55" : "bg-ink-7 text-ink-45"
                    }`}>
                      {s.num}
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isF ? "bg-white/10 text-white/80" : "bg-ink-7 text-ink-60"
                    }`}>
                      {s.icon}
                    </div>
                    <div className={`ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full ${
                      isF ? "bg-white/5 border border-white/10" : "bg-ink-4 border border-ink-9"
                    }`}>
                      <span className={`text-2xs font-semibold ${isF ? "text-white/45" : "text-ink-45"}`}>{s.time}</span>
                    </div>
                  </div>

                  <h3 className={`text-base font-extrabold tracking-tight mb-2 ${isF ? "text-white" : "text-ink"}`}>
                    {s.label}
                  </h3>
                  <div className={`h-px mb-3 ${isF ? "bg-white/10" : "bg-ink-9"}`} />
                  <p className={`text-sm leading-relaxed mb-4 ${isF ? "text-white/65" : "text-ink-45"}`}>
                    {s.desc}
                  </p>

                  <div className="space-y-2">
                    {s.details.map((d, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckSmall white={isF} />
                        <span className={`text-xs ${isF ? "text-white/45" : "text-ink-45"}`}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {steps.map((s, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${
                s.featured ? "w-4 bg-ink" : "w-1.5 bg-ink-12"
              }`} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 ${inView ? "anim-fade-up delay-5 in-view" : ""}`}>
          <div className="dark-section p-8 lg:p-10">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xl lg:text-2xl font-extrabold mb-2">
                  Siap memulai transaksi pertama Anda?
                </p>
                <p className="text-white/45">
                  Daftar gratis — tidak perlu kartu kredit, tidak ada kontrak.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href={homeAnchors.pricing} className="btn btn-inv-primary">
                  Mulai Sekarang
                  <ArrowRight />
                </Link>
                <Link href={supportLinks.contact} className="btn btn-inv-ghost">
                  Lihat Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
