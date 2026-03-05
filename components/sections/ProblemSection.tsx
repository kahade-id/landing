"use client";

import { useState } from "react";
import { useInView } from "@/src/hooks/useInView";
import {
  Ghost, Package, FileText, Wallet,
  Hourglass, RefreshCw, AlertTriangle, Truck,
  WifiOff, ShieldOff, Clock, Ban,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   BUYER ILLUSTRATIONS — UI mockup style (same as SecuritySection)
   gradient bg + white card floating from bottom
   ═══════════════════════════════════════════════════════ */

function IllustBuyerGhost() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(220 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Chat header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-muted-foreground">T</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-foreground">Toko Andalan</p>
                <div className="flex items-center gap-1">
                  <WifiOff className="w-2.5 h-2.5 text-muted-foreground/50" />
                  <span className="text-[9px] text-muted-foreground/60">Terakhir aktif 3 hari lalu</span>
                </div>
              </div>
            </div>
            {/* Chat messages */}
            <div className="p-3 space-y-2">
              <div className="flex justify-end">
                <div className="bg-foreground text-background rounded-lg rounded-tr-sm px-3 py-1.5 max-w-[160px]">
                  <p className="text-[10px]">Sudah transfer Rp 2.500.000</p>
                  <p className="text-[8px] opacity-50 text-right mt-0.5">10:42 ✓✓</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-foreground text-background rounded-lg rounded-tr-sm px-3 py-1.5 max-w-[160px]">
                  <p className="text-[10px]">Konfirmasi dong kak?</p>
                  <p className="text-[8px] opacity-50 text-right mt-0.5">11:05 ✓</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-foreground text-background rounded-lg rounded-tr-sm px-3 py-1.5 max-w-[160px]">
                  <p className="text-[10px]">Kak?? 😰</p>
                  <p className="text-[8px] opacity-50 text-right mt-0.5">14:30 ✓</p>
                </div>
              </div>
              {/* No reply indicator */}
              <div className="flex justify-center">
                <span className="text-[8px] text-muted-foreground/50 bg-muted px-2 py-0.5 rounded-full">Tidak ada balasan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustBuyerItem() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(30 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Detail Pesanan</span>
              <span className="text-[9px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">DITERIMA</span>
            </div>
            <div className="p-3 space-y-2.5">
              {/* Foto toko */}
              <div>
                <p className="text-[9px] text-muted-foreground mb-1">Foto listing toko</p>
                <div className="h-10 rounded-lg bg-foreground/8 border border-border flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded bg-foreground/10 flex items-center justify-center">
                    <Package className="w-3 h-3 text-foreground/50" />
                  </div>
                  <div>
                    <div className="w-20 h-2 rounded bg-muted mb-1" />
                    <div className="w-14 h-1.5 rounded bg-muted" />
                  </div>
                  <span className="text-[8px] text-green-600 font-bold ml-auto mr-1">✓ Mulus</span>
                </div>
              </div>
              {/* Kondisi nyata */}
              <div>
                <p className="text-[9px] text-muted-foreground mb-1">Kondisi diterima</p>
                <div className="h-10 rounded-lg bg-muted/60 border border-dashed border-border flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                    <ShieldOff className="w-3 h-3 text-muted-foreground/50" />
                  </div>
                  <div>
                    <div className="w-16 h-2 rounded bg-muted mb-1" />
                    <div className="w-20 h-1.5 rounded bg-muted" />
                  </div>
                  <span className="text-[8px] text-red-500 font-bold ml-auto mr-1">✗ Rusak</span>
                </div>
              </div>
              {/* Mismatch badge */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[8px] font-semibold text-muted-foreground">Tidak sesuai deskripsi</span>
                <div className="flex-1 h-px bg-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustBuyerDoc() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(200 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-bold text-foreground">Riwayat Transaksi</span>
              </div>
            </div>
            <div className="p-4">
              {/* Empty state */}
              <div className="flex flex-col items-center justify-center py-4 gap-2">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <FileText className="w-5 h-5 text-muted-foreground/40" />
                </div>
                <p className="text-[10px] font-semibold text-muted-foreground">Tidak ada bukti</p>
                <p className="text-[9px] text-muted-foreground/60 text-center leading-snug">Transaksi tidak tercatat<br />di sistem manapun</p>
              </div>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Pengajuan klaim</span>
                <span className="text-[9px] font-bold text-muted-foreground/50 bg-muted px-2 py-0.5 rounded-full">Tidak bisa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustBuyerPay() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(240 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Konfirmasi Pembayaran</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Total bayar</span>
                <span className="text-[11px] font-bold text-foreground">Rp 3.750.000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Jaminan pembeli</span>
                <span className="text-[10px] font-bold text-muted-foreground/40">—</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Proteksi dana</span>
                <span className="text-[10px] font-bold text-muted-foreground/40">—</span>
              </div>
              {/* Warning */}
              <div className="flex items-start gap-2 bg-muted rounded-lg p-2 mt-1">
                <AlertTriangle className="w-3 h-3 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                <p className="text-[9px] text-muted-foreground leading-snug">Bayar langsung ke penjual.<br />Tidak ada jaminan pengembalian dana.</p>
              </div>
              {/* Pay button */}
              <div className="bg-foreground rounded-lg py-2 flex items-center justify-center mt-1">
                <span className="text-[10px] font-bold text-background">Bayar Sekarang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SELLER ILLUSTRATIONS
   ═══════════════════════════════════════════════════════ */

function IllustSellerWait() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(40 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Status Pembayaran</span>
              <span className="text-[9px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">DITAHAN</span>
            </div>
            <div className="p-3 space-y-2.5">
              {/* Shipped row */}
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8"><polyline points="1.5,4 3,5.5 6.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-foreground">Barang dikirim</p>
                  <p className="text-[9px] text-muted-foreground">Resi: JNE-2847163</p>
                </div>
              </div>
              <div className="ml-2.5 w-px h-3 bg-border" />
              {/* Waiting row */}
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <Hourglass className="w-2.5 h-2.5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-muted-foreground">Konfirmasi pembeli</p>
                  <p className="text-[9px] text-muted-foreground/60">Menunggu...</p>
                </div>
                <Clock className="w-3 h-3 text-muted-foreground/40" />
              </div>
              <div className="ml-2.5 w-px h-3 bg-border border-dashed" />
              {/* Dana cair - locked */}
              <div className="flex items-center gap-2.5 opacity-40">
                <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px]">💰</span>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-muted-foreground">Dana cair</p>
                  <p className="text-[9px] text-muted-foreground/60">Belum bisa dicairkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustSellerCancel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(0 15% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Transaksi #TRX-8821</span>
              <span className="text-[9px] font-bold text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-full border border-border line-through">LUNAS</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Nominal</span>
                <span className="text-[10px] font-bold text-foreground">Rp 5.200.000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Status pengiriman</span>
                <span className="text-[10px] font-bold text-foreground">Terkirim ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Status pembayaran</span>
                <span className="text-[10px] font-bold text-muted-foreground/50">Dibatalkan</span>
              </div>
              {/* Cancelled banner */}
              <div className="flex items-center gap-2 bg-muted rounded-lg p-2">
                <Ban className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
                <p className="text-[9px] text-muted-foreground leading-snug">Pembayaran ditarik kembali oleh bank. Barang sudah di tangan pembeli.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustSellerFraud() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(280 15% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-bold text-foreground">Klaim Dispute</span>
              </div>
              <span className="text-[9px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">BARU</span>
            </div>
            <div className="p-3 space-y-2">
              {/* Claimant */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-bold text-muted-foreground">A</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-foreground">Andi Wijaya</p>
                  <p className="text-[9px] text-muted-foreground">Pembeli</p>
                </div>
              </div>
              {/* Claim text bubble */}
              <div className="bg-muted rounded-lg p-2.5">
                <p className="text-[9px] text-muted-foreground leading-snug italic">"Barang yang saya terima rusak parah, tidak sesuai sama sekali. Minta refund penuh."</p>
              </div>
              {/* Your response - seller */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Kondisi real barang</span>
                <span className="text-[9px] font-bold text-foreground">Sempurna ✓</span>
              </div>
              {/* Refund demand */}
              <div className="flex items-center justify-between border-t border-border pt-2">
                <span className="text-[10px] text-muted-foreground font-medium">Tuntutan refund</span>
                <span className="text-[10px] font-bold text-foreground">Rp 4.800.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustSellerProof() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(160 15% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            {/* Header */}
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-bold text-foreground">Bukti Pengiriman</span>
              </div>
            </div>
            <div className="p-3 space-y-2">
              {/* Steps */}
              {[
                { label: "Paket diserahkan kurir", done: true },
                { label: "Dalam perjalanan", done: true },
                { label: "Tiba di kota tujuan", done: true },
                { label: "Diterima penerima", done: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border
                    ${s.done ? "bg-foreground border-foreground" : "bg-muted border-border"}`}>
                    {s.done
                      ? <svg width="7" height="7" viewBox="0 0 7 7"><polyline points="1.5,3.5 3,5 5.5,2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                      : <span className="text-[7px] text-muted-foreground/50">?</span>
                    }
                  </div>
                  <span className={`text-[10px] ${s.done ? "text-foreground" : "text-muted-foreground/40"}`}>{s.label}</span>
                </div>
              ))}
              {/* No proof note */}
              <div className="flex items-center gap-2 bg-muted rounded-lg p-2 mt-1">
                <FileText className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                <p className="text-[9px] text-muted-foreground leading-snug">Tidak ada tanda terima digital. Sulit dibuktikan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
const buyerProblems = [
  { id: "01", icon: Ghost,       title: "Transfer sudah, penjual hilang",    desc: "Setelah bayar, penjual tidak bisa dihubungi lagi. Dana sudah terkirim dan tidak bisa ditarik kembali.", Illust: IllustBuyerGhost },
  { id: "02", icon: Package,     title: "Barang tidak sesuai foto",          desc: "Barang yang datang berbeda jauh dari yang dijanjikan. Tidak ada cara untuk komplain atau minta uang kembali.", Illust: IllustBuyerItem },
  { id: "03", icon: FileText,    title: "Tidak ada bukti transaksi",         desc: "Tanpa dokumen resmi, sulit mengajukan klaim jika terjadi masalah di kemudian hari.", Illust: IllustBuyerDoc },
  { id: "04", icon: Wallet,      title: "Dipaksa bayar dulu tanpa jaminan", desc: "Bayar dulu, baru dikirim. Ini risiko besar karena tidak ada yang menjamin barang akan datang.", Illust: IllustBuyerPay },
];

const sellerProblems = [
  { id: "01", icon: Hourglass,     title: "Barang terkirim, uang tidak cair",     desc: "Sudah kirim barang tapi pembeli tidak konfirmasi. Uang tertahan tanpa kejelasan kapan cair.", Illust: IllustSellerWait },
  { id: "02", icon: RefreshCw,     title: "Pembayaran dibatalkan sepihak",         desc: "Pembeli atau bank membatalkan pembayaran meski barang sudah sampai dan diterima.", Illust: IllustSellerCancel },
  { id: "03", icon: AlertTriangle, title: "Klaim palsu untuk minta uang kembali", desc: "Pembeli mengaku barang rusak padahal tidak, hanya untuk memaksa pengembalian dana.", Illust: IllustSellerFraud },
  { id: "04", icon: Truck,         title: "Tidak ada bukti pengiriman resmi",      desc: "Sulit membuktikan barang sudah sampai karena tidak ada sistem yang mencatat pengiriman.", Illust: IllustSellerProof },
];

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */
interface ProblemItemProps {
  item: typeof buyerProblems[0];
  active: boolean;
  onClick: () => void;
}

function ProblemItem({ item, active, onClick }: ProblemItemProps) {
  const IconComponent = item.icon;
  return (
    <div className="relative border-t border-border">
      <button type="button" onClick={onClick} aria-expanded={active} className="w-full text-left cursor-pointer">
        <div className="flex items-center gap-3 py-4 transition-all duration-300">
          <IconComponent className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${active ? "text-foreground" : "text-muted-foreground"}`} />
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold transition-colors duration-200 ${active ? "text-foreground" : "text-muted-foreground"}`}>
              {item.title}
            </p>
            <div className={`overflow-hidden transition-all duration-300 ${active ? "max-h-24 opacity-100 mt-1.5" : "max-h-0 opacity-0"}`}>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
          <span className={`text-xs font-bold tabular-nums w-5 flex-shrink-0 text-right transition-colors ${active ? "text-muted-foreground" : "text-border"}`}>
            {item.id}
          </span>
        </div>
      </button>
    </div>
  );
}

function IllustrationPanel({ problems, activeIndex }: { problems: typeof buyerProblems; activeIndex: number }) {
  return (
    <div className="w-full rounded-xl border border-border overflow-hidden relative" style={{ height: "320px" }}>
      {problems.map((p, i) => {
        const Illust = p.Illust;
        return (
          <div
            key={p.id}
            className="absolute inset-0"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transition: "opacity 350ms ease",
              pointerEvents: i === activeIndex ? "auto" : "none",
            }}
            aria-hidden={i !== activeIndex}
          >
            <Illust />
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════ */
export default function ProblemSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProblems = activeTab === "buyer" ? buyerProblems : sellerProblems;

  return (
    <section id="problem" ref={sectionRef} className="section bg-white">
      <div className="container-base">
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Transaksi Online Berisiko.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Banyak yang mengalami masalah saat bertransaksi online. Ini risiko yang sering terjadi.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className={`flex justify-center mb-10 anim-fade-up delay-100 ${inView ? "in-view" : ""}`}>
          <div role="tablist" aria-label="Perspektif risiko" className="inline-flex p-1 rounded-lg bg-muted gap-1">
            {[
              { id: "buyer" as const, label: "Sebagai Pembeli" },
              { id: "seller" as const, label: "Sebagai Penjual" },
            ].map((tab) => (
              <button
                type="button"
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`problem-panel-${tab.id}`}
                id={`problem-tab-${tab.id}`}
                onClick={() => { setActiveTab(tab.id); setActiveIndex(0); }}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? "bg-white text-foreground border border-border" : "text-muted-foreground hover:text-foreground"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          id={`problem-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`problem-tab-${activeTab}`}
          className="max-w-2xl mx-auto"
        >
          {/* Illustration — below tab, above accordion */}
          <div className={`anim-fade-up delay-200 ${inView ? "in-view" : ""} mb-8`}>
            <IllustrationPanel problems={currentProblems} activeIndex={activeIndex} />
          </div>

          {/* Accordion */}
          <div className={`anim-fade-up delay-300 ${inView ? "in-view" : ""}`}>
            {currentProblems.map((item, i) => (
              <ProblemItem key={item.id} item={item} active={activeIndex === i} onClick={() => setActiveIndex(i)} />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
