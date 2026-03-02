"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="7" cy="7" r="6" />
    <path d="M7 6.5v3.5M7 4.5v.5" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FEE_PCT = 0.025;
const FEE_MIN = 2500;
const FEE_MAX = 250000;
const SLIDER_MAX = 100_000_000;

type FeePayer = "pembeli" | "penjual" | "split";

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
  { label: "Rp 1jt",   val: 1_000_000 },
  { label: "Rp 5jt",   val: 5_000_000 },
  { label: "Rp 10jt",  val: 10_000_000 },
  { label: "Rp 50jt",  val: 50_000_000 },
];

const FEE_PAYER_OPTIONS: { key: FeePayer; label: string; sub: string }[] = [
  { key: "pembeli", label: "Pembeli",  sub: "Buyer pays"    },
  { key: "penjual", label: "Penjual",  sub: "Seller pays"   },
  { key: "split",   label: "Split",   sub: "Dibagi rata"    },
];

function getAmounts(amount: number, fee: number, payer: FeePayer) {
  switch (payer) {
    case "pembeli":
      return { pembeli: amount + fee, penjual: amount, feePembeli: fee, feePenjual: 0 };
    case "penjual":
      return { pembeli: amount, penjual: amount - fee, feePembeli: 0, feePenjual: fee };
    case "split": {
      const half = Math.ceil(fee / 2);
      return { pembeli: amount + half, penjual: amount - (fee - half), feePembeli: half, feePenjual: fee - half };
    }
  }
}

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
  const [amount, setAmount]             = useState(1_000_000);
  const [payer, setPayer]               = useState<FeePayer>("pembeli");
  const [animKey, setAnimKey]           = useState(0);
  const [activePreset, setActivePreset] = useState<number | null>(1_000_000);
  const [inputFocused, setInputFocused] = useState(false);
  const [inputRaw, setInputRaw]         = useState("");

  const fee     = calcFee(amount);
  const amounts = getAmounts(amount, fee, payer);
  const pct     = amount > 0 ? (fee / amount) * 100 : 0;
  const isMin   = amount > 0 && fee <= FEE_MIN + 1;
  const isMax   = fee >= FEE_MAX - 1;

  const applyAmount = (val: number) => { setAmount(val); setAnimKey(k => k + 1); };
  const applyPreset = (p: typeof PRESETS[0]) => { applyAmount(p.val); setActivePreset(p.val); setInputRaw(""); };
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

  const displayInput = inputFocused
    ? (inputRaw || (amount > 0 ? String(amount) : ""))
    : (amount > 0 ? amount.toLocaleString("id-ID") : "");

  const payerIdx = FEE_PAYER_OPTIONS.findIndex(o => o.key === payer);
  const payerOpt = FEE_PAYER_OPTIONS[payerIdx];

  return (
    <div className="dark-section h-full">
      <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-0">

        {/* ── Header ── */}
        <div className="flex items-center gap-3 mb-5">
          <div className="icon-box icon-box-sm icon-box-dark">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="12" height="10" rx="1.5" />
              <path d="M2 6h12M5.5 10h1.5M8.5 10H10" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Kalkulator Biaya</p>
            <p className="small text-white/35">Fee 2,5% · min Rp 2.500 · maks Rp 250.000</p>
          </div>
        </div>

        {/* ── Fee Payer Toggle ── */}
        <div className="mb-5">
          <p className="small font-bold uppercase tracking-wider text-white/30 mb-3">Biaya ditanggung oleh</p>
          <div className="relative flex bg-white/[0.04] border border-white/10 rounded-btn p-1 gap-0">
            {/* Sliding pill */}
            <div
              className="absolute top-1 bottom-1 rounded-[10px] bg-white/[0.13] border border-white/20 transition-all duration-300 ease-[cubic-bezier(.22,.68,0,1)]"
              style={{
                width: `calc(${100 / 3}% - 2.67px)`,
                left: `calc(${payerIdx} * ${100 / 3}% + 4px)`,
              }}
            />
            {FEE_PAYER_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => { setPayer(opt.key); setAnimKey(k => k + 1); }}
                className="relative z-10 flex-1 flex flex-col items-center gap-0.5 py-2.5 px-1 rounded-[10px] transition-colors duration-150 cursor-pointer"
              >
                <span className={`text-sm font-bold transition-colors duration-150 leading-tight ${payer === opt.key ? "text-white" : "text-white/35"}`}>
                  {opt.label}
                </span>
                <span className={`text-[10px] font-medium transition-colors duration-150 ${payer === opt.key ? "text-white/45" : "text-white/18"}`}>
                  {opt.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/8 mb-5" />

        {/* ── Preset chips ── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {PRESETS.map((p) => (
            <button
              key={p.val}
              onClick={() => applyPreset(p)}
              className={`px-3 py-1.5 rounded-btn small font-semibold border transition-all cursor-pointer ${
                activePreset === p.val
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-white/5 border-white/15 text-white/50 hover:bg-white/10"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* ── Input field ── */}
        <div className="relative mb-4">
          <label htmlFor="calc-input" className="sr-only">Nominal transaksi</label>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 small sm:text-sm font-semibold text-white/35 pointer-events-none">Rp</span>
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

        {/* ── Slider ── */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max={SLIDER_MAX}
            step="50000"
            value={amount}
            onChange={(e) => handleSlider(e.target.value)}
            className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white/70"
          />
          <div className="flex justify-between mt-2">
            {["Rp 0", "Rp 25jt", "Rp 50jt", "Rp 75jt", "Rp 100jt"].map((l) => (
              <span key={l} className="small text-white/20">{l}</span>
            ))}
          </div>
        </div>

        {/* ── Results ── */}
        <div key={animKey} className="flex flex-col gap-3 animate-[fadeUp_0.3s_ease]">

          {/* Fee card */}
          <div className="bg-white/8 border border-white/10 rounded-card p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="small font-bold uppercase tracking-wider text-white/35">Platform Fee</span>
              <div className="flex items-center gap-2">
                {isMin && <span className="small font-semibold text-white/45 bg-white/8 px-2 py-0.5 rounded-full">Min</span>}
                {isMax && <span className="small font-semibold text-white/45 bg-white/8 px-2 py-0.5 rounded-full">Maks</span>}
                {!isMin && !isMax && amount > 0 && <span className="small font-semibold text-white/40">{pct.toFixed(2)}%</span>}
              </div>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">Rp {fmt(fee)}</p>
            <progress className="progress-bar-inv" value={Math.min(100, pct / 2.5 * 100)} max={100} />
            <div className="flex justify-between mt-1.5">
              <span className="small text-white/20">0%</span>
              <span className="small text-white/20">2,5% maks</span>
            </div>
          </div>

          {/* Money flow breakdown */}
          <div className="bg-white/5 border border-white/8 rounded-card overflow-hidden">

            {/* Pembeli */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/7">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.4" strokeLinecap="round">
                    <circle cx="6.5" cy="4.5" r="2.2" />
                    <path d="M1.5 11.5c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white/70">Pembeli transfer</p>
                  {amounts.feePembeli > 0 && (
                    <p className="text-[10px] text-white/28 mt-0.5">termasuk fee Rp {fmt(amounts.feePembeli)}</p>
                  )}
                </div>
              </div>
              <p className="font-bold text-white tracking-tight tabular-nums">{fmtShort(amounts.pembeli)}</p>
            </div>

            {/* Fee deduction */}
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/7 bg-white/[0.02]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 2v10M3 10l4-4 4 4" style={{ transform: "rotate(180deg)", transformOrigin: "7px 7px" }} />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/22">Kahade Fee · Ditanggung {payerOpt.label}</p>
              </div>
              {payer === "split" && (
                <div className="flex items-center gap-1 mr-2">
                  <span className="text-[10px] bg-white/8 border border-white/10 text-white/35 rounded-full px-2 py-0.5 font-bold">50/50</span>
                </div>
              )}
              <p className="small font-bold text-white/40">− Rp {fmt(fee)}</p>
            </div>

            {/* Penjual */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="9" height="7" rx="1" /><path d="M4.5 5V3.5a2 2 0 014 0V5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white/70">Penjual terima</p>
                  {amounts.feePenjual > 0 && (
                    <p className="text-[10px] text-white/28 mt-0.5">setelah potongan Rp {fmt(amounts.feePenjual)}</p>
                  )}
                </div>
              </div>
              <p className={`font-bold tracking-tight tabular-nums ${amount > 0 ? "text-white" : "text-white/30"}`}>
                {fmtShort(amounts.penjual)}
              </p>
            </div>
          </div>

          {/* Split detail pills — only in split mode */}
          {payer === "split" && amount > 0 && (
            <div className="flex gap-2">
              <div className="flex-1 bg-white/5 border border-white/8 rounded-card px-3 py-2.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/25 mb-1">Pembeli tanggung</p>
                <p className="small font-bold text-white/65">Rp {fmt(amounts.feePembeli)}</p>
              </div>
              <div className="flex items-center justify-center text-white/15 text-xs font-bold">+</div>
              <div className="flex-1 bg-white/5 border border-white/8 rounded-card px-3 py-2.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/25 mb-1">Penjual tanggung</p>
                <p className="small font-bold text-white/65">Rp {fmt(amounts.feePenjual)}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Formula chips ── */}
        <div className="border-t border-white/7 pt-4 mt-4 flex flex-wrap items-center gap-2 justify-between">
          <div className="flex gap-2 flex-wrap">
            {[{ label: "Rate", val: "2,5%" }, { label: "Min", val: "Rp 2.500" }, { label: "Maks", val: "Rp 250rb" }].map((t) => (
              <div key={t.label} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-btn border border-white/10">
                <span className="small text-white/35">{t.label}</span>
                <span className="small font-semibold text-white/70">{t.val}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <InfoIcon />
            <span className="small text-white/25">Fee ditanggung {payerOpt.label.toLowerCase()}</span>
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
    <section id="harga" ref={sectionRef} className="section bg-surface">
      <div className="container-base">
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

        {/* Pricing hero */}
        <div className={`mb-5 ${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
          <div className="dark-section p-8 lg:p-12">
            <div className="relative z-10 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
              <div>
                <p className="small font-bold uppercase tracking-wider text-white/35 mb-3">Platform Fee</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">2,5</span>
                  <span className="text-2xl lg:text-3xl font-bold text-white/45 mb-2">%</span>
                </div>
                <p className="body text-white/45">
                  per transaksi sukses
                  <br />
                  <span className="text-white/25">min. Rp 2.500 · maks. Rp 250.000</span>
                </p>
                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  {["Pembeli", "Penjual", "Split 50/50"].map((l) => (
                    <span key={l} className="text-[11px] font-semibold text-white/45 bg-white/7 border border-white/10 px-2.5 py-1 rounded-full">{l}</span>
                  ))}
                  <span className="text-[11px] text-white/28">pilih siapa menanggung fee</span>
                </div>
              </div>

              <div className="hidden lg:block w-px h-32 bg-white/8" />

              <div className="space-y-4">
                {[
                  { label: "Biaya Bulanan",  val: "Rp 0", sub: "Selamanya gratis" },
                  { label: "Biaya Setup",    val: "Rp 0", sub: "Langsung mulai" },
                  { label: "Biaya Dispute",  val: "Rp 0", sub: "Mediasi gratis" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-btn bg-white/7 flex items-center justify-center flex-shrink-0">
                      <span className="text-white/50 text-sm">✦</span>
                    </div>
                    <div className="flex-1">
                      <span className="small text-white/35 block">{p.label}</span>
                      <span className="font-extrabold tracking-tight">{p.val}</span>
                    </div>
                    <div className="bg-white/7 rounded-btn px-2.5 py-1">
                      <span className="small font-bold text-white/45 whitespace-nowrap">{p.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className={`${inView ? "anim-fade-up delay-3 in-view" : ""}`}>
          <div className="relative overflow-hidden rounded-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(circle_at_88%_10%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.08),transparent_42%)]" />
            <FeeCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
