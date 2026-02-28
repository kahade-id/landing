"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

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

const CheckIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(255,255,255,0.12)" />
    <path d="M4 6.5L5.8 8.3L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L3 5V9C3 12.3 5.7 15 9 16C12.3 15 15 12.3 15 9V5L9 2Z" />
    <path d="M6.5 9L8 10.5L11.5 7" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7.5" width="10" height="7" rx="1.5" />
    <path d="M5.5 7.5V5.5a2.5 2.5 0 015 0v2" />
    <circle cx="8" cy="11" r="1" fill="rgba(255,255,255,0.6)" stroke="none" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(255,255,255,0.85)">
    <path d="M6 1L7.5 4.5H11L8.2 6.8L9.3 10.5L6 8.3L2.7 10.5L3.8 6.8L1 4.5H4.5L6 1Z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 2L4 8.5H7.5L6.5 13L11 6.5H7.5L8.5 2Z" />
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

// ─── Floating Transaction Card ─────────────────────────────────────────────────
const FloatingTxCard = ({ delay = "0s", style = {} }) => (
  <div className="cta-glass cta-float1 px-4 py-3 flex items-center gap-3" style={{ animationDelay: delay, minWidth: 200, ...style }}>
    <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <ShieldIcon />
    </div>
    <div>
      <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans)", margin: 0, lineHeight: 1.2 }}>Dana Dilepas</p>
      <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)", margin: "2px 0 0 0" }}>Transaksi #ES-8821 selesai</p>
    </div>
    <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "4px 8px" }}>
      <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sans)", margin: 0, whiteSpace: "nowrap" }}>+Rp 4.2jt</p>
    </div>
  </div>
);

// ─── Trust Ticker Items ───────────────────────────────────────────────────────
const tickerItems = [
  "Escrow workflow", "Monitoring aktif", "KYC support",
  "Dokumentasi integrasi", "Pusat bantuan", "Status sistem",
  "Buyer & seller ready", "Alur dana transparan", "Kontak tim",
  "FAQ produk", "Panduan operasional", "Transaksi lebih tenang",
];

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

// ─── Counter Hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const prog = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      setVal(Math.round(ease * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
export default function CTASection() {
  const [sectionRef, inView] = useInView(0.15);
  const txCount   = useCounter(150284, 1600, !!inView);
  const successRate = useCounter(987, 1400, !!inView);
  const trxValue  = useCounter(24, 1800, !!inView);

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

          {/* ── Top Badge ─────────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d100")} style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div className="cta-glass" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 99 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#fff", opacity: 0.4, animation: "ctaPing 1.8s ease infinite" }} />
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", display: "block", position: "relative" }} />
              </span>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Siap dipakai untuk buyer, seller, dan bisnis
              </span>
            </div>
          </div>

          {/* ── Main Headline ──────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d200")} style={{ textAlign: "center", marginBottom: 20 }}>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(34px, 6vw, 72px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              margin: 0 }}>
              <span style={{ display: "block" }}>Transaksi Aman.</span>
              <span style={{ display: "block", color: "rgba(255,255,255,0.38)" }}>Dimulai Hari Ini.</span>
            </h2>
          </div>

          {/* ── Subtext ───────────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d300")} style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{
              fontFamily: "var(--font-sans)",
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
            <Link href={homeAnchors.cta} className="cta-btn-primary">
              Mulai Transaksi Gratis
              <ArrowRight />
            </Link>
            <Link href={homeAnchors.howItWorks} className="cta-btn-ghost">
              <PlayCircle />
              Lihat Cara Kerja
            </Link>
          </div>

          {/* ── Trust checklist ───────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d500")} style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px", justifyContent: "center", marginBottom: 72 }}>
            {["Gratis Daftar", "Tanpa Kontrak", "Dana Dijamin Aman", "Dukungan 24/7"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <CheckIcon />
                <span style={{ fontSize: 12.5, fontWeight: 500, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* ── Live Stats Row ─────────────────────────────────────────────── */}
          <div className={cls("cta-fade-up cta-d600")} style={{ marginBottom: 72 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 1,
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)" }}>
              {[
                { label: "Aktivitas Demo", val: `${txCount.toLocaleString("id-ID")}`, suffix: "", icon: <ZapIcon /> },
                { label: "Workflow", val: `${(successRate / 10).toFixed(1)}`, suffix: "/10", icon: <ShieldIcon /> },
                { label: "Checklist", val: `${trxValue}`, suffix: "+", icon: <LockIcon /> },
              ].map((stat, i) => (
                <div key={i} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: 8 }}>
                    {stat.val}<span style={{ fontSize: "0.55em", color: "rgba(255,255,255,0.4)" }}>{stat.suffix}</span>
                  </div>
                  <div style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Floating Cards Visual ──────────────────────────────────────── */}
          <div className={cls("cta-fade-in cta-d700")} style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 72, flexWrap: "wrap" }}>
            <FloatingTxCard delay="0s" />
            <FloatingTxCard
              delay="1.5s"
              style={{ opacity: 0.7 }}
            />
            <div className="cta-glass cta-float2 px-4 py-3 flex items-center gap-3" style={{ animationDelay: "0.8s", minWidth: 200, opacity: 0.6 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <StarIcon />
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)", margin: 0 }}>Dipakai pada alur transaksi demo</p>
              </div>
            </div>
          </div>

          {/* ── Trust Ticker ──────────────────────────────────────────────── */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, paddingBottom: 28 }}>
            <div className="cta-marquee-wrap">
              <div className="cta-marquee-track">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24, paddingRight: 40, whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      {item}
                    </span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom CTA Bar ────────────────────────────────────────────────── */}
        <div style={{
          marginTop: 0,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.02)",
          padding: "24px 0" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              {/* Left — brand mark */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 1.5L2.5 4.5V8.5C2.5 11.5 5 14 8 14.5C11 14 13.5 11.5 13.5 8.5V4.5L8 1.5Z" />
                    <path d="M5.5 8.5L7 10L10.5 6.5" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.85)", margin: 0, letterSpacing: "-0.02em" }}>Kahade</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(255,255,255,0.28)", margin: 0, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>P2P Platform</p>
                </div>
              </div>

              {/* Center — copyright */}
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.2)", margin: 0, textAlign: "center", flexGrow: 1 }}>
                © {new Date().getFullYear()} Kahade · Contact-ready landing · Jakarta, Indonesia
              </p>

              {/* Right — CTA micro */}
              <Link href={supportLinks.contact} className="cta-btn-primary" style={{ fontSize: 12.5, padding: "10px 20px", borderRadius: 10 }}>
                Hubungi Tim <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

