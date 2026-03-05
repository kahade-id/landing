"use client";

import { useState } from "react";
import { useInView } from "@/src/hooks/useInView";
import { Lock, FileCheck, RefreshCw, Bell, Headphones, Code2 } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   ILLUSTRATIONS — UI mockup style (same as ProblemSection)
   ═══════════════════════════════════════════════════════ */

function IllustEscrow() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(220 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Dana Escrow Aktif</span>
              <span className="text-[9px] font-bold text-foreground bg-muted px-2 py-0.5 rounded-full border border-border">TERKUNCI</span>
            </div>
            <div className="p-3 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Nominal</span>
                <span className="text-[11px] font-bold text-foreground">Rp 5.500.000</span>
              </div>
              <div className="bg-foreground rounded-lg p-2.5 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="14" viewBox="0 0 14 17" fill="none">
                    <rect x="1" y="7" width="12" height="9" rx="2" fill="white" opacity="0.9"/>
                    <path d="M3 7V5C3 2.79 4.79 1 7 1s4 1.79 4 4v2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/60">Status</p>
                  <p className="text-[10px] text-white font-bold">Dana aman di rekening escrow</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-[9px] text-muted-foreground">Tidak bisa diakses siapapun sebelum selesai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustKontrak() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(200 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center gap-2">
              <FileCheck className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] font-bold text-foreground">Kontrak Digital #KH-2847</span>
            </div>
            <div className="p-3 space-y-2">
              {[
                { label: "Pembeli", val: "Andi Wijaya", done: true },
                { label: "Penjual", val: "Toko Andalan", done: true },
                { label: "Barang", val: "iPhone 14 Pro", done: true },
                { label: "Nilai", val: "Rp 5.500.000", done: true },
                { label: "Batas kirim", val: "3 hari kerja", done: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">{row.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-semibold text-foreground">{row.val}</span>
                    <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3.5" fill="hsl(0 0% 10%)" /><polyline points="2,4 3.2,5.3 6,2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center gap-1.5 pt-1 border-t border-border">
                <span className="text-[8px] text-muted-foreground">Ditandatangani digital · Tidak bisa diubah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustDispute() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(30 20% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-foreground">Mediasi Kahade</span>
              <span className="text-[9px] font-bold text-foreground bg-muted px-2 py-0.5 rounded-full border border-border">AKTIF</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 text-[8px] font-bold">M</div>
                <div className="bg-muted rounded-lg px-2.5 py-2 flex-1">
                  <p className="text-[9px] text-foreground font-semibold">Tim Mediasi Kahade</p>
                  <p className="text-[9px] text-muted-foreground mt-0.5 leading-snug">Kami meninjau bukti dari kedua pihak. Harap tunggu 1×24 jam.</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-foreground/5 rounded-lg p-2">
                <RefreshCw className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                <p className="text-[9px] text-muted-foreground">Dana tetap terkunci selama proses mediasi</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-2">
                <span className="text-[9px] text-muted-foreground">Resolusi estimasi</span>
                <span className="text-[9px] font-bold text-foreground">24 jam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustNotif() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(240 15% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center gap-2">
              <Bell className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] font-bold text-foreground">Notifikasi</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { time: "Baru saja", msg: "Dana masuk ke escrow", icon: "💰", unread: true },
                { time: "2 mnt lalu", msg: "Penjual konfirmasi pesanan", icon: "✓", unread: true },
                { time: "1 jam lalu", msg: "Barang dalam pengiriman", icon: "📦", unread: false },
                { time: "Kemarin",   msg: "Transaksi dibuat", icon: "📋", unread: false },
              ].map((n, i) => (
                <div key={i} className={`flex items-start gap-2.5 px-3 py-2.5 ${n.unread ? "bg-muted/30" : ""}`}>
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-[10px]">{n.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[9px] ${n.unread ? "font-bold text-foreground" : "text-muted-foreground"} leading-snug`}>{n.msg}</p>
                    <p className="text-[8px] text-muted-foreground/60 mt-0.5">{n.time}</p>
                  </div>
                  {n.unread && <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustSupport() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(160 15% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                  <Headphones className="w-2.5 h-2.5 text-background" />
                </div>
                <span className="text-[10px] font-bold text-foreground">Support Kahade</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[8px] text-muted-foreground">Online</span>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-2.5 h-2.5 text-background" />
                </div>
                <div className="bg-muted rounded-lg px-2.5 py-2 flex-1">
                  <p className="text-[9px] text-muted-foreground leading-snug">Halo! Ada yang bisa kami bantu? Kami siap 24/7 untuk Anda.</p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-foreground rounded-lg px-2.5 py-2 max-w-[140px]">
                  <p className="text-[9px] text-background leading-snug">Pembeli tidak konfirmasi sudah 3 hari</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-2.5 h-2.5 text-background" />
                </div>
                <div className="bg-muted rounded-lg px-2.5 py-2 flex-1">
                  <p className="text-[9px] text-muted-foreground leading-snug">Kami akan proses otomatis dalam 24 jam. Dana aman!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustAPI() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden flex items-end justify-center pt-8 px-6"
        style={{ background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(280 10% 95%) 100%)" }}>
        <div className="w-full max-w-[240px]">
          <div className="bg-white rounded-t-xl border border-border border-b-0 overflow-hidden"
            style={{ boxShadow: "0 -4px 24px hsl(0 0% 0% / 0.07)" }}>
            <div className="border-b border-border px-4 py-2.5 flex items-center gap-2">
              <Code2 className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] font-bold text-foreground">Kahade API</span>
              <span className="ml-auto text-[8px] font-bold text-foreground bg-muted px-1.5 py-0.5 rounded border border-border">v2.1</span>
            </div>
            <div className="p-3 bg-foreground/[0.03]">
              <div className="bg-foreground rounded-lg p-2.5 font-mono">
                <p className="text-[8px] text-white/40 mb-1">POST /v1/escrow/create</p>
                <p className="text-[8px] text-green-400">{"{"}</p>
                <p className="text-[8px] text-white/70 pl-2">{"  \"amount\": 5500000,"}</p>
                <p className="text-[8px] text-white/70 pl-2">{"  \"buyer_id\": \"usr_...\","}</p>
                <p className="text-[8px] text-white/70 pl-2">{"  \"seller_id\": \"usr_...\""}</p>
                <p className="text-[8px] text-green-400">{"}"}</p>
              </div>
              <div className="mt-2 flex items-center gap-2 bg-white rounded-lg border border-border px-2.5 py-2">
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <p className="text-[9px] text-foreground font-semibold">200 OK — Escrow dibuat</p>
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
const solutions = [
  { id: "01", icon: Lock,      title: "Dana Dijaga Escrow",       desc: "Dana pembeli dikunci di rekening escrow Kahade — tidak bisa diakses siapapun sampai transaksi selesai sesuai kesepakatan.", Illust: IllustEscrow },
  { id: "02", icon: FileCheck, title: "Kontrak Transaksi Digital", desc: "Setiap transaksi memiliki kontrak digital yang mengikat kedua pihak. Syarat dan ketentuan tercatat jelas, tidak bisa diubah sepihak.", Illust: IllustKontrak },
  { id: "03", icon: RefreshCw, title: "Penyelesaian Sengketa",     desc: "Jika terjadi perselisihan, tim mediasi Kahade turun tangan. Setiap klaim diproses berdasarkan bukti, bukan asumsi.", Illust: IllustDispute },
  { id: "04", icon: Bell,      title: "Notifikasi Real-time",      desc: "Setiap perubahan status — dari pembayaran masuk, pengiriman, hingga konfirmasi — langsung dikirim via email, SMS, dan push notification.", Illust: IllustNotif },
  { id: "05", icon: Headphones,title: "Support 24/7",              desc: "Tim dukungan Kahade siap membantu kapanpun. Tidak ada transaksi yang terbengkalai tanpa penanganan dari kami.", Illust: IllustSupport },
  { id: "06", icon: Code2,     title: "Integrasi API",             desc: "API terbuka untuk bisnis yang ingin mengintegrasikan layanan escrow langsung ke platform mereka sendiri.", Illust: IllustAPI },
];

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */
function SolutionItem({
  item, active, onClick,
}: {
  item: typeof solutions[0]; active: boolean; onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <div className="relative border-t border-border">
      <button type="button" onClick={onClick} aria-expanded={active} className="w-full text-left cursor-pointer">
        <div className="flex items-center gap-3 py-4 transition-all duration-300">
          <Icon className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${active ? "text-foreground" : "text-muted-foreground"}`} />
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

function IllustrationPanel({ solutions, activeIndex }: { solutions: typeof solutions; activeIndex: number }) {
  return (
    <div className="w-full rounded-xl border border-border overflow-hidden relative" style={{ height: "320px" }}>
      {solutions.map((s, i) => {
        const Illust = s.Illust;
        return (
          <div
            key={s.id}
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
export default function SolusiSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="solusi" ref={sectionRef} className="section bg-white">
      <div className="container-base">
        {/* Header — title only, no description */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Melindungi Kedua Pihak</h2>
        </div>

        {/* Content — same layout as ProblemSection */}
        <div className="max-w-2xl mx-auto">
          {/* Illustration panel */}
          <div className={`anim-fade-up delay-200 ${inView ? "in-view" : ""} mb-8`}>
            <IllustrationPanel solutions={solutions} activeIndex={activeIndex} />
          </div>

          {/* Accordion list */}
          <div className={`anim-fade-up delay-300 ${inView ? "in-view" : ""}`}>
            {solutions.map((item, i) => (
              <SolutionItem
                key={item.id}
                item={item}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
