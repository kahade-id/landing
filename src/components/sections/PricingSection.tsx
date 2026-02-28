"use client";

import { useState, useEffect, useRef, useCallback, type RefObject } from "react";
import { homeAnchors } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const CheckCircle = ({ white = false }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill={white ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"} />
    <path d="M5.5 9L7.5 11L12.5 6.5" stroke={white ? "rgba(255,255,255,.8)" : "#000"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossCircle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="rgba(0,0,0,0.06)" />
    <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="7" cy="7" r="6" />
    <path d="M7 6.5v3.5M7 4.5v.5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7 3l4 4-4 4" />
  </svg>
);

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M9 2L4.5 8.5H8L7 14L11.5 7.5H8L9 2Z" />
  </svg>
);

const ShieldCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M8 2L3 4.5V8C3 11.1 5.2 13.8 8 14.5C10.8 13.8 13 11.1 13 8V4.5L8 2Z" />
    <path d="M5.5 8L7 9.5L10.5 6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.5l2 1.5" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M3 9V7.5a5 5 0 0110 0V9" />
    <rect x="2" y="9" width="3" height="4" rx="1.5" />
    <rect x="11" y="9" width="3" height="4" rx="1.5" />
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="5,4 1,8 5,12" /><polyline points="11,4 15,8 11,12" />
    <line x1="9.5" y1="2" x2="6.5" y2="14" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="3" width="12" height="12" rx="1" />
    <path d="M6 15V9h4v6M2 7h12" />
  </svg>
);

// ─── Abstract BG ─────────────────────────────────────────────────────────────
const PrAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="pr-rg1" cx="15%" cy="40%" r="45%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="pr-rg2" cx="85%" cy="65%" r="40%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.025" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <pattern id="pr-dot" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#000" fillOpacity="0.055" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#pr-dot)" />
    <rect width="100%" height="100%" fill="url(#pr-rg1)" />
    <rect width="100%" height="100%" fill="url(#pr-rg2)" />
    <circle cx="-2%" cy="20%" r="220" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".05" />
    <circle cx="-2%" cy="20%" r="150" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".04" />
    <circle cx="102%" cy="80%" r="240" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".05" />
    <circle cx="102%" cy="80%" r="160" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".04" />
    <circle cx="50%" cy="0%" r="420" fill="none" stroke="#000" strokeWidth=".3" strokeOpacity=".025" />
    <line x1="0" y1="65%" x2="20%" y2="0" stroke="#000" strokeWidth=".35" strokeOpacity=".035" />
    <line x1="100%" y1="35%" x2="80%" y2="100%" stroke="#000" strokeWidth=".35" strokeOpacity=".035" />
    <circle cx="22%" cy="10%" r="1.8" fill="#000" fillOpacity=".07" />
    <circle cx="24%" cy="11%" r="1.2" fill="#000" fillOpacity=".05" />
    <circle cx="78%" cy="90%" r="1.8" fill="#000" fillOpacity=".07" />
    <line x1="90%" y1="10%" x2="90%" y2="17%" stroke="#000" strokeWidth=".7" strokeOpacity=".07" />
    <line x1="87%" y1="13.5%" x2="93%" y2="13.5%" stroke="#000" strokeWidth=".7" strokeOpacity=".07" />
    <line x1="10%" y1="87%" x2="10%" y2="94%" stroke="#000" strokeWidth=".7" strokeOpacity=".07" />
    <line x1="7%"  y1="90.5%" x2="13%" y2="90.5%" stroke="#000" strokeWidth=".7" strokeOpacity=".07" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FEE_PCT    = 0.025;
const FEE_MIN    = 2500;
const FEE_MAX    = 250000;
const SLIDER_MAX = 100_000_000;

function calcFee(amount: number) {
  const raw = amount * FEE_PCT;
  return Math.max(FEE_MIN, Math.min(FEE_MAX, raw));
}

function fmt(n: number) {
  if (!n && n !== 0) return "0";
  return Math.round(n).toLocaleString("id-ID");
}

function fmtShort(n: number) {
  if (n >= 1_000_000_000) return `Rp ${(n / 1_000_000_000).toFixed(1)}M`;
  if (n >= 1_000_000)     return `Rp ${(n / 1_000_000).toFixed(1)}jt`;
  if (n >= 1_000)         return `Rp ${(n / 1_000).toFixed(0)}rb`;
  return `Rp ${fmt(n)}`;
}

const PRESETS = [
  { label: "Rp 100rb",  val: 100_000 },
  { label: "Rp 500rb",  val: 500_000 },
  { label: "Rp 1jt",    val: 1_000_000 },
  { label: "Rp 5jt",    val: 5_000_000 },
  { label: "Rp 10jt",   val: 10_000_000 },
  { label: "Rp 50jt",   val: 50_000_000 },
];

const COMPARE_ROWS = [
  { label: "Biaya Bulanan",    trust: "Tidak wajib",      competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
  { label: "Biaya Setup",      trust: "Tidak wajib",      competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
  { label: "Fee per Transaksi",trust: "Mulai 2,5%",       competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
  { label: "Fee Minimum",      trust: "Mulai Rp 2.500",   competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
  { label: "Fee Maksimum",     trust: "Hingga Rp 250rb",  competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
  { label: "API Access",       trust: "Tersedia",         competitor1: "Tergantung paket", competitor2: "Tergantung paket", trustGood: true },
  { label: "Dispute Handling", trust: "Tersedia",         competitor1: "Bervariasi", competitor2: "Bervariasi", trustGood: true },
];

const FEATURES = [
  { icon: <ZapIcon />,      label: "Tanpa biaya pendaftaran",               sub: "Daftar tanpa biaya awal" },
  { icon: <ShieldCheck />,  label: "Tanpa kontrak atau komitmen bulanan",    sub: "Bayar hanya saat transaksi berhasil" },
  { icon: <ClockIcon />,    label: "Fee ditampilkan di awal transaksi",      sub: "Rincian biaya bisa ditinjau sebelum lanjut" },
  { icon: <HeadsetIcon />,  label: "Dispute gratis tanpa biaya tambahan",    sub: "Tim kami siap mediasi tanpa tarif" },
  { icon: <CodeIcon />,     label: "API akses penuh tanpa biaya extra",      sub: "Integrasi ke platform Anda kapanpun" },
  { icon: <BuildingIcon />, label: "Volume besar? Harga custom tersedia",    sub: "Hubungi sales untuk enterprise deal" },
];

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.12): [RefObject<any>, boolean] {
  const ref  = useRef<any>(null);
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

// ─── Fee Calculator ───────────────────────────────────────────────────────────
function FeeCalculator() {
  const [rawInput, setRawInput] = useState("1000000");
  const [sliderVal, setSliderVal] = useState(1_000_000);
  const [animKey, setAnimKey]   = useState(0);
  const [activePreset, setActivePreset] = useState<number | null>(null);

  const amount = parseFloat(rawInput.replace(/\D/g, "")) || 0;
  const fee    = calcFee(amount);
  const net    = Math.max(0, amount - fee);
  const pct    = amount > 0 ? (fee / amount) * 100 : 0;
  const isMin  = amount > 0 && fee <= FEE_MIN + 1;
  const isMax  = fee >= FEE_MAX - 1;
  const sliderPct = Math.min(100, (sliderVal / SLIDER_MAX) * 100);

  const triggerAnim = () => setAnimKey(k => k + 1);

  const handleInput = (v: string) => {
    const num = v.replace(/\D/g, "");
    setRawInput(num);
    setSliderVal(Math.min(SLIDER_MAX, parseFloat(num) || 0));
    setActivePreset(null);
    triggerAnim();
  };

  const handleSlider = (v: string) => {
    const n = parseFloat(v);
    setSliderVal(n);
    setRawInput(String(Math.round(n)));
    setActivePreset(null);
    triggerAnim();
  };

  const applyPreset = (p: { label: string; val: number }) => {
    setRawInput(String(p.val));
    setSliderVal(p.val);
    setActivePreset(p.val);
    triggerAnim();
  };

  // track fill for slider
  const trackStyle = {
    background: `linear-gradient(to right, rgba(255,255,255,.7) 0%, rgba(255,255,255,.7) ${sliderPct}%, rgba(255,255,255,.15) ${sliderPct}%, rgba(255,255,255,.15) 100%)` };

  return (
    <div className="pr-calc-card">
      {/* Calc BG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ borderRadius: 24 }}>
        <defs>
          <radialGradient id="calc-rg" cx="25%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#fff" stopOpacity=".055" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <pattern id="calc-dot" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx=".8" cy=".8" r=".8" fill="rgba(255,255,255,.06)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#calc-dot)" />
        <rect width="100%" height="100%" fill="url(#calc-rg)" />
        <circle cx="-3%" cy="-5%" r="200" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7" />
        <circle cx="-3%" cy="-5%" r="140" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth=".6" />
        <circle cx="103%" cy="108%" r="200" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth=".7" />
      </svg>

      <div className="relative z-10 p-7 sm:p-9">
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="12" height="10" rx="1.5" />
                <path d="M2 6h12M6 9h1M9 9h1" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: "-.02em" }}>
              Kalkulator Fee
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.38)", margin: 0 }}>
            Masukkan nominal transaksi untuk menghitung fee secara real-time.
          </p>
        </div>

        {/* Preset chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
          {PRESETS.map((p) => (
            <button
              key={p.val}
              className={`pr-preset${activePreset === p.val ? " active" : ""}`}
              onClick={() => applyPreset(p)}
            >{p.label}</button>
          ))}
        </div>

        {/* Input */}
        <div className="pr-input-wrap" style={{ marginBottom: 18 }}>
          <label htmlFor="fee-calculator-input" className="sr-only">Nominal transaksi</label>
          <span className="pr-input-prefix">Rp</span>
          <input
            id="fee-calculator-input"
            aria-label="Nominal transaksi"
            className="pr-input"
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={rawInput ? parseInt(rawInput).toLocaleString("id-ID") : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
          />
        </div>

        {/* Slider */}
        <div style={{ marginBottom: 28, paddingBottom: 4 }}>
          <input
            className="pr-range"
            type="range"
            min="0"
            max={SLIDER_MAX}
            step="50000"
            value={sliderVal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSlider(e.target.value)}
            style={trackStyle}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {[0, 25, 50, 75, 100].map((p) => (
              <span key={p} style={{ fontSize: 10, color: "rgba(255,255,255,.22)", fontFamily: "var(--font-sans)" }}>
                {fmtShort((SLIDER_MAX * p) / 100)}
              </span>
            ))}
          </div>
        </div>

        {/* Results grid */}
        <div
          key={animKey}
          className="pr-result-anim"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}
        >
          {/* Fee */}
          <div className="pr-result-box" style={{ gridColumn: "1 / -1" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.35)", margin: "0 0 5px 0", textTransform: "uppercase", letterSpacing: ".1em" }}>
                  Platform Fee
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#fff", letterSpacing: "-.04em", margin: 0, lineHeight: 1 }}>
                  Rp {fmt(fee)}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                {isMin && (
                  <span style={{ fontSize: 10.5, fontWeight: 600, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,.45)", background: "rgba(255,255,255,.08)", padding: "4px 9px", borderRadius: 99, display: "inline-block" }}>
                    Fee Minimum
                  </span>
                )}
                {isMax && (
                  <span style={{ fontSize: 10.5, fontWeight: 600, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,.45)", background: "rgba(255,255,255,.08)", padding: "4px 9px", borderRadius: 99, display: "inline-block" }}>
                    Fee Maksimum 🎉
                  </span>
                )}
                {!isMin && !isMax && amount > 0 && (
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.4)", fontFamily: "var(--font-sans)" }}>
                    {pct.toFixed(2)}%
                  </span>
                )}
              </div>
            </div>

            {/* Visual bar */}
            {amount > 0 && (
              <div style={{ marginTop: 14 }}>
                <div style={{ height: 3, borderRadius: 99, background: "rgba(255,255,255,.1)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 99, background: "rgba(255,255,255,.6)",
                    width: `${Math.min(100, pct / 2.5 * 100)}%`,
                    transition: "width .35s cubic-bezier(.22,.68,0,1.1)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,.22)", fontFamily: "var(--font-sans)" }}>0%</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,.22)", fontFamily: "var(--font-sans)" }}>2,5% (maks)</span>
                </div>
              </div>
            )}
          </div>

          {/* Nominal */}
          <div className="pr-result-box">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, color: "rgba(255,255,255,.3)", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: ".1em" }}>
              Nominal
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 700, color: "rgba(255,255,255,.7)", letterSpacing: "-.03em", margin: 0 }}>
              Rp {fmt(amount)}
            </p>
          </div>

          {/* Penjual terima */}
          <div className="pr-result-box">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, color: "rgba(255,255,255,.3)", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: ".1em" }}>
              Penjual Terima
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 700, color: amount > 0 ? "#fff" : "rgba(255,255,255,.3)", letterSpacing: "-.03em", margin: 0 }}>
              Rp {fmt(net)}
            </p>
          </div>
        </div>

        {/* Fee formula */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,.07)",
          paddingTop: 18,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Rate", val: "2,5%" },
              { label: "Min", val: "Rp 2.500" },
              { label: "Maks", val: "Rp 250.000" },
            ].map((t) => (
              <div key={t.label} style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "5px 10px", borderRadius: 8,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.08)"
              }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.3)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: ".08em" }}>{t.label}</span>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: "rgba(255,255,255,.65)", fontFamily: "var(--font-sans)" }}>{t.val}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <InfoIcon />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.25)", fontFamily: "var(--font-sans)" }}>Fee dibayar oleh pembeli</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Pricing Section ─────────────────────────────────────────────────────
export default function PricingSection() {
  const [sectionRef, inView] = useInView(0.1);
  const c = (base: string, d = ""): string => `${base} ${d} ${inView ? "pv" : ""}`;

  return (
    <>
      <section
        id="harga"
        ref={sectionRef}
        className="pr-root relative overflow-hidden"
        style={{ background: "#FFFFFF", padding: "100px 0 96px 0" }}
      >
        <PrAbstractBg />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>

            <div className={c("pr-fade-up pr-d0")} style={{ display: "none", justifyContent: "center", marginBottom: 20 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 16px", borderRadius: 99,
                border: "1px solid rgba(0,0,0,0.1)",
                background: "rgba(0,0,0,0.05)"
              }}>
                <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#000", opacity: .35, animation: "prPing 1.8s ease infinite" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#000", display: "block", position: "relative" }} />
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(0,0,0,0.45)", fontFamily: "var(--font-sans)", letterSpacing: ".04em", textTransform: "uppercase" }}>
                  Harga Transparan, Tanpa Kejutan
                </span>
              </div>
            </div>

            <div className={c("pr-fade-up pr-d1")}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px,5vw,60px)",
                fontWeight: 800,
                color: "#000",
                letterSpacing: "-.04em",
                lineHeight: 1.06,
                margin: "0 auto 18px",
                maxWidth: 580 }}>
                Bayar Saat Berhasil.<br />
                <span style={{ color: "rgba(0,0,0,0.45)" }}>Tidak Lebih.</span>
              </h2>
            </div>

            <div className={c("pr-fade-up pr-d2")}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(14px,1.5vw,16.5px)",
                color: "rgba(0,0,0,0.45)",
                lineHeight: 1.78,
                maxWidth: 460,
                margin: "0 auto" }}>
                Tidak ada biaya bulanan, tidak ada biaya setup. Kami hanya mengambil komisi kecil ketika transaksi Anda berhasil diselesaikan.
              </p>
            </div>
          </div>

          {/* ── Core Pricing Hero ────────────────────────────────────────────── */}
          <div className={c("pr-fade-up pr-d2")} style={{ marginBottom: 20 }}>
            <div style={{
              background: "#000",
              borderRadius: 28,
              overflow: "hidden",
              position: "relative",
              padding: "52px 48px" }}>
              {/* BG elements */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <pattern id="hero-dot" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx=".8" cy=".8" r=".8" fill="rgba(255,255,255,.055)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#hero-dot)" />
                <circle cx="-2%" cy="50%" r="260" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
                <circle cx="-2%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth=".8" />
                <circle cx="102%" cy="50%" r="260" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
                <circle cx="102%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth=".8" />
              </svg>

              <div className="relative z-10" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "40px 60px",
                alignItems: "center" }}>
                {/* Main fee display */}
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: ".15em", margin: "0 0 12px 0" }}>
                    Platform Fee
                  </p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,8vw,88px)", fontWeight: 800, color: "#fff", letterSpacing: "-.05em", lineHeight: 1 }}>2,5</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "rgba(255,255,255,.45)", letterSpacing: "-.03em", marginBottom: 8 }}>%</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "rgba(255,255,255,.42)", margin: 0, lineHeight: 1.6 }}>
                    per transaksi · dibayar pembeli<br />
                    <span style={{ color: "rgba(255,255,255,.25)" }}>min. Rp 2.500 · maks. Rp 250.000</span>
                  </p>
                </div>

                {/* Vertical divider */}
                <div style={{ width: 1, height: "100%", background: "rgba(255,255,255,.08)", alignSelf: "stretch", display: "none" }} className="lg:block" />

                {/* Three pillars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "✦", label: "Biaya Bulanan", val: "Rp 0", sub: "Selamanya gratis" },
                    { icon: "✦", label: "Biaya Setup",   val: "Rp 0", sub: "Langsung mulai" },
                    { icon: "✦", label: "Biaya Dispute", val: "Rp 0", sub: "Mediasi gratis" },
                  ].map((p) => (
                    <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{p.icon}</span>
                      </div>
                      <div>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,.35)", display: "block", fontWeight: 500 }}>{p.label}</span>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 800, color: "#fff", letterSpacing: "-.03em", display: "block", lineHeight: 1.2 }}>{p.val}</span>
                      </div>
                      <div style={{ marginLeft: "auto", background: "rgba(255,255,255,.07)", borderRadius: 8, padding: "4px 9px" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.45)", fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>{p.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Two column: Features + Calculator ───────────────────────────── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: 20,
            marginBottom: 20 }}>

            {/* Features card */}
            <div className={`pr-main-card pr-fade-up pr-d3 ${inView ? "pv" : ""}`}>
              <div style={{ padding: "32px 32px 28px 32px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "#000", letterSpacing: "-.02em", margin: "0 0 4px 0" }}>
                  Apa yang Sudah Termasuk
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(0,0,0,0.45)", margin: 0 }}>
                  Semuanya gratis — hanya bayar fee saat transaksi berhasil.
                </p>
              </div>
              <div style={{ padding: "0 24px 24px 24px" }}>
                {FEATURES.map((f, i) => (
                  <div key={i} className="pr-feat-row">
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {f.icon}
                    </div>
                    <div>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, color: "#000", display: "block", lineHeight: 1.3 }}>{f.label}</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: "rgba(0,0,0,0.45)", display: "block", marginTop: 2 }}>{f.sub}</span>
                    </div>
                    <div style={{ marginLeft: "auto" }}><CheckCircle /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator */}
            <div className={`pr-fade-up pr-d4 ${inView ? "pv" : ""}`}>
              <FeeCalculator />
            </div>
          </div>

          {/* ── Comparison Table ─────────────────────────────────────────────── */}
          <div className={c("pr-fade-up pr-d5")}>
            <div className="pr-main-card" style={{ overflow: "hidden" }}>

              {/* Table header */}
              <div style={{ padding: "24px 24px 0 24px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "#000", letterSpacing: "-.02em", margin: "0 0 4px 0" }}>
                  Perbandingan Biaya
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(0,0,0,0.45)", margin: "0 0 20px 0" }}>
                  Mengapa Kahade lebih hemat dari kompetitor?
                </p>
              </div>

              {/* Column headers */}
              <div className="pr-tbl-row" style={{ background: "rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <div className="pr-tbl-cell head">Komponen</div>
                <div className="pr-tbl-cell head" style={{ justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L2 3V5.5C2 7.4 3.4 9.1 5 9.5C6.6 9.1 8 7.4 8 5.5V3L5 1Z" fill="white" />
                      </svg>
                    </div>
                    <span style={{ color: "#000", fontWeight: 800 }}>Kahade</span>
                  </div>
                </div>
                <div className="pr-tbl-cell head" style={{ justifyContent: "center", color: "rgba(0,0,0,0.45)" }}>Kompetitor Lain</div>
              </div>

              {COMPARE_ROWS.map((row, i) => (
                <div key={i} className="pr-tbl-row">
                  <div className="pr-tbl-cell" style={{ fontWeight: 500, color: "rgba(0,0,0,0.45)" }}>{row.label}</div>
                  <div className="pr-tbl-cell" style={{ justifyContent: "center", fontWeight: 700, color: "#000", fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: "-.02em" }}>
                    <CheckCircle /> {row.trust}
                  </div>
                  <div className="pr-tbl-cell" style={{ justifyContent: "center", color: "rgba(0,0,0,0.45)" }}>
                    <CrossCircle /> {row.competitor1}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
