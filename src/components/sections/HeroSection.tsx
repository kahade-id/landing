"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Abstract Background ──────────────────────────────────────────────────────
const HeroAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="rg-hero-1" cx="60%" cy="0%" r="55%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.035" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg-hero-2" cx="20%" cy="100%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#rg-hero-1)" />
    <rect width="100%" height="100%" fill="url(#rg-hero-2)" />
    <circle cx="92%" cy="-5%" r="280" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.045" />
    <circle cx="92%" cy="-5%" r="200" fill="none" stroke="#000" strokeWidth="0.4" strokeOpacity="0.035" />
    <circle cx="8%" cy="108%" r="250" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.04" />
    <line x1="0" y1="75%" x2="25%" y2="0" stroke="#000" strokeWidth="0.3" strokeOpacity="0.035" />
    <line x1="100%" y1="25%" x2="75%" y2="100%" stroke="#000" strokeWidth="0.3" strokeOpacity="0.035" />
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
        p += 2;
        if (p >= 87) { if (iv) clearInterval(iv); p = 87; }
        setProgress(p);
      }, 32);
    }, 1200);
    return () => { clearTimeout(t); if (iv) clearInterval(iv); };
  }, []);

  const steps = [
    { label: "Pembeli menyetor dana", done: true },
    { label: "Penjual mengirim barang", done: true },
    { label: "Pembeli konfirmasi terima", done: false, active: true },
    { label: "Dana dilepaskan ke penjual", done: false },
  ];

  return (
    <div className="relative w-full max-w-[320px] xl:max-w-[360px] mx-auto select-none">
      {/* Main card */}
      <div className="card p-5 relative overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="meta-label mb-1">Dana Escrow</p>
            <p className="text-xl font-extrabold tracking-tight">Rp 12.500.000</p>
          </div>
          <div className="icon-box bg-ink text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" />
              <path d="M9 12L11 14L15 10" />
            </svg>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-ink-45">Verifikasi pengiriman</span>
            <span className="text-xs font-bold">{Math.round(progress)}%</span>
          </div>
          <progress
            className="progress-bar"
            value={progress}
            max={100}
          />
        </div>

        {/* Steps */}
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2.5 py-1.5 border-b border-ink-7 last:border-0">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.done ? "bg-ink" : step.active ? "bg-ink-9" : "border-1.5 border-ink-12"
              }`}>
                {step.done && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {step.active && <div className="w-1.5 h-1.5 rounded-full bg-ink" />}
              </div>
              <span className={`text-sm ${
                step.done ? "text-ink-30 line-through" : step.active ? "font-semibold" : "text-ink-45"
              }`}>
                {step.label}
              </span>
              {step.active && (
                <span className="ml-auto small font-bold bg-ink-7 text-ink px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Menunggu
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Parties */}
        <div className="mt-4 flex items-center justify-between bg-ink-4 rounded-card p-3 border border-ink-7">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center">
              <span className="small font-bold text-white">AR</span>
            </div>
            <div>
              <p className="small text-ink-45">Pembeli</p>
              <p className="text-xs font-semibold">Ari Ramadhan</p>
            </div>
          </div>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="var(--color-ink-30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="small text-ink-45">Penjual</p>
              <p className="text-xs font-semibold">Toko Budi</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-ink-9 border border-ink-12 flex items-center justify-center">
              <span className="small font-bold text-ink-60">TB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-8 top-6 card p-3 flex items-center gap-2.5 z-10 animate-[float_5s_ease-in-out_infinite]">
        <div className="icon-box bg-ink text-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="small font-semibold">Dana Aman</p>
          <p className="small text-ink-45">Terproteksi 100%</p>
        </div>
      </div>

      <div className="absolute -right-6 bottom-8 card p-2.5 flex items-center gap-2 z-10 animate-[float_6s_ease-in-out_infinite_1s]">
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-35" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-ink" />
        </span>
        <span className="text-xs font-semibold whitespace-nowrap">Transaksi Live</span>
      </div>

      <div className="absolute -right-4 top-4 card p-3 z-10 animate-[float_5.5s_ease-in-out_infinite_0.5s]">
        <p className="small text-ink-45 uppercase tracking-wider">Monitoring</p>
        <p className="text-sm font-extrabold tracking-tight">24/7</p>
      </div>
    </div>
  );
};

// ─── Trust signals ────────────────────────────────────────────────────────────
const RegLogos = [
  { src: "/compliance/bi_icon.svg", alt: "Bank Indonesia" },
  { src: "/compliance/ppatk_icon.svg", alt: "PPATK" },
  { src: "/compliance/kementrian_icon.svg", alt: "Kementerian Hukum dan HAM" },
  { src: "/compliance/kominfo_icon.svg", alt: "Kominfo" },
];

// ─── Arrow icons ──────────────────────────────────────────────────────────────
const ArrowRightSm = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M5.5 5L9 7L5.5 9V5Z" fill="currentColor" />
  </svg>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const inViewClass = mounted ? "in-view" : "";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-surface min-h-[calc(100vh-64px)]"
    >
      <HeroAbstractBg />

      {/* Radial fade over grid at center */}
      <div className="absolute inset-0 pointer-events-none bg-hero-center-glow" />

      {/* Main Content */}
      <div className="relative z-10 container-base pt-16 lg:pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Trust pill */}
            <div className={`anim-fade-up delay-1 ${inViewClass} inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-2 rounded-full border border-ink-9 bg-white`}>
              <span className="relative flex w-1.5 h-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-35" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-ink" />
              </span>
              <span className="text-xs font-medium text-ink-45 tracking-wide">
                Platform escrow untuk transaksi bernilai tinggi
              </span>
            </div>

            {/* H1 */}
            <div className={`anim-fade-up delay-2 ${inViewClass}`}>
              <h1 className="hero-title">
                <span className="block">Kurangi Penipuan.</span>
                <span className="block">
                  Tambah Kepercayaan.
                </span>
              </h1>
            </div>

            {/* Lead text */}
            <p className={`anim-fade-up delay-3 ${inViewClass} body lg:text-lg text-ink-45 max-w-md mx-auto lg:mx-0`}>
              Dana Anda ditahan sementara di escrow dan baru dilepas saat transaksi selesai serta kedua pihak menyetujui hasilnya.
            </p>

            {/* CTAs */}
            <div className={`anim-fade-up delay-4 ${inViewClass} cta-group justify-center lg:justify-start`}>
              <Link href={homeAnchors.cta} className="btn btn-primary">
                Mulai Transaksi
                <ArrowRightSm />
              </Link>
              <Link href={homeAnchors.howItWorks} className="btn btn-secondary">
                <PlayIcon />
                Lihat Cara Kerja
              </Link>
            </div>
          </div>

          {/* Right Column — UI Mockup */}
          <div className={`anim-fade-up delay-5 ${inViewClass} flex items-center justify-center relative py-8 min-h-[420px]`}>
            {/* Outer glow */}
            <div className="absolute inset-0 pointer-events-none bg-hero-right-glow" />
            {/* Spinning rings */}
            <div 
              className="absolute w-80 h-80 border border-dashed border-ink-9 rounded-full pointer-events-none animate-[spin_30s_linear_infinite]"
            />
            <div 
              className="absolute w-64 h-64 border border-dashed border-ink-9 rounded-full pointer-events-none animate-[spin_25s_linear_infinite_reverse]"
            />
            <FloatingUICard />
          </div>
        </div>
      </div>

      {/* Regulatory Divider */}
      <div className="relative z-10 container-base mt-12 pb-12">
        <div className={`anim-fade-up delay-6 ${inViewClass}`}>
          {/* Label */}
          <div className="flex items-center justify-center mb-5">
            <div className="flex-1 h-px bg-ink-9" />
            <span className="meta-label px-4 whitespace-nowrap">Komitmen pada Kepatuhan</span>
            <div className="flex-1 h-px bg-ink-9" />
          </div>

          {/* Logo row */}
          <div className="hidden sm:flex items-center justify-center gap-8 lg:gap-12">
            {RegLogos.map((logo, i) => (
              <div
                key={logo.src}
                className={`anim-fade-up ${inViewClass} delay-${8 + i} opacity-60 hover:opacity-100 transition-opacity`}
              >
                <img src={logo.src} alt={logo.alt} className="h-8 lg:h-10 w-auto grayscale" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Mobile marquee */}
          <div className="sm:hidden marquee-mask">
            <div className="marquee-track">
              {[...RegLogos, ...RegLogos].map((logo, i) => (
                <div key={`${logo.src}-${i}`} className="flex-shrink-0 px-6 opacity-50">
                  <img src={logo.src} alt={logo.alt} className="h-8 w-auto grayscale" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
