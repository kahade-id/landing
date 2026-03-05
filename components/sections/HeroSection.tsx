"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   LAPTOP ILLUSTRATION — exact port of the provided HTML
───────────────────────────────────────────────────────────────── */
function LaptopIllustration() {
  return (
    <>
      <style>{`
        @keyframes dashF {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -28; }
        }
        @keyframes ringP {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        @keyframes spinR {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes coreBreath {
          0%,100% { box-shadow: inset 0 1px 4px rgba(255,255,255,0.95), inset 0 -1px 2px rgba(0,0,0,0.06), 0 0 20px rgba(0,0,0,0.07); }
          50%      { box-shadow: inset 0 1px 4px rgba(255,255,255,0.95), inset 0 -1px 2px rgba(0,0,0,0.06), 0 0 32px rgba(0,0,0,0.12); }
        }
        .li-ring-spin {
          animation: ringP 5s ease-in-out infinite 1s, spinR 30s linear infinite;
          transform-origin: center;
        }
        .li-dash-fwd { animation: dashF 3s linear infinite; }
        .li-dash-rev { animation: dashF 3s linear infinite reverse; }
      `}</style>

      {/* ── WRAPPER ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* ── LID ── */}
        <div style={{
          position: "relative",
          width: 380, height: 240,
          background: "#C8C8C8",
          borderRadius: "12px 12px 4px 4px",
          border: "1.5px solid #B0B0B0",
          boxShadow: "0 0 0 1px #E0E0E0, inset 0 0 16px rgba(0,0,0,0.04), 0 -2px 8px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}>
          {/* Camera */}
          <div style={{
            position: "absolute", top: 8, left: "50%",
            transform: "translateX(-50%)",
            width: 5, height: 5,
            borderRadius: "50%", background: "#A8A8A8", zIndex: 10,
          }} />

          {/* Screen */}
          <div style={{
            position: "absolute", inset: "6px 6px 4px 6px",
            background: "#F2F2F2",
            borderRadius: "8px 8px 2px 2px",
            overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {/* Scene */}
            <div style={{
              position: "relative",
              width: 320, height: 190,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>

              {/* ── SVG lines ── */}
              <svg
                viewBox="0 0 320 190"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
              >
                {/* Left node → vault */}
                <line
                  className="li-dash-fwd"
                  stroke="#C0C0C0" strokeWidth="1" strokeDasharray="3 4"
                  x1="54" y1="95" x2="124" y2="95"
                />
                {/* Vault → right node */}
                <line
                  className="li-dash-rev"
                  stroke="#C0C0C0" strokeWidth="1" strokeDasharray="3 4"
                  x1="196" y1="95" x2="264" y2="95"
                />
                {/* Left vertical tick */}
                <line stroke="#D0D0D0" strokeWidth="1" x1="38" y1="85" x2="38" y2="105" />
                {/* Right vertical tick */}
                <line stroke="#D0D0D0" strokeWidth="1" x1="282" y1="85" x2="282" y2="105" />
              </svg>

              {/* ── LEFT NODE ── */}
              <div style={{
                position: "absolute", top: "50%",
                left: 20, transform: "translateY(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#E4E4E4", border: "1.5px solid #C8C8C8",
                  boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9)",
                }} />
                <div style={{ width: 20, height: 1.5, background: "#C8C8C8", borderRadius: 1 }} />
                <div style={{ width: 13, height: 1.5, background: "#D4D4D4", borderRadius: 1 }} />
              </div>

              {/* ── RIGHT NODE ── */}
              <div style={{
                position: "absolute", top: "50%",
                right: 20, transform: "translateY(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#E4E4E4", border: "1.5px solid #C8C8C8",
                  boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9)",
                }} />
                <div style={{ width: 20, height: 1.5, background: "#C8C8C8", borderRadius: 1 }} />
                <div style={{ width: 13, height: 1.5, background: "#D4D4D4", borderRadius: 1 }} />
              </div>

              {/* ── VAULT (center) ── */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 72, height: 72,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Concentric rings */}
                {/* Ring 1 */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 72, height: 72,
                  marginTop: -36, marginLeft: -36,
                  borderRadius: "50%", border: "1px solid rgba(0,0,0,0.09)",
                  animation: "ringP 5s ease-in-out infinite",
                }} />
                {/* Ring 2 */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 88, height: 88,
                  marginTop: -44, marginLeft: -44,
                  borderRadius: "50%", border: "1px solid rgba(0,0,0,0.06)",
                  animation: "ringP 5s ease-in-out infinite 0.5s",
                }} />
                {/* Ring 3 — spinning dashed */}
                <div className="li-ring-spin" style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 106, height: 106,
                  marginTop: -53, marginLeft: -53,
                  borderRadius: "50%",
                  border: "1px dashed rgba(0,0,0,0.035)",
                  transformOrigin: "center",
                }} />
                {/* Ring 4 */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 128, height: 128,
                  marginTop: -64, marginLeft: -64,
                  borderRadius: "50%", border: "1px solid rgba(0,0,0,0.018)",
                  animation: "ringP 5s ease-in-out infinite 1.5s",
                }} />

                {/* Core */}
                <div style={{
                  position: "relative", zIndex: 2,
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#E4E4E4",
                  border: "1.5px solid #BEBEBE",
                  animation: "coreBreath 5s ease-in-out infinite",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {/* Lock icon */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    {/* Arc */}
                    <div style={{
                      width: 13, height: 8,
                      border: "1.5px solid #A8A8A8",
                      borderBottom: "none",
                      borderRadius: "7px 7px 0 0",
                      marginBottom: -1,
                    }} />
                    {/* Body */}
                    <div style={{
                      width: 14, height: 9,
                      border: "1.5px solid #A8A8A8",
                      borderRadius: 2,
                    }} />
                  </div>
                </div>
              </div>

            </div>{/* /scene */}
          </div>{/* /screen */}
        </div>{/* /lid */}

        {/* ── HINGE ── */}
        <div style={{
          width: 390, height: 4,
          background: "#B4B4B4",
          borderRadius: "0 0 1px 1px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }} />

        {/* ── BASE ── */}
        <div style={{
          position: "relative",
          width: 400, height: 14,
          background: "linear-gradient(to bottom, #C8C8C8, #BBBBBB)",
          borderRadius: "0 0 8px 8px",
          border: "1px solid #AAAAAA",
          borderTop: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}>
          {/* Trackpad notch */}
          <div style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            width: 60, height: 3,
            background: "#AAAAAA",
            borderRadius: "2px 2px 0 0",
          }} />
        </div>

      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   AVATARS
───────────────────────────────────────────────────────────────── */
const testimonialAvatars = [
  { src: "/testimonials/user1.jpg", alt: "Pengguna 1" },
  { src: "/testimonials/user2.jpg", alt: "Pengguna 2" },
  { src: "/testimonials/user3.jpg", alt: "Pengguna 3" },
  { src: "/testimonials/user4.jpg", alt: "Pengguna 4" },
  { src: "/testimonials/user5.jpg", alt: "Pengguna 5" },
];

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────── */
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
      <div className="hidden lg:block relative z-10 container-base pt-12 pb-0">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div className="flex flex-col gap-5 max-w-lg">
            <div className={`anim-fade-up delay-100 ${inViewClass}`}>
              <h1>
                <span className="hero-title block">Transaksi Aman,</span>
                <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
              </h1>
            </div>
            <p className={`anim-fade-up delay-200 ${inViewClass} text-lg text-muted-foreground`}>
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

          {/* Laptop illustration */}
          <div className={`anim-fade-up delay-500 ${inViewClass} flex justify-center items-center`} aria-hidden="true">
            <LaptopIllustration />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden relative z-10 pt-10 pb-0">
        <div className="px-4 sm:px-6 flex flex-col gap-4 text-center mb-8">
          <div className={`anim-fade-up delay-100 ${inViewClass}`}>
            <h1>
              <span className="hero-title block">Transaksi Aman,</span>
              <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
            </h1>
          </div>
          <p className={`anim-fade-up delay-200 ${inViewClass} text-base text-muted-foreground`}>
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

        {/* Laptop scaled down for mobile */}
        <div className={`anim-fade-up delay-500 ${inViewClass} flex justify-center items-center pb-8 overflow-hidden`}
          aria-hidden="true">
          <div style={{ transform: "scale(0.72)", transformOrigin: "top center" }}>
            <LaptopIllustration />
          </div>
        </div>
      </div>

      {/* ── Compliance ── */}
      <div className="relative z-10 container-base mt-8 pb-10">
        <div className={`anim-fade-up delay-600 ${inViewClass}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground px-4 whitespace-nowrap">
              Komitmen pada kepatuhan
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex items-center justify-center gap-6 lg:gap-10 flex-wrap">
            {([
              { src: "/compliance/bi_icon.svg",         alt: "Bank Indonesia" },
              { src: "/compliance/kementrian_icon.svg", alt: "Kementerian Komunikasi" },
              { src: "/compliance/kominfo_icon.svg",    alt: "Kominfo" },
              { src: "/compliance/ppatk_icon.svg",      alt: "PPATK" },
            ] as const).map((reg) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={reg.alt} src={reg.src} alt={reg.alt}
                className="h-8 opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-200"
                width={48} height={32} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
