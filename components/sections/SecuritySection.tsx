"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/src/hooks/useInView";
import {
  Lock, Eye, FileCheck, Server,
  Shield, UserCheck, Bell, Key, X,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */
const topFeatures = [
  { icon: Lock,      title: "Enkripsi Data",      subtitle: "256-bit AES",          desc: "Setiap data dan transaksi diproteksi dengan enkripsi standar industri perbankan. Tidak ada pihak mana pun yang bisa mengakses data Anda tanpa otorisasi." },
  { icon: Eye,       title: "Pantau 24/7",         subtitle: "Real-time Monitor",    desc: "Tim kami memantau seluruh aktivitas transaksi sepanjang waktu. Anomali terdeteksi dan ditangani secara real-time." },
  { icon: FileCheck, title: "Jejak Audit",          subtitle: "Immutable Log",        desc: "Setiap tindakan tercatat, dapat ditelusuri, dan tidak bisa diubah. Transparansi penuh untuk setiap transaksi." },
  { icon: Server,    title: "Rekening Terpisah",    subtitle: "Segregated Accounts",  desc: "Dana escrow disimpan di rekening terpisah dari operasional perusahaan. Uang Anda tidak pernah bercampur dengan aset bisnis kami." },
];

const bottomFeatures = [
  { icon: Shield,    title: "Anti Penipuan",        subtitle: "Fraud Detection",      desc: "Sistem AI kami mendeteksi pola transaksi mencurigakan dan memblokir potensi penipuan secara otomatis sebelum terjadi." },
  { icon: UserCheck, title: "Verifikasi KYC",        subtitle: "Identity Verified",    desc: "Setiap pengguna melewati proses verifikasi identitas ketat sesuai regulasi KYC dan AML untuk menjaga keamanan ekosistem." },
  { icon: Bell,      title: "Notifikasi Instan",     subtitle: "Instant Alerts",       desc: "Setiap perubahan status transaksi langsung dikirim via push notification, email, dan SMS." },
  { icon: Key,       title: "Autentikasi 2FA",       subtitle: "Two-Factor Auth",      desc: "Lapisan keamanan ekstra dengan 2FA memastikan hanya Anda yang bisa mengakses akun dan mengotorisasi transaksi." },
];

type Feature = typeof topFeatures[0];

/* ═══════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════ */
function SecurityModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  const Icon = feature.icon;
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-modal flex items-center justify-center px-4"
      style={{ backgroundColor: "hsl(0 0% 0% / 0.35)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog" aria-modal="true"
    >
      <div
        className="bg-white border border-border rounded-2xl p-6 max-w-sm w-full"
        style={{ animation: "modalIn 0.2s cubic-bezier(0.22,0.68,0,1.15) both", boxShadow: "0 8px 40px hsl(0 0% 0% / 0.14)" }}
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl border border-border bg-muted flex items-center justify-center">
            <Icon className="w-5 h-5 text-foreground" />
          </div>
          <button type="button" onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Tutup">
            <X className="w-4 h-4" />
          </button>
        </div>
        <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">{feature.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SMALL FEATURE CELL — matches reference grid
   ═══════════════════════════════════════════ */
function FeatureCell({ feature, onClick }: { feature: Feature; onClick: () => void }) {
  const Icon = feature.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 py-8 px-3 w-full h-full
        hover:bg-muted/60 active:bg-muted transition-colors duration-150 cursor-pointer"
      aria-label={feature.title}
    >
      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-150"
        strokeWidth={1.5} />
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150 text-center leading-snug">
        {feature.title}
      </span>
    </button>
  );
}

/* ═══════════════════════════════════════════
   LARGE FEATURE CARDS (middle row)
   Like "Projects" and "Docs" in the reference
   ═══════════════════════════════════════════ */
function EscrowCard() {
  return (
    <div className="flex flex-col h-full">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(220 30% 95%) 100%)" }}>
        {/* Mini UI mockup */}
        <div className="w-full max-w-[240px] mb-0">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-foreground/10 flex items-center justify-center">
                  <Shield className="w-2.5 h-2.5 text-foreground" />
                </div>
                <span className="text-[10px] font-bold text-foreground">Escrow aktif</span>
              </div>
              <span className="text-[9px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">AMAN</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Dana tersimpan</span>
                <span className="text-[11px] font-bold text-foreground">Rp 12.500.000</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-foreground rounded-full" style={{ width: "67%" }} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-muted border border-border flex items-center justify-center">
                    <span className="text-[7px] font-bold text-muted-foreground">B</span>
                  </div>
                  <span className="text-[9px] text-muted-foreground">Pembeli</span>
                </div>
                <svg width="20" height="8" viewBox="0 0 20 8"><path d="M0,4 L16,4 M13,1 L16,4 L13,7" stroke="hsl(0 0% 60%)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-muted-foreground">Penjual</span>
                  <div className="w-4 h-4 rounded-full bg-muted border border-border flex items-center justify-center">
                    <span className="text-[7px] font-bold text-muted-foreground">P</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Label */}
      <div className="px-6 py-5 flex items-center gap-3 border-t border-border">
        <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
          <Shield className="w-3.5 h-3.5 text-background" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Escrow Terlindungi</p>
          <p className="text-[11px] text-muted-foreground">Dana aman sampai selesai</p>
        </div>
      </div>
    </div>
  );
}

function VerificationCard() {
  return (
    <div className="flex flex-col h-full">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(220 30% 97%) 0%, hsl(260 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px] mb-0">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* User rows */}
            {[
              { name: "Ari Ramadhan", role: "Pembeli", verified: true },
              { name: "Toko Budi", role: "Penjual", verified: true },
            ].map((u, i) => (
              <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-muted-foreground">{u.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-foreground truncate">{u.name}</p>
                  <p className="text-[10px] text-muted-foreground">{u.role}</p>
                </div>
                {u.verified && (
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-foreground flex items-center justify-center">
                      <svg width="7" height="7" viewBox="0 0 7 7"><polyline points="1.5,3.5 2.8,4.8 5.5,2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </div>
                    <span className="text-[9px] font-bold text-foreground">KYC</span>
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-2.5 bg-muted/50 flex items-center gap-2 border-t border-border">
              <div className="flex -space-x-1">
                {["🚀","✨","🦄"].map((e, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center text-[9px]">{e}</div>
                ))}
              </div>
              <span className="text-[9px] text-muted-foreground font-medium">16 aktivitas terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
      {/* Label */}
      <div className="px-6 py-5 flex items-center gap-3 border-t border-border">
        <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
          <UserCheck className="w-3.5 h-3.5 text-background" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Verifikasi Identitas</p>
          <p className="text-[11px] text-muted-foreground">KYC & AML compliant</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════ */
export default function SecuritySection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.04 });
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  return (
    <section id="keamanan" ref={sectionRef} className="section bg-white border-b border-border">
      <div className="container-base">

        {/* Header */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Hak Anda Kami Lindungi.</h2>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
            Delapan lapisan perlindungan yang bekerja untuk menjaga setiap transaksi Anda. Klik untuk detail.
          </p>
        </div>

        {/* ── GRID LAYOUT — matches reference image ── */}
        <div className={`max-w-4xl mx-auto anim-fade-up delay-100 ${inView ? "in-view" : ""}`}>
          <div className="border border-border rounded-2xl overflow-hidden">

            {/* ── ROW 1: 4 small icon cells ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border border-b border-border">
              {topFeatures.map((f) => (
                <FeatureCell key={f.title} feature={f} onClick={() => setActiveFeature(f)} />
              ))}
            </div>

            {/* ── ROW 2: 2 large feature cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-b border-border">
              <div className="min-h-[300px] sm:min-h-[340px]">
                <EscrowCard />
              </div>
              <div className="min-h-[300px] sm:min-h-[340px]">
                <VerificationCard />
              </div>
            </div>

            {/* ── ROW 3: 4 small icon cells ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border">
              {bottomFeatures.map((f) => (
                <FeatureCell key={f.title} feature={f} onClick={() => setActiveFeature(f)} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {activeFeature && (
        <SecurityModal feature={activeFeature} onClose={() => setActiveFeature(null)} />
      )}
    </section>
  );
}
