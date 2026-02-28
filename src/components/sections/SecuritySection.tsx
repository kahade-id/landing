"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

const LockIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="11" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const EyeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ZapIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" />
  </svg>
);

const AlertTriangleIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ActivityIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,8 6.5,11.5 13,5" />
  </svg>
);

const ServerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const GlobeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const DatabaseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

// ─── useInView Hook ────────────────────────────────────────────────────────────
function useInView(threshold = 0.15): [RefObject<any>, boolean] {
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

// ─── useCounter Hook ──────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      setValue(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

// ─── Security Shield Visualization ───────────────────────────────────────────
const ShieldViz = ({ inView }: { inView: boolean }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
      {/* Outer pulse ring */}
      <div className="absolute inset-0 rounded-full sec-pulse-ring" style={{ border: "1px solid rgba(0,0,0,.07)" }} />
      {/* Orbit rings */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
        {/* Ring 1 */}
        <circle cx="160" cy="160" r="130" fill="none" stroke="rgba(0,0,0,.06)" strokeWidth="1" strokeDasharray="4 6" />
        {/* Ring 2 */}
        <circle cx="160" cy="160" r="95" fill="none" stroke="rgba(0,0,0,.08)" strokeWidth="1" strokeDasharray="2 8" />
        {/* Animated orbit line */}
        <g className={inView ? "sec-layer-orbit" : ""} style={{ transformOrigin: "160px 160px" }}>
          <circle cx="290" cy="160" r="4.5" fill="rgba(0,0,0,.18)" />
          <circle cx="30" cy="160" r="3" fill="rgba(0,0,0,.1)" />
        </g>
        <g className={inView ? "sec-layer-orbit-rev" : ""} style={{ transformOrigin: "160px 160px" }}>
          <circle cx="160" cy="65" r="3.5" fill="rgba(0,0,0,.15)" />
          <circle cx="160" cy="255" r="2.5" fill="rgba(0,0,0,.09)" />
        </g>
        {/* Lock node dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 160 + 130 * Math.cos(rad);
          const cy = 160 + 130 * Math.sin(rad);
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r="6" fill="white" stroke="rgba(0,0,0,.12)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="2.5" fill="rgba(0,0,0,.2)" />
            </g>
          );
        })}
      </svg>

      {/* Center shield */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-white border border-black/10 shadow-xl shadow-black/8 sec-float`}
        style={{ backdropFilter: "blur(12px)" }}>
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="sec-scan-line absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-black/20 to-transparent" style={{ top: "0" }} />
        </div>
        <div className="text-black/80 mb-2">
          <ShieldIcon size={36} />
        </div>
        <div className="text-[11px] font-bold text-black/70 tracking-widest uppercase">Protected</div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-black/50 sec-blink" />
          <span className="text-[10px] text-black/40 font-medium">Active</span>
        </div>
      </div>

      {/* Floating tags */}
      {inView && (
        <>
          <div className="absolute top-6 right-4 bg-white border border-black/10 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-1.5"
            style={{ animation: "secFadeIn .5s .3s forwards", opacity: 0 }}>
            <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
            <span className="text-[10px] font-semibold text-black/60">SSL 256-bit</span>
          </div>
          <div className="absolute bottom-12 left-2 bg-white border border-black/10 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-1.5"
            style={{ animation: "secFadeIn .5s .5s forwards", opacity: 0 }}>
            <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
            <span className="text-[10px] font-semibold text-black/60">2FA Enabled</span>
          </div>
          <div className="absolute bottom-6 right-6 bg-white border border-black/10 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-1.5"
            style={{ animation: "secFadeIn .5s .7s forwards", opacity: 0 }}>
            <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
            <span className="text-[10px] font-semibold text-black/60">Escrow Monitored</span>
          </div>
        </>
      )}
    </div>
  );
};

// ─── Uptime Bar ────────────────────────────────────────────────────────────────
const UptimeBar = ({ inView }: { inView: boolean }) => {
  const weeks = Array.from({ length: 52 }, (_, i) => ({
    filled: i < 51 || Math.random() > 0.1,
    partial: i === 11 || i === 34,
  }));
  return (
    <div className="flex gap-0.5 flex-wrap">
      {weeks.map((w, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{
            width: 7, height: 20,
            background: w.partial ? "rgba(0,0,0,.25)" : w.filled ? "rgba(0,0,0,.85)" : "rgba(0,0,0,.06)",
            opacity: inView ? 1 : 0,
            transition: `opacity .3s ${.01 * i}s`,
          }}
        />
      ))}
    </div>
  );
};

// ─── Security Features Data ───────────────────────────────────────────────────
const features = [
  {
    icon: <LockIcon size={22} />,
    label: "Enkripsi Saat Transit",
    desc: "Koneksi layanan dirancang memakai praktik enkripsi modern agar data transaksi tidak mudah dibaca pihak yang tidak berwenang.",
    stats: "TLS",
    statsLabel: "Transport",
  },
  {
    icon: <EyeIcon size={22} />,
    label: "Monitoring Operasional",
    desc: "Tim dan sistem pemantauan membantu meninjau sinyal operasional penting, insiden, dan aktivitas yang perlu ditindaklanjuti.",
    stats: "Live",
    statsLabel: "Observability",
  },
  {
    icon: <ZapIcon size={22} />,
    label: "Pemeriksaan Risiko",
    desc: "Pemeriksaan bertahap membantu menandai transaksi yang perlu verifikasi tambahan sebelum dana diteruskan.",
    stats: "Review",
    statsLabel: "Rule Check",
  },
  {
    icon: <ActivityIcon size={22} />,
    label: "Audit Trail Lengkap",
    desc: "Perubahan status transaksi, komunikasi penting, dan langkah verifikasi dirangkum agar mudah ditinjau ulang.",
    stats: "Log",
    statsLabel: "History",
  },
];

// ─── Certifications ────────────────────────────────────────────────────────────
const certs = [
  {
    label: "Workflow Review",
    sub: "Operational Readiness",
    desc: "Alur layanan, bantuan, dan komunikasi produk disajikan lebih transparan untuk pengguna.",
    num: "Reviewed",
  },
  {
    label: "Keamanan Data",
    sub: "Information Security",
    desc: "Praktik keamanan informasi ditinjau secara berkala melalui proses internal, dokumentasi, dan checklist operasional.",
    num: "Internal Review",
  },
  {
    label: "Kontrol Akses",
    sub: "Payment Security",
    desc: "Kontrol akses dibangun dengan prinsip pembatasan hak, pemisahan peran, dan peninjauan berkala.",
    num: "Access Policy",
  },
  {
    label: "Monitoring",
    sub: "Operational Oversight",
    desc: "Monitoring layanan dan status operasional ditampilkan agar pengguna punya visibilitas lebih baik terhadap perubahan penting.",
    num: "Status Review",
  },
];

// ─── Infrastructure Items ──────────────────────────────────────────────────────
const infraItems = [
  { icon: <ServerIcon size={18} />, label: "Server Redundan", val: "Layanan dirancang dengan lapisan redundansi agar gangguan lebih mudah ditangani" },
  { icon: <DatabaseIcon size={18} />, label: "Backup Otomatis", val: "Proses backup dan pemulihan diuji sebagai bagian dari kesiapan operasional" },
  { icon: <GlobeIcon size={18} />, label: "Distribusi Akses", val: "Akses layanan dipantau untuk membantu menjaga pengalaman yang stabil" },
  { icon: <AlertTriangleIcon size={18} />, label: "Rencana Pemulihan", val: "Prosedur eskalasi dan pemulihan disiapkan untuk kondisi operasional yang tidak normal" },
];

// ─── Abstract Background ───────────────────────────────────────────────────────
const AbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="sec-bg1" cx="0%" cy="0%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity=".025" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="sec-bg2" cx="100%" cy="100%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity=".02" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#sec-bg1)" />
    <rect width="100%" height="100%" fill="url(#sec-bg2)" />
    <circle cx="8%" cy="18%" r="200" fill="none" stroke="rgba(0,0,0,.04)" strokeWidth="1" />
    <circle cx="8%" cy="18%" r="130" fill="none" stroke="rgba(0,0,0,.03)" strokeWidth="1" />
    <circle cx="95%" cy="85%" r="180" fill="none" stroke="rgba(0,0,0,.04)" strokeWidth="1" />
  </svg>
);

// ─── Main Component ────────────────────────────────────────────────────────────
export default function SecuritySection() {
  const [sectionRef, inView] = useInView(0.1);
  const [vizRef, vizInView] = useInView(0.2);
  const [certRef, certInView] = useInView(0.15);

  const uptime = useCounter(9999, 1800, inView);
  const threats = useCounter(2847, 2000, inView);
  const response = useCounter(280, 1500, inView);

  const cls = (base: string, visible: boolean, delay = ""): string =>
    `${base} ${visible ? "sv" : ""} ${delay}`;

  return (
    <section id="keamanan" ref={sectionRef} className="sec-root relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <AbstractBg />

      {/* Grid bg overlay */}
      <div className="absolute inset-0 sec-grid-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={cls("sec-fade-up", inView, "sec-d0")}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black/70" />
              </span>
              <span className="text-[11px] font-semibold text-black/45 tracking-widest uppercase">Keamanan Berlapis</span>
            </div>
          </div>
          <h2 className={`${cls("sec-fade-up", inView, "sec-d1")} text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold text-black leading-[1.1] tracking-tight`}
            style={{ fontFamily: "var(--font-sans)" }}>
            Dana Anda{" "}
            <span className="relative inline-block">
              Dirancang Lebih Aman
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 240 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M2 6C40 2 80 1 120 2.5C160 4 200 5 238 3"
                  stroke="black" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  strokeDasharray="250"
                  style={inView ? { strokeDashoffset: 0, transition: "stroke-dashoffset 1s 0.8s ease" } : { strokeDashoffset: 250 }}
                />
              </svg>
            </span>
          </h2>
          <p className={`${cls("sec-fade-up", inView, "sec-d2")} mt-5 text-base sm:text-lg text-black/50 leading-relaxed max-w-xl mx-auto`}>
            Pendekatan keamanan berlapis untuk membantu menjaga data, status transaksi, dan visibilitas operasional tetap lebih tertata.
          </p>
          <p className={`${cls("sec-fade-up", inView, "sec-d3")} mt-3 text-xs text-black/35 max-w-2xl mx-auto`}>
            Angka dan visual pada bagian ini digunakan sebagai ilustrasi produk dan operasional, bukan pernyataan sertifikasi atau jaminan legal tertentu.
          </p>
        </div>

        {/* ── Live Stats Bar ────────────────────────────────────────────── */}
        <div className={`${cls("sec-fade-up", inView, "sec-d3")} grid grid-cols-3 gap-px bg-black/8 rounded-2xl overflow-hidden border border-black/8 mb-16 lg:mb-20`}>
          {[
            { label: "Ketersediaan", value: uptime, suffix: "", prefix: "", note: " skor internal" },
            { label: "Sinyal Ditinjau", value: threats, suffix: "+", prefix: "", note: " contoh volume" },
            { label: "Waktu Respons", value: response, suffix: "m", prefix: "", note: " penanganan awal" },
          ].map((s, i) => (
            <div key={i} className="bg-white px-4 sm:px-8 py-6 sm:py-8 flex flex-col items-center text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tabular-nums leading-none"
                style={{ fontFamily: "var(--font-sans)" }}>
                {s.prefix}
                <span className={cls("sec-counter-anim", inView)}>
                  {s.value.toLocaleString()}
                </span>
                {s.suffix}
              </div>
              <div className="text-[11px] sm:text-xs text-black/40 font-medium mt-1.5 leading-snug">
                {s.label}<span className="text-black/25">{s.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Main Content Grid ────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">

          {/* Left: Shield Viz */}
          <div ref={vizRef} className={`${cls("sec-fade-in", vizInView, "sec-d0")} flex justify-center`}>
            <ShieldViz inView={vizInView} />
          </div>

          {/* Right: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className={`${cls("sec-fade-up", vizInView, `sec-d${i + 1}`)} sec-card bg-white border border-black/8 rounded-2xl p-5`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/[.05] flex items-center justify-center text-black/70">
                    {f.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-black leading-none" style={{ fontFamily: "var(--font-sans)" }}>{f.stats}</div>
                    <div className="text-[10px] text-black/35 font-medium mt-0.5">{f.statsLabel}</div>
                  </div>
                </div>
                <div className="font-bold text-[14px] text-black mb-1.5">{f.label}</div>
                <div className="text-[12.5px] text-black/50 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Uptime Section ───────────────────────────────────────────── */}
        <div className={`${cls("sec-fade-up", inView, "sec-d4")} bg-white border border-black/8 rounded-2xl p-6 sm:p-8 mb-8`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div>
              <div className="text-sm font-bold text-black">Ringkasan Pemantauan — 12 Bulan Terakhir</div>
              <div className="text-[12px] text-black/40 mt-0.5">Visual ini bersifat ilustratif untuk menunjukkan pola pemantauan mingguan</div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-black/40 font-medium">
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-black/80 inline-block" /> Uptime</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-black/25 inline-block" /> Partial</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-black/6 border border-black/10 inline-block" /> Downtime</div>
            </div>
          </div>
          <UptimeBar inView={inView} />
          <div className="flex justify-between mt-3 text-[11px] text-black/30 font-medium">
            <span>Awal periode</span>
            <span className="font-bold text-black/60">Visual status layanan internal</span>
            <span>Akhir periode</span>
          </div>
        </div>

        {/* ── Infrastructure ───────────────────────────────────────────── */}
        <div className={`${cls("sec-fade-up", inView, "sec-d5")} grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 lg:mb-20`}>
          {infraItems.map((item, i) => (
            <div key={i} className="sec-card bg-white border border-black/8 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-black/[.04] flex items-center justify-center text-black/50 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[12.5px] font-bold text-black mb-0.5">{item.label}</div>
                <div className="text-[11.5px] text-black/45 leading-snug">{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Certifications ───────────────────────────────────────────── */}
        <div ref={certRef}>
          <div className={`${cls("sec-fade-up", certInView, "sec-d0")} text-center mb-8`}>
            <div className="text-[11px] font-semibold text-black/30 tracking-widest uppercase mb-2">Praktik & Tata Kelola</div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-black" style={{ fontFamily: "var(--font-sans)" }}>
              Pendekatan yang Lebih Transparan
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c, i) => (
              <div
                key={i}
                className={`${cls("sec-fade-up", certInView, `sec-d${i + 1}`)} sec-cert-card relative bg-white/60 border border-black/8 rounded-2xl p-5 text-center overflow-hidden`}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="sec-shimmer-btn absolute inset-0" />
                </div>
                {/* Check badge */}
                <div className="w-10 h-10 rounded-full bg-black/[.04] border border-black/8 flex items-center justify-center mx-auto mb-3 text-black/60">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    className={cls("sec-check-draw", certInView, `sec-d${i + 2}`)}>
                    <polyline points="3,8 6.5,11.5 13,5" />
                  </svg>
                </div>
                <div className="text-[13px] font-extrabold text-black mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>{c.label}</div>
                <div className="text-[10.5px] font-semibold text-black/40 mb-2">{c.sub}</div>
                <div className="text-[11.5px] text-black/45 leading-snug mb-3">{c.desc}</div>
                <div className="text-[10px] text-black/25 font-mono bg-black/[.03] rounded-lg px-2 py-1 inline-block">{c.num}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <div className={`${cls("sec-fade-up", certInView, "sec-d6")} mt-16 text-center`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-black rounded-2xl px-8 py-6 text-white">
            <div className="text-left">
              <div className="font-bold text-base" style={{ fontFamily: "var(--font-sans)" }}>Lihat Pusat Status & Bantuan</div>
              <div className="text-[12.5px] text-white/50 mt-0.5">Pelajari bagaimana alur bantuan, status layanan, dan komunikasi operasional disusun.</div>
            </div>
            <Link href="/status"
              className="sec-shimmer-btn relative flex-shrink-0 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap">
              Buka status layanan →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

