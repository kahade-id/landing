"use client";

import { useState, useEffect, useRef, useCallback, type RefObject } from "react";
import { homeAnchors } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const CheckCircle = ({ white = false }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
    <circle cx="9" cy="9" r="9" fill={white ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"} />
    <path d="M5.5 9L7.5 11L12.5 6.5" stroke={white ? "rgba(255,255,255,.8)" : "#000"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossCircle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
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

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <path d="M9 2L4.5 8.5H8L7 14L11.5 7.5H8L9 2Z" />
  </svg>
);

const ShieldCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <path d="M8 2L3 4.5V8C3 11.1 5.2 13.8 8 14.5C10.8 13.8 13 11.1 13 8V4.5L8 2Z" />
    <path d="M5.5 8L7 9.5L10.5 6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" className="flex-shrink-0">
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.5l2 1.5" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <path d="M3 9V7.5a5 5 0 0110 0V9" />
    <rect x="2" y="9" width="3" height="4" rx="1.5" />
    <rect x="11" y="9" width="3" height="4" rx="1.5" />
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <polyline points="5,4 1,8 5,12" /><polyline points="11,4 15,8 11,12" />
    <line x1="9.5" y1="2" x2="6.5" y2="14" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <rect x="2" y="3" width="12" height="12" rx="1" />
    <path d="M6 15V9h4v6M2 7h12" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FEE_PCT = 0.025;
const FEE_MIN = 2500;
const FEE_MAX = 250000;
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
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(1)}jt`;
  if (n >= 1_000) return `Rp ${(n / 1_000).toFixed(0)}rb`;
  return `Rp ${fmt(n)}`;
}

const PRESETS = [
  { label: "Rp 100rb", val: 100_000 },
  { label: "Rp 500rb", val: 500_000 },
  { label: "Rp 1jt", val: 1_000_000 },
  { label: "Rp 5jt", val: 5_000_000 },
  { label: "Rp 10jt", val: 10_000_000 },
  { label: "Rp 50jt", val: 50_000_000 },
];

const COMPARE_ROWS = [
  { label: "Biaya Bulanan", trust: "Tidak wajib", competitor: "Bervariasi", trustGood: true },
  { label: "Biaya Setup", trust: "Tidak wajib", competitor: "Bervariasi", trustGood: true },
  { label: "Fee per Transaksi", trust: "Mulai 2,5%", competitor: "Bervariasi", trustGood: true },
  { label: "Fee Minimum", trust: "Mulai Rp 2.500", competitor: "Bervariasi", trustGood: true },
  { label: "Fee Maksimum", trust: "Hingga Rp 250rb", competitor: "Bervariasi", trustGood: true },
  { label: "API Access", trust: "Tersedia", competitor: "Tergantung paket", trustGood: true },
  { label: "Dispute Handling", trust: "Tersedia", competitor: "Bervariasi", trustGood: true },
];

const FEATURES = [
  { icon: <ZapIcon />, label: "Tanpa biaya pendaftaran", sub: "Daftar tanpa biaya awal" },
  { icon: <ShieldCheck />, label: "Tanpa kontrak atau komitmen bulanan", sub: "Bayar hanya saat transaksi berhasil" },
  { icon: <ClockIcon />, label: "Fee ditampilkan di awal transaksi", sub: "Rincian biaya bisa ditinjau sebelum lanjut" },
  { icon: <HeadsetIcon />, label: "Dispute gratis tanpa biaya tambahan", sub: "Tim kami siap mediasi tanpa tarif" },
  { icon: <CodeIcon />, label: "API akses penuh tanpa biaya extra", sub: "Integrasi ke platform Anda kapanpun" },
  { icon: <BuildingIcon />, label: "Volume besar? Harga custom tersedia", sub: "Hubungi sales untuk enterprise deal" },
];

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.12): [RefObject<any>, boolean] {
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

// ─── Fee Calculator ───────────────────────────────────────────────────────────
function FeeCalculator() {
  const [amount, setAmount] = useState(1_000_000);
  const [animKey, setAnimKey] = useState(0);
  const [activePreset, setActivePreset] = useState<number | null>(1_000_000);
  const [inputFocused, setInputFocused] = useState(false);
  const [inputRaw, setInputRaw] = useState("");

  const fee = calcFee(amount);
  const net = Math.max(0, amount - fee);
  const pct = amount > 0 ? (fee / amount) * 100 : 0;
  const isMin = amount > 0 && fee <= FEE_MIN + 1;
  const isMax = fee >= FEE_MAX - 1;
  const sliderPct = Math.min(100, (amount / SLIDER_MAX) * 100);

  const applyAmount = (val: number) => {
    setAmount(val);
    setAnimKey(k => k + 1);
  };

  const applyPreset = (p: typeof PRESETS[0]) => {
    applyAmount(p.val);
    setActivePreset(p.val);
    setInputRaw("");
  };

  const handleInputChange = (v: string) => {
    const num = parseFloat(v.replace(/\D/g, "")) || 0;
    setInputRaw(v.replace(/\D/g, ""));
    setActivePreset(null);
    applyAmount(Math.min(SLIDER_MAX, num));
  };

  const handleSlider = (v: string) => {
    const n = parseFloat(v);
    applyAmount(n);
    setActivePreset(null);
    setInputRaw(String(Math.round(n)));
  };

  const trackStyle = {
    background: `linear-gradient(to right, rgba(255,255,255,.7) 0%, rgba(255,255,255,.7) ${sliderPct}%, rgba(255,255,255,.14) ${sliderPct}%, rgba(255,255,255,.14) 100%)`,
  };

  const displayInput = inputFocused
    ? (inputRaw || (amount > 0 ? String(amount) : ""))
    : (amount > 0 ? amount.toLocaleString("id-ID") : "");

  return (
    <div className="dark-section h-full">
      <div className="relative z-10 p-6 lg:p-7 flex flex-col gap-0">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-box icon-box-sm icon-box-dark">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 6h12M5.5 10h1.5M8.5 10H10" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Kalkulator Fee</p>
            <p className="text-xs text-white/35">Hitung biaya transaksi real-time</p>
          </div>
        </div>

        <div className="h-px bg-white/8 mb-4" />

        {/* Preset chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {PRESETS.map((p) => (
            <button
              key={p.val}
              onClick={() => applyPreset(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                activePreset === p.val
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-white/5 border-white/15 text-white/50 hover:bg-white/10"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input field */}
        <div className="relative mb-4">
          <label htmlFor="calc-input" className="sr-only">Nominal transaksi</label>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-white/35 pointer-events-none">Rp</span>
          <input
            id="calc-input"
            aria-label="Nominal transaksi"
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={displayInput}
            onFocus={() => { setInputFocused(true); setInputRaw(amount > 0 ? String(amount) : ""); }}
            onBlur={() => setInputFocused(false)}
            onChange={(e) => handleInputChange(e.target.value)}
            className="calc-input"
          />
        </div>

        {/* Slider */}
        <div className="mb-5">
          <input
            type="range"
            min="0"
            max={SLIDER_MAX}
            step="50000"
            value={amount}
            onChange={(e) => handleSlider(e.target.value)}
            className="w-full h-1 bg-transparent rounded-full appearance-none cursor-pointer"
            style={trackStyle}
          />
          <div className="flex justify-between mt-2">
            {["Rp 0", "Rp 25jt", "Rp 50jt", "Rp 75jt", "Rp 100jt"].map((l) => (
              <span key={l} className="text-2xs text-white/20">{l}</span>
            ))}
          </div>
        </div>

        {/* Result cards */}
        <div key={animKey} className="flex flex-col gap-3 animate-[fadeUp_0.3s_ease]">
          {/* Main fee result */}
          <div className="bg-white/8 border border-white/10 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xs font-bold uppercase tracking-wider text-white/35">Platform Fee</span>
              <div className="flex items-center gap-2">
                {isMin && <span className="text-xs font-semibold text-white/45 bg-white/8 px-2 py-0.5 rounded-full">Min</span>}
                {isMax && <span className="text-xs font-semibold text-white/45 bg-white/8 px-2 py-0.5 rounded-full">Maks</span>}
                {!isMin && !isMax && amount > 0 && (
                  <span className="text-xs font-semibold text-white/40">{pct.toFixed(2)}%</span>
                )}
              </div>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold tracking-tight">Rp {fmt(fee)}</p>
            {/* Fee ratio bar */}
            <div className="mt-3 h-1 bg-white/8 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/50 rounded-full transition-all duration-400"
                style={{ width: `${Math.min(100, pct / 2.5 * 100)}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-2xs text-white/20">0%</span>
              <span className="text-2xs text-white/20">2,5% maks</span>
            </div>
          </div>

          {/* Two sub-results */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/8 border border-white/10 rounded-xl p-3">
              <p className="text-2xs font-bold uppercase tracking-wider text-white/30 mb-1">Nominal</p>
              <p className="text-lg font-bold text-white/65 tracking-tight">{fmtShort(amount)}</p>
            </div>
            <div className="bg-white/8 border border-white/10 rounded-xl p-3">
              <p className="text-2xs font-bold uppercase tracking-wider text-white/30 mb-1">Penjual Terima</p>
              <p className={`text-lg font-bold tracking-tight ${amount > 0 ? "text-white" : "text-white/30"}`}>
                {fmtShort(net)}
              </p>
            </div>
          </div>
        </div>

        {/* Formula chips */}
        <div className="border-t border-white/7 pt-4 mt-4 flex flex-wrap items-center gap-2 justify-between">
          <div className="flex gap-2 flex-wrap">
            {[
              { label: "Rate", val: "2,5%" },
              { label: "Min", val: "Rp 2.500" },
              { label: "Maks", val: "Rp 250rb" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/10">
                <span className="text-2xs text-white/35">{t.label}</span>
                <span className="text-xs font-semibold text-white/70">{t.val}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <InfoIcon />
            <span className="text-xs text-white/25">Fee dibayar pembeli</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Pricing Section ─────────────────────────────────────────────────────
export default function PricingSection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="harga"
      ref={sectionRef}
      className="section bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <div className={`${inView ? "anim-fade-up delay-1 in-view" : ""}`}>
            <h2 className="section-title">
              Bayar Saat Berhasil.
              <br />
              <span className="section-title-muted">Tidak Lebih.</span>
            </h2>
          </div>
        </div>

        {/* Core Pricing Hero */}
        <div className={`mb-5 ${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
          <div className="dark-section p-8 lg:p-12">
            <div className="relative z-10 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
              {/* Main fee display */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white/35 mb-3">Platform Fee</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">2,5</span>
                  <span className="text-2xl lg:text-3xl font-bold text-white/45 mb-2">%</span>
                </div>
                <p className="text-white/45 leading-relaxed">
                  per transaksi · dibayar pembeli
                  <br />
                  <span className="text-white/25">min. Rp 2.500 · maks. Rp 250.000</span>
                </p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-32 bg-white/8" />

              {/* Three pillars */}
              <div className="space-y-4">
                {[
                  { label: "Biaya Bulanan", val: "Rp 0", sub: "Selamanya gratis" },
                  { label: "Biaya Setup", val: "Rp 0", sub: "Langsung mulai" },
                  { label: "Biaya Dispute", val: "Rp 0", sub: "Mediasi gratis" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/7 flex items-center justify-center flex-shrink-0">
                      <span className="text-white/50 text-sm">✦</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-white/35 text-sm block">{p.label}</span>
                      <span className="font-extrabold tracking-tight">{p.val}</span>
                    </div>
                    <div className="bg-white/7 rounded-lg px-2.5 py-1">
                      <span className="text-xs font-bold text-white/45 whitespace-nowrap">{p.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two column: Features + Calculator */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* Features card */}
          <div className={`pricing-card ${inView ? "anim-fade-up delay-3 in-view" : ""}`}>
            <div className="p-6 lg:p-8">
              <p className="font-bold text-lg mb-1">Apa yang Sudah Termasuk</p>
              <p className="text-ink-45 mb-6">Semuanya gratis — hanya bayar fee saat transaksi berhasil.</p>
            </div>
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="pricing-feature-row">
                  <div className="icon-box icon-box-sm">{f.icon}</div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-sm block">{f.label}</span>
                    <span className="text-ink-45 text-sm">{f.sub}</span>
                  </div>
                  <CheckCircle />
                </div>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <div className={`${inView ? "anim-fade-up delay-4 in-view" : ""}`}>
            <FeeCalculator />
          </div>
        </div>

        {/* Comparison Table */}
        <div className={`${inView ? "anim-fade-up delay-5 in-view" : ""}`}>
          <div className="pricing-card overflow-hidden">
            {/* Table header */}
            <div className="p-6 pb-0">
              <p className="font-bold text-lg mb-1">Perbandingan Biaya</p>
              <p className="text-ink-45 mb-4">Mengapa Kahade lebih hemat dari kompetitor?</p>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-ink-4 border-b border-ink-9">
              <div className="p-4 text-xs font-bold uppercase tracking-wider text-ink-30">Komponen</div>
              <div className="p-4 flex items-center justify-center gap-2">
                <div className="w-5 h-5 rounded-md bg-ink flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L2 3v2.5c0 1.8 1.2 3.3 3 3.8 1.8-.5 3-2 3-3.8V3L5 1Z" fill="white" />
                  </svg>
                </div>
                <span className="font-extrabold text-sm">Kahade</span>
              </div>
              <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-ink-45">Kompetitor</div>
            </div>

            {COMPARE_ROWS.map((row, i) => (
              <div key={i} className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-ink-7 hover:bg-ink-4 transition-colors">
                <div className="p-4 text-sm text-ink-45">{row.label}</div>
                <div className="p-4 flex items-center justify-center gap-2 font-semibold">
                  <CheckCircle /> {row.trust}
                </div>
                <div className="p-4 flex items-center justify-center gap-2 text-ink-45">
                  <CrossCircle /> {row.competitor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
