"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

type CSSPropertiesWithVars = React.CSSProperties & {
  [key: string]: string | number | undefined;
};

// ─── Abstract Background ──────────────────────────────────────────────────────
const HeroAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="rg-top" cx="60%" cy="0%" r="55%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg-bottom" cx="20%" cy="100%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.035" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg-center" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.015" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#rg-top)" />
    <rect width="100%" height="100%" fill="url(#rg-bottom)" />
    <rect width="100%" height="100%" fill="url(#rg-center)" />
    <circle cx="92%" cy="-5%" r="280" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.055" />
    <circle cx="92%" cy="-5%" r="200" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.045" />
    <circle cx="92%" cy="-5%" r="130" fill="none" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    <circle cx="8%" cy="108%" r="250" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.045" />
    <circle cx="8%" cy="108%" r="170" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.035" />
    <line x1="0" y1="75%" x2="25%" y2="0" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    <line x1="0" y1="95%" x2="18%" y2="0" stroke="#000" strokeWidth="0.3" strokeOpacity="0.03" />
    <line x1="100%" y1="25%" x2="75%" y2="100%" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    <circle cx="38%" cy="8%" r="1.8" fill="#000" fillOpacity="0.08" />
    <circle cx="40%" cy="8%" r="1.2" fill="#000" fillOpacity="0.06" />
    <circle cx="42%" cy="9%" r="1" fill="#000" fillOpacity="0.05" />
    <circle cx="62%" cy="92%" r="1.8" fill="#000" fillOpacity="0.07" />
    <circle cx="64%" cy="93%" r="1.2" fill="#000" fillOpacity="0.05" />
    <line x1="4.5%" y1="28%" x2="4.5%" y2="34%" stroke="#000" strokeWidth="0.6" strokeOpacity="0.08" />
    <line x1="2.5%" y1="31%" x2="6.5%" y2="31%" stroke="#000" strokeWidth="0.6" strokeOpacity="0.08" />
    <line x1="95.5%" y1="68%" x2="95.5%" y2="74%" stroke="#000" strokeWidth="0.6" strokeOpacity="0.08" />
    <line x1="93.5%" y1="71%" x2="97.5%" y2="71%" stroke="#000" strokeWidth="0.6" strokeOpacity="0.08" />
  </svg>
);

// ─── Floating UI Card ─────────────────────────────────────────────────────────
const FloatingUICard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    let iv: ReturnType<typeof setInterval> | null = null;
    const t = setTimeout(() => {
      iv = setInterval(() => {
        p += 2.2;
        if (p >= 87) { if (iv) clearInterval(iv); p = 87; }
        setProgress(p);
      }, 28);
    }, 1400);
    return () => { clearTimeout(t); if (iv) clearInterval(iv); };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] xl:max-w-[380px] mx-auto select-none">
      {/* Main card */}
      <div className="hero-card-ui hero-float-card p-5 relative overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: "var(--radius-card)" }}>
          <div
            className="hero-shimmer-bar absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: "var(--text-2xs)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-45)" }}>Dana Escrow</p>
            <p style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.03em", marginTop: 2 }}>Rp 12.500.000</p>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: "var(--radius-xs)", background: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" />
              <path d="M9 12L11 14L15 10" />
            </svg>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--color-ink-45)" }}>Verifikasi pengiriman</span>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-ink)" }}>{Math.round(progress)}%</span>
          </div>
          <div className="hero-progress-bar">
            <div className="hero-progress-fill" style={{ "--target-width": "87%", width: `${progress}%`, transition: "width 0.03s linear" } as CSSPropertiesWithVars} />
          </div>
        </div>

        {/* Steps */}
        {[
          { label: "Pembeli menyetor dana", done: true },
          { label: "Penjual mengirim barang", done: true },
          { label: "Pembeli konfirmasi terima", done: false, active: true },
          { label: "Dana dilepaskan ke penjual", done: false },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 3 ? `1px solid var(--color-ink-09)` : "none" }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
              background: step.done ? "var(--color-ink)" : step.active ? "var(--color-ink-09)" : "transparent",
              border: step.done ? "none" : step.active ? "none" : `1.5px solid var(--color-ink-12)`,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {step.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {step.active && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-ink)" }} />}
            </div>
            <span style={{
              fontSize: "var(--text-sm)",
              fontWeight: step.active ? 600 : 400,
              color: step.done ? "var(--color-ink-30)" : step.active ? "var(--color-ink)" : "var(--color-ink-45)",
              textDecoration: step.done ? "line-through" : "none"
            }}>
              {step.label}
            </span>
            {step.active && (
              <div className="ml-auto">
                <span style={{ fontSize: "var(--text-2xs)", fontWeight: 700, color: "var(--color-ink)", background: "var(--color-ink-07)", padding: "3px 7px", borderRadius: "var(--radius-full)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Menunggu
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Parties */}
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--color-ink-04)", borderRadius: "var(--radius-xs)", padding: "10px 12px", border: `1px solid var(--color-ink-07)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "var(--text-2xs)", fontWeight: 700, color: "var(--color-surface)" }}>AR</span>
            </div>
            <div>
              <p style={{ fontSize: "var(--text-2xs)", color: "var(--color-ink-45)", fontWeight: 500 }}>Pembeli</p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-ink)" }}>Ari Ramadhan</p>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div>
              <p style={{ fontSize: "var(--text-2xs)", color: "var(--color-ink-45)", fontWeight: 500, textAlign: "right" }}>Penjual</p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-ink)" }}>Toko Budi</p>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-ink-09)", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid var(--color-ink-12)` }}>
              <span style={{ fontSize: "var(--text-2xs)", fontWeight: 700, color: "var(--color-ink-60)" }}>TB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="hero-float-badge hero-card-ui absolute -left-10 top-8 px-3 py-2.5 flex items-center gap-2.5" style={{ animationDelay: "1s", zIndex: 10, minWidth: 148 }}>
        <div style={{ width: 30, height: 30, borderRadius: "var(--radius-xs)", background: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "var(--text-2xs)", fontWeight: 600, color: "var(--color-ink)", lineHeight: 1 }}>Dana Aman</p>
          <p style={{ fontSize: "var(--text-2xs)", color: "var(--color-ink-45)", marginTop: 2 }}>Terproteksi 100%</p>
        </div>
      </div>

      {/* Floating badge — bottom right */}
      <div className="hero-float-badge hero-card-ui absolute -right-8 bottom-10 px-3 py-2 flex items-center gap-2" style={{ animationDelay: "2s", zIndex: 10 }}>
        <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
          <span className="hero-ping-slow" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--color-ink)", opacity: 0.35 }} />
          <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "var(--color-ink)", display: "block" }} />
        </span>
        <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-ink)", whiteSpace: "nowrap" }}>Transaksi Live</span>
      </div>

      {/* Floating badge — top right */}
      <div className="hero-float-badge hero-card-ui absolute -right-6 top-6 px-3 py-2.5" style={{ animationDelay: "0.5s", zIndex: 10 }}>
        <p style={{ fontSize: "var(--text-2xs)", fontWeight: 600, color: "var(--color-ink-45)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Monitoring</p>
        <p style={{ fontSize: "var(--text-sm)", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>24/7</p>
      </div>
    </div>
  );
};

// ─── Trust signals ─────────────────────────────────────────────────────────────
const RegLogos = [
  { src: "/compliance/bi_icon.svg", alt: "Bank Indonesia" },
  { src: "/compliance/ppatk_icon.svg", alt: "PPATK" },
  { src: "/compliance/kementrian_icon.svg", alt: "Kementerian Hukum dan HAM" },
  { src: "/compliance/kominfo_icon.svg", alt: "Kominfo" },
];

// ─── Arrow icons ──────────────────────────────────────────────────────────────
const ArrowRightSm = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.5" />
    <path d="M5.5 5L9 7L5.5 9V5Z" fill="currentColor" />
  </svg>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="hero-grid-bg relative overflow-hidden"
      style={{ background: "var(--color-surface)", minHeight: "calc(100vh - 104px)" }}
    >
      <HeroAbstractBg />

      {/* Radial fade over grid at center */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.92) 0%, transparent 100%)"
      }} />

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left Column ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-7 max-w-xl">

            {/* Trust pill */}
            <div className="hero-anim-up d-1 inline-flex items-center gap-2 self-center px-3.5 py-2 rounded-full border border-black/10 bg-white/80">
              <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
                <span className="hero-ping-slow" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--color-ink)", opacity: 0.35 }} />
                <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "var(--color-ink)", display: "block" }} />
              </span>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-ink-60)", letterSpacing: "0.03em" }}>
                Platform escrow untuk transaksi bernilai tinggi
              </span>
            </div>

            {/* H1 */}
            <div className="hero-anim-up d-2 text-center">
              <h1
                className="hero-h1-size"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 68px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  color: "var(--color-ink)" }}
              >
                <span className="block">Kurangi Penipuan.</span>
                <span style={{ display: "block", position: "relative" }}>
                  Tambah Kepercayaan.
                  <svg
                    viewBox="0 0 320 12"
                    style={{ position: "absolute", bottom: -6, left: 0, width: "100%", maxWidth: 380, overflow: "visible" }}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="hero-abstract-line"
                      d="M2 9 Q80 3 160 8 Q240 13 318 6"
                      fill="none"
                      stroke="var(--color-ink)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeOpacity="0.18"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Lead text */}
            <p
              className="hero-anim-up d-3 text-center mx-auto"
              style={{
                fontSize: "clamp(15px, 1.6vw, var(--text-lg))",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "var(--color-ink-60)",
                maxWidth: 440 }}
            >
              Dana Anda ditahan sementara di escrow dan baru dilepas saat transaksi selesai serta kedua pihak menyetujui hasilnya.
            </p>

            {/* CTAs — uses unified button system */}
            <div className="hero-anim-up d-4 flex flex-wrap items-center gap-3">
              <Link href={homeAnchors.cta} className="btn-primary">
                Mulai Transaksi
                <ArrowRightSm />
              </Link>
              <Link href={homeAnchors.howItWorks} className="btn-secondary">
                <PlayIcon />
                Lihat Cara Kerja
              </Link>
            </div>

          </div>

          {/* ── Right Column — UI Mockup ────────────────────────────────── */}
          <div className="hero-visual hero-anim-in d-6 flex items-center justify-center relative py-10" style={{ minHeight: 460 }}>
            {/* Outer glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse 65% 65% at 55% 50%, var(--color-ink-09) 0%, transparent 70%)"
            }} />
            {/* Spinning rings */}
            <div className="hero-spin-slow absolute" style={{
              width: 380, height: 380,
              border: `1px dashed var(--color-ink-09)`,
              borderRadius: "50%", pointerEvents: "none"
            }} />
            <div style={{
              width: 300, height: 300,
              border: `1px dashed var(--color-ink-09)`,
              borderRadius: "50%", position: "absolute", pointerEvents: "none",
              animation: "spinSlow 30s linear infinite reverse"
            }} />
            <FloatingUICard />
          </div>
        </div>
      </div>

      {/* ── Regulatory Divider ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pb-14">
        <div className="hero-anim-up d-11">
          {/* Label */}
          <div className="flex items-center justify-center mb-5">
            <div className="flex-1 h-px bg-ink-9" />
            <span style={{
              fontSize: "var(--text-2xs)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-ink-30)",
              whiteSpace: "nowrap",
              display: "flex", alignItems: "center"
            }}>
              Komitmen pada Kepatuhan
            </span>
            <div className="flex-1 h-px bg-ink-9" />
          </div>

          {/* Logo row */}
          <div className="hero-reg-logo-row">
            {RegLogos.map((logo, i) => (
              <div
                key={logo.src}
                className="hero-reg-logo hero-anim-up"
                style={{ animationDelay: `${1200 + i * 80}ms` }}
              >
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
