"use client";

import { useState } from "react";
import Link from "next/link";
import { useInView } from "@/src/hooks/useInView";
import {
  Wallet, Truck, CheckCircle, Banknote, ArrowRight, Shield,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */
const steps = [
  {
    id: 1,
    icon: Wallet,
    role: "Pembeli",
    roleColor: "bg-foreground text-background",
    title: "Kirim Dana ke Escrow",
    desc: "Pembeli mentransfer dana ke rekening escrow Kahade. Dana tidak langsung ke penjual — tersimpan aman dan terlindungi sampai transaksi selesai.",
    points: ["Dana masuk rekening terpisah", "Penjual mendapat notifikasi instan", "Bukti transfer tercatat otomatis"],
    visual: <EscrowFundVisual />,
  },
  {
    id: 2,
    icon: Truck,
    role: "Penjual",
    roleColor: "bg-muted text-foreground border border-border",
    title: "Penjual Kirim Barang",
    desc: "Setelah konfirmasi dana masuk, penjual mengirimkan barang sesuai kesepakatan. Tracking pengiriman terintegrasi langsung di platform.",
    points: ["Penjual mendapat jaminan pembayaran", "Tracking pengiriman terintegrasi", "Batas waktu pengiriman disepakati bersama"],
    visual: <ShipmentVisual />,
  },
  {
    id: 3,
    icon: CheckCircle,
    role: "Pembeli",
    roleColor: "bg-foreground text-background",
    title: "Verifikasi & Konfirmasi",
    desc: "Pembeli memeriksa barang yang diterima. Jika sesuai, pembeli mengkonfirmasi dan dana dilepas. Jika ada masalah, dispute dapat diajukan.",
    points: ["Masa inspeksi 3 hari kerja", "Fitur dispute jika ada masalah", "Tim mediasi siap membantu 24/7"],
    visual: <VerifyVisual />,
  },
  {
    id: 4,
    icon: Banknote,
    role: "Penjual",
    roleColor: "bg-muted text-foreground border border-border",
    title: "Dana Cair ke Penjual",
    desc: "Setelah konfirmasi, dana langsung dicairkan ke rekening penjual. Proses cepat, transparan, dan tercatat permanen di sistem.",
    points: ["Pencairan dalam 1×24 jam", "Bukti transfer otomatis", "Riwayat transaksi permanen"],
    visual: <PayoutVisual />,
  },
];

/* ── Mini visuals for each step ── */
function EscrowFundVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[200px]">
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">Dana Escrow</span>
            <div className="w-5 h-5 rounded bg-foreground flex items-center justify-center">
              <Shield className="w-3 h-3 text-background" />
            </div>
          </div>
          <p className="text-lg font-bold text-foreground mb-3">Rp 5.500.000</p>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-3">
            <div className="h-full bg-foreground rounded-full" style={{ width: "100%" }} />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-[10px] text-muted-foreground font-medium">Terlindungi di escrow</span>
          </div>
        </div>
        {/* Arrow down */}
        <div className="flex justify-center mt-2">
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-px h-4 bg-border" />
            <div className="w-1.5 h-1.5 border-r border-b border-border rotate-45 -mt-1" />
          </div>
        </div>
        <div className="mt-1 border border-dashed border-border rounded-xl p-3 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
            <Wallet className="w-3 h-3 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">Rekening Penjual (terkunci)</span>
        </div>
      </div>
    </div>
  );
}

function ShipmentVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] space-y-2">
        {[
          { label: "Paket disiapkan", done: true },
          { label: "Diserahkan kurir", done: true },
          { label: "Dalam perjalanan", done: false, active: true },
          { label: "Tiba di tujuan", done: false },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full flex-shrink-0 border flex items-center justify-center
              ${s.done ? "bg-foreground border-foreground" : s.active ? "border-foreground bg-white" : "border-border bg-white"}`}>
              {s.done && <svg width="8" height="8" viewBox="0 0 8 8"><polyline points="1.5,4 3,5.5 6.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>}
              {s.active && <div className="w-1.5 h-1.5 rounded-full bg-foreground" />}
            </div>
            <div className={`flex-1 text-[11px] font-medium ${s.done ? "text-muted-foreground line-through" : s.active ? "text-foreground" : "text-muted-foreground/50"}`}>
              {s.label}
            </div>
            {s.active && <span className="text-[9px] font-bold bg-muted border border-border rounded-full px-2 py-0.5 uppercase tracking-wide">Live</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function VerifyVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] space-y-2.5">
        <div className="bg-white border border-border rounded-xl p-3">
          <div className="flex items-start gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-foreground">Barang diterima</p>
              <p className="text-[10px] text-muted-foreground">Kondisi sesuai deskripsi</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="border-2 border-dashed border-border rounded-lg h-10 flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground">Foto bukti</span>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg h-10 flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground">Foto bukti</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-foreground text-background rounded-lg py-2 flex items-center justify-center">
            <span className="text-[10px] font-bold">Konfirmasi</span>
          </div>
          <div className="flex-1 border border-border rounded-lg py-2 flex items-center justify-center">
            <span className="text-[10px] font-medium text-muted-foreground">Dispute</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayoutVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[200px]">
        <div className="bg-white border border-border rounded-xl p-4 text-center">
          <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center mx-auto mb-3">
            <Banknote className="w-5 h-5 text-background" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground mb-1">Pencairan Dana</p>
          <p className="text-xl font-bold text-foreground mb-1">Rp 5.500.000</p>
          <p className="text-[10px] text-muted-foreground mb-3">→ Rek. Penjual</p>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-[10px] font-medium text-foreground">Berhasil dicairkan</span>
          </div>
        </div>
        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground">Estimasi: 1×24 jam kerja</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION
   ═══════════════════════════════════════════ */
export default function HowItWorksSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.04 });
  const [activeStep, setActiveStep] = useState(0);

  const step = steps[activeStep];
  const StepIcon = step.icon;

  return (
    <section id="cara-kerja" ref={sectionRef} className="section bg-white">
      <div className="container-base">

        {/* ── Header ── */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Simpel. Aman. Terpercaya.</h2>
        </div>

        {/* ── Step Card ── */}
        <div className={`max-w-4xl mx-auto anim-fade-up delay-100 ${inView ? "in-view" : ""}`}>

          {/* Step detail card */}
          <div
            key={activeStep}
            className="border border-border rounded-2xl overflow-hidden"
            style={{ animation: "stepFadeIn 0.25s ease both" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — content */}
              <div className="p-7 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <StepIcon className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${step.roleColor}`}>
                      {step.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {/* Nav */}
                <div className="flex items-center gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    aria-label="Langkah sebelumnya"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    aria-label="Langkah berikutnya"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-muted-foreground ml-1">
                    {activeStep + 1} / {steps.length}
                  </span>
                </div>
              </div>

              {/* Right — visual */}
              <div className="bg-muted/40 border-t lg:border-t-0 lg:border-l border-border min-h-[240px] lg:min-h-[300px] flex items-center justify-center">
                {step.visual}
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted-foreground"}`}
                aria-label={`Ke langkah ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`mt-10 text-center anim-fade-up delay-200 ${inView ? "in-view" : ""}`}>
          <Link href="/support"
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
            Lihat panduan lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
