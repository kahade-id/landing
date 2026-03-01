"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.05): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
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

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
  </svg>
);

// ─── SVG Visuals ──────────────────────────────────────────────────────────────

const VisualB1 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vb1" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0L0 0 0 36" fill="none" stroke="rgba(0,0,0,0.042)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vb1)"/>
    <rect x="52" y="52" width="180" height="108" rx="10" fill="white" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
    <text x="142" y="75" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="1">TRANSFER</text>
    <line x1="52" y1="83" x2="232" y2="83" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
    <rect x="72" y="96" width="60" height="9" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="72" y="112" width="140" height="22" rx="5" fill="rgba(0,0,0,0.05)"/>
    <text x="142" y="128" fontFamily="monospace" fontSize="11" fill="rgba(0,0,0,0.2)" textAnchor="middle" fontWeight="700">Rp 15.000.000</text>
    <rect x="72" y="142" width="100" height="8" rx="3" fill="rgba(0,0,0,0.038)"/>
    <line x1="238" y1="106" x2="282" y2="106" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="5 3"/>
    <polygon points="278,101 284,106 278,111" fill="rgba(0,0,0,0.15)"/>
    <rect x="288" y="52" width="124" height="108" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.065)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="350" y="96" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.18)" textAnchor="middle">PENJUAL</text>
    <text x="350" y="118" fontSize="22" fill="rgba(0,0,0,0.08)" textAnchor="middle">?</text>
    <text x="350" y="140" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.14)" textAnchor="middle">TIDAK MERESPONS</text>
    <rect x="52" y="180" width="362" height="52" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="80" y="200" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" letterSpacing="0.5">STATUS DANA</text>
    <rect x="80" y="210" width="200" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <text x="400" y="204" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.18)" textAnchor="end">TIDAK BISA DITARIK</text>
    <text x="230" y="265" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">DANA TIDAK TERLINDUNGI</text>
  </svg>
);
const VisualB2 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vb2" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="rgba(0,0,0,0.042)"/></pattern>
    <rect width="460" height="310" fill="url(#vb2)"/>
    <rect x="48" y="40" width="152" height="168" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="124" y="62" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">DESKRIPSI</text>
    <rect x="68" y="74" width="112" height="78" rx="6" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
    <rect x="80" y="88" width="88" height="8" rx="3" fill="rgba(0,0,0,0.07)"/>
    <rect x="80" y="102" width="72" height="6" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="80" y="114" width="80" height="6" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="68" y="162" width="112" height="9" rx="3" fill="rgba(0,0,0,0.055)"/>
    <text x="124" y="200" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.22)" textAnchor="middle">KONDISI BAIK</text>
    <text x="230" y="130" fontFamily="monospace" fontSize="14" fill="rgba(0,0,0,0.14)" textAnchor="middle">≠</text>
    <rect x="260" y="40" width="152" height="168" rx="10" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.07)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="336" y="62" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">ASLINYA</text>
    <rect x="280" y="74" width="112" height="78" rx="6" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
    <rect x="292" y="88" width="55" height="8" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="292" y="102" width="88" height="6" rx="3" fill="rgba(0,0,0,0.04)"/>
    <rect x="292" y="126" width="45" height="6" rx="3" fill="rgba(0,0,0,0.04)"/>
    <text x="336" y="200" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">TIDAK SESUAI</text>
    <rect x="104" y="228" width="252" height="36" rx="8" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="230" y="250" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="0.5">TIDAK ADA JALUR PENGEMBALIAN</text>
    <text x="230" y="286" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">KLAIM TIDAK BISA DIAJUKAN</text>
  </svg>
);
const VisualB3 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vb3" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0L0 0 0 32" fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vb3)"/>
    <rect x="140" y="32" width="180" height="212" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <rect x="140" y="32" width="180" height="40" rx="10" fill="rgba(0,0,0,0.025)"/>
    <rect x="140" y="60" width="180" height="12" fill="rgba(0,0,0,0.025)"/>
    <text x="230" y="55" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="1">BUKTI TRANSAKSI</text>
    <rect x="162" y="84" width="136" height="8" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="162" y="100" width="96" height="8" rx="3" fill="rgba(0,0,0,0.04)"/>
    <rect x="162" y="120" width="136" height="68" rx="6" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="230" y="158" fontSize="26" fill="rgba(0,0,0,0.1)" textAnchor="middle">?</text>
    <rect x="162" y="204" width="136" height="1" fill="rgba(0,0,0,0.06)"/>
    <text x="230" y="220" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">TANDA TANGAN / SEGEL</text>
    <circle cx="310" cy="96" r="32" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="4 3"/>
    <text x="310" y="92" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="middle">TIDAK</text>
    <text x="310" y="104" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="middle">SAH</text>
    <text x="230" y="270" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">TIDAK ADA DASAR HUKUM</text>
  </svg>
);
const VisualB4 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vb4" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="rgba(0,0,0,0.042)"/></pattern>
    <rect width="460" height="310" fill="url(#vb4)"/>
    <rect x="32" y="96" width="100" height="68" rx="9" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="82" y="124" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="0.5">PEMBELI</text>
    <rect x="52" y="134" width="60" height="18" rx="4" fill="rgba(0,0,0,0.06)"/>
    <text x="82" y="147" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.35)" textAnchor="middle">Rp ████</text>
    <line x1="134" y1="130" x2="185" y2="130" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
    <polygon points="181,125 187,130 181,135" fill="rgba(0,0,0,0.2)"/>
    <rect x="188" y="84" width="84" height="92" rx="9" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="230" y="118" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">TIDAK ADA</text>
    <text x="230" y="130" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">JAMINAN</text>
    <text x="230" y="148" fontSize="18" fill="rgba(0,0,0,0.08)" textAnchor="middle">∅</text>
    <line x1="274" y1="130" x2="325" y2="130" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="5 3"/>
    <polygon points="321,125 327,130 321,135" fill="rgba(0,0,0,0.12)"/>
    <rect x="328" y="96" width="100" height="68" rx="9" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="378" y="124" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.22)" textAnchor="middle" letterSpacing="0.5">PENJUAL</text>
    <text x="378" y="144" fontSize="16" fill="rgba(0,0,0,0.08)" textAnchor="middle">?</text>
    <rect x="96" y="192" width="268" height="36" rx="8" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="230" y="214" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="0.5">"BAYAR DULU, BARU DIKIRIM"</text>
    <text x="230" y="270" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">SKENARIO PENIPUAN PALING UMUM</text>
  </svg>
);
const VisualB5 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vb5" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0L0 0 0 36" fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vb5)"/>
    <rect x="32" y="60" width="140" height="140" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="102" y="90" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">PEMBELI</text>
    <rect x="56" y="104" width="92" height="8" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="56" y="120" width="68" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <text x="102" y="180" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">KLAIM DIAJUKAN</text>
    <rect x="288" y="60" width="140" height="140" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="358" y="90" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">PENJUAL</text>
    <rect x="308" y="104" width="92" height="8" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="308" y="120" width="60" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <text x="358" y="180" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">MENOLAK KLAIM</text>
    <rect x="178" y="84" width="104" height="92" rx="10" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.055)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="230" y="124" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.16)" textAnchor="middle">TIDAK ADA</text>
    <text x="230" y="138" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.16)" textAnchor="middle">MEDIATOR</text>
    <text x="230" y="157" fontSize="18" fill="rgba(0,0,0,0.07)" textAnchor="middle">∅</text>
    <rect x="80" y="228" width="300" height="34" rx="8" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="230" y="249" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="0.5">SENGKETA TIDAK TERSELESAIKAN</text>
    <text x="230" y="285" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">TIDAK ADA PIHAK NETRAL</text>
  </svg>
);
const VisualS1 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vs1" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0L0 0 0 36" fill="none" stroke="rgba(0,0,0,0.042)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vs1)"/>
    <rect x="52" y="52" width="180" height="108" rx="10" fill="white" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
    <text x="142" y="75" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="1">PENGIRIMAN</text>
    <line x1="52" y1="83" x2="232" y2="83" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
    <rect x="72" y="96" width="60" height="9" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="72" y="112" width="140" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <rect x="72" y="126" width="100" height="8" rx="3" fill="rgba(0,0,0,0.038)"/>
    <text x="142" y="148" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.22)" textAnchor="middle">TERKIRIM ✓</text>
    <line x1="238" y1="106" x2="280" y2="106" stroke="rgba(0,0,0,0.14)" strokeWidth="1.5"/>
    <polygon points="276,101 282,106 276,111" fill="rgba(0,0,0,0.14)"/>
    <rect x="284" y="52" width="124" height="108" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.065)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="346" y="96" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.18)" textAnchor="middle">PEMBELI</text>
    <text x="346" y="118" fontSize="22" fill="rgba(0,0,0,0.08)" textAnchor="middle">?</text>
    <text x="346" y="140" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.14)" textAnchor="middle">TIDAK KONFIRMASI</text>
    <rect x="52" y="180" width="356" height="52" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="80" y="200" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" letterSpacing="0.5">DANA PENJUAL</text>
    <rect x="80" y="210" width="240" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <text x="396" y="204" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.18)" textAnchor="end">TERTAHAN</text>
    <text x="230" y="265" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">KONFIRMASI TIDAK DATANG</text>
  </svg>
);
const VisualS2 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vs2" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="rgba(0,0,0,0.042)"/></pattern>
    <rect width="460" height="310" fill="url(#vs2)"/>
    <line x1="60" y1="130" x2="400" y2="130" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"/>
    <circle cx="110" cy="130" r="7" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2"/>
    <text x="110" y="156" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">BARANG</text>
    <text x="110" y="167" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">TERKIRIM</text>
    <circle cx="210" cy="130" r="7" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2"/>
    <text x="210" y="156" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">DIKONFIRMASI</text>
    <text x="210" y="167" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">DITERIMA</text>
    <circle cx="320" cy="130" r="9" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5"/>
    <line x1="316" y1="126" x2="324" y2="134" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="324" y1="126" x2="316" y2="134" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
    <text x="320" y="156" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">CHARGEBACK</text>
    <text x="320" y="167" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.3)" textAnchor="middle">SEPIHAK</text>
    <path d="M 380 100 Q 380 72 320 72 Q 260 72 260 100" stroke="rgba(0,0,0,0.1)" strokeWidth="1.2" fill="none" strokeDasharray="5 3"/>
    <polygon points="257,95 260,102 263,95" fill="rgba(0,0,0,0.1)"/>
    <rect x="130" y="60" width="108" height="28" rx="6" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="184" y="78" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.26)" textAnchor="middle">DANA DITARIK BALIK</text>
    <rect x="60" y="192" width="340" height="48" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="88" y="210" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.28)" letterSpacing="0.5">PENJUAL</text>
    <text x="388" y="210" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.18)" textAnchor="end">MERUGI TANPA KOMPENSASI</text>
    <rect x="80" y="220" width="200" height="8" rx="3" fill="rgba(0,0,0,0.04)"/>
    <text x="230" y="265" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">PEMBATALAN TIDAK DAPAT DICEGAH</text>
  </svg>
);
const VisualS3 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vs3" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0L0 0 0 32" fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vs3)"/>
    <rect x="68" y="44" width="324" height="176" rx="11" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <rect x="68" y="44" width="324" height="44" rx="11" fill="rgba(0,0,0,0.025)"/>
    <rect x="68" y="76" width="324" height="12" fill="rgba(0,0,0,0.025)"/>
    <text x="230" y="68" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.28)" textAnchor="middle" letterSpacing="1.2">KLAIM PEMBELI</text>
    <rect x="92" y="100" width="14" height="14" rx="3" fill="rgba(0,0,0,0.055)" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
    <rect x="116" y="103" width="160" height="8" rx="3" fill="rgba(0,0,0,0.06)"/>
    <text x="368" y="112" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="end">TIDAK TERBUKTI</text>
    <rect x="92" y="126" width="14" height="14" rx="3" fill="rgba(0,0,0,0.055)" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
    <rect x="116" y="129" width="130" height="8" rx="3" fill="rgba(0,0,0,0.055)"/>
    <text x="368" y="138" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="end">TIDAK TERBUKTI</text>
    <rect x="92" y="152" width="14" height="14" rx="3" fill="rgba(0,0,0,0.055)" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
    <rect x="116" y="155" width="148" height="8" rx="3" fill="rgba(0,0,0,0.05)"/>
    <text x="368" y="164" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="end">TIDAK TERBUKTI</text>
    <rect x="92" y="184" width="280" height="26" rx="6" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 3"/>
    <text x="232" y="200" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.22)" textAnchor="middle">REFUND DIPAKSA: Rp ████████</text>
    <rect x="88" y="248" width="284" height="30" rx="7" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="230" y="267" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="0.5">PENJUAL TIDAK BISA MEMBUKTIKAN</text>
    <text x="230" y="291" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">KLAIM TIDAK BERDASAR</text>
  </svg>
);
const VisualS4 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vs4" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="rgba(0,0,0,0.042)"/></pattern>
    <rect width="460" height="310" fill="url(#vs4)"/>
    <rect x="40" y="44" width="180" height="136" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="130" y="68" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">EKSPEDISI</text>
    <line x1="40" y1="77" x2="220" y2="77" stroke="rgba(0,0,0,0.055)" strokeWidth="1"/>
    <rect x="60" y="92" width="120" height="8" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="60" y="108" width="90" height="8" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="60" y="124" width="104" height="8" rx="3" fill="rgba(0,0,0,0.045)"/>
    <rect x="60" y="148" width="140" height="20" rx="5" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 3"/>
    <text x="130" y="162" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.18)" textAnchor="middle">TIDAK TERHUBUNG</text>
    <rect x="240" y="44" width="180" height="136" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="330" y="68" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="1">TRANSAKSI</text>
    <line x1="240" y1="77" x2="420" y2="77" stroke="rgba(0,0,0,0.055)" strokeWidth="1"/>
    <rect x="260" y="92" width="110" height="8" rx="3" fill="rgba(0,0,0,0.06)"/>
    <rect x="260" y="108" width="80" height="8" rx="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="260" y="148" width="140" height="20" rx="5" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 3"/>
    <text x="330" y="162" fontFamily="monospace" fontSize="7.5" fill="rgba(0,0,0,0.18)" textAnchor="middle">TIDAK ADA BUKTI KIRIM</text>
    <line x1="222" y1="112" x2="238" y2="112" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeDasharray="3 3"/>
    <rect x="88" y="208" width="284" height="36" rx="8" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
    <text x="230" y="230" fontFamily="monospace" fontSize="8.5" fill="rgba(0,0,0,0.26)" textAnchor="middle" letterSpacing="0.5">BUKTI TIDAK BISA DIVERIFIKASI</text>
    <text x="230" y="270" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">DATA TERFRAGMENTASI</text>
  </svg>
);
const VisualS5 = () => (
  <svg viewBox="0 0 460 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <pattern id="vs5" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0L0 0 0 36" fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="0.7"/></pattern>
    <rect width="460" height="310" fill="url(#vs5)"/>
    <line x1="230" y1="44" x2="230" y2="110" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5"/>
    <line x1="130" y1="110" x2="330" y2="110" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5"/>
    <line x1="130" y1="110" x2="100" y2="148" stroke="rgba(0,0,0,0.1)" strokeWidth="1.2"/>
    <rect x="60" y="148" width="80" height="52" rx="8" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <text x="100" y="170" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.26)" textAnchor="middle">PENJUAL</text>
    <text x="100" y="184" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.2)" textAnchor="middle">KALAH</text>
    <line x1="330" y1="110" x2="360" y2="88" stroke="rgba(0,0,0,0.1)" strokeWidth="1.2"/>
    <rect x="320" y="64" width="80" height="52" rx="8" fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.065)" strokeWidth="1" strokeDasharray="4 3"/>
    <text x="360" y="86" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.18)" textAnchor="middle">PEMBELI</text>
    <text x="360" y="100" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.15)" textAnchor="middle">MENANG</text>
    <rect x="148" y="200" width="164" height="60" rx="10" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.055)" strokeWidth="1" strokeDasharray="5 3"/>
    <text x="230" y="226" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.16)" textAnchor="middle">TIDAK ADA</text>
    <text x="230" y="240" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.16)" textAnchor="middle">HAKIM NETRAL</text>
    <text x="230" y="254" fontSize="14" fill="rgba(0,0,0,0.07)" textAnchor="middle">∅</text>
    <text x="230" y="286" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.16)" textAnchor="middle" letterSpacing="2">RESOLUSI TIDAK ADIL</text>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const buyerProblems = [
  { id:"01", title:"Transfer dilakukan, penjual menghilang", desc:"Setelah pembayaran masuk, komunikasi terputus. Tidak ada mekanisme untuk menahan atau menarik kembali dana yang sudah dikirim.", V: VisualB1 },
  { id:"02", title:"Barang berbeda jauh dari deskripsi", desc:"Foto produk tidak mencerminkan kondisi asli. Setelah barang tiba, tidak ada jalur klaim atau pengembalian yang bisa diakses.", V: VisualB2 },
  { id:"03", title:"Tidak ada bukti transaksi yang sah", desc:"Tanpa dokumentasi resmi, pembeli tidak punya dasar hukum untuk mengajukan klaim jika terjadi sengketa di kemudian hari.", V: VisualB3 },
  { id:"04", title:"Dipaksa bayar langsung tanpa jaminan", desc:'"Bayar dulu, baru dikirim" adalah skenario penipuan paling umum. Tidak ada pihak yang menjamin dana kembali jika penjual ingkar.', V: VisualB4 },
  { id:"05", title:"Tidak ada mediasi saat sengketa terjadi", desc:"Ketika terjadi perselisihan, pembeli tidak punya akses ke pihak ketiga yang netral. Sengketa diselesaikan sendiri atau tidak sama sekali.", V: VisualB5 },
];
const sellerProblems = [
  { id:"01", title:"Pembeli hilang setelah barang tiba", desc:"Konfirmasi penerimaan tidak pernah datang. Dana tertahan tanpa kejelasan waktu pencairan, sementara stok sudah keluar.", V: VisualS1 },
  { id:"02", title:"Chargeback sepihak setelah konfirmasi", desc:"Pembayaran dibatalkan secara sepihak oleh pembeli atau bank meskipun barang sudah diterima dan dikonfirmasi.", V: VisualS2 },
  { id:"03", title:"Klaim palsu untuk memaksa refund", desc:"Pembeli beritikad buruk mengajukan klaim barang cacat untuk memaksa pengembalian dana tanpa dasar yang nyata.", V: VisualS3 },
  { id:"04", title:"Tidak ada rekam jejak pengiriman resmi", desc:"Bukti pengiriman yang tidak terintegrasi dengan sistem transaksi membuat penjual kesulitan membuktikan bahwa barang sudah sampai.", V: VisualS4 },
  { id:"05", title:"Tidak ada resolusi yang adil saat sengketa", desc:"Sengketa diselesaikan tanpa pihak ketiga yang netral. Penjual sering menjadi pihak yang kalah karena tidak punya akses ke mekanisme mediasi.", V: VisualS5 },
];

// ─── Problem Item ─────────────────────────────────────────────────────────────
function ProblemItem({ item, active, onClick, isLast }: {
  item: { id:string; title:string; desc:string; V: () => JSX.Element };
  active: boolean; onClick: () => void; isLast: boolean;
}) {
  return (
    <div
      style={{ position:"relative", borderTop:"1px solid rgba(0,0,0,0.08)",
        ...(isLast && { borderBottom:"1px solid rgba(0,0,0,0.08)" }),
        cursor:"pointer" }}
      onClick={onClick}
      role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-expanded={active}
    >
      {/* Active bar */}
      <div style={{ position:"absolute", left:-2, top:"50%", transform:"translateY(-50%)",
        width:1.5, borderRadius:2, background:"#0a0a0a",
        height: active ? "55%" : 0,
        transition:"height 0.35s cubic-bezier(0.22,0.68,0,1)" }}/>

      <div style={{ display:"flex", alignItems:"flex-start", gap:14,
        padding: active ? "22px 0 26px" : "18px 0",
        transition:"padding 0.32s ease" }}>
        <span style={{ fontFamily:"monospace", fontSize:10.5, fontWeight:700,
          letterSpacing:"0.07em", color: active ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)",
          minWidth:22, paddingTop:2, flexShrink:0, transition:"color 0.25s ease" }}>{item.id}</span>

        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontFamily:"var(--font-sans,'Source Sans 3',sans-serif)", fontSize: active ? 14 : 13.5,
            fontWeight:600, color: active ? "rgba(0,0,0,0.86)" : "rgba(0,0,0,0.38)",
            lineHeight:1.38, margin:0, letterSpacing:"-0.01em",
            transition:"color 0.25s ease, font-size 0.2s ease" }}>{item.title}</p>

          <div style={{ overflow:"hidden", maxHeight: active ? 200 : 0, opacity: active ? 1 : 0,
            transition:"max-height 0.4s cubic-bezier(0.22,0.68,0,1), opacity 0.3s ease" }}>
            <p style={{ fontFamily:"var(--font-sans,'Source Sans 3',sans-serif)", fontSize:12.5,
              color:"rgba(0,0,0,0.42)", lineHeight:1.72, margin:"10px 0 14px" }}>{item.desc}</p>
            <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:6,
              fontFamily:"var(--font-sans,'Source Sans 3',sans-serif)", fontSize:10, fontWeight:700,
              letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(0,0,0,0.62)",
              textDecoration:"none", borderBottom:"1.5px solid rgba(0,0,0,0.2)", paddingBottom:2 }}>
              Pelajari lebih lanjut <ArrowIcon/>
            </a>
          </div>
        </div>

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
          stroke="rgba(0,0,0,0.2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink:0, marginTop:2, transition:"transform 0.3s ease",
            transform: active ? "rotate(180deg)" : "none" }}>
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ProblemSection() {
  const [sectionRef, inView] = useInView(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  const allVisuals = [...buyerProblems.map(p => p.V), ...sellerProblems.map(p => p.V)];
  const groupTag = activeIndex < 5 ? "Pembeli" : "Penjual";

  return (
    <>
      <style>{`
        .ps-root{position:relative;background:#F9F8F6;padding:112px 0 128px;overflow:hidden}
        .ps-root::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 40%,rgba(0,0,0,.013) 0%,transparent 55%),radial-gradient(circle at 80% 60%,rgba(0,0,0,.010) 0%,transparent 55%);pointer-events:none}
        .ps-inner{max-width:1200px;margin:0 auto;padding:0 40px}
        .ps-cols{display:grid;grid-template-columns:1fr 1fr;gap:0 48px}
        .ps-main{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
        .ps-sticky{position:sticky;top:100px}
        .ps-divider{display:none}
        @media(max-width:920px){
          .ps-root{padding:72px 0 80px}
          .ps-inner{padding:0 20px}
          .ps-main{grid-template-columns:1fr;gap:36px}
          .ps-cols{grid-template-columns:1fr;gap:0}
          .ps-sticky{position:relative;top:auto;order:-1}
          .ps-divider{display:block;height:1px;background:rgba(0,0,0,.07);margin:32px 0}
        }
      `}</style>

      <section id="problem" ref={sectionRef as RefObject<HTMLElement>} className="ps-root">
        <div className="ps-inner">

          {/* Header */}
          <div style={{ marginBottom:72, opacity:inView?1:0, transform:inView?"none":"translateY(18px)",
            transition:"opacity .65s ease, transform .65s ease" }}>
            <p style={{ fontFamily:"var(--font-sans)", fontSize:10.5, fontWeight:700,
              letterSpacing:"0.22em", color:"rgba(0,0,0,.3)", textTransform:"uppercase", margin:"0 0 18px" }}>
              Problem
            </p>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(34px,5vw,60px)",
              fontWeight:700, lineHeight:1.05, letterSpacing:"-0.035em", color:"#0a0a0a",
              margin:"0 0 18px", maxWidth:560 }}>
              Dua pihak.{" "}
              <em style={{ fontStyle:"italic", color:"rgba(0,0,0,.24)" }}>Satu risiko</em>
              {" "}yang sama.
            </h2>
            <p style={{ fontFamily:"var(--font-sans)", fontSize:15.5, color:"rgba(0,0,0,.42)",
              lineHeight:1.72, maxWidth:400, margin:0 }}>
              Setiap transaksi tanpa perlindungan meninggalkan celah — untuk pembeli dan penjual sekaligus.
            </p>
          </div>

          <div className="ps-main">

            {/* Left: two groups */}
            <div className="ps-cols" style={{ opacity:inView?1:0, transform:inView?"none":"translateY(24px)",
              transition:"opacity .65s ease .1s, transform .65s ease .1s" }}>

              {/* Pembeli */}
              <div>
                <p style={{ fontFamily:"var(--font-sans)", fontSize:10.5, fontWeight:700,
                  letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(0,0,0,.28)", margin:"0 0 4px" }}>
                  Pembeli
                </p>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(16px,1.7vw,20px)",
                  fontWeight:600, letterSpacing:"-0.025em", color:"#0a0a0a", lineHeight:1.2, margin:"0 0 24px" }}>
                  Uang Pergi,<br/>Barang Tak Datang
                </h3>
                {buyerProblems.map((item, i) => (
                  <ProblemItem key={item.id} item={item} active={activeIndex===i}
                    onClick={() => setActiveIndex(i)} isLast={i===buyerProblems.length-1}/>
                ))}
              </div>

              <div className="ps-divider"/>

              {/* Penjual */}
              <div>
                <p style={{ fontFamily:"var(--font-sans)", fontSize:10.5, fontWeight:700,
                  letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(0,0,0,.28)", margin:"0 0 4px" }}>
                  Penjual
                </p>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(16px,1.7vw,20px)",
                  fontWeight:600, letterSpacing:"-0.025em", color:"#0a0a0a", lineHeight:1.2, margin:"0 0 24px" }}>
                  Barang Terkirim,<br/>Uang Tak Cair
                </h3>
                {sellerProblems.map((item, i) => (
                  <ProblemItem key={item.id} item={item} active={activeIndex===i+5}
                    onClick={() => setActiveIndex(i+5)} isLast={i===sellerProblems.length-1}/>
                ))}
              </div>

            </div>

            {/* Right: sticky visual */}
            <div className="ps-sticky" style={{ opacity:inView?1:0, transform:inView?"none":"translateY(24px)",
              transition:"opacity .65s ease .22s, transform .65s ease .22s" }}>

              <div style={{ position:"relative", background:"white", border:"1px solid rgba(0,0,0,.08)",
                borderRadius:14, overflow:"hidden", aspectRatio:"4/3.1" }}>

                <span style={{ position:"absolute", top:18, left:20, fontFamily:"monospace",
                  fontSize:9.5, fontWeight:700, letterSpacing:"0.18em", color:"rgba(0,0,0,.22)",
                  textTransform:"uppercase", zIndex:10 }}>Kahade</span>

                <span style={{ position:"absolute", top:18, right:20, fontFamily:"monospace",
                  fontSize:9.5, fontWeight:700, letterSpacing:"0.14em", color:"rgba(0,0,0,.22)",
                  textTransform:"uppercase", zIndex:10, transition:"opacity .3s ease" }}>{groupTag}</span>

                {allVisuals.map((V, i) => (
                  <div key={i} style={{ position:"absolute", inset:0, display:"flex",
                    alignItems:"center", justifyContent:"center", padding:"44px 24px 24px",
                    opacity:activeIndex===i?1:0, transform:activeIndex===i?"none":"translateY(10px)",
                    transition:"opacity .38s ease, transform .38s ease",
                    pointerEvents:activeIndex===i?"auto":"none" }}>
                    <V/>
                  </div>
                ))}

                {/* Dots */}
                <div style={{ position:"absolute", bottom:18, left:"50%", transform:"translateX(-50%)",
                  display:"flex", gap:6, zIndex:10 }}>
                  {allVisuals.map((_, i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Slide ${i+1}`}
                      style={{ width:4, height:4, borderRadius:"50%", border:"none", cursor:"pointer",
                        padding:0, background:activeIndex===i?"rgba(0,0,0,.45)":"rgba(0,0,0,.1)",
                        transform:activeIndex===i?"scale(1.4)":"none",
                        transition:"background .25s ease, transform .25s ease" }}/>
                  ))}
                </div>
              </div>

              <p style={{ marginTop:16, fontFamily:"var(--font-sans)", fontSize:12,
                color:"rgba(0,0,0,.28)", lineHeight:1.65, letterSpacing:"0.01em" }}>
                Dua sisi. Dua risiko berbeda. Satu platform yang melindungi keduanya.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
