"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

type CSSPropertiesWithVars = React.CSSProperties & {
  [key: string]: string | number | undefined;
};

// ─── Keyframe Styles ──────────────────────────────────────────────────────────
const styles = `
  .hero-root * { box-sizing: border-box; }
  .hero-root { font-family: var(--font-sans); }
  .hero-display { font-family: var(--font-display); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px) rotate(0.5deg); }
    50%       { transform: translateY(-10px) rotate(-0.3deg); }
  }
  @keyframes floatBadge {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }
  @keyframes ping-slow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50%       { opacity: 0; transform: scale(1.8); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes drawLine {
    from { stroke-dashoffset: 300; }
    to   { stroke-dashoffset: 0; }
  }

  .anim-fade-up   { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) forwards; }
  .anim-fade-in   { opacity: 0; animation: fadeIn 0.6s ease forwards; }
  .float-card     { animation: floatCard 6s ease-in-out infinite; }
  .float-badge    { animation: floatBadge 4s ease-in-out infinite; }
  .shimmer-bar    { animation: shimmer 2.4s linear infinite; }
  .spin-slow      { animation: spin-slow 20s linear infinite; }
  .marquee-track  { animation: marquee 28s linear infinite; }

  .d-100  { animation-delay: 100ms; }
  .d-200  { animation-delay: 200ms; }
  .d-300  { animation-delay: 300ms; }
  .d-400  { animation-delay: 400ms; }
  .d-500  { animation-delay: 500ms; }
  .d-600  { animation-delay: 600ms; }
  .d-700  { animation-delay: 700ms; }
  .d-900  { animation-delay: 900ms; }
  .d-1100 { animation-delay: 1100ms; }
  .d-1300 { animation-delay: 1300ms; }

  .btn-primary {
    position: relative;
    overflow: hidden;
    background: #000;
    color: #fff;
    border-radius: 12px;
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    transition: background 0.18s, transform 0.15s;
    letter-spacing: -0.01em;
    white-space: nowrap;
  }
  .btn-primary:hover { background: #1a1a1a; transform: translateY(-1px); }
  .btn-primary:active { transform: scale(0.98); }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: transform 0.55s ease;
  }
  .btn-primary:hover::after { transform: translateX(100%); }

  .btn-secondary {
    position: relative;
    background: transparent;
    color: #111;
    border: 1.5px solid rgba(0,0,0,0.1);
    border-radius: 12px;
    padding: 13px 28px;
    font-size: 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.18s, background 0.18s, transform 0.15s;
    letter-spacing: -0.01em;
    white-space: nowrap;
  }
  .btn-secondary:hover {
    border-color: rgba(0,0,0,0.1);
    background: rgba(0,0,0,0.1);
    transform: translateY(-1px);
  }
  .btn-secondary:active { transform: scale(0.98); }

  .card-ui {
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 20px;
  }

  .stat-card {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 16px;
    padding: 16px 20px;
    backdrop-filter: blur(8px);
    transition: transform 0.2s;
  }
  .stat-card:hover {
    transform: translateY(-2px);
  }

  .progress-bar {
    height: 3px;
    background: rgba(0,0,0,0.1);
    border-radius: 99px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: #000;
    border-radius: 99px;
    animation: progressAnim 2.5s 1.2s ease forwards;
    width: 0%;
  }
  @keyframes progressAnim {
    to { width: var(--target-width); }
  }

  .reg-logo-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(24px, 4vw, 48px);
    flex-wrap: wrap;
  }

  .reg-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(90px, 13vw, 148px);
    height: clamp(34px, 5vw, 52px);
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0.58;
  }
  .reg-logo:hover {
    opacity: 0.78;
    transform: translateY(-1px);
  }

  .reg-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(1);
  }

  .abstract-line {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: drawLine 2.5s 0.8s cubic-bezier(.22,.68,0,1) forwards;
  }

  .hero-grid-bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  @media (max-width: 768px) {
    .hero-visual { display: none !important; }
    .hero-h1-size { font-size: clamp(36px, 9vw, 56px) !important; }
  }
  @media (max-width: 480px) {
    .hero-h1-size { font-size: clamp(32px, 8.5vw, 46px) !important; }
  }
`;

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
    {/* Large concentric arcs top-right */}
    <circle cx="92%" cy="-5%" r="280" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.055" />
    <circle cx="92%" cy="-5%" r="200" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.045" />
    <circle cx="92%" cy="-5%" r="130" fill="none" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    {/* Arcs bottom-left */}
    <circle cx="8%" cy="108%" r="250" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.045" />
    <circle cx="8%" cy="108%" r="170" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.035" />
    {/* Abstract angled lines */}
    <line x1="0" y1="75%" x2="25%" y2="0" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    <line x1="0" y1="95%" x2="18%" y2="0" stroke="#000" strokeWidth="0.3" strokeOpacity="0.03" />
    <line x1="100%" y1="25%" x2="75%" y2="100%" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    {/* Dot cluster */}
    <circle cx="38%" cy="8%" r="1.8" fill="#000" fillOpacity="0.08" />
    <circle cx="40%" cy="8%" r="1.2" fill="#000" fillOpacity="0.06" />
    <circle cx="42%" cy="9%" r="1" fill="#000" fillOpacity="0.05" />
    <circle cx="62%" cy="92%" r="1.8" fill="#000" fillOpacity="0.07" />
    <circle cx="64%" cy="93%" r="1.2" fill="#000" fillOpacity="0.05" />
    {/* Decorative cross */}
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
        if (p >= 87) {
          if (iv) clearInterval(iv);
          p = 87;
        }
        setProgress(p);
      }, 28);
    }, 1400);

    return () => {
      clearTimeout(t);
      if (iv) clearInterval(iv);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] xl:max-w-[380px] mx-auto select-none">
      {/* Main card */}
      <div className="card-ui float-card p-5 relative overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]">
          <div className="shimmer-bar absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" style={{ animationDelay: "2s" }} />
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontFamily: "var(--font-sans)" }}>Dana Escrow</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: "#000", fontFamily: "var(--font-sans)", letterSpacing: "-0.03em", marginTop: 2 }}>Rp 12.500.000</p>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" />
              <path d="M9 12L11 14L15 10" />
            </svg>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(0,0,0,0.4)", fontFamily: "var(--font-sans)" }}>Verifikasi pengiriman</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#000", fontFamily: "var(--font-sans)" }}>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ "--target-width": "87%", width: `${progress}%`, transition: "width 0.03s linear" } as CSSPropertiesWithVars} />
          </div>
        </div>

        {/* Steps */}
        {[
          { label: "Pembeli menyetor dana", done: true },
          { label: "Penjual mengirim barang", done: true },
          { label: "Pembeli konfirmasi terima", done: false, active: true },
          { label: "Dana dilepaskan ke penjual", done: false },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.1)" : "none" }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
              background: step.done ? "#000" : step.active ? "rgba(0,0,0,0.1)" : "transparent",
              border: step.done ? "none" : step.active ? "none" : "1.5px solid rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {step.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {step.active && (
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#000" }} />
              )}
            </div>
            <span style={{
              fontSize: 12.5,
              fontWeight: step.active ? 600 : 400,
              color: step.done ? "rgba(0,0,0,0.32)" : step.active ? "#000" : "rgba(0,0,0,0.45)",
              fontFamily: "var(--font-sans)",
              textDecoration: step.done ? "line-through" : "none"
            }}>
              {step.label}
            </span>
            {step.active && (
              <div style={{ marginLeft: "auto" }}>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: "#000", background: "rgba(0,0,0,0.08)", padding: "3px 7px", borderRadius: 99, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}>
                  Menunggu
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Parties */}
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.04)", borderRadius: 12, padding: "10px 12px", border: "1px solid rgba(0,0,0,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "var(--font-sans)" }}>AR</span>
            </div>
            <div>
              <p style={{ fontSize: 10, color: "rgba(0,0,0,0.4)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Pembeli</p>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: "#000", fontFamily: "var(--font-sans)" }}>Ari Ramadhan</p>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div>
              <p style={{ fontSize: 10, color: "rgba(0,0,0,0.4)", fontFamily: "var(--font-sans)", fontWeight: 500, textAlign: "right" }}>Penjual</p>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: "#000", fontFamily: "var(--font-sans)" }}>Toko Budi</p>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.1)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.65)", fontFamily: "var(--font-sans)" }}>TB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="float-badge card-ui absolute -left-10 top-8 px-3 py-2.5 flex items-center gap-2.5" style={{ animationDelay: "1s", zIndex: 10, minWidth: 148 }}>
        <div style={{ width: 30, height: 30, borderRadius: 10, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: 10, fontWeight: 600, color: "#000", fontFamily: "var(--font-sans)", lineHeight: 1 }}>Dana Aman</p>
          <p style={{ fontSize: 9.5, color: "rgba(0,0,0,0.45)", fontFamily: "var(--font-sans)", marginTop: 2 }}>Terproteksi 100%</p>
        </div>
      </div>

      {/* Floating badge — bottom right */}
      <div className="float-badge card-ui absolute -right-8 bottom-10 px-3 py-2 flex items-center gap-2" style={{ animationDelay: "2s", zIndex: 10 }}>
        <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
          <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#000", opacity: 0.35, animation: "ping-slow 1.6s ease infinite" }} />
          <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#000", display: "block" }} />
        </span>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#000", fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>Transaksi Live</span>
      </div>

      {/* Floating badge — top right */}
      <div className="float-badge card-ui absolute -right-6 top-6 px-3 py-2.5" style={{ animationDelay: "0.5s", zIndex: 10 }}>
        <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(0,0,0,0.45)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Monitoring</p>
        <p style={{ fontSize: 13, fontWeight: 800, color: "#000", fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>24/7</p>
      </div>
    </div>
  );
};

// ─── Trust signals (non-regulatory claims) ─────────────────────────────────
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
    <>
      <style>{styles}</style>
      <section
        id="home"
        className="hero-root hero-grid-bg relative overflow-hidden"
        style={{ background: "#FFFFFF", minHeight: "calc(100vh - 104px)" }}
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
              <div className={`anim-fade-up d-100 inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-full border border-black/10 bg-white/80`}>
                <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#000", opacity: 0.35, animation: "ping-slow 1.8s ease infinite" }} />
                  <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "#000", display: "block" }} />
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(0,0,0,0.62)", fontFamily: "var(--font-sans)", letterSpacing: "0.03em" }}>
                  Platform escrow untuk transaksi bernilai tinggi
                </span>
              </div>

              {/* H1 */}
              <div className="anim-fade-up d-200">
                <h1
                  className="hero-display hero-h1-size"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 5.5vw, 68px)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: "-0.04em",
                    color: "#000",
                    margin: 0 }}
                >
                  <span style={{ display: "block" }}>Kurangi Penipuan.</span>
                  <span style={{ display: "block", position: "relative" }}>
                    Tambah Kepercayaan.
                    {/* Decorative underline SVG */}
                    <svg
                      viewBox="0 0 320 12"
                      style={{ position: "absolute", bottom: -6, left: 0, width: "100%", maxWidth: 380, overflow: "visible" }}
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        className="abstract-line"
                        d="M2 9 Q80 3 160 8 Q240 13 318 6"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeOpacity="0.18"
                      />
                    </svg>
                  </span>
                </h1>
              </div>

              {/* H2 */}
              <p
                className="anim-fade-up d-300"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(15px, 1.6vw, 17px)",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(0,0,0,0.68)",
                  margin: 0,
                  maxWidth: 440 }}
              >
                Dana Anda ditahan sementara di escrow dan baru dilepas saat transaksi selesai serta kedua pihak menyetujui hasilnya.
              </p>

              {/* CTAs */}
              <div className="anim-fade-up d-400 flex flex-wrap items-center gap-3">
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
            <div className="hero-visual anim-fade-in d-600 flex items-center justify-center relative py-10" style={{ minHeight: 460 }}>
              {/* Outer glow */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 65% 65% at 55% 50%, rgba(0,0,0,0.1) 0%, transparent 70%)"
              }} />
              {/* Spinning ring */}
              <div className="spin-slow absolute" style={{
                width: 380, height: 380,
                border: "1px dashed rgba(0,0,0,0.1)",
                borderRadius: "50%",
                pointerEvents: "none"
              }} />
              <div style={{
                width: 300, height: 300,
                border: "1px dashed rgba(0,0,0,0.1)",
                borderRadius: "50%",
                position: "absolute",
                pointerEvents: "none",
                animation: "spin-slow 30s linear infinite reverse"
              }} />
              <FloatingUICard />
            </div>
          </div>
        </div>

        {/* ── Regulatory Divider ────────────────────────────────────────────── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pb-14">
          <div className="anim-fade-up d-1100">
            {/* Label */}
            <div className="flex items-center gap-4 mb-5">
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.09)" }} />
              <span style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.38)",
                fontFamily: "var(--font-sans)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L2 3.5V6c0 2.2 1.8 4 4 4s4-1.8 4-4V3.5L6 1Z" stroke="rgba(0,0,0,0.38)" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                Komitmen pada Kepatuhan
              </span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.09)" }} />
            </div>

            {/* Monochrome official-logo row */}
            <div className="reg-logo-row">
              {RegLogos.map((logo, i) => (
                <div
                  key={logo.src}
                  className={`reg-logo anim-fade-up`}
                  style={{ animationDelay: `${1200 + i * 80}ms` }}
                >
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
