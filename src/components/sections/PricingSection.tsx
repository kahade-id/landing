"use client";

import { useState, useEffect, useRef, useCallback, type RefObject } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────
const FEE_PCT   = 0.025;
const FEE_MIN   = 2_500;
const FEE_MAX   = 250_000;
const AMOUNT_MAX = 100_000_000;

type Payer = "pembeli" | "penjual" | "split";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function calcFee(n: number) {
  return Math.max(FEE_MIN, Math.min(FEE_MAX, n * FEE_PCT));
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("id-ID");
}

function fmtCompact(n: number) {
  if (n >= 1_000_000_000) return `Rp\u202F${(n / 1_000_000_000).toFixed(2)}M`;
  if (n >= 1_000_000)     return `Rp\u202F${(n / 1_000_000).toFixed(2)}jt`;
  if (n >= 1_000)         return `Rp\u202F${(n / 1_000).toFixed(0)}rb`;
  return `Rp\u202F${fmt(n)}`;
}

function getFlow(amount: number, fee: number, payer: Payer) {
  const half = Math.ceil(fee / 2);
  switch (payer) {
    case "pembeli": return { fromBuyer: amount + fee, toPlatform: fee, toSeller: amount,       buyerFee: fee,  sellerFee: 0 };
    case "penjual": return { fromBuyer: amount,       toPlatform: fee, toSeller: amount - fee, buyerFee: 0,    sellerFee: fee };
    case "split":   return { fromBuyer: amount + half, toPlatform: fee, toSeller: amount - (fee - half), buyerFee: half, sellerFee: fee - half };
  }
}

// ─── Intersection Observer ────────────────────────────────────────────────────
function useInView(threshold = 0.1): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Animated Number ──────────────────────────────────────────────────────────
function AnimatedNumber({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const fromRef = useRef<number>(value);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    fromRef.current = display;
    startRef.current = performance.now();
    const duration = 380;
    const to = value;
    function tick(now: number) {
      const t = Math.min(1, (now - startRef.current) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(fromRef.current + (to - fromRef.current) * ease);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span>{prefix}{fmt(display)}</span>;
}

// ─── Fee Calculator ───────────────────────────────────────────────────────────
function FeeCalculator() {
  const [amount, setAmount]         = useState(5_000_000);
  const [payer, setPayer]           = useState<Payer>("pembeli");
  const [inputFocused, setFocused]  = useState(false);
  const [inputRaw, setInputRaw]     = useState("");

  const fee    = calcFee(amount);
  const flow   = getFlow(amount, fee, payer);
  const pct    = amount > 0 ? (fee / amount) * 100 : 0;
  const isMin  = amount > 0 && fee <= FEE_MIN + 1;
  const isMax  = fee >= FEE_MAX - 1;
  const sliderPct = (amount / AMOUNT_MAX) * 100;

  const applyAmount = useCallback((val: number) => {
    setAmount(Math.min(AMOUNT_MAX, Math.max(0, val)));
  }, []);

  const handleInput = (v: string) => {
    const raw = v.replace(/\D/g, "");
    setInputRaw(raw);
    applyAmount(parseFloat(raw) || 0);
  };

  const displayInput = inputFocused
    ? inputRaw
    : (amount > 0 ? amount.toLocaleString("id-ID") : "");

  const PAYER_OPTS: { key: Payer; label: string }[] = [
    { key: "pembeli", label: "Pembeli" },
    { key: "penjual", label: "Penjual" },
    { key: "split",   label: "Split"   },
  ];
  const payerIdx = PAYER_OPTS.findIndex(o => o.key === payer);

  return (
    <div style={{ background: "var(--color-dark-bg)", borderRadius: "var(--radius-card)" }} className="relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse 80% 60% at 15% 0%, rgba(255,255,255,0.06) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 90% 100%, rgba(255,255,255,0.04) 0%, transparent 55%)`,
      }} />

      {/* Thin horizontal rule at very top — editorial accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 70%, transparent)" }} />

      <div className="relative z-10 p-7 lg:p-10">

        {/* ── Top label ── */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">Kalkulator Biaya</span>
          </div>
          <div className="flex items-center gap-2">
            {isMin && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/15 text-white/35">Min Rp 2.500</span>}
            {isMax && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/15 text-white/35">Maks Rp 250rb</span>}
            {!isMin && !isMax && amount > 0 && (
              <span className="text-[10px] font-bold tabular-nums text-white/25">{pct.toFixed(3)}%</span>
            )}
          </div>
        </div>

        {/* ── Giant input — the hero ── */}
        <div className="mb-2">
          <label htmlFor="calc-amount" className="sr-only">Nominal transaksi</label>
          <div className="flex items-baseline gap-3">
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.25)",
            }}>Rp</span>
            <input
              id="calc-amount"
              type="text"
              inputMode="numeric"
              placeholder="0"
              value={displayInput}
              onFocus={() => { setFocused(true); setInputRaw(amount > 0 ? String(amount) : ""); }}
              onBlur={() => setFocused(false)}
              onChange={(e) => handleInput(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 8vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: amount > 0 ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.15)",
                width: "100%",
                caretColor: "rgba(255,255,255,0.5)",
              }}
            />
          </div>
        </div>

        {/* ── Slider ── */}
        <div className="mb-10 mt-5">
          <style>{`
            #calc-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 2px; background: transparent; cursor: pointer; outline: none; }
            #calc-slider::-webkit-slider-runnable-track { height: 2px; background: linear-gradient(90deg, rgba(255,255,255,0.75) ${sliderPct}%, rgba(255,255,255,0.12) ${sliderPct}%); border-radius: 9999px; }
            #calc-slider::-moz-range-track { height: 2px; background: rgba(255,255,255,0.12); border-radius: 9999px; }
            #calc-slider::-moz-range-progress { height: 2px; background: rgba(255,255,255,0.75); border-radius: 9999px; }
            #calc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 3px solid rgba(0,0,0,0.6); box-shadow: 0 0 0 1px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.5); margin-top: -8px; transition: transform 0.15s; }
            #calc-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
            #calc-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 3px solid rgba(0,0,0,0.6); box-shadow: 0 2px 8px rgba(0,0,0,0.5); }
          `}</style>
          <input
            id="calc-slider"
            type="range"
            min={0}
            max={AMOUNT_MAX}
            step={100_000}
            value={amount}
            onChange={(e) => { applyAmount(parseFloat(e.target.value)); setInputRaw(""); }}
          />
          {/* Tick labels */}
          <div className="flex justify-between mt-3 px-0.5">
            {["0", "25jt", "50jt", "75jt", "100jt"].map(l => (
              <span key={l} style={{ fontSize: 10, color: "rgba(255,255,255,0.18)", fontWeight: 600, letterSpacing: "0.04em", fontFamily: "var(--font-sans)" }}>{l}</span>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mb-7" style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

        {/* ── Payer toggle ── */}
        <div className="mb-8">
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 12 }}>
            Biaya ditanggung
          </p>
          <div className="relative flex" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "var(--radius-btn)", padding: 4, gap: 0 }}>
            {/* Sliding highlight */}
            <div style={{
              position: "absolute",
              top: 4, bottom: 4,
              width: `calc(${100/3}% - 2.7px)`,
              left: `calc(${payerIdx} * ${100/3}% + 4px)`,
              background: "rgba(255,255,255,0.11)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 10,
              transition: "left 0.3s cubic-bezier(.22,.68,0,1)",
            }} />
            {PAYER_OPTS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setPayer(opt.key)}
                style={{ position: "relative", zIndex: 2, flex: 1, padding: "10px 4px", background: "none", border: "none", cursor: "pointer", borderRadius: 10, transition: "color 0.15s" }}
              >
                <span style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.01em",
                  color: payer === opt.key ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                  transition: "color 0.15s",
                }}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Results ── */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
        }}>

          {/* Pembeli row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 4 }}>Pembeli Transfer</p>
              {flow.buyerFee > 0 && (
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-sans)" }}>
                  nominal Rp {fmt(amount)} + fee Rp {fmt(flow.buyerFee)}
                </p>
              )}
            </div>
            <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
              <AnimatedNumber value={flow.fromBuyer} prefix="Rp\u202F" />
            </p>
          </div>

          {/* Kahade fee row — muted center */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>✕</span>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
                  Kahade Fee{payer === "split" ? " — 50 / 50" : ""}
                </p>
                {(isMin || isMax) && (
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.15)", marginTop: 2 }}>{isMin ? "minimum berlaku" : "maksimum berlaku"}</p>
                )}
              </div>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
              − Rp {fmt(fee)}
            </p>
          </div>

          {/* Penjual row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 4 }}>Penjual Terima</p>
              {flow.sellerFee > 0 && (
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-sans)" }}>
                  dipotong fee Rp {fmt(flow.sellerFee)}
                </p>
              )}
            </div>
            <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", color: amount > 0 ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.2)", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
              <AnimatedNumber value={flow.toSeller} prefix="Rp\u202F" />
            </p>
          </div>

          {/* Split breakdown bar — only shown in split mode */}
          {payer === "split" && amount > 0 && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 20px", display: "flex", gap: 12 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <p style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", fontWeight: 700, marginBottom: 4 }}>Pembeli tanggung</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)" }}>Rp {fmt(flow.buyerFee)}</p>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.06)" }} />
              <div style={{ flex: 1, textAlign: "center" }}>
                <p style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", fontWeight: 700, marginBottom: 4 }}>Penjual tanggung</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)" }}>Rp {fmt(flow.sellerFee)}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Bottom meta ── */}
        <div className="flex items-center justify-between mt-5 flex-wrap gap-2">
          <div className="flex items-center gap-4">
            {[["Rate", "2,5%"], ["Min", "Rp 2.500"], ["Maks", "Rp 250rb"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-sans)" }}>
              Fee ditanggung {payer === "split" ? "bersama" : payer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section id="harga" ref={sectionRef} className="section bg-surface">
      <div className="container-base">

        {/* ── Section header ── */}
        <div className="section-header">
          <div className={inView ? "anim-fade-up delay-1 in-view" : ""}>
            <h2 className="section-title">
              Bayar Saat Berhasil.
              <br />
              <span className="section-title-muted">Tidak Lebih.</span>
            </h2>
          </div>
        </div>

        {/* ── Simple fee text — replaces old card ── */}
        <div className={`text-center mb-10 ${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
          <p style={{
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "var(--color-ink-45)",
            lineHeight: 1.7,
            fontFamily: "var(--font-sans)",
          }}>
            Platform fee:{" "}
            <strong style={{ color: "var(--color-ink)", fontWeight: 700 }}>
              2,5% per transaksi
            </strong>
            {" "}(min. Rp 2.500, maks. Rp 250.000)
          </p>
          <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
            {[
              ["Biaya Bulanan", "Rp 0"],
              ["Biaya Setup", "Rp 0"],
              ["Biaya Dispute", "Rp 0"],
            ].map(([label, val]) => (
              <div key={label} className="flex items-center gap-2">
                <span style={{ fontSize: 13, color: "var(--color-ink-30)" }}>{label}:</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink)" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Calculator ── */}
        <div className={`max-w-2xl mx-auto ${inView ? "anim-fade-up delay-3 in-view" : ""}`}>
          <FeeCalculator />
        </div>

      </div>
    </section>
  );
}
