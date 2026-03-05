"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, Clock, Truck } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   PHONE MOCKUP — app UI showing escrow in progress
─────────────────────────────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div style={{
      width: 220,
      background: "#111",
      borderRadius: 36,
      padding: "10px",
      boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.08)",
      position: "relative",
    }}>
      {/* Screen */}
      <div style={{
        background: "#F8F8F8",
        borderRadius: 28,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Status bar */}
        <div style={{
          background: "#F8F8F8",
          padding: "12px 16px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1A1A1A" }}>9:41</span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 1 }}>
              {[3,4,5,6].map(h => <div key={h} style={{ width: 3, height: h, background: "#1A1A1A", borderRadius: 1 }} />)}
            </div>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#1A1A1A" }}>5G</span>
            <div style={{ width: 22, height: 11, border: "1.5px solid #1A1A1A", borderRadius: 3, position: "relative" }}>
              <div style={{ position: "absolute", left: 1, top: 1, bottom: 1, width: "85%", background: "#1A1A1A", borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Notch */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 80, height: 26,
          background: "#111", borderRadius: "0 0 16px 16px",
          zIndex: 10,
        }} />

        {/* App content */}
        <div style={{ padding: "8px 14px 16px" }}>
          {/* App header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <p style={{ fontSize: 10, color: "#A0A0A0", marginBottom: 1 }}>Transaksi Aktif</p>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", letterSpacing: -0.5 }}>Kahade</p>
            </div>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "#1A1A1A",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Image src="/favicon.svg" alt="" width={14} height={14} />
            </div>
          </div>

          {/* Escrow card */}
          <div style={{
            background: "#1A1A1A",
            borderRadius: 16,
            padding: "12px 14px",
            marginBottom: 10,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Subtle grain overlay */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.04,
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "8px 8px",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Dana Dijaga Escrow</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: "white", letterSpacing: -0.5, marginBottom: 2 }}>Rp 5.500.000</p>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#52C41A" }} />
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>Terlindungi · Transaksi #KH-8821</p>
              </div>
            </div>
          </div>

          {/* Progress steps */}
          <div style={{
            background: "white", borderRadius: 12, padding: "10px 12px",
            border: "1px solid #ECECEC", marginBottom: 8,
          }}>
            <p style={{ fontSize: 9, fontWeight: 700, color: "#A0A0A0", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 8 }}>Status</p>
            {[
              { icon: "✓", label: "Dana masuk escrow", done: true },
              { icon: "✓", label: "Penjual kirim barang", done: true },
              { icon: "◐", label: "Konfirmasi pembeli", done: false, active: true },
              { icon: "○", label: "Dana cair ke penjual", done: false },
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 3 ? 6 : 0 }}>
                <div style={{
                  width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                  background: step.done ? "#1A1A1A" : step.active ? "#F5F5F5" : "#F0F0F0",
                  border: step.active ? "1.5px solid #1A1A1A" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 8, color: step.done ? "white" : "#A0A0A0",
                }}>
                  {step.done ? "✓" : step.active ? "•" : ""}
                </div>
                <span style={{
                  fontSize: 10,
                  color: step.done ? "#1A1A1A" : step.active ? "#1A1A1A" : "#C0C0C0",
                  fontWeight: step.active ? 700 : step.done ? 500 : 400,
                }}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Konfirmasi button */}
          <div style={{
            background: "#1A1A1A", borderRadius: 10, padding: "9px",
            textAlign: "center",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>Konfirmasi Terima</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-around", alignItems: "center",
          padding: "8px 20px 14px",
          borderTop: "1px solid #ECECEC",
          background: "white",
        }}>
          {["⊞", "↕", "◎"].map((icon, i) => (
            <div key={i} style={{
              width: 28, height: 28, borderRadius: "50%",
              background: i === 0 ? "#1A1A1A" : "#F4F4F4",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, color: i === 0 ? "white" : "#A0A0A0",
            }}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ESCROW FLOW ILLUSTRATION
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
        <div style={{ display: "flex", alignItems: "center", gap: 0, position: "relative" }}>
          {/* Pembeli */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 100 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0F0F0", border: "1.5px solid #D4D4D4", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.06)" }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" fill="#B0B0B0"/><path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#B0B0B0"/></svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Pembeli</p>
              <p style={{ fontSize: 10, color: "#A0A0A0", marginTop: 1 }}>Kirim dana</p>
            </div>
          </div>

          {/* Connector Left */}
          <div style={{ width: 80, display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
            <svg width="80" height="18" viewBox="0 0 80 18" overflow="visible">
              <defs><marker id="arR" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#C0C0C0"/></marker></defs>
              <line className="flow-line-fwd" x1="4" y1="9" x2="70" y2="9" stroke="#C0C0C0" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arR)" />
            </svg>
            <span style={{ fontSize: 9, color: "#B8B8B8", fontWeight: 600, letterSpacing: 0.3 }}>Dana masuk</span>
          </div>

          {/* Escrow Lock */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 100 }}>
            <div style={{ position: "relative", width: 70, height: 70, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="ring-3" style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px dashed rgba(0,0,0,0.06)" }}/>
              <div className="ring-2" style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" }}/>
              <div className="ring-1" style={{ position: "absolute", inset: 5, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)" }}/>
              <div className="lock-core" style={{ width: 56, height: 56, borderRadius: "50%", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
                <svg width="20" height="23" viewBox="0 0 22 26" fill="none">
                  <rect x="1" y="12" width="20" height="13" rx="3" fill="white" opacity="0.95"/>
                  <path d="M5 12V8.5C5 5.46 7.46 3 10.5 3h1C14.54 3 17 5.46 17 8.5V12" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.95"/>
                  <circle cx="11" cy="18.5" r="2" fill="#1A1A1A"/>
                </svg>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Escrow</p>
              <p style={{ fontSize: 10, color: "#A0A0A0", marginTop: 1 }}>Dana aman</p>
            </div>
          </div>

          {/* Connector Right */}
          <div style={{ width: 80, display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
            <svg width="80" height="18" viewBox="0 0 80 18" overflow="visible">
              <defs><marker id="arR2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#C0C0C0"/></marker></defs>
              <line className="flow-line-rev" x1="4" y1="9" x2="70" y2="9" stroke="#C0C0C0" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arR2)" />
            </svg>
            <span style={{ fontSize: 9, color: "#B8B8B8", fontWeight: 600, letterSpacing: 0.3 }}>Dana cair</span>
          </div>

          {/* Penjual */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 100 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0F0F0", border: "1.5px solid #D4D4D4", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.06)" }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="4" y="13" width="20" height="12" rx="1.5" fill="#B0B0B0"/><path d="M2 9h24l-2 4H4L2 9z" fill="#C4C4C4"/><rect x="11" y="17" width="6" height="8" rx="1" fill="#E8E8E8"/></svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Penjual</p>
              <p style={{ fontSize: 10, color: "#A0A0A0", marginTop: 1 }}>Kirim barang</p>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: 18, gap: 6 }}>
          {[
            { cls: "badge-buyer",  emoji: "✓", label: "Dana dikunci",  color: "#52C41A" },
            { cls: "badge-escrow", emoji: "🔒", label: "Terlindungi",  color: "#1A1A1A" },
            { cls: "badge-seller", emoji: "✓", label: "Dana cair",    color: "#52C41A" },
          ].map(({ cls, emoji, label, color }) => (
            <div key={label} className={cls} style={{ flex: 1 }}>
              <div style={{ background: "#F6F6F6", border: "1px solid #E4E4E4", borderRadius: 8, padding: "6px 8px", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 9, color, fontWeight: 700 }}>{emoji}</span>
                <span style={{ fontSize: 10, color: "#606060", fontWeight: 600 }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Kahade tag */}
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ height: 1, background: "#E8E8E8", width: 50 }} />
          <span style={{ fontSize: 10, color: "#B0B0B0", fontWeight: 600, letterSpacing: 0.5 }}>DIJAMIN KAHADE</span>
          <div style={{ height: 1, background: "#E8E8E8", width: 50 }} />
        </div>
      </div>
    </>
  );
}

const testimonialAvatars = [
  { src: "/testimonials/user1.jpg", alt: "Pengguna 1" },
  { src: "/testimonials/user2.jpg", alt: "Pengguna 2" },
  { src: "/testimonials/user3.jpg", alt: "Pengguna 3" },
  { src: "/testimonials/user4.jpg", alt: "Pengguna 4" },
  { src: "/testimonials/user5.jpg", alt: "Pengguna 5" },
];

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
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-5 max-w-lg">
            <div className={`anim-fade-up delay-100 ${inViewClass}`}>
              <h1>
                <span className="hero-title block">Transaksi Aman,</span>
                <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
              </h1>
            </div>
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
                  <div key={a.alt} className={`relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2.5"}`}>
                    <Image src={a.src} alt={a.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
              </p>
            </div>
          </div>

          {/* Right: Phone mockup + flow illustration stacked */}
          <div className={`anim-fade-up delay-500 ${inViewClass} flex flex-col items-center gap-10`} aria-hidden="true">
            {/* Phone mockup — centered */}
            <div style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}>
              <PhoneMockup />
            </div>
            {/* Flow diagram below */}
            <EscrowFlowIllustration />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden relative z-10 pt-10 pb-10">
        <div className="px-4 sm:px-6 flex flex-col gap-4 text-center mb-8">
          <div className={`anim-fade-up delay-100 ${inViewClass}`}>
            <h1>
              <span className="hero-title block">Transaksi Aman,</span>
              <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
            </h1>
          </div>
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
                <div key={a.alt} className={`relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2"}`}>
                  <Image src={a.src} alt={a.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
            </p>
          </div>
        </div>

        {/* Mobile: phone + flow stacked */}
        <div className={`anim-fade-up delay-500 ${inViewClass} flex flex-col items-center gap-8 px-4`} aria-hidden="true">
          <div style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.12))" }}>
            <PhoneMockup />
          </div>
          <div style={{ transform: "scale(0.82)", transformOrigin: "top center", width: "100%", display: "flex", justifyContent: "center" }}>
            <EscrowFlowIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
