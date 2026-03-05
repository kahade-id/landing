"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   PHONE SCREEN CONTENT — Escrow Home Screen
─────────────────────────────────────────────────────────────────── */
function ScreenHome() {
  return (
    <div style={{ padding: "0 14px 16px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* App header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
        <div>
          <p style={{ fontSize: 11, color: "#A0A0A0", marginBottom: 2 }}>Selamat datang 👋</p>
          <p style={{ fontSize: 18, fontWeight: 800, color: "#1A1A1A", letterSpacing: -0.6 }}>Andi Wijaya</p>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F0F0F0", border: "1.5px solid #E0E0E0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <svg width="18" height="18" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" fill="#B0B0B0"/><path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#B0B0B0"/></svg>
        </div>
      </div>

      {/* Balance card */}
      <div style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
        borderRadius: 18,
        padding: "16px 16px",
        marginBottom: 14,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grain overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "6px 6px" }} />
        {/* Subtle arc */}
        <div style={{ position: "absolute", right: -30, top: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", right: 10, bottom: -40, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="12" viewBox="0 0 14 17" fill="none"><rect x="1" y="7" width="12" height="9" rx="2" fill="white" opacity="0.9"/><path d="M3 7V5C3 2.79 4.79 1 7 1s4 1.79 4 4v2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 }}>ESCROW AKTIF</p>
          </div>
          <p style={{ fontSize: 22, fontWeight: 900, color: "white", letterSpacing: -1, marginBottom: 4 }}>Rp 5.500.000</p>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#52C41A" }} />
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Terlindungi · #KH-8821</p>
          </div>
        </div>
      </div>

      {/* Status steps */}
      <div style={{ background: "#F8F8F8", borderRadius: 14, padding: "12px 14px", marginBottom: 10 }}>
        <p style={{ fontSize: 9, fontWeight: 700, color: "#B0B0B0", letterSpacing: 0.8, textTransform: "uppercase" as const, marginBottom: 10 }}>Progress Transaksi</p>
        {[
          { label: "Dana masuk escrow", done: true },
          { label: "Penjual kirim barang", done: true },
          { label: "Konfirmasi pembeli", done: false, active: true },
          { label: "Dana cair", done: false },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 3 ? 8 : 0 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, background: s.done ? "#1A1A1A" : "transparent", border: s.done ? "none" : s.active ? "1.5px solid #1A1A1A" : "1.5px solid #D8D8D8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {s.done && <svg width="8" height="8" viewBox="0 0 8 8"><polyline points="1.5,4 3,5.5 6.5,2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
              {s.active && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A1A1A" }} />}
            </div>
            <span style={{ fontSize: 10, color: s.done ? "#1A1A1A" : s.active ? "#1A1A1A" : "#C0C0C0", fontWeight: s.active ? 700 : s.done ? 500 : 400 }}>{s.label}</span>
            {s.active && <span style={{ marginLeft: "auto", fontSize: 8, background: "#1A1A1A", color: "white", padding: "2px 6px", borderRadius: 20, fontWeight: 700 }}>NOW</span>}
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div style={{ background: "#1A1A1A", borderRadius: 12, padding: "11px", textAlign: "center" as const }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>Konfirmasi Terima Barang</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PHONE SCREEN CONTENT — Escrow Inbox / History
─────────────────────────────────────────────────────────────────── */
function ScreenInbox() {
  return (
    <div style={{ padding: "0 14px 16px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ fontSize: 20, fontWeight: 800, color: "#1A1A1A", letterSpacing: -0.7 }}>Riwayat</p>
        <div style={{ width: 30, height: 30, borderRadius: 10, background: "#F4F4F4", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#888" strokeWidth="1.5"/><line x1="11" y1="11" x2="14.5" y2="14.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {["Semua", "Selesai", "Aktif"].map((chip, i) => (
          <div key={chip} style={{ padding: "4px 10px", borderRadius: 20, background: i === 0 ? "#1A1A1A" : "#F4F4F4", border: i === 0 ? "none" : "1px solid #E8E8E8" }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: i === 0 ? "white" : "#888" }}>{chip}</span>
          </div>
        ))}
      </div>

      {/* Transaction list */}
      {[
        { name: "Toko Andalan", amount: "Rp 5.500.000", status: "Aktif", statusColor: "#1A1A1A", statusBg: "#F4F4F4", label: "iPhone 14 Pro", initials: "TA", date: "Hari ini" },
        { name: "Rizky Store",  amount: "Rp 2.800.000", status: "Selesai", statusColor: "#166534", statusBg: "#DCFCE7", label: "Laptop Bekas", initials: "RS", date: "Kemarin" },
        { name: "CV Sumber",    amount: "Rp 18.500.000", status: "Selesai", statusColor: "#166534", statusBg: "#DCFCE7", label: "Mesin Produksi", initials: "CV", date: "3 hari lalu" },
      ].map((tx, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 2 ? 12 : 0, paddingBottom: i < 2 ? 12 : 0, borderBottom: i < 2 ? "1px solid #F0F0F0" : "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: "#F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: "#888" }}>{tx.initials}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#1A1A1A" }}>{tx.name}</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#1A1A1A" }}>{tx.amount}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
              <span style={{ fontSize: 9, color: "#A0A0A0" }}>{tx.label}</span>
              <span style={{ fontSize: 8, fontWeight: 700, color: tx.statusColor, background: tx.statusBg, padding: "2px 6px", borderRadius: 20 }}>{tx.status}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Watercolor blob decoration bottom — mimic reference */}
      <div style={{ marginTop: 14, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(253,186,116,0.15) 0%, rgba(134,239,172,0.15) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: 9, color: "#A0A0A0", fontStyle: "italic" }}>Semua transaksi terlindungi Kahade</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PREMIUM PHONE SHELL
─────────────────────────────────────────────────────────────────── */
function PhoneShell({
  children,
  width = 220,
  screenBg = "#ffffff",
}: {
  children: React.ReactNode;
  width?: number;
  screenBg?: string;
}) {
  const height = Math.round(width * 2.16);
  const borderRadius = Math.round(width * 0.163);
  const innerRadius = Math.round(borderRadius * 0.78);

  return (
    <div style={{
      width,
      height,
      borderRadius,
      background: "linear-gradient(160deg, #2C2C2E 0%, #1C1C1E 60%, #141414 100%)",
      padding: 5,
      position: "relative",
      boxShadow: [
        "0 0 0 0.5px rgba(255,255,255,0.12)",          // outer highlight
        "0 2px 4px rgba(0,0,0,0.3)",
        "0 12px 40px rgba(0,0,0,0.35)",
        "0 40px 80px rgba(0,0,0,0.25)",
        "inset 0 0 0 0.5px rgba(255,255,255,0.06)",    // inner edge
      ].join(", "),
      flexShrink: 0,
    }}>
      {/* Side button — power */}
      <div style={{
        position: "absolute", right: -2, top: "28%",
        width: 3, height: 36,
        background: "linear-gradient(180deg, #3A3A3C, #2C2C2E)",
        borderRadius: "0 2px 2px 0",
        boxShadow: "1px 0 2px rgba(0,0,0,0.4)",
      }} />
      {/* Side buttons — volume */}
      <div style={{ position: "absolute", left: -2, top: "20%", width: 3, height: 28, background: "linear-gradient(180deg, #3A3A3C, #2C2C2E)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.4)" }} />
      <div style={{ position: "absolute", left: -2, top: "30%", width: 3, height: 28, background: "linear-gradient(180deg, #3A3A3C, #2C2C2E)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.4)" }} />
      <div style={{ position: "absolute", left: -2, top: "14%", width: 3, height: 18, background: "linear-gradient(180deg, #3A3A3C, #2C2C2E)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.4)" }} />

      {/* Screen */}
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: innerRadius,
        background: screenBg,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Status bar */}
        <div style={{
          height: 44,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "0 20px 8px",
          background: screenBg,
          position: "relative",
          zIndex: 10,
        }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A" }}>9:41</span>
          {/* Dynamic island */}
          <div style={{
            position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
            width: 80, height: 26,
            background: "#000", borderRadius: 20,
          }} />
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="3" width="3" height="7" rx="1" fill="#1A1A1A" opacity="0.3"/>
              <rect x="4" y="2" width="3" height="8" rx="1" fill="#1A1A1A" opacity="0.5"/>
              <rect x="8" y="0.5" width="3" height="9.5" rx="1" fill="#1A1A1A" opacity="0.8"/>
              <rect x="12" y="0" width="2" height="10" rx="1" fill="#1A1A1A"/>
            </svg>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#1A1A1A" }}>5G</span>
            {/* Battery */}
            <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div style={{ width: 22, height: 11, border: "1.5px solid #1A1A1A", borderRadius: 3, padding: "1.5px", display: "flex", alignItems: "center" }}>
                <div style={{ width: "82%", height: "100%", background: "#1A1A1A", borderRadius: 1 }} />
              </div>
              <div style={{ width: 2, height: 5, background: "#1A1A1A", borderRadius: "0 1px 1px 0", opacity: 0.5 }} />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* Home indicator */}
        <div style={{
          position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
          width: 80, height: 4, background: "#1A1A1A", borderRadius: 2, opacity: 0.3,
        }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TWO PHONES MOCKUP — overlapping like reference image
─────────────────────────────────────────────────────────────────── */
function DualPhoneMockup() {
  return (
    <div style={{
      position: "relative",
      width: 340,
      height: 460,
      // Watercolor-style background blobs
    }}>
      {/* Watercolor blobs — pastel, behind phones */}
      <div style={{
        position: "absolute", top: -40, right: -20,
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(253,186,116,0.25) 0%, transparent 70%)",
        filter: "blur(20px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -20, left: -10,
        width: 180, height: 180, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(134,239,172,0.22) 0%, transparent 70%)",
        filter: "blur(18px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 20, right: 20,
        width: 130, height: 130, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
        filter: "blur(16px)",
        pointerEvents: "none",
      }} />

      {/* Back phone (inbox) — tilted right, slightly behind */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 20,
        transform: "rotate(6deg) translateX(20px)",
        transformOrigin: "bottom center",
        zIndex: 1,
        filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
      }}>
        <PhoneShell width={190} screenBg="#fafafa">
          <ScreenInbox />
        </PhoneShell>
      </div>

      {/* Front phone (home/escrow) — slightly tilted left, in front */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "rotate(-3deg)",
        transformOrigin: "bottom center",
        zIndex: 2,
        filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22))",
      }}>
        <PhoneShell width={210} screenBg="#ffffff">
          <ScreenHome />
        </PhoneShell>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ESCROW FLOW ILLUSTRATION
─────────────────────────────────────────────────────────────────── */
function EscrowFlowIllustration() {
  return (
    <>
      <style>{`
        @keyframes flowRight {
          0%   { stroke-dashoffset: 24; opacity: 0.4; }
          50%  { opacity: 1; }
          100% { stroke-dashoffset: 0;  opacity: 0.4; }
        }
        @keyframes lockPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.07); }
          50%     { box-shadow: 0 0 0 8px rgba(0,0,0,0.03); }
        }
        @keyframes ringBreath {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50%     { opacity: 0.7; transform: scale(1.04); }
        }
        @keyframes badgeFade {
          0%,40%  { opacity: 0; transform: translateY(4px); }
          60%,85% { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; transform: translateY(-4px); }
        }
        .flow-line-fwd { animation: flowRight 2.4s ease-in-out infinite; }
        .flow-line-rev { animation: flowRight 2.4s ease-in-out infinite 1.2s; }
        .lock-core     { animation: lockPulse 3s ease-in-out infinite; }
        .ring-1        { animation: ringBreath 3s ease-in-out infinite; }
        .ring-2        { animation: ringBreath 3s ease-in-out infinite 0.6s; }
        .ring-3        { animation: ringBreath 3s ease-in-out infinite 1.2s; }
        .badge-buyer   { animation: badgeFade 4s ease-in-out infinite; }
        .badge-escrow  { animation: badgeFade 4s ease-in-out infinite 1.3s; }
        .badge-seller  { animation: badgeFade 4s ease-in-out infinite 2.6s; }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Pembeli */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 90 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#F0F0F0", border: "1.5px solid #D4D4D4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" fill="#B0B0B0"/><path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#B0B0B0"/></svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Pembeli</p>
              <p style={{ fontSize: 10, color: "#A0A0A0" }}>Kirim dana</p>
            </div>
          </div>

          {/* Connector L */}
          <div style={{ width: 76, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <svg width="76" height="16" viewBox="0 0 76 16" overflow="visible">
              <defs><marker id="a1" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#C0C0C0"/></marker></defs>
              <line className="flow-line-fwd" x1="4" y1="8" x2="68" y2="8" stroke="#C0C0C0" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#a1)" />
            </svg>
            <span style={{ fontSize: 9, color: "#B8B8B8", fontWeight: 600 }}>Dana masuk</span>
          </div>

          {/* Escrow Lock */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 90 }}>
            <div style={{ position: "relative", width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="ring-3" style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px dashed rgba(0,0,0,0.06)" }}/>
              <div className="ring-2" style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" }}/>
              <div className="ring-1" style={{ position: "absolute", inset: 5, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)" }}/>
              <div className="lock-core" style={{ width: 52, height: 52, borderRadius: "50%", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
                <svg width="18" height="21" viewBox="0 0 22 26" fill="none">
                  <rect x="1" y="12" width="20" height="13" rx="3" fill="white" opacity="0.95"/>
                  <path d="M5 12V8.5C5 5.46 7.46 3 10.5 3h1C14.54 3 17 5.46 17 8.5V12" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.95"/>
                  <circle cx="11" cy="18.5" r="2" fill="#1A1A1A"/>
                </svg>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Escrow</p>
              <p style={{ fontSize: 10, color: "#A0A0A0" }}>Dana aman</p>
            </div>
          </div>

          {/* Connector R */}
          <div style={{ width: 76, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <svg width="76" height="16" viewBox="0 0 76 16" overflow="visible">
              <defs><marker id="a2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#C0C0C0"/></marker></defs>
              <line className="flow-line-rev" x1="4" y1="8" x2="68" y2="8" stroke="#C0C0C0" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#a2)" />
            </svg>
            <span style={{ fontSize: 9, color: "#B8B8B8", fontWeight: 600 }}>Dana cair</span>
          </div>

          {/* Penjual */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 90 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#F0F0F0", border: "1.5px solid #D4D4D4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><rect x="4" y="13" width="20" height="12" rx="1.5" fill="#B0B0B0"/><path d="M2 9h24l-2 4H4L2 9z" fill="#C4C4C4"/><rect x="11" y="17" width="6" height="8" rx="1" fill="#E8E8E8"/></svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.3 }}>Penjual</p>
              <p style={{ fontSize: 10, color: "#A0A0A0" }}>Kirim barang</p>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div style={{ display: "flex", width: 420, marginTop: 16, gap: 6 }}>
          {[
            { cls: "badge-buyer",  emoji: "✓", label: "Dana dikunci",  color: "#52C41A" },
            { cls: "badge-escrow", emoji: "🔒", label: "Terlindungi",  color: "#1A1A1A" },
            { cls: "badge-seller", emoji: "✓", label: "Dana cair",    color: "#52C41A" },
          ].map(({ cls, emoji, label, color }) => (
            <div key={label} className={cls} style={{ flex: 1 }}>
              <div style={{ background: "#F6F6F6", border: "1px solid #E4E4E4", borderRadius: 8, padding: "6px 8px", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 9, color, fontWeight: 700 }}>{emoji}</span>
                <span style={{ fontSize: 10, color: "#606060", fontWeight: 600 }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ height: 1, background: "#E8E8E8", width: 50 }} />
          <span style={{ fontSize: 10, color: "#B0B0B0", fontWeight: 600, letterSpacing: 0.5 }}>DIJAMIN KAHADE</span>
          <div style={{ height: 1, background: "#E8E8E8", width: 50 }} />
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   AVATARS
─────────────────────────────────────────────────────────────────── */
const testimonialAvatars = [
  { src: "/testimonials/user1.jpg", alt: "Pengguna 1" },
  { src: "/testimonials/user2.jpg", alt: "Pengguna 2" },
  { src: "/testimonials/user3.jpg", alt: "Pengguna 3" },
  { src: "/testimonials/user4.jpg", alt: "Pengguna 4" },
  { src: "/testimonials/user5.jpg", alt: "Pengguna 5" },
];

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
─────────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const inViewClass = mounted ? "in-view" : "";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: pref ? "auto" : "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white border-b border-border">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 50% at 65% 45%, hsl(220 40% 97%) 0%, transparent 70%)" }} />

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block relative z-10 container-base pt-16 pb-16">
        <div className="grid grid-cols-2 gap-12 items-start">

          {/* Left column: copy + flow illustration */}
          <div className="flex flex-col gap-5 max-w-lg pt-4">
            <div className={`anim-fade-up delay-100 ${inViewClass}`}>
              <h1>
                <span className="hero-title block">Transaksi Aman,</span>
                <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
              </h1>
            </div>
            <p className={`anim-fade-up delay-200 ${inViewClass} text-lg text-muted-foreground leading-relaxed`}>
              Dana Anda dijaga sampai transaksi selesai.<br />
              Pembeli pasti bayar. Penjual pasti kirim.<br />
              Kepercayaan bukan soal harapan — tapi jaminan.
            </p>
            <div className={`anim-fade-up delay-300 ${inViewClass} flex gap-3`}>
              <a href="https://app.kahade.id/register"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Mulai Sekarang <ArrowRight className="w-4 h-4" />
              </a>
              <button type="button" onClick={() => scrollToSection("cara-kerja")}
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                <Play className="w-4 h-4" /> Cara Kerja
              </button>
            </div>
            <div className={`anim-fade-up delay-400 ${inViewClass} flex items-center gap-4 pt-1`}>
              <div className="flex items-center">
                {testimonialAvatars.map((a, i) => (
                  <div key={a.alt} className={`relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2.5"}`}>
                    <Image src={a.src} alt={a.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
              </p>
            </div>

            {/* Escrow flow diagram — sits naturally under copy */}
            <div className={`anim-fade-up delay-500 ${inViewClass} pt-6`} aria-hidden="true">
              <EscrowFlowIllustration />
            </div>
          </div>

          {/* Right column: dual phones only */}
          <div className={`anim-fade-up delay-400 ${inViewClass} flex justify-center`} aria-hidden="true">
            <DualPhoneMockup />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden relative z-10 pt-10 pb-10">
        <div className="px-4 sm:px-6 flex flex-col gap-4 text-center mb-10">
          <div className={`anim-fade-up delay-100 ${inViewClass}`}>
            <h1>
              <span className="hero-title block">Transaksi Aman,</span>
              <span className="hero-title-light block">Tanpa Rasa Khawatir.</span>
            </h1>
          </div>
          <p className={`anim-fade-up delay-200 ${inViewClass} text-lg text-muted-foreground leading-relaxed`}>
            Dana Anda dijaga sampai transaksi selesai.<br />
            Pembeli pasti bayar. Penjual pasti kirim.<br />
            Kepercayaan bukan soal harapan — tapi jaminan.
          </p>
          <div className={`anim-fade-up delay-300 ${inViewClass} flex flex-col gap-3`}>
            <a href="https://app.kahade.id/register"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full">
              Mulai Sekarang <ArrowRight className="w-4 h-4" />
            </a>
            <button type="button" onClick={() => scrollToSection("cara-kerja")}
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors w-full">
              <Play className="w-4 h-4" /> Cara Kerja
            </button>
          </div>
          <div className={`anim-fade-up delay-400 ${inViewClass} flex items-center justify-center gap-3`}>
            <div className="flex items-center">
              {testimonialAvatars.map((a, i) => (
                <div key={a.alt} className={`relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-muted ${i === 0 ? "" : "-ml-2"}`}>
                  <Image src={a.src} alt={a.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Dipercaya <span className="font-bold text-foreground">10.000+</span> pengguna
            </p>
          </div>
        </div>

        {/* Mobile phones — centered, max-width so it fits without scale() */}
        <div
          className={`anim-fade-up delay-500 ${inViewClass} flex justify-center px-6`}
          aria-hidden="true"
          style={{ overflowX: "hidden" }}
        >
          {/* Shrink the DualPhoneMockup intrinsically on small screens */}
          <div style={{ width: "min(340px, 92vw)", aspectRatio: "340 / 460", position: "relative" }}>
            <div style={{
              position: "absolute", inset: 0,
              transform: "scale(calc(min(340px, 92vw) / 340))",
              transformOrigin: "top left",
            }}>
              <DualPhoneMockup />
            </div>
          </div>
        </div>

        {/* Escrow flow — also intrinsically sized */}
        <div
          className={`anim-fade-up delay-600 ${inViewClass} flex justify-center px-4 pt-6`}
          aria-hidden="true"
          style={{ overflowX: "hidden" }}
        >
          <div style={{ width: "min(430px, 95vw)", position: "relative", overflowX: "hidden" }}>
            <div style={{
              transform: "scale(calc(min(430px, 95vw) / 430))",
              transformOrigin: "top left",
              width: 430,
            }}>
              <EscrowFlowIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
