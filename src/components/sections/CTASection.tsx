"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { homeAnchors } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const PlayCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="currentColor" />
  </svg>
);

// ─── Abstract SVG Background ──────────────────────────────────────────────────
const CtaAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="cta-rg1" cx="20%" cy="30%" r="55%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cta-rg2" cx="80%" cy="75%" r="50%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.055" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cta-rg3" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.02" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Subtle dot grid */}
    <pattern id="cta-dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#cta-dots)" />

    {/* Glow blobs */}
    <rect width="100%" height="100%" fill="url(#cta-rg1)" />
    <rect width="100%" height="100%" fill="url(#cta-rg2)" />
    <rect width="100%" height="100%" fill="url(#cta-rg3)" />

    {/* Concentric rings top-left */}
    <circle cx="-4%" cy="-5%" r="260" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="0.8" />
    <circle cx="-4%" cy="-5%" r="180" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="0.7" />
    <circle cx="-4%" cy="-5%" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />

    {/* Concentric rings bottom-right */}
    <circle cx="104%" cy="108%" r="300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <circle cx="104%" cy="108%" r="210" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.7" />
    <circle cx="104%" cy="108%" r="130" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="0.6" />

    {/* Abstract curve */}
    <path className="cta-draw" d="M 0 80% Q 30% 60% 60% 75% T 100% 60%" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
    <path className="cta-draw" d="M 0 90% Q 40% 70% 70% 85% T 100% 70%" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" style={{ animationDelay: "0.5s" }} />

    {/* Diagonal lines */}
    <line x1="100%" y1="0" x2="70%" y2="100%" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
    <line x1="95%" y1="0" x2="65%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

    {/* Dot accents */}
    <circle cx="25%" cy="15%" r="2" fill="rgba(255,255,255,0.1)" />
    <circle cx="27%" cy="16%" r="1.2" fill="rgba(255,255,255,0.08)" />
    <circle cx="75%" cy="85%" r="2" fill="rgba(255,255,255,0.1)" />
    <circle cx="77%" cy="86%" r="1.2" fill="rgba(255,255,255,0.07)" />

    {/* Cross accent */}
    <line x1="88%" y1="18%" x2="88%" y2="26%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    <line x1="84%" y1="22%" x2="92%" y2="22%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    <line x1="12%" y1="78%" x2="12%" y2="86%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    <line x1="8%"  y1="82%" x2="16%" y2="82%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
  </svg>
);

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.18): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
export default function CTASection() {
  const [sectionRef, inView] = useInView(0.15);
  const cls = (base: string, delay = "") =>
    `${base} ${delay} ${inView ? "visible" : ""}`;

  return (
    <>
      <section
        id="mulai"
        ref={sectionRef}
        className="cta-root relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a0a0a 0%, #111 40%, #0d0d0d 70%, #080808 100%)",
          padding: "96px 0 0 0" }}
      >
        <CtaAbstractBg />

        {/* Animated glow orbs */}
        <div className="cta-glow" style={{ position: "absolute", top: "10%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="cta-glow" style={{ position: "absolute", bottom: "15%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Main Headline ──────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d200")} style={{ textAlign: "center", marginBottom: 20 }}>
            <h2 style={{
              fontSize: "clamp(34px, 6vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06 }}>
              <span style={{ display: "block" }}>Transaksi Aman.</span>
              <span style={{ display: "block", color: "rgba(255,255,255,0.38)" }}>Dimulai Hari Ini.</span>
            </h2>
          </div>

          {/* ── Subtext ───────────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d300")} style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{
              fontSize: "clamp(14px, 1.6vw, 17px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto" }}>
              Daftar gratis dalam 2 menit. Tanpa biaya setup, tanpa kontrak jangka panjang — bayar hanya saat transaksi berhasil.
            </p>
          </div>

          {/* ── CTA Buttons ───────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d400")} style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 52 }}>
            <Link href={homeAnchors.cta} className="btn-inv-primary">
              Mulai Transaksi Gratis
              <ArrowRight />
            </Link>
            <Link href={homeAnchors.howItWorks} className="btn-inv-ghost">
              <PlayCircle />
              Lihat Cara Kerja
            </Link>
          </div>

        </div>

      </section>
    </>
  );
}
