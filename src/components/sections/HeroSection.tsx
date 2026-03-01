"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7.5h9M8.5 3.5l4 4-4 4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="6.25" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.55" />
    <path d="M6.2 5.3 10 7.5 6.2 9.7V5.3Z" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2L3 4.5V8c0 3 2.1 5.7 5 6.5 2.9-.8 5-3.5 5-6.5V4.5L8 2Z" />
    <path d="m5.5 8 1.5 1.5L10.5 6" />
  </svg>
);

const logos = [
  { src: "/compliance/bi_icon.svg", alt: "Bank Indonesia" },
  { src: "/compliance/ppatk_icon.svg", alt: "PPATK" },
  { src: "/compliance/kementrian_icon.svg", alt: "Kementerian Hukum dan HAM" },
  { src: "/compliance/kominfo_icon.svg", alt: "Kominfo" },
];

const flowSteps = [
  { label: "Pembeli menyetor dana", done: true },
  { label: "Penjual mengirim barang", done: true },
  { label: "Pembeli konfirmasi terima", active: true },
  { label: "Dana dilepas ke penjual" },
];

function FloatingCard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = window.setInterval(() => {
      current += 3;
      if (current >= 87) {
        current = 87;
        window.clearInterval(timer);
      }
      setProgress(current);
    }, 30);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="surface-card card-pad ambient-float">
        <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_right,rgba(10,10,10,0.05),transparent_38%)] pointer-events-none" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/40">Dana escrow</p>
            <h3 className="mt-2 text-[30px] font-bold leading-none tracking-[-0.05em] text-black">Rp 12.500.000</h3>
          </div>
          <div className="icon-shell h-11 w-11 rounded-[16px] bg-black text-white">
            <ShieldIcon />
          </div>
        </div>

        <div className="mt-6 rounded-[18px] border border-black/[0.08] bg-black/[0.025] p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-black/48">Verifikasi pengiriman</span>
            <span className="font-semibold text-black">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/[0.08]">
            <div className="h-full rounded-full bg-black transition-[width] duration-75" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {flowSteps.map((step) => (
            <div key={step.label} className="flex items-center gap-3 rounded-[16px] border border-black/[0.06] px-4 py-3">
              <div className={`flex h-5 w-5 items-center justify-center rounded-full ${step.done ? "bg-black text-white" : step.active ? "bg-black/10 text-black" : "border border-black/15 bg-white text-black/35"}`}>
                {step.done ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5 4 7 8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : step.active ? (
                  <span className="h-2 w-2 rounded-full bg-black" />
                ) : null}
              </div>
              <span className={`flex-1 text-sm ${step.done ? "text-black/35 line-through" : step.active ? "font-semibold text-black" : "text-black/48"}`}>{step.label}</span>
              {step.active ? <span className="meta-chip min-h-[26px] px-2.5 text-[9px]">Menunggu</span> : null}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[18px] border border-black/[0.08] bg-black/[0.03] px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-black/34">Pembeli</p>
            <p className="mt-1 text-sm font-semibold text-black">Ari Ramadhan</p>
          </div>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/28">
            <path d="M3.5 9h11M10.5 5.5 14 9l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.12em] text-black/34">Penjual</p>
            <p className="mt-1 text-sm font-semibold text-black">Toko Budi</p>
          </div>
        </div>
      </div>

      <div className="surface-card absolute -left-4 top-7 hidden px-4 py-3 md:flex items-center gap-3">
        <div className="icon-shell h-9 w-9 rounded-[14px] bg-black text-white"><ShieldIcon /></div>
        <div>
          <p className="text-xs font-semibold text-black">Dana aman</p>
          <p className="text-[11px] text-black/42">Terproteksi sampai transaksi selesai</p>
        </div>
      </div>

      <div className="surface-card absolute -right-3 bottom-8 hidden px-4 py-3 md:flex items-center gap-3">
        <span className="live-dot text-black/72" />
        <div>
          <p className="text-xs font-semibold text-black">Transaksi live</p>
          <p className="text-[11px] text-black/42">Monitoring berjalan real-time</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(10,10,10,0.05),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(10,10,10,0.04),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fbfbfa_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.8)_40%,transparent_75%)] pointer-events-none" />

      <div className="section-inner">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-10">
          <div className="flex flex-col items-start gap-7">
            <div className="fade-up">
              <span className="section-kicker">
                <span className="live-dot text-black/70" />
                Platform escrow untuk transaksi bernilai tinggi
              </span>
            </div>

            <div className="fade-up [animation-delay:120ms]">
              <h1 className="m-0 max-w-[12ch] text-[clamp(42px,6vw,76px)] leading-[1.01] tracking-[-0.05em] text-black">
                Kurangi risiko. <span className="text-black/34">Tambah kepercayaan.</span>
              </h1>
            </div>

            <p className="section-lead fade-up [animation-delay:220ms] max-w-[54ch]">
              Dana ditahan sementara di escrow dan baru dilepas saat transaksi selesai serta kedua pihak menyetujui hasilnya. Lebih jelas untuk buyer, lebih tenang untuk seller.
            </p>

            <div className="button-group fade-up [animation-delay:320ms]">
              <Link href={homeAnchors.cta} className="btn-primary">
                Mulai transaksi
                <ArrowRight />
              </Link>
              <Link href={homeAnchors.howItWorks} className="btn-secondary">
                <PlayIcon />
                Lihat cara kerja
              </Link>
            </div>

            <div className="trust-row fade-up [animation-delay:420ms]">
              <span className="trust-item">Escrow workflow transparan</span>
              <span className="trust-item">KYC support</span>
              <span className="trust-item">Monitoring aktif</span>
              <Link href={supportLinks.docs} className="trust-item transition hover:bg-black/[0.06] hover:text-black">
                Dokumentasi
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="fade-in [animation-delay:260ms]">
            <FloatingCard />
          </div>
        </div>

        <div className="mt-16 rounded-[28px] border border-black/[0.08] bg-white/72 px-5 py-5 shadow-[0_18px_50px_rgba(10,10,10,0.04)] backdrop-blur-sm sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/35">Komitmen kepatuhan</p>
              <p className="mt-2 text-sm leading-7 text-black/55">Pendekatan operasional Kahade dibangun dengan fokus pada transparansi alur dana, verifikasi pengguna, dan visibilitas status transaksi.</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:max-w-[540px] sm:grid-cols-4">
              {logos.map((logo) => (
                <div key={logo.alt} className="flex h-14 items-center justify-center rounded-[18px] border border-black/[0.07] bg-black/[0.02] px-3">
                  <img src={logo.src} alt={logo.alt} loading="lazy" className="max-h-7 w-auto opacity-65 grayscale" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
