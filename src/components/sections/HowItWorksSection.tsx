"use client";

import Link from "next/link";
import { useState, useEffect, useRef, type RefObject } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icon = ({ d, white = false, size = 22 }: { d: React.ReactNode; white?: boolean; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none"
    stroke={white ? "rgba(255,255,255,.85)" : "rgba(0,0,0,.7)"}
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const icons: Record<string, (w: boolean) => React.ReactNode> = {
  deal: (w) => <Icon white={w} d={<><path d="M4 11C4 7.13 7.13 4 11 4s7 3.13 7 7-3.13 7-7 7H4l3-3"/><path d="M11 8v3l2 2"/></>} />,
  lock: (w) => <Icon white={w} d={<><rect x="4" y="9" width="14" height="10" rx="2"/><path d="M7.5 9V7a3.5 3.5 0 017 0v2"/><circle cx="11" cy="14" r="1.2" fill={w?"rgba(255,255,255,.85)":"rgba(0,0,0,.7)"} stroke="none"/></>} />,
  truck: (w) => <Icon white={w} d={<><rect x="2" y="7" width="13" height="10" rx="1.5"/><path d="M15 9.5h2.5l2 3V17H15V9.5z"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></>} />,
  check: (w) => <Icon white={w} d={<><circle cx="11" cy="11" r="7.5"/><path d="M8 11l2 2 4-4"/></>} />,
  unlock: (w) => <Icon white={w} d={<><path d="M11 3.5a4 4 0 014 4V9H5v10a2 2 0 002 2h8a2 2 0 002-2V9h-2V7.5a4 4 0 00-4-4z" opacity=".35" stroke="none" fill={w?"rgba(255,255,255,.2)":"rgba(0,0,0,.08)"}/><rect x="3" y="9" width="16" height="10" rx="2"/><path d="M11 13v3M9.5 16.5l1.5-1 1.5 1"/><path d="M7.5 9V7.5a3.5 3.5 0 015.9-2.5"/></>} />,
};

const ArrowRight = ({ white = false }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
    stroke={white ? "rgba(255,255,255,.6)" : "rgba(0,0,0,.35)"}
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.5h7M7 3l3.5 3.5L7 10" />
  </svg>
);

const CheckSmall = ({ white = false }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="6" fill={white ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.07)"} />
    <path d="M3.5 6L5 7.5L8.5 4" stroke={white ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.65)"}
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Steps Data ───────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    label: "Buat Kesepakatan",
    short: "Sepakati syarat",
    icon: icons.deal,
    desc: "Pembeli dan penjual menyepakati detail transaksi — nominal, barang atau jasa, tenggat waktu, dan syarat penyelesaian secara tertulis di platform.",
    details: ["Buat transaksi dalam 60 detik", "Syarat & kondisi tersimpan permanen", "Notifikasi instan ke kedua pihak"],
    tag: "Mulai Transaksi",
    time: "~1 menit",
  },
  {
    num: "02",
    label: "Dana Masuk Escrow",
    short: "Dana diamankan",
    icon: icons.lock,
    desc: "Pembeli mentransfer dana ke rekening escrow Kahade yang terpisah dan terisolasi. Dana tidak bisa disentuh siapapun hingga kondisi terpenuhi.",
    details: ["Transfer via 15+ metode pembayaran", "Konfirmasi real-time dalam detik", "Dana ditahan sampai syarat transaksi selesai"],
    tag: "Dana Terkunci",
    time: "~2 menit",
    featured: true,
  },
  {
    num: "03",
    label: "Penjual Berkirim",
    short: "Kirim barang/jasa",
    icon: icons.truck,
    desc: "Dengan dana sudah aman di escrow, penjual mengirimkan barang atau melaksanakan jasa sesuai kesepakatan. Keduanya bisa tracking status real-time.",
    details: ["Upload bukti pengiriman langsung", "Tracking status transparan", "Reminder otomatis jika melewati batas"],
    tag: "Dalam Proses",
    time: "Sesuai kesepakatan",
  },
  {
    num: "04",
    label: "Pembeli Konfirmasi",
    short: "Konfirmasi terima",
    icon: icons.check,
    desc: "Pembeli menerima barang atau jasa, memeriksa sesuai kesepakatan, lalu memberikan konfirmasi. Jika ada masalah, bisa ajukan dispute dengan bukti.",
    details: ["Periode konfirmasi dapat dikustomisasi", "Dispute system adil & terstruktur", "Tim mediasi siap membantu"],
    tag: "Verifikasi",
    time: "1-3 hari",
  },
  {
    num: "05",
    label: "Dana Dilepaskan",
    short: "Dana cair ke penjual",
    icon: icons.unlock,
    desc: "Setelah konfirmasi, dana otomatis dicairkan ke rekening penjual dikurangi platform fee. Transaksi selesai — aman, cepat, dan terdokumentasi penuh.",
    details: ["Pencairan ke 50+ bank lokal", "Rekap transaksi otomatis dikirim", "Riwayat tersimpan selamanya"],
    tag: "Selesai ✓",
    time: "Instan – 1x24 jam",
  },
];

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.1): [RefObject<any>, boolean] {
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

// ─── Abstract BG ─────────────────────────────────────────────────────────────
const HwAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="hw-rg1" cx="8%"  cy="30%" r="45%">
        <stop offset="0%" stopColor="#000" stopOpacity=".03"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="hw-rg2" cx="92%" cy="70%" r="45%">
        <stop offset="0%" stopColor="#000" stopOpacity=".025"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="hw-rg3" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#000" stopOpacity=".015"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <pattern id="hw-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0L0 0 0 56" fill="none" stroke="#000" strokeWidth=".28" strokeOpacity=".048"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#hw-grid)"/>
    <rect width="100%" height="100%" fill="url(#hw-rg1)"/>
    <rect width="100%" height="100%" fill="url(#hw-rg2)"/>
    <rect width="100%" height="100%" fill="url(#hw-rg3)"/>
    {/* Concentric arcs top-left */}
    <circle cx="-3%" cy="0%"   r="260" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".048"/>
    <circle cx="-3%" cy="0%"   r="180" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".038"/>
    <circle cx="-3%" cy="0%"   r="110" fill="none" stroke="#000" strokeWidth=".4" strokeOpacity=".03"/>
    {/* Arcs bottom-right */}
    <circle cx="103%" cy="100%" r="280" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".045"/>
    <circle cx="103%" cy="100%" r="190" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".035"/>
    {/* Diagonal accents */}
    <line x1="0"    y1="80%"  x2="18%" y2="0"    stroke="#000" strokeWidth=".35" strokeOpacity=".04"/>
    <line x1="100%" y1="20%"  x2="82%" y2="100%" stroke="#000" strokeWidth=".35" strokeOpacity=".04"/>
    {/* Dot clusters */}
    <circle cx="32%" cy="6%"  r="1.8" fill="#000" fillOpacity=".08"/>
    <circle cx="34%" cy="7%"  r="1.2" fill="#000" fillOpacity=".06"/>
    <circle cx="36%" cy="6.5%" r=".9" fill="#000" fillOpacity=".05"/>
    <circle cx="68%" cy="94%" r="1.8" fill="#000" fillOpacity=".08"/>
    <circle cx="70%" cy="95%" r="1.2" fill="#000" fillOpacity=".06"/>
    {/* Cross accents */}
    <line x1="91%" y1="11%" x2="91%" y2="19%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="87%" y1="15%" x2="95%" y2="15%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="9%"  y1="85%" x2="9%"  y2="93%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="5%"  y1="89%" x2="13%" y2="89%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
  </svg>
);

// ─── Step Card Component ──────────────────────────────────────────────────────
const StepCard = ({ step, inView, delayIdx }: { step: any; inView: boolean; delayIdx: number }) => {
  const isF = step.featured;
  const textPrimary  = isF ? "#fff"                   : "#000";
  const textSecond   = isF ? "rgba(255,255,255,.45)"  : "rgba(0,0,0,.45)";
  const textBody     = isF ? "rgba(255,255,255,.68)"  : "rgba(0,0,0,.58)";
  const borderColor  = isF ? "rgba(255,255,255,.1)"   : "rgba(0,0,0,.07)";
  const iconBg       = isF ? "rgba(255,255,255,.1)"   : "rgba(0,0,0,.05)";
  const numBg        = isF ? "rgba(255,255,255,.1)"   : "rgba(0,0,0,.06)";
  const tagBg        = isF ? "rgba(255,255,255,.1)"   : "rgba(0,0,0,.04)";
  const tagBorder    = isF ? "rgba(255,255,255,.15)"  : "rgba(0,0,0,.09)";
  const timeBg       = isF ? "rgba(255,255,255,.07)"  : "rgba(0,0,0,.03)";

  return (
    <div
      className={`hw-step-card${isF ? " active" : ""} hw-fu hw-d${delayIdx} ${inView ? "hv" : ""}`}
    >
      {/* Shimmer overlay */}
      <div className="hw-step-shimmer" />

      {/* BG glow for featured */}
      {isF && (
        <div className="hw-glow" style={{
          position:"absolute", inset:0, borderRadius:22,
          background:"radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,255,255,.06) 0%, transparent 70%)",
          pointerEvents:"none"
        }}/>
      )}

      {/* Top row */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:22, gap:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          {/* Number badge */}
          <div className="hw-num-badge" style={{ background:numBg }}>
            <span style={{ fontFamily:"var(--font-sans)", fontSize:12, fontWeight:800, color:isF?"rgba(255,255,255,.6)":"rgba(0,0,0,.4)", letterSpacing:".02em" }}>
              {step.num}
            </span>
          </div>
          {/* Icon box */}
          <div className="hw-icon-box" style={{ background:iconBg }}>
            {step.icon(isF)}
          </div>
        </div>
        {/* Tag */}
        <div style={{
          padding:"5px 11px", borderRadius:99,
          background:tagBg, border:`1px solid ${tagBorder}`,
          fontSize:10.5, fontWeight:700, color:isF?"rgba(255,255,255,.55)":"rgba(0,0,0,.45)",
          fontFamily:"var(--font-sans)", letterSpacing:".04em", textTransform:"uppercase",
          whiteSpace:"nowrap"
        }}>
          {step.tag}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:"var(--font-sans)",
        fontSize:"clamp(17px,2vw,21px)",
        fontWeight:800, color:textPrimary,
        letterSpacing:"-.03em", lineHeight:1.15,
        margin:"0 0 12px 0"
      }}>
        {step.label}
      </h3>

      {/* Divider */}
      <div style={{ height:1, background:borderColor, marginBottom:14 }}/>

      {/* Body */}
      <p style={{
        fontFamily:"var(--font-sans)",
        fontSize:13.5, lineHeight:1.75,
        color:textBody, margin:"0 0 18px 0"
      }}>
        {step.desc}
      </p>

      {/* Detail list */}
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
        {step.details.map((d: string, i: number) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <CheckSmall white={isF}/>
            <span style={{ fontSize:12.5, fontWeight:500, color:textSecond, fontFamily:"var(--font-sans)" }}>{d}</span>
          </div>
        ))}
      </div>

      {/* Bottom time badge */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:14, borderTop:`1px solid ${borderColor}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:7, padding:"5px 11px", borderRadius:99, background:timeBg }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
            stroke={isF?"rgba(255,255,255,.4)":"rgba(0,0,0,.35)"} strokeWidth="1.4" strokeLinecap="round">
            <circle cx="5.5" cy="5.5" r="4.5"/>
            <path d="M5.5 3v2.8l1.5 1.2"/>
          </svg>
          <span style={{ fontSize:11, fontWeight:600, color:isF?"rgba(255,255,255,.4)":"rgba(0,0,0,.35)", fontFamily:"var(--font-sans)" }}>
            {step.time}
          </span>
        </div>
        <ArrowRight white={isF}/>
      </div>
    </div>
  );
};

// ─── Large Feature Row (Desktop alternating) ──────────────────────────────────
const FeatureRow = ({ step, idx, inView }: { step: any; idx: number; inView: boolean }) => {
  const isEven = idx % 2 === 0;
  const isF    = step.featured;

  const content = (
    <div className={`hw-${isEven?"fl":"fr"} hw-d${2+idx} ${inView?"hv":""}`}
      style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:20 }}>

      {/* Number + tag row */}
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div style={{
          width:44, height:44, borderRadius:14,
          background: isF ? "#000" : "rgba(0,0,0,.06)",
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
        }}>
          <span style={{ fontFamily:"var(--font-sans)", fontSize:13, fontWeight:800,
            color: isF ? "rgba(255,255,255,.55)" : "rgba(0,0,0,.4)",
            letterSpacing:".03em"
          }}>{step.num}</span>
        </div>
        <div style={{
          padding:"5px 12px", borderRadius:99,
          border:"1px solid rgba(0,0,0,.09)",
          background:"rgba(0,0,0,.025)",
          fontSize:10.5, fontWeight:700, color:"rgba(0,0,0,.4)",
          fontFamily:"var(--font-sans)", letterSpacing:".05em", textTransform:"uppercase"
        }}>{step.tag}</div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
            stroke="rgba(0,0,0,.3)" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="5.5" cy="5.5" r="4.5"/><path d="M5.5 3v2.8l1.5 1.2"/>
          </svg>
          <span style={{ fontSize:11, fontWeight:600, color:"rgba(0,0,0,.3)", fontFamily:"var(--font-sans)" }}>{step.time}</span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:"var(--font-sans)",
        fontSize:"clamp(24px,2.8vw,34px)",
        fontWeight:800, color:"#000",
        letterSpacing:"-.04em", lineHeight:1.08,
        margin:0
      }}>{step.label}</h3>

      {/* Body */}
      <p style={{
        fontFamily:"var(--font-sans)",
        fontSize:"clamp(14px,1.3vw,15.5px)",
        lineHeight:1.78, color:"rgba(0,0,0,.52)",
        margin:0, maxWidth:420
      }}>{step.desc}</p>

      {/* Details */}
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {step.details.map((d: string, i: number) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
            <CheckSmall/>
            <span style={{ fontSize:13.5, fontWeight:500, color:"rgba(0,0,0,.55)", fontFamily:"var(--font-sans)" }}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const visual = (
    <div className={`hw-${isEven?"fr":"fl"} hw-d${3+idx} ${inView?"hv":""}`}
      style={{ display:"flex", alignItems:"center", justifyContent:"center", position:"relative", minHeight:260 }}>
      {/* Orbital rings */}
      <div className="hw-spin" style={{
        position:"absolute",
        width:220, height:220,
        border:"1px dashed rgba(0,0,0,.08)",
        borderRadius:"50%", pointerEvents:"none"
      }}/>
      <div style={{
        position:"absolute",
        width:160, height:160,
        border:"1px dashed rgba(0,0,0,.05)",
        borderRadius:"50%", pointerEvents:"none",
        animation:"hwSpin 20s linear infinite reverse"
      }}/>

      {/* Center icon orb */}
      <div className="hw-float" style={{
        width:100, height:100, borderRadius:28,
        background: isF ? "#000" : "#fff",
        border: isF ? "none" : "1.5px solid rgba(0,0,0,.1)",
        
          ? "0 20px 60px rgba(0,0,0,.3)"
          : "0 12px 40px rgba(0,0,0,.09), 0 2px 8px rgba(0,0,0,.06)",
        display:"flex", alignItems:"center", justifyContent:"center",
        position:"relative", zIndex:2
      }}>
        {/* Inner glow */}
        {isF && <div className="hw-glow" style={{
          position:"absolute", inset:0, borderRadius:28,
          background:"radial-gradient(circle at 30% 30%, rgba(255,255,255,.1) 0%, transparent 70%)",
          pointerEvents:"none"
        }}/>}
        <div style={{ position:"relative", zIndex:1 }}>
          {React.createElement(() => step.icon(isF))}
        </div>
      </div>

      {/* Mini floating badges */}
      <div className="hw-float" style={{
        position:"absolute", top:"12%", right:"8%",
        background:"#fff", border:"1px solid rgba(0,0,0,.09)",
        borderRadius:12, padding:"8px 12px",
        ,0,0,.08)",
        animationDelay:"1.2s", zIndex:3
      }}>
        <div style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,.35)", fontFamily:"var(--font-sans)", textTransform:"uppercase", letterSpacing:".08em", marginBottom:2 }}>
          Status
        </div>
        <div style={{ fontSize:12.5, fontWeight:800, color:"#000", fontFamily:"var(--font-sans)", letterSpacing:"-.02em" }}>
          {step.tag}
        </div>
      </div>

      <div className="hw-float" style={{
        position:"absolute", bottom:"12%", left:"6%",
        background:"#000", borderRadius:12, padding:"8px 14px",
        ,0,0,.25)",
        animationDelay:"0.7s", zIndex:3,
        display:"flex", alignItems:"center", gap:7
      }}>
        <span style={{ position:"relative", display:"inline-flex", width:7, height:7, flexShrink:0 }}>
          <span style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#fff", opacity:.4, animation:"hwPing 1.8s ease infinite" }}/>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#fff", display:"block", position:"relative" }}/>
        </span>
        <span style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,.8)", fontFamily:"var(--font-sans)", whiteSpace:"nowrap" }}>
          {step.time}
        </span>
      </div>
    </div>
  );

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"60px 80px",
      alignItems:"center",
      padding:"56px 0",
      borderBottom:"1px solid rgba(0,0,0,.06)"
    }}>
      {isEven ? <>{content}{visual}</> : <>{visual}{content}</>}
    </div>
  );
};

// Need React for createElement
import React from "react";

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  const [sectionRef, inView] = useInView(0.08);
  const [activeTab, setActiveTab] = useState(0);
  const [view, setView]  = useState("cards"); // "cards" | "flow"

  const c = (base: string, d = ""): string => `${base} ${d} ${inView ? "hv" : ""}`;

  return (
    <>
      <section
        id="cara-kerja"
        ref={sectionRef}
        className="hw-root relative overflow-hidden bg-white"
        style={{ padding:"100px 0 96px 0" }}
      >
        <HwAbstractBg/>

        {/* Ambient glow spots */}
        <div className="hw-glow" style={{ position:"absolute", top:"15%", left:"5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,0,0,.025) 0%, transparent 70%)", pointerEvents:"none" }}/>
        <div className="hw-glow" style={{ position:"absolute", bottom:"10%", right:"5%", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,0,0,.02) 0%, transparent 70%)", pointerEvents:"none", animationDelay:"2s" }}/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div style={{ textAlign:"center", marginBottom:56 }}>

            {/* Eyebrow */}
            <div className={c("hw-fu hw-d0")} style={{ display:"none", justifyContent:"center", marginBottom:20 }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"7px 16px", borderRadius:99,
                border:"1px solid rgba(0,0,0,.09)",
                background:"rgba(0,0,0,.02)"
              }}>
                <span style={{ position:"relative", display:"inline-flex", width:7, height:7 }}>
                  <span style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#000", opacity:.35, animation:"hwPing 1.9s ease infinite" }}/>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:"#000", display:"block", position:"relative" }}/>
                </span>
                <span style={{ fontSize:11.5, fontWeight:600, color:"rgba(0,0,0,.4)", fontFamily:"var(--font-sans)", letterSpacing:".04em", textTransform:"uppercase" }}>
                  5 Langkah Sederhana
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className={c("hw-fu hw-d1")}>
              <h2 style={{
                fontFamily:"var(--font-sans)",
                fontSize:"clamp(30px,5vw,60px)",
                fontWeight:800, color:"#000",
                letterSpacing:"-.04em", lineHeight:1.06,
                margin:"0 auto 18px", maxWidth:600
              }}>
                Dari Kesepakatan
                <br/>
                <span style={{ color:"rgba(0,0,0,.22)" }}>Hingga Dana Cair.</span>
              </h2>
            </div>

            {/* Sub */}
            <div className={c("hw-fu hw-d2")}>
              <p style={{
                fontFamily:"var(--font-sans)",
                fontSize:"clamp(14px,1.5vw,16.5px)",
                color:"rgba(0,0,0,.45)", lineHeight:1.78,
                maxWidth:460, margin:"0 auto 32px"
              }}>
                Proses escrow yang sederhana, transparan, dan terlindungi di setiap tahapnya. Tidak perlu saling percaya buta — sistem yang menjaminnya.
              </p>
            </div>

            {/* View toggle */}
            <div className={c("hw-fu hw-d3")} style={{ display:"flex", justifyContent:"center", gap:8, flexWrap:"wrap" }}>
              {[
                { key:"cards", label:"Tampilan Kartu" },
                { key:"flow",  label:"Alur Detail" },
              ].map(t => (
                <button key={t.key} className={`hw-tab${view===t.key?" active":""}`}
                  onClick={()=>setView(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* ══ CARDS VIEW ════════════════════════════════════════════════════ */}
          {view === "cards" && (<>

            {/* ── Desktop: 3-col then 2-col centered grid ──────────────────── */}
            <div className="hw-desktop-grid" style={{ display:"none" }}>

              {/* Row 1: steps 1-3 */}
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                gap:16,
                marginBottom:16,
                alignItems:"stretch"
              }}>
                {steps.slice(0,3).map((s,i)=>(
                  <StepCard key={s.num} step={s} inView={inView} delayIdx={i+1}/>
                ))}
              </div>

              {/* Connector SVG between row 1 and 2 */}
              <div style={{ display:"flex", justifyContent:"center", margin:"-4px 0 -4px" }}>
                <svg width="60%" height="40" viewBox="0 0 600 40" fill="none"
                  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M50 0 C50 25 200 25 300 25 C400 25 550 25 550 0"
                    fill="none" stroke="rgba(0,0,0,.1)" strokeWidth="1.5" strokeDasharray="6 4"/>
                  <circle cx="50"  cy="0"  r="4" fill="rgba(0,0,0,.15)"/>
                  <circle cx="300" cy="25" r="4" fill="rgba(0,0,0,.15)"/>
                  <circle cx="550" cy="0"  r="4" fill="rgba(0,0,0,.15)"/>
                </svg>
              </div>

              {/* Row 2: steps 4-5 centered */}
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(2,1fr)",
                gap:16,
                maxWidth:"66.67%",
                margin:"0 auto"
              }}>
                {steps.slice(3,5).map((s,i)=>(
                  <StepCard key={s.num} step={s} inView={inView} delayIdx={i+4}/>
                ))}
              </div>
            </div>

            {/* ── Mobile: vertical list ─────────────────────────────────────── */}
            <div className="hw-mobile-list" style={{ display:"none" }}>
              {/* Timeline track */}
              <div style={{ position:"relative" }}>
                {/* Vertical line */}
                <div style={{
                  position:"absolute", left:19, top:0, bottom:0, width:1,
                  background:"rgba(0,0,0,.07)", pointerEvents:"none"
                }}/>

                {steps.map((s,i)=>(
                  <div
                    key={s.num}
                    className={`hw-fu hw-d${i+1} ${inView?"hv":""}`}
                    style={{ display:"flex", gap:16, marginBottom:16, position:"relative" }}
                  >
                    {/* Timeline node */}
                    <div style={{
                      width:40, height:40, borderRadius:12,
                      background: s.featured ? "#000" : "#fff",
                      border: s.featured ? "none" : "1.5px solid rgba(0,0,0,.1)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      flexShrink:0, position:"relative", zIndex:1,
                      ,0,0,.2)" : "0 2px 8px rgba(0,0,0,.06)"
                    }}>
                      <span style={{
                        fontFamily:"var(--font-sans)", fontSize:11, fontWeight:800,
                        color: s.featured ? "rgba(255,255,255,.6)" : "rgba(0,0,0,.4)",
                        letterSpacing:".02em"
                      }}>{s.num}</span>
                    </div>

                    {/* Card */}
                    <div style={{ flex:1 }}>
                      <StepCard step={s} inView={inView} delayIdx={i+1}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>)}

          {/* ══ FLOW VIEW (alternating) ═══════════════════════════════════════ */}
          {view === "flow" && (
            <div>
              {steps.map((s,i)=>(
                <FeatureRow key={s.num} step={s} idx={i} inView={inView}/>
              ))}
            </div>
          )}

          {/* ── Bottom strip ─────────────────────────────────────────────────── */}
          <div className={c("hw-fu hw-d8")} style={{ marginTop:64 }}>
            <div style={{
              background:"#000", borderRadius:22, overflow:"hidden",
              padding:"36px 40px", position:"relative",
              display:"flex", flexWrap:"wrap",
              alignItems:"center", justifyContent:"space-between", gap:20
            }}>
              {/* BG pattern */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <pattern id="bot-dot" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx=".7" cy=".7" r=".7" fill="rgba(255,255,255,.055)"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#bot-dot)"/>
                <circle cx="-2%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
                <circle cx="102%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
              </svg>

              <div className="relative z-10">
                <p style={{ fontFamily:"var(--font-sans)", fontSize:"clamp(17px,2.5vw,22px)", fontWeight:800, color:"#fff", letterSpacing:"-.04em", margin:"0 0 6px 0" }}>
                  Siap memulai transaksi pertama Anda?
                </p>
                <p style={{ fontFamily:"var(--font-sans)", fontSize:13.5, color:"rgba(255,255,255,.42)", margin:0 }}>
                  Daftar gratis — tidak perlu kartu kredit, tidak ada kontrak.
                </p>
              </div>

              <div className="relative z-10" style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <Link href={homeAnchors.pricing} style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"13px 26px", background:"#fff", color:"#000",
                  borderRadius:12, fontSize:14, fontWeight:700,
                  fontFamily:"var(--font-sans)", textDecoration:"none",
                  letterSpacing:"-.02em", transition:"all .2s",
                  ,0,0,.25)"
                }}
                  onMouseOver={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,.35)";}}
                  onMouseOut={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,.25)";}}
                >
                  Mulai Sekarang
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
                </Link>
                <Link href={supportLinks.contact} style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"12px 22px", background:"rgba(255,255,255,.08)",
                  color:"rgba(255,255,255,.75)", border:"1.5px solid rgba(255,255,255,.15)",
                  borderRadius:12, fontSize:13.5, fontWeight:600,
                  fontFamily:"var(--font-sans)", textDecoration:"none",
                  backdropFilter:"blur(8px)", transition:"all .2s"
                }}
                  onMouseOver={e=>{e.currentTarget.style.background="rgba(255,255,255,.14)";e.currentTarget.style.color="#fff";}}
                  onMouseOut={e=>{e.currentTarget.style.background="rgba(255,255,255,.08)";e.currentTarget.style.color="rgba(255,255,255,.75)";}}
                >
                  Lihat Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

