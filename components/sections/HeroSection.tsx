"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   ESCROW FLOW ILLUSTRATION
   Pembeli → Lock (Escrow) → Penjual
   Minimal, clean, professional — matching site aesthetic
─────────────────────────────────────────────────────────────────── */
function EscrowFlowIllustration() {
  return (
    <>
      <style>{`
        @keyframes flowRight {
          0%   { stroke-dashoffset: 24; opacity: 0.4; }
          50%  { opacity: 1; }
          100% { stroke-dashoffset: 0;  opacity: 0.4; }
        }
        @keyframes lockPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.07), inset 0 1px 3px rgba(255,255,255,0.9); }
          50%     { box-shadow: 0 0 0 8px rgba(0,0,0,0.03), inset 0 1px 3px rgba(255,255,255,0.9); }
        }
        @keyframes ringBreath {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50%     { opacity: 0.7; transform: scale(1.04); }
        }
        @keyframes badgeFade {
          0%,40%  { opacity: 0; transform: translateY(4px); }
          60%,85% { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; transform: translateY(-4px); }
        }
        .flow-line-fwd { animation: flowRight 2.4s ease-in-out infinite; }
        .flow-line-rev { animation: flowRight 2.4s ease-in-out infinite 1.2s; }
        .lock-core     { animation: lockPulse 3s ease-in-out infinite; }
        .ring-1        { animation: ringBreath 3s ease-in-out infinite; }
        .ring-2        { animation: ringBreath 3s ease-in-out infinite 0.6s; }
        .ring-3        { animation: ringBreath 3s ease-in-out infinite 1.2s; }
        .badge-buyer   { animation: badgeFade 4s ease-in-out infinite; }
        .badge-escrow  { animation: badgeFade 4s ease-in-out infinite 1.3s; }
        .badge-seller  { animation: badgeFade 4s ease-in-out infinite 2.6s; }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, userSelect: "none" }}>

        {/* ── MAIN ROW ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, position: "relative" }}>

          {/* ── PEMBELI NODE ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 110 }}>
            {/* Avatar circle */}
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "#F0F0F0", border: "1.5px solid #D4D4D4",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.06)",
            }}>
              {/* Simple person silhouette */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" fill="#B0B0B0"/>
                <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#B0B0B0"/>
              </svg>
            </div>
            {/* Label */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Pembeli</p>
              <p style={{ fontSize: 11, color: "#A0A0A0", marginTop: 1 }}>Kirim dana</p>
            </div>
          </div>

          {/* ── CONNECTOR LEFT ── */}
          <div style={{ position: "relative", width: 90, display: "flex", alignItems: "center", flexDirection: "column", gap: 4 }}>
            <svg width="90" height="20" viewBox="0 0 90 20" overflow="visible">
              <defs>
                <marker id="arrowR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#C0C0C0"/>
                </marker>
              </defs>
              <line
                className="flow-line-fwd"
                x1="4" y1="10" x2="80" y2="10"
                stroke="#C0C0C0" strokeWidth="1.5"
                strokeDasharray="6 4"
                markerEnd="url(#arrowR)"
              />
            </svg>
            <span style={{ fontSize: 10, color: "#B8B8B8", fontWeight: 600, letterSpacing: 0.4 }}>Dana masuk</span>
          </div>

          {/* ── ESCROW (LOCK) NODE ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 120 }}>
            {/* Rings + Core */}
            <div style={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Ring 3 */}
              <div className="ring-3" style={{
                position: "absolute", inset: -10,
                borderRadius: "50%", border: "1px dashed rgba(0,0,0,0.06)",
              }}/>
              {/* Ring 2 */}
              <div className="ring-2" style={{
                position: "absolute", inset: -3,
                borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)",
              }}/>
              {/* Ring 1 */}
              <div className="ring-1" style={{
                position: "absolute", inset: 4,
                borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)",
              }}/>
              {/* Core */}
              <div className="lock-core" style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "#1A1A1A",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 2,
              }}>
                {/* Lock icon in white */}
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <rect x="1" y="12" width="20" height="13" rx="3" fill="white" opacity="0.95"/>
                  <path d="M5 12V8.5C5 5.46 7.46 3 10.5 3h1C14.54 3 17 5.46 17 8.5V12" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.95"/>
                  <circle cx="11" cy="18.5" r="2" fill="#1A1A1A"/>
                </svg>
              </div>
            </div>
            {/* Label */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Escrow</p>
              <p style={{ fontSize: 11, color: "#A0A0A0", marginTop: 1 }}>Dana aman</p>
            </div>
          </div>

          {/* ── CONNECTOR RIGHT ── */}
          <div style={{ position: "relative", width: 90, display: "flex", alignItems: "center", flexDirection: "column", gap: 4 }}>
            <svg width="90" height="20" viewBox="0 0 90 20" overflow="visible">
              <defs>
                <marker id="arrowR2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#C0C0C0"/>
                </marker>
              </defs>
              <line
                className="flow-line-rev"
                x1="4" y1="10" x2="80" y2="10"
                stroke="#C0C0C0" strokeWidth="1.5"
                strokeDasharray="6 4"
                markerEnd="url(#arrowR2)"
              />
            </svg>
            <span style={{ fontSize: 10, color: "#B8B8B8", fontWeight: 600, letterSpacing: 0.4 }}>Dana cair</span>
          </div>

          {/* ── PENJUAL NODE ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 110 }}>
            {/* Store circle */}
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "#F0F0F0", border: "1.5px solid #D4D4D4",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.06)",
            }}>
              {/* Simple store icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="13" width="20" height="12" rx="1.5" fill="#B0B0B0"/>
                <path d="M2 9h24l-2 4H4L2 9z" fill="#C4C4C4"/>
                <rect x="11" y="17" width="6" height="8" rx="1" fill="#E8E8E8"/>
              </svg>
            </div>
            {/* Label */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Penjual</p>
              <p style={{ fontSize: 11, color: "#A0A0A0", marginTop: 1 }}>Kirim barang</p>
            </div>
          </div>
        </div>

        {/* ── STATUS BADGES ROW ── */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          width: "100%", marginTop: 24, padding: "0 0",
          gap: 8,
        }}>
          {/* Buyer badge */}
          <div className="badge-buyer" style={{ flex: 1 }}>
            <div style={{
              background: "#F6F6F6", border: "1px solid #E4E4E4",
              borderRadius: 8, padding: "7px 10px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 10, color: "#52C41A", fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 11, color: "#606060", fontWeight: 600 }}>Dana dikunci</span>
            </div>
          </div>

          {/* Escrow badge */}
          <div className="badge-escrow" style={{ flex: 1 }}>
            <div style={{
              background: "#F6F6F6", border: "1px solid #E4E4E4",
              borderRadius: 8, padding: "7px 10px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 10, color: "#1A1A1A", fontWeight: 700 }}>🔒</span>
              <span style={{ fontSize: 11, color: "#606060", fontWeight: 600 }}>Terlindungi</span>
            </div>
          </div>

          {/* Seller badge */}
          <div className="badge-seller" style={{ flex: 1 }}>
            <div style={{
              background: "#F6F6F6", border: "1px solid #E4E4E4",
              borderRadius: 8, padding: "7px 10px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 10, color: "#52C41A", fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 11, color: "#606060", fontWeight: 600 }}>Dana cair</span>
            </div>
          </div>
        </div>

        {/* ── KAHADE TAG ── */}
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ flex: 1, height: 1, background: "#E8E8E8", width: 60 }} />
          <span style={{ fontSize: 11, color: "#B0B0B0", fontWeight: 600, letterSpacing: 0.5 }}>DIJAMIN KAHADE</span>
          <div style={{ flex: 1, height: 1, background: "#E8E8E8", width: 60 }} />
        </div>

      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   AVATARS
─────────────────────────────────────────────────────────────────── */
const testimonialAvatars = [
  { src: "/testimonials/user1.jpg", alt: "Pengguna 1" },
  { src: "/testimonials/user2.jpg", alt: "Pengguna 2" },
  { src: "/testimonials/user3.jpg", alt: "Pengguna 3" },
  { src: "/testimonials/user4.jpg", alt: "Pengguna 4" },
  { src: "/testimonials/user5.jpg", alt: "Pengguna 5" },
];

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
─────────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const inViewClass = mounted ? "in-view" : "";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: pref ? "auto" : "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white border-b border-border">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 50% at 65% 45%, hsl(220 40% 97%) 0%, transparent 70%)" }} />

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block relative z-10 container-base pt-16 pb-16">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div className="flex flex-col gap-5 max-w-lg">
            <div className={`anim-fade-up delay-100 ${inViewClass}`}>
              <h1>
                <span className="hero-title block">Transaksi Aman,</span>
                <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
              </h1>
            </div>
            {/* text-lg — konsisten dengan ProblemSection & ComplianceSection */}
            <p className={`anim-fade-up delay-200 ${inViewClass} text-lg text-muted-foreground leading-relaxed`}>
              Dana Anda dijaga sampai transaksi selesai.<br />
              Pembeli pasti bayar. Penjual pasti kirim.<br />
              Kepercayaan bukan soal harapan — tapi jaminan.
            </p>
            <div className={`anim-fade-up delay-300 ${inViewClass} flex gap-3`}>
              <a href="https://app.kahade.id/register"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Mulai Sekarang <ArrowRight className="w-4 h-4" />
              </a>
              <button type="button" onClick={() => scrollToSection("cara-kerja")}
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                <Play className="w-4 h-4" /> Cara Kerja
              </button>
            </div>
            <div className={`anim-fade-up delay-400 ${inViewClass} flex items-center gap-4 pt-1`}>
              <div className="flex items-center">
                {testimonialAvatars.map((a, i) => (
                  <div key={a.alt}
                    className={`relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2.5"}`}>
                    <Image src={a.src} alt={a.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
              </p>
            </div>
          </div>

          {/* Escrow Flow Illustration */}
          <div className={`anim-fade-up delay-500 ${inViewClass} flex justify-center items-center`} aria-hidden="true">
            <EscrowFlowIllustration />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden relative z-10 pt-10 pb-10">
        <div className="px-4 sm:px-6 flex flex-col gap-4 text-center mb-10">
          <div className={`anim-fade-up delay-100 ${inViewClass}`}>
            <h1>
              <span className="hero-title block">Transaksi Aman,</span>
              <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
            </h1>
          </div>
          {/* text-lg — konsisten dengan section lain */}
          <p className={`anim-fade-up delay-200 ${inViewClass} text-lg text-muted-foreground leading-relaxed`}>
            Dana Anda dijaga sampai transaksi selesai.<br />
            Pembeli pasti bayar. Penjual pasti kirim.<br />
            Kepercayaan bukan soal harapan — tapi jaminan.
          </p>
          <div className={`anim-fade-up delay-300 ${inViewClass} flex flex-col gap-3`}>
            <a href="https://app.kahade.id/register"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full">
              Mulai Sekarang <ArrowRight className="w-4 h-4" />
            </a>
            <button type="button" onClick={() => scrollToSection("cara-kerja")}
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors w-full">
              <Play className="w-4 h-4" /> Cara Kerja
            </button>
          </div>
          <div className={`anim-fade-up delay-400 ${inViewClass} flex items-center justify-center gap-3`}>
            <div className="flex items-center">
              {testimonialAvatars.map((a, i) => (
                <div key={a.alt}
                  className={`relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2"}`}>
                  <Image src={a.src} alt={a.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
            </p>
          </div>
        </div>

        {/* Escrow flow illustration — scaled for mobile */}
        <div className={`anim-fade-up delay-500 ${inViewClass} flex justify-center items-center px-4`} aria-hidden="true">
          <div style={{ transform: "scale(0.75)", transformOrigin: "top center" }}>
            <EscrowFlowIllustration />
          </div>
        </div>
      </div>

    </section>
  );
}
