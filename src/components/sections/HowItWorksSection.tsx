"use client";

import React, { useState, useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icon = ({ d, white = false, size = 20 }: { d: React.ReactNode; white?: boolean; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none"
    stroke={white ? "rgba(255,255,255,.85)" : "rgba(0,0,0,0.55)"}
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const icons: Record<string, (w: boolean) => React.ReactNode> = {
  deal:   (w) => <Icon white={w} d={<><path d="M4 11C4 7.13 7.13 4 11 4s7 3.13 7 7-3.13 7-7 7H4l3-3"/><path d="M11 8v3l2 2"/></>} />,
  lock:   (w) => <Icon white={w} d={<><rect x="4" y="9" width="14" height="10" rx="2"/><path d="M7.5 9V7a3.5 3.5 0 017 0v2"/><circle cx="11" cy="14" r="1.2" fill={w?"rgba(255,255,255,.85)":"rgba(0,0,0,0.55)"} stroke="none"/></>} />,
  truck:  (w) => <Icon white={w} d={<><rect x="2" y="7" width="13" height="10" rx="1.5"/><path d="M15 9.5h2.5l2 3V17H15V9.5z"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></>} />,
  check:  (w) => <Icon white={w} d={<><circle cx="11" cy="11" r="7.5"/><path d="M8 11l2 2 4-4"/></>} />,
  unlock: (w) => <Icon white={w} d={<><rect x="3" y="9" width="16" height="10" rx="2"/><path d="M11 13v3M9.5 16.5l1.5-1 1.5 1"/><path d="M7.5 9V7.5a3.5 3.5 0 015.9-2.5"/></>} />,
};

const CheckSmall = ({ white = false }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="6" cy="6" r="6" fill={white ? "rgba(255,255,255,.12)" : "rgba(0,0,0,0.07)"} />
    <path d="M3.5 6L5 7.5L8.5 4" stroke={white ? "rgba(255,255,255,.8)" : "rgba(0,0,0,0.65)"}
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Steps Data ───────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01", label: "Buat Kesepakatan", icon: icons.deal, featured: false,
    desc: "Pembeli dan penjual menyepakati detail transaksi — nominal, barang/jasa, tenggat, dan syarat secara tertulis di platform.",
    details: ["Buat transaksi dalam 60 detik", "Syarat tersimpan permanen", "Notifikasi instan ke kedua pihak"],
    time: "~1 menit",
  },
  {
    num: "02", label: "Dana Masuk Escrow", icon: icons.lock, featured: true,
    desc: "Pembeli mentransfer ke rekening escrow Kahade yang terisolasi. Dana tidak bisa disentuh siapapun hingga kondisi terpenuhi.",
    details: ["Transfer via 15+ metode", "Konfirmasi real-time", "Dana ditahan sampai selesai"],
    time: "~2 menit",
  },
  {
    num: "03", label: "Penjual Berkirim", icon: icons.truck, featured: false,
    desc: "Dengan dana aman di escrow, penjual mengirimkan barang atau melaksanakan jasa sesuai kesepakatan. Tracking real-time.",
    details: ["Upload bukti pengiriman", "Tracking status transparan", "Reminder otomatis"],
    time: "Sesuai kesepakatan",
  },
  {
    num: "04", label: "Pembeli Konfirmasi", icon: icons.check, featured: false,
    desc: "Pembeli menerima dan memeriksa barang/jasa sesuai kesepakatan. Jika ada masalah, bisa ajukan dispute dengan bukti.",
    details: ["Periode konfirmasi fleksibel", "Dispute system adil", "Tim mediasi siap"],
    time: "1–3 hari",
  },
  {
    num: "05", label: "Dana Dilepaskan", icon: icons.unlock, featured: false,
    desc: "Setelah konfirmasi, dana otomatis dicairkan ke rekening penjual dikurangi platform fee. Transaksi selesai & terdokumentasi.",
    details: ["Pencairan ke 50+ bank", "Rekap otomatis dikirim", "Riwayat tersimpan selamanya"],
    time: "Instan – 1x24 jam",
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

// ─── Abstract BG ─────────────────────────────────────────────────────────────
const HwAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="hw-rg1" cx="8%"  cy="30%" r="45%">
        <stop offset="0%"   stopColor="#000" stopOpacity=".03"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="hw-rg2" cx="92%" cy="70%" r="45%">
        <stop offset="0%"   stopColor="#000" stopOpacity=".025"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <pattern id="hw-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0L0 0 0 56" fill="none" stroke="#000" strokeWidth=".28" strokeOpacity=".048"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#hw-grid)"/>
    <rect width="100%" height="100%" fill="url(#hw-rg1)"/>
    <rect width="100%" height="100%" fill="url(#hw-rg2)"/>
    <circle cx="-3%" cy="0%"    r="260" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".048"/>
    <circle cx="-3%" cy="0%"    r="180" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".038"/>
    <circle cx="103%" cy="100%" r="280" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".045"/>
    <circle cx="103%" cy="100%" r="190" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".035"/>
    <line x1="0"    y1="80%"  x2="18%" y2="0"    stroke="#000" strokeWidth=".35" strokeOpacity=".04"/>
    <line x1="100%" y1="20%"  x2="82%" y2="100%" stroke="#000" strokeWidth=".35" strokeOpacity=".04"/>
  </svg>
);

// ─── Step Card (horizontal) ───────────────────────────────────────────────────
const HStepCard = ({
  step, inView, delayS, hoveredIdx, idx, onMouseEnter, onMouseLeave,
}: {
  step: typeof steps[0]; inView: boolean; delayS: number;
  hoveredIdx: number; idx: number;
  onMouseEnter: () => void; onMouseLeave: () => void;
}) => {
  const isF      = step.featured;
  const isHov    = hoveredIdx === idx;

  const bg           = isF ? "var(--color-ink)" : isHov ? "var(--color-ink-04)" : "var(--color-surface)";
  const borderClr    = isF ? "transparent" : isHov ? "var(--color-ink-12)" : "var(--color-ink-09)";
  const textPrimary  = isF ? "#fff"                    : "var(--color-ink)";
  const textSecond   = isF ? "rgba(255,255,255,.42)"   : "var(--color-ink-45)";
  const textBody     = isF ? "rgba(255,255,255,.65)"   : "var(--color-ink-60)";
  const iconBg       = isF ? "rgba(255,255,255,.1)"    : "var(--color-ink-07)";
  const numBg        = isF ? "rgba(255,255,255,.1)"    : "var(--color-ink-07)";
  const dividerClr   = isF ? "rgba(255,255,255,.1)"    : "var(--color-ink-09)";
  const timeBg       = isF ? "rgba(255,255,255,.08)"   : "var(--color-ink-04)";
  const timeBorder   = isF ? "rgba(255,255,255,.1)"    : "var(--color-ink-09)";

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        flex: "1 1 0", minWidth: 0,
        background: bg,
        border: `1px solid ${borderClr}`,
        borderRadius: "var(--radius-card)",
        padding: "24px 20px 20px",
        position: "relative", overflow: "hidden",
        cursor: "default",
        transition: `transform var(--duration-hover) var(--ease-spring),
                     border-color var(--duration-hover) ease,
                     background var(--duration-hover) ease,
                     box-shadow var(--duration-hover) ease`,
        transform: isHov && !isF ? "translateY(-4px)" : "none",
        boxShadow: isHov && !isF ? "var(--shadow-card-hover)" : "none",
        opacity: 0,
        animation: inView
          ? `fadeUp var(--duration-anim) ${delayS}s var(--ease-spring) forwards`
          : "none",
      }}
    >
      <div className="hw-step-shimmer" />
      {isF && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: "var(--radius-card)",
          background: "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,255,255,.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}/>
      )}

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="hw-num-badge" style={{ background: numBg }}>
            <span style={{ fontWeight: 800, color: isF ? "rgba(255,255,255,.55)" : "var(--color-ink-45)", letterSpacing: ".02em" }}>
              {step.num}
            </span>
          </div>
          <div className="hw-icon-box" style={{ background: iconBg }}>
            {step.icon(isF)}
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 5,
          padding: "4px 9px",
          background: timeBg, border: `1px solid ${timeBorder}`,
          borderRadius: "var(--radius-full)",
        }}>
          <svg width="10" height="10" viewBox="0 0 11 11" fill="none"
            stroke={isF ? "rgba(255,255,255,.4)" : "var(--color-ink-30)"} strokeWidth="1.4" strokeLinecap="round">
            <circle cx="5.5" cy="5.5" r="4.5"/><path d="M5.5 3v2.8l1.5 1.2"/>
          </svg>
          <span style={{ fontSize: "var(--text-2xs)", fontWeight: 600, color: textSecond, whiteSpace: "nowrap" }}>
            {step.time}
          </span>
        </div>
      </div>

      <h3 style={{ fontSize: "clamp(14px,1.3vw,16px)", fontWeight: 800, color: textPrimary, letterSpacing: "-.03em", lineHeight: 1.2, margin: "0 0 8px 0" }}>
        {step.label}
      </h3>
      <div style={{ height: 1, background: dividerClr, marginBottom: 12 }}/>
      <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.7, color: textBody, margin: "0 0 14px 0" }}>
        {step.desc}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {step.details.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <CheckSmall white={isF}/>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: textSecond, lineHeight: 1.4 }}>{d}</span>
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
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", padding: "100px 0 96px 0" }}
    >
      <HwAbstractBg/>

      <div className="hw-glow" style={{ position: "absolute", top: "15%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,0,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }}/>
      <div className="hw-glow" style={{ position: "absolute", bottom: "10%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ opacity: 0, animation: inView ? "fadeUp var(--duration-anim) .10s var(--ease-spring) forwards" : "none" }}>
            <h2 style={{ fontSize: "clamp(30px,5vw,60px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.06, margin: "0 auto 18px", maxWidth: 600 }}>
              Dari Kesepakatan
              <br/>
              <span style={{ color: "var(--color-ink-45)" }}>Hingga Dana Cair.</span>
            </h2>
          </div>

        </div>

        {/* ── Progress track (desktop) ──────────────────────────────────── */}
        <div className="hw-desktop-grid" style={{ marginBottom: 24, opacity: 0, animation: inView ? "fadeIn var(--duration-anim) .28s ease forwards" : "none" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 0 }}>
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                {/* Step label */}
                <div style={{
                  flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                  opacity: hoveredIdx === i || s.featured ? 1 : 0.55,
                  transition: "opacity var(--duration-hover) ease",
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "var(--radius-sm)",
                    background: s.featured ? "var(--color-ink)" : hoveredIdx === i ? "var(--color-ink-12)" : "var(--color-ink-07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background var(--duration-hover) ease",
                  }}>
                    <span style={{ fontSize: "var(--text-xs)", fontWeight: 800, color: s.featured ? "rgba(255,255,255,.7)" : "var(--color-ink-45)" }}>
                      {s.num}
                    </span>
                  </div>
                  <span style={{ fontSize: "var(--text-2xs)", fontWeight: 600, color: s.featured ? "var(--color-ink)" : "var(--color-ink-45)", letterSpacing: ".02em", whiteSpace: "nowrap", textAlign: "center" }}>
                    {s.label}
                  </span>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div style={{ flex: "0 0 auto", width: "calc(100% / 12)", display: "flex", alignItems: "center", paddingBottom: 26, paddingLeft: 4, paddingRight: 4 }}>
                    <svg width="100%" height="16" viewBox="0 0 60 16" preserveAspectRatio="none" fill="none">
                      <path d="M0 8 L48 8" stroke="var(--color-ink-12)" strokeWidth="1.5" strokeDasharray="4 3"/>
                      <path d="M44 4 L52 8 L44 12" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Horizontal cards row (desktop) ───────────────────────────── */}
        <div className="hw-desktop-grid" style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <HStepCard
                step={s} inView={inView} delayS={0.15 + i * 0.10}
                hoveredIdx={hoveredIdx} idx={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(-1)}
              />
              {/* Arrow connector between cards */}
              {i < steps.length - 1 && (
                <div style={{
                  flexShrink: 0, display: "flex", alignItems: "center",
                  opacity: 0,
                  animation: inView ? `fadeIn var(--duration-anim) ${0.15 + i * 0.10 + 0.06}s ease forwards` : "none",
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" fill="var(--color-ink-04)" stroke="var(--color-ink-09)" strokeWidth="1"/>
                    <path d="M10 14h8M15 10.5l3.5 3.5-3.5 3.5" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Mobile: horizontal scroll with snap ──────────────────────── */}
        <div className="hw-mobile-list">
          {/* Hint text */}
          <p style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-30)", textAlign: "center", marginBottom: 14, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600 }}>
            Geser untuk melihat semua langkah →
          </p>

          <div style={{
            display: "flex", gap: 12, overflowX: "auto",
            scrollSnapType: "x mandatory", paddingBottom: 16,
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none", scrollbarWidth: "none",
          }}>
            {steps.map((s, i) => {
              const isF = s.featured;
              const bg          = isF ? "var(--color-ink)"          : "var(--color-surface)";
              const border      = isF ? "transparent"               : "var(--color-ink-09)";
              const textPrimary = isF ? "#fff"                      : "var(--color-ink)";
              const textSecond  = isF ? "rgba(255,255,255,.42)"     : "var(--color-ink-45)";
              const textBody    = isF ? "rgba(255,255,255,.65)"     : "var(--color-ink-60)";
              const iconBg      = isF ? "rgba(255,255,255,.1)"      : "var(--color-ink-07)";
              const divider     = isF ? "rgba(255,255,255,.1)"      : "var(--color-ink-09)";

              return (
                <div key={s.num} style={{
                  flex: "0 0 82vw", maxWidth: 300, scrollSnapAlign: "start",
                  background: bg, border: `1px solid ${border}`,
                  borderRadius: "var(--radius-card)", padding: "22px 18px",
                  position: "relative", overflow: "hidden",
                }}>
                  {isF && <div style={{ position: "absolute", inset: 0, borderRadius: "var(--radius-card)", background: "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,255,255,.06) 0%, transparent 70%)", pointerEvents: "none" }}/>}

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div className="hw-num-badge" style={{ background: iconBg }}>
                      <span style={{ fontWeight: 800, color: isF ? "rgba(255,255,255,.55)" : "var(--color-ink-45)", letterSpacing: ".02em" }}>{s.num}</span>
                    </div>
                    <div className="hw-icon-box" style={{ background: iconBg }}>{s.icon(isF)}</div>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, padding: "4px 8px", background: isF ? "rgba(255,255,255,.08)" : "var(--color-ink-04)", borderRadius: "var(--radius-full)", border: `1px solid ${isF ? "rgba(255,255,255,.1)" : "var(--color-ink-09)"}` }}>
                      <span style={{ fontSize: "var(--text-2xs)", fontWeight: 600, color: textSecond, whiteSpace: "nowrap" }}>{s.time}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 800, color: textPrimary, letterSpacing: "-.03em", margin: "0 0 8px 0" }}>{s.label}</h3>
                  <div style={{ height: 1, background: divider, marginBottom: 10 }}/>
                  <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.7, color: textBody, margin: "0 0 12px 0" }}>{s.desc}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {s.details.map((d, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <CheckSmall white={isF}/>
                        <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: textSecond }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 8 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ width: s.featured ? 18 : 6, height: 6, borderRadius: "var(--radius-full)", background: s.featured ? "var(--color-ink)" : "var(--color-ink-12)" }}/>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
        <div style={{ marginTop: 64, opacity: 0, animation: inView ? "fadeUp var(--duration-anim) .85s var(--ease-spring) forwards" : "none" }}>
          <div className="dark-strip">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <pattern id="hw-bot-dot" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx=".7" cy=".7" r=".7" fill="rgba(255,255,255,.055)"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#hw-bot-dot)"/>
              <circle cx="-2%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
              <circle cx="102%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
            </svg>
            <div className="relative z-10">
              <p className="strip-title" style={{ fontSize: "clamp(17px,2.5vw,22px)" }}>
                Siap memulai transaksi pertama Anda?
              </p>
              <p className="strip-sub">Daftar gratis — tidak perlu kartu kredit, tidak ada kontrak.</p>
            </div>
            <div className="relative z-10" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href={homeAnchors.pricing} className="btn-inv-primary">
                Mulai Sekarang
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
              </Link>
              <Link href={supportLinks.contact} className="btn-inv-ghost">
                Lihat Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
