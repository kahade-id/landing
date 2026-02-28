"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const XIcon = ({ size = 20, op = .75 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
    stroke={`rgba(0,0,0,${op})`} strokeWidth="2" strokeLinecap="round">
    <circle cx="10" cy="10" r="9" strokeOpacity=".15"/>
    <line x1="7" y1="7" x2="13" y2="13"/>
    <line x1="13" y1="7" x2="7" y2="13"/>
  </svg>
);

const CheckIcon = ({ white = false }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill={white ? "rgba(255,255,255,.1)" : "rgba(0,0,0,0.1)"}/>
    <path d="M6.5 10L8.8 12.3L13.5 7.5"
      stroke={white ? "rgba(255,255,255,.85)" : "rgba(0,0,0,0.1)"}
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none"
    stroke="rgba(255,255,255,.8)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L3 5V9C3 12.3 5.7 15 9 16C12.3 15 15 12.3 15 9V5L9 2Z"/>
    <path d="M6.5 9L8 10.5L11.5 7"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

const WalletIcon = ({ size = 22, white = false }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none"
    stroke={white ? "rgba(255,255,255,.75)" : "rgba(0,0,0,0.1)"}
    strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="18" height="14" rx="2.5"/>
    <path d="M2 10h18"/>
    <circle cx="16" cy="15" r="1.2" fill={white ? "rgba(255,255,255,.75)" : "rgba(0,0,0,0.1)"} stroke="none"/>
  </svg>
);

const BoxIcon = ({ size = 22, white = false }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none"
    stroke={white ? "rgba(255,255,255,.75)" : "rgba(0,0,0,0.1)"}
    strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8L11 4L18 8V16L11 20L4 16V8Z"/>
    <path d="M11 4V20M4 8L11 12L18 8"/>
  </svg>
);

const AlertIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
    stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2L15 14H1L8 2Z"/>
    <path d="M8 6.5v3.5M8 12v.5"/>
  </svg>
);

const UserIcon = ({ white = false }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    stroke={white ? "rgba(255,255,255,.65)" : "rgba(0,0,0,0.1)"}
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="5" r="3"/>
    <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
  </svg>
);

const LockIcon = ({ white = false, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
    stroke={white ? "rgba(255,255,255,.75)" : "rgba(0,0,0,0.1)"}
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="8" rx="1.5"/>
    <path d="M5.5 7V5a2.5 2.5 0 015 0v2"/>
    <circle cx="8" cy="11" r="1.2" fill={white ? "rgba(255,255,255,.75)" : "rgba(0,0,0,0.1)"} stroke="none"/>
  </svg>
);

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
const PbAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="pb-rg1" cx="10%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity=".03"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="pb-rg2" cx="90%" cy="70%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity=".025"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <pattern id="pb-dot" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#000" fillOpacity=".05"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#pb-dot)"/>
    <rect width="100%" height="100%" fill="url(#pb-rg1)"/>
    <rect width="100%" height="100%" fill="url(#pb-rg2)"/>
    <circle cx="-3%" cy="15%"  r="240" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".048"/>
    <circle cx="-3%" cy="15%"  r="160" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".038"/>
    <circle cx="103%" cy="85%" r="260" fill="none" stroke="#000" strokeWidth=".6" strokeOpacity=".045"/>
    <circle cx="103%" cy="85%" r="175" fill="none" stroke="#000" strokeWidth=".5" strokeOpacity=".035"/>
    <circle cx="50%"  cy="50%" r="440" fill="none" stroke="#000" strokeWidth=".3" strokeOpacity=".022"/>
    <line x1="0"    y1="70%" x2="22%" y2="0"    stroke="#000" strokeWidth=".35" strokeOpacity=".038"/>
    <line x1="100%" y1="30%" x2="78%" y2="100%" stroke="#000" strokeWidth=".35" strokeOpacity=".038"/>
    <circle cx="28%" cy="7%"  r="1.8" fill="#000" fillOpacity=".08"/>
    <circle cx="30%" cy="8%"  r="1.2" fill="#000" fillOpacity=".06"/>
    <circle cx="72%" cy="93%" r="1.8" fill="#000" fillOpacity=".08"/>
    <line x1="92%" y1="12%" x2="92%" y2="20%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="88%" y1="16%" x2="96%" y2="16%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="8%"  y1="84%" x2="8%"  y2="92%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
    <line x1="4%"  y1="88%" x2="12%" y2="88%" stroke="#000" strokeWidth=".7" strokeOpacity=".08"/>
  </svg>
);

// ─── Floating Money Gone Illustration ────────────────────────────────────────
const MoneyGoneVisual = ({ inView }: { inView: boolean }) => (
  <div style={{ position:"relative", height:180, display:"flex", alignItems:"center", justifyContent:"center", margin:"4px 0 20px" }}>
    {/* Base wallet */}
    <div className="pb-float-s" style={{
      width:68, height:68, borderRadius:18,
      background:"rgba(0,0,0,0.1)", border:"1.5px solid rgba(0,0,0,0.1)",
      display:"flex", alignItems:"center", justifyContent:"center",
      position:"relative", zIndex:2
    }}>
      <WalletIcon size={28}/>
      {/* Empty indicator */}
      <div style={{
        position:"absolute", top:-8, right:-8,
        width:22, height:22, borderRadius:"50%",
        background:"#fff", border:"1.5px solid rgba(0,0,0,0.1)",
        display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>

    {/* Flying money particles */}
    {[
      { top:"12%",  left:"20%", delay:"0s",    rot:"-20deg", val:"Rp 5jt" },
      { top:"8%",   left:"52%", delay:".4s",   rot:"12deg",  val:"Rp 2jt" },
      { top:"22%",  right:"18%",delay:".2s",   rot:"8deg",   val:"Rp 1jt" },
    ].map((p,i) => (
      <div key={i} className="pb-float" style={{
        position:"absolute", ...{ top:p.top, left:p.left, right:p.right },
        animationDelay: p.delay,
        background:"#fff", border:"1px solid rgba(0,0,0,0.1)",
        borderRadius:10, padding:"5px 10px",
        transform:`rotate(${p.rot})`,
        display:"flex", alignItems:"center", gap:5,
        opacity:.75
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          <path d="M4 7.5c0-.8.9-1.5 2-1.5s2-.7 2-1.5S9 3 6 3M6 3V2M6 9v1M4.5 8.5h3" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,0.1)", fontFamily:"var(--font-sans)" }}>
          {p.val}
        </span>
        {/* Arrow flying away */}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="pb-arrow-ani">
          <path d="M1 9L9 1M9 1H4M9 1V6" stroke="rgba(0,0,0,0.1)" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
    ))}

    {/* "?" box (barang tidak datang) */}
    <div className="pb-float" style={{
      position:"absolute", bottom:"8%", left:"18%",
      width:50, height:50, borderRadius:14,
      background:"rgba(0,0,0,0.1)", border:"1.5px dashed rgba(0,0,0,0.1)",
      display:"flex", alignItems:"center", justifyContent:"center",
      animationDelay:".6s"
    }}>
      <span style={{ fontSize:18, opacity:.35 }}>?</span>
    </div>

    {/* Bottom label */}
    <div style={{
      position:"absolute", bottom:"0%", right:"15%",
      background:"rgba(0,0,0,0.1)", borderRadius:10,
      padding:"4px 10px", display:"flex", alignItems:"center", gap:5
    }}>
      <div className="pb-blink" style={{ width:6, height:6, borderRadius:"50%", background:"rgba(0,0,0,0.1)" }}/>
      <span style={{ fontSize:10, fontWeight:600, color:"rgba(0,0,0,0.1)", fontFamily:"var(--font-sans)" }}>Tidak ada jaminan</span>
    </div>
  </div>
);

const BoxShippedVisual = ({ inView }: { inView: boolean }) => (
  <div style={{ position:"relative", height:180, display:"flex", alignItems:"center", justifyContent:"center", margin:"4px 0 20px" }}>
    {/* Truck / box going away */}
    <div className="pb-float-s" style={{
      width:68, height:68, borderRadius:18,
      background:"rgba(0,0,0,0.1)", border:"1.5px solid rgba(0,0,0,0.1)",
      display:"flex", alignItems:"center", justifyContent:"center",
      position:"relative", zIndex:2
    }}>
      <BoxIcon size={28}/>
      {/* Checkmark - box sent */}
      <div style={{
        position:"absolute", top:-8, right:-8,
        width:22, height:22, borderRadius:"50%",
        background:"#fff", border:"1.5px solid rgba(0,0,0,0.1)",
        display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.5L4 7.5L8 3" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>

    {/* Floating "terkirim" badge */}
    <div className="pb-float" style={{
      position:"absolute", top:"10%", right:"12%",
      background:"#fff", border:"1px solid rgba(0,0,0,0.1)",
      borderRadius:10, padding:"6px 12px",
      display:"flex", alignItems:"center", gap:6,
      animationDelay:".3s"
    }}>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <circle cx="5.5" cy="5.5" r="5" stroke="rgba(0,0,0,0.1)" strokeWidth=".8"/>
        <path d="M3 5.5l2 2 3-3" stroke="rgba(0,0,0,0.1)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      <span style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,0.1)", fontFamily:"var(--font-sans)" }}>Barang terkirim</span>
    </div>

    {/* Empty wallet floating */}
    {[
      { bottom:"18%", left:"14%", delay:"0s",   rot:"-10deg" },
      { bottom:"30%", left:"52%", delay:".5s",  rot:"6deg" },
    ].map((p,i) => (
      <div key={i} className="pb-float" style={{
        position:"absolute", bottom:p.bottom, left:p.left,
        background:"rgba(0,0,0,0.1)", border:"1px dashed rgba(0,0,0,0.1)",
        borderRadius:10, padding:"5px 10px",
        display:"flex", alignItems:"center", gap:5,
        transform:`rotate(${p.rot})`, animationDelay:p.delay,
        opacity:.7
      }}>
        <WalletIcon size={12}/>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize:10, fontWeight:600, color:"rgba(0,0,0,0.1)", fontFamily:"var(--font-sans)" }}>Belum cair</span>
      </div>
    ))}

    {/* Waiting indicator */}
    <div style={{
      position:"absolute", bottom:"0%", right:"16%",
      background:"rgba(0,0,0,0.1)", borderRadius:10,
      padding:"4px 10px", display:"flex", alignItems:"center", gap:5
    }}>
      <div className="pb-blink" style={{ width:6, height:6, borderRadius:"50%", background:"rgba(0,0,0,0.1)" }}/>
      <span style={{ fontSize:10, fontWeight:600, color:"rgba(0,0,0,0.1)", fontFamily:"var(--font-sans)" }}>Menunggu tanpa kepastian</span>
    </div>
  </div>
);

// ─── Solution Visual (Shield) ─────────────────────────────────────────────────
const SolutionVisual = () => (
  <div style={{ position:"relative", height:200, display:"flex", alignItems:"center", justifyContent:"center", margin:"8px 0 28px" }}>
    {/* Spinning ring */}
    <div className="pb-spin" style={{
      position:"absolute", width:200, height:200, borderRadius:"50%",
      border:"1px dashed rgba(255,255,255,.1)", pointerEvents:"none"
    }}/>
    <div style={{
      position:"absolute", width:148, height:148, borderRadius:"50%",
      border:"1px dashed rgba(255,255,255,.07)", pointerEvents:"none",
      animation:"pbSpin 18s linear infinite reverse"
    }}/>

    {/* Center shield orb */}
    <div className="pb-float" style={{
      width:88, height:88, borderRadius:26,
      background:"rgba(255,255,255,.1)",
      border:"1px solid rgba(255,255,255,.14)",
      display:"flex", alignItems:"center", justifyContent:"center",
      position:"relative", zIndex:2 }}>
      <div className="pb-glow" style={{
        position:"absolute", inset:0, borderRadius:26,
        background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,.12) 0%, transparent 70%)",
        pointerEvents:"none"
      }}/>
      <ShieldIcon size={34}/>
    </div>

    {/* Connection nodes */}
    {[
      { angle: 0,   label:"Dana Aman",     sub:"Terkunci Escrow" },
      { angle: 120, label:"Barang Sampai", sub:"Konfirmasi Nyata" },
      { angle: 240, label:"Dana Cair",     sub:"Instan & Pasti" },
    ].map((node, i) => {
      const rad = (node.angle - 90) * (Math.PI / 180);
      const r = 80;
      const x = Math.cos(rad) * r;
      const y = Math.sin(rad) * r;
      return (
        <div key={i} className="pb-float" style={{
          position:"absolute",
          left:`calc(50% + ${x}px - 30px)`,
          top:`calc(50% + ${y}px - 20px)`,
          animationDelay:`${i * 0.5}s`,
          zIndex:3
        }}>
          <div style={{
            background:"rgba(255,255,255,.08)",
            border:"1px solid rgba(255,255,255,.12)",
            borderRadius:12,
            padding:"6px 10px",
            textAlign:"center",
            backdropFilter:"blur(8px)",
            minWidth:72
          }}>
            <p style={{ fontSize:9.5, fontWeight:700, color:"rgba(255,255,255,.85)", fontFamily:"var(--font-sans)", margin:"0 0 1px", letterSpacing:".02em" }}>
              {node.label}
            </p>
            <p style={{ fontSize:8.5, color:"rgba(255,255,255,.38)", fontFamily:"var(--font-sans)", margin:0 }}>
              {node.sub}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

// ─── Risk data ────────────────────────────────────────────────────────────────
const buyerRisks = [
  { title:"Uang ditransfer, barang tidak datang",      sub:"Penjual memutus komunikasi setelah menerima pembayaran" },
  { title:"Barang tidak sesuai deskripsi",             sub:"Foto berbeda jauh dari kondisi asli, tidak bisa dikembalikan" },
  { title:"Tidak ada bukti atau rekam jejak transaksi",sub:"Tidak ada perlindungan hukum tanpa dokumentasi resmi" },
  { title:"Dipaksa transfer langsung tanpa jaminan",   sub:"'Bayar dulu, nanti dikirim' — skenario penipuan paling umum" },
];

const sellerRisks = [
  { title:"Barang terkirim, uang tidak kunjung cair",  sub:"Pembeli menghilang atau mengklaim belum menerima barang" },
  { title:"Chargeback setelah barang diterima",        sub:"Pembayaran dibatalkan secara sepihak setelah konfirmasi" },
  { title:"Klaim palsu untuk mendapat refund",         sub:"Pembeli beritikad buruk mengajukan sengketa tidak jujur" },
  { title:"Tidak ada mekanisme resolusi yang adil",    sub:"Sengketa diselesaikan tanpa pihak ketiga yang netral" },
];

const solutions = [
  { label:"Dana Pembeli Diamankan Dulu",   sub:"Dana masuk escrow sebelum barang dikirim" },
  { label:"Penjual Baru Kirim Setelah Ada Konfirmasi Dana", sub:"Tidak ada risiko kirim tanpa jaminan" },
  { label:"Pembeli Konfirmasi Sebelum Dana Cair", sub:"Penjual terlindungi dari klaim palsu" },
  { label:"Mediasi Gratis Jika Ada Sengketa",     sub:"Tim netral Kahade menengahi secara adil" },
  { label:"Rekam Jejak Transaksi Permanen",        sub:"Semua bukti tersimpan, terlindungi hukum" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { val:"3.2M+",  label:"Kasus Penipuan Online\ndi Indonesia (2023)" },
  { val:"Rp 2.5T", label:"Kerugian Konsumen\nper Tahun" },
  { val:"67%",    label:"Transaksi P2P Tanpa\nPerlindungan" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProblemSection() {
  const [sectionRef, inView] = useInView(0.08);
  const [strikesActive, setStrikesActive] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setStrikesActive(true), 900);
    return () => clearTimeout(timeout);
  }, [inView]);

const c = (base: string, d = ""): string => `${base} ${d} ${inView ? "pv" : ""}`;

  return (
    <>
      <section
        id="platform"
        ref={sectionRef}
        className="pb-root relative overflow-hidden"
        style={{ padding:"100px 0 96px", background:"#fafafa" }}
      >
        <PbAbstractBg/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div style={{ textAlign:"center", marginBottom:72 }}>

            {/* Eyebrow */}
            <div className={c("pb-fu pb-d0")} style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"7px 16px", borderRadius:99,
                border:"1px solid rgba(0,0,0,0.1)",
                background:"rgba(0,0,0,0.1)",
                display: "none"
              }}>
                <AlertIcon size={13}/>
                <span style={{
                  fontSize:11.5, fontWeight:700, color:"rgba(0,0,0,0.1)",
                  fontFamily:"var(--font-sans)", letterSpacing:".05em", textTransform:"uppercase"
                }}>
                  Masalah yang Kami Selesaikan
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className={c("pb-fu pb-d1")}>
              <h2 style={{
                fontFamily:"var(--font-sans)",
                fontSize:"clamp(30px,5vw,62px)",
                fontWeight:800, color:"#000",
                letterSpacing:"-.04em", lineHeight:1.05,
                margin:"0 auto 20px", maxWidth:640
              }}>
                Transaksi Online
                {" "}<span style={{ color:"rgba(0,0,0,0.1)" }}>Penuh</span>
                <br/>Risiko Yang Nyata.
              </h2>
            </div>

            {/* Sub */}
            <div className={c("pb-fu pb-d2")}>
              <p style={{
                fontFamily:"var(--font-sans)",
                fontSize:"clamp(14px,1.5vw,16.5px)",
                color:"rgba(0,0,0,0.1)", lineHeight:1.78,
                maxWidth:500, margin:"0 auto"
              }}>
                Setiap hari jutaan transaksi P2P terjadi tanpa perlindungan. Kedua pihak menanggung risiko besar — dan tidak harus begitu.
              </p>
            </div>
          </div>

          {/* ── Statistics Bar ────────────────────────────────────────────────── */}
          <div className={c("pb-fu pb-d2")} style={{ marginBottom:56 }}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
              borderRadius:20,
              border:"1px solid rgba(0,0,0,0.1)",
              background:"#fff",
              overflow:"hidden" }}>
              {stats.map((s,i) => (
                <div key={i} className="pb-stat">
                  <p style={{
                    fontFamily:"var(--font-sans)",
                    fontSize:"clamp(22px,3.5vw,34px)",
                    fontWeight:800, color:"#000",
                    letterSpacing:"-.04em", lineHeight:1,
                    margin:"0 0 6px"
                  }}>{s.val}</p>
                  <p style={{
                    fontFamily:"var(--font-sans)",
                    fontSize:11.5, color:"rgba(0,0,0,0.1)",
                    fontWeight:500, margin:0,
                    textAlign:"center", lineHeight:1.5,
                    whiteSpace:"pre-line"
                  }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── MAIN: Problem vs Solution ─────────────────────────────────────── */}
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap:16,
            alignItems:"start"
          }}>

            {/* ── BUYER RISK CARD ── */}
            <div className={`pb-risk-card pb-fl pb-d3 ${inView?"pv":""}`}>
              <div className="pb-shimmer"/>

              {/* Card header */}
              <div style={{
                padding:"26px 28px 20px",
                borderBottom:"1px solid rgba(0,0,0,0.1)",
                display:"flex", alignItems:"center", gap:14
              }}>
                <div style={{
                  width:46, height:46, borderRadius:14,
                  background:"rgba(0,0,0,0.1)",
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                }}>
                  <WalletIcon size={22}/>
                </div>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <div className="pb-badge" style={{ background:"rgba(0,0,0,0.1)", border:"1px solid rgba(0,0,0,0.1)", color:"rgba(0,0,0,0.1)" }}>
                      <UserIcon/>
                      Pembeli
                    </div>
                    <XIcon size={16} op={.4}/>
                  </div>
                  <h3 style={{
                    fontFamily:"var(--font-sans)",
                    fontSize:17, fontWeight:800, color:"#000",
                    letterSpacing:"-.03em", margin:0, lineHeight:1.15
                  }}>
                    Uang Pergi,{" "}
                    <span className={`pb-strike${strikesActive?" active":""}`}
                      style={{ textDecoration:"none" }}>
                      Barang
                    </span>{" "}
                    Tak Datang
                  </h3>
                </div>
              </div>

              {/* Visual */}
              <div style={{ padding:"0 28px" }}>
                <MoneyGoneVisual inView={inView}/>
              </div>

              {/* Risks list */}
              <div style={{ padding:"0 24px 24px" }}>
                {buyerRisks.map((r,i) => (
                  <div key={i} className={`pb-risk-row pb-fu pb-d${4+i} ${inView?"pv":""}`}>
                    <div style={{ marginTop:2, flexShrink:0 }}>
                      <XIcon size={18} op={.5}/>
                    </div>
                    <div>
                      <p style={{
                        fontFamily:"var(--font-sans)",
                        fontSize:13.5, fontWeight:600, color:"#000",
                        margin:"0 0 3px", lineHeight:1.3
                      }}>{r.title}</p>
                      <p style={{
                        fontFamily:"var(--font-sans)",
                        fontSize:12, color:"rgba(0,0,0,0.1)",
                        margin:0, lineHeight:1.5
                      }}>{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CENTER: VS → Solution ── */}
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

              {/* VS pill */}
              <div className={c("pb-fs pb-d4")} style={{
                display:"flex", alignItems:"center",
                justifyContent:"center", gap:16, padding:"8px 0"
              }}>
                <div style={{ flex:1, height:1, background:"rgba(0,0,0,0.1)" }}/>
                <div style={{
                  width:44, height:44, borderRadius:"50%",
                  background:"#000",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0
                }}>
                  <span style={{
                    fontFamily:"var(--font-sans)",
                    fontSize:10, fontWeight:800, color:"rgba(255,255,255,.6)",
                    letterSpacing:".06em"
                  }}>VS</span>
                </div>
                <div style={{ flex:1, height:1, background:"rgba(0,0,0,0.1)" }}/>
              </div>

              {/* Solution card */}
              <div className={`pb-sol-card pb-fs pb-d5 ${inView?"pv":""}`}>
                {/* Dot bg */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                  style={{ borderRadius:22 }}>
                  <pattern id="sol-dot" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx=".7" cy=".7" r=".7" fill="rgba(255,255,255,.06)"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#sol-dot)"/>
                  <radialGradient id="sol-rg" cx="30%" cy="25%" r="55%">
                    <stop offset="0%" stopColor="#fff" stopOpacity=".06"/>
                    <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                  </radialGradient>
                  <rect width="100%" height="100%" fill="url(#sol-rg)"/>
                  <circle cx="-4%" cy="-4%" r="160" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
                  <circle cx="104%" cy="104%" r="160" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth=".7"/>
                </svg>

                <div style={{ padding:"28px", position:"relative", zIndex:1 }}>
                  {/* Sol header */}
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:22 }}>
                    <div style={{
                      width:46, height:46, borderRadius:14,
                      background:"rgba(255,255,255,.1)",
                      border:"1px solid rgba(255,255,255,.14)",
                      display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                    }}>
                      <ShieldIcon size={22}/>
                    </div>
                    <div>
                      <div className="pb-badge" style={{
                        background:"rgba(255,255,255,.1)",
                        border:"1px solid rgba(255,255,255,.15)",
                        color:"rgba(255,255,255,.55)",
                        marginBottom:5
                      }}>
                        <span style={{ position:"relative", display:"inline-flex", width:6, height:6 }}>
                          <span style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#fff", opacity:.4, animation:"pbPing 1.8s ease infinite" }}/>
                          <span style={{ width:6, height:6, borderRadius:"50%", background:"#fff", display:"block", position:"relative" }}/>
                        </span>
                        Solusi Kahade
                      </div>
                      <h3 style={{
                        fontFamily:"var(--font-sans)",
                        fontSize:18, fontWeight:800, color:"#fff",
                        letterSpacing:"-.03em", margin:0, lineHeight:1.15
                      }}>Satu Platform,<br/>Dua Pihak Terlindungi.</h3>
                    </div>
                  </div>

                  {/* Solution visual */}
                  <SolutionVisual/>

                  {/* Solution list */}
                  <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                    {solutions.map((s,i) => (
                      <div key={i} style={{
                        display:"flex", alignItems:"flex-start", gap:12,
                        padding:"13px 0",
                        borderBottom: i < solutions.length-1 ? "1px solid rgba(255,255,255,.07)" : "none"
                      }}>
                        <div style={{ marginTop:1, flexShrink:0 }}>
                          <CheckIcon white/>
                        </div>
                        <div>
                          <p style={{
                            fontFamily:"var(--font-sans)",
                            fontSize:13.5, fontWeight:600, color:"rgba(255,255,255,.85)",
                            margin:"0 0 3px", lineHeight:1.3
                          }}>{s.label}</p>
                          <p style={{
                            fontFamily:"var(--font-sans)",
                            fontSize:12, color:"rgba(255,255,255,.38)",
                            margin:0, lineHeight:1.5
                          }}>{s.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid rgba(255,255,255,.08)" }}>
                    <Link href={homeAnchors.howItWorks} style={{
                      display:"flex", alignItems:"center", justifyContent:"center", gap:9,
                      background:"#fff", color:"#000",
                      borderRadius:13, padding:"14px 24px",
                      fontFamily:"var(--font-sans)",
                      fontSize:14, fontWeight:700, letterSpacing:"-.02em",
                      textDecoration:"none",
                      transition:"all .2s",
                      width:"100%"
                    }}
                      onMouseOver={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,0.1)";}}
                      onMouseOut={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)";}}
                    >
                      Mulai Bertransaksi Aman
                      <ArrowRightIcon/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SELLER RISK CARD ── */}
            <div className={`pb-risk-card pb-fr pb-d3 ${inView?"pv":""}`}>
              <div className="pb-shimmer"/>

              {/* Card header */}
              <div style={{
                padding:"26px 28px 20px",
                borderBottom:"1px solid rgba(0,0,0,0.1)",
                display:"flex", alignItems:"center", gap:14
              }}>
                <div style={{
                  width:46, height:46, borderRadius:14,
                  background:"rgba(0,0,0,0.1)",
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                }}>
                  <BoxIcon size={22}/>
                </div>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <div className="pb-badge" style={{ background:"rgba(0,0,0,0.1)", border:"1px solid rgba(0,0,0,0.1)", color:"rgba(0,0,0,0.1)" }}>
                      <UserIcon/>
                      Penjual
                    </div>
                    <XIcon size={16} op={.4}/>
                  </div>
                  <h3 style={{
                    fontFamily:"var(--font-sans)",
                    fontSize:17, fontWeight:800, color:"#000",
                    letterSpacing:"-.03em", margin:0, lineHeight:1.15
                  }}>
                    Barang Terkirim,{" "}
                    <span className={`pb-strike${strikesActive?" active":""}`}
                      style={{ textDecoration:"none" }}>
                      Uang
                    </span>{" "}
                    Tak Cair
                  </h3>
                </div>
              </div>

              {/* Visual */}
              <div style={{ padding:"0 28px" }}>
                <BoxShippedVisual inView={inView}/>
              </div>

              {/* Risks list */}
              <div style={{ padding:"0 24px 24px" }}>
                {sellerRisks.map((r,i) => (
                  <div key={i} className={`pb-risk-row pb-fu pb-d${4+i} ${inView?"pv":""}`}>
                    <div style={{ marginTop:2, flexShrink:0 }}>
                      <XIcon size={18} op={.5}/>
                    </div>
                    <div>
                      <p style={{
                        fontFamily:"var(--font-sans)",
                        fontSize:13.5, fontWeight:600, color:"#000",
                        margin:"0 0 3px", lineHeight:1.3
                      }}>{r.title}</p>
                      <p style={{
                        fontFamily:"var(--font-sans)",
                        fontSize:12, color:"rgba(0,0,0,0.1)",
                        margin:0, lineHeight:1.5
                      }}>{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom quote strip ───────────────────────────────────────────── */}
          <div className={c("pb-fu pb-d9")} style={{ marginTop:56, textAlign:"center" }}>
            <div style={{
              display:"inline-block",
              padding:"18px 32px",
              borderRadius:16,
              border:"1px solid rgba(0,0,0,0.1)",
              background:"#fff",
              maxWidth:580
            }}>
              <p style={{
                fontFamily:"var(--font-sans)",
                fontSize:"clamp(14px,2vw,18px)",
                fontWeight:700, color:"#000",
                letterSpacing:"-.03em", margin:"0 0 8px",
                lineHeight:1.35
              }}>
                "Tidak ada yang harus menanggung risiko sendirian dalam transaksi."
              </p>
              <p style={{
                fontFamily:"var(--font-sans)",
                fontSize:13, color:"rgba(0,0,0,0.1)",
                margin:0, fontStyle:"italic"
              }}>
                Kahade hadir sebagai pihak ketiga yang netral, adil, dan terpercaya — melindungi semua pihak sekaligus.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

