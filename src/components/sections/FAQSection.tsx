"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

const faqs = [
  { cat: "escrow", q: "Bagaimana mekanisme escrow Kahade bekerja?", a: "Dana dari pembeli ditahan pada alur escrow sampai syarat transaksi terpenuhi. Setelah pembeli mengonfirmasi penerimaan barang/jasa, barulah dana diteruskan ke penjual. Proses ini membantu kedua belah pihak bertransaksi dengan lebih tenang.", tags: ["Escrow", "Cara Kerja"] },
  { cat: "escrow", q: "Berapa lama dana bisa disimpan di escrow?", a: "Dana dapat disimpan maksimal 30 hari untuk transaksi standar. Untuk transaksi dengan durasi lebih panjang (misal: proyek development), Anda dapat mengatur periode escrow hingga 180 hari melalui fitur Extended Escrow di dashboard.", tags: ["Escrow", "Durasi"] },
  { cat: "keamanan", q: "Apakah dana saya aman jika terjadi sengketa?", a: "Ya. Dana tidak akan dilepas ke pihak manapun selama proses sengketa berlangsung. Tim mediator kami akan meninjau bukti dari kedua belah pihak dan memberikan keputusan dalam 3-5 hari kerja. Keputusan mediator bersifat final dan mengikat.", tags: ["Sengketa", "Perlindungan"] },
  { cat: "keamanan", q: "Apakah Kahade memiliki izin resmi?", a: "Kahade menerapkan pendekatan keamanan berlapis, proses verifikasi, dan pemantauan operasional untuk membantu menjaga transaksi tetap aman. Detail legal, kebijakan, dan informasi operasional dapat dilihat pada halaman bantuan dan dokumentasi yang tersedia.", tags: ["Keamanan", "Operasional"] },
  { cat: "biaya", q: "Berapa biaya layanan escrow Kahade?", a: "Biaya layanan berkisar antara 0.5% hingga 2% dari nilai transaksi, tergantung kategori dan nominal. Tidak ada biaya setup atau biaya bulanan. Anda hanya membayar ketika transaksi berhasil diselesaikan. Lihat halaman Harga untuk tabel biaya lengkap.", tags: ["Biaya", "Pricing"] },
  { cat: "biaya", q: "Apakah ada biaya tambahan untuk pembatalan transaksi?", a: "Tidak ada biaya pembatalan jika dibatalkan sebelum penjual mengkonfirmasi. Jika dibatalkan setelah penjual mengkonfirmasi namun barang belum dikirim, dikenakan biaya administrasi sebesar Rp 5.000. Dana dikembalikan penuh dalam 1-2 hari kerja.", tags: ["Biaya", "Pembatalan"] },
  { cat: "akun", q: "Dokumen apa yang dibutuhkan untuk verifikasi akun?", a: "Untuk akun personal: KTP dan selfie. Untuk akun bisnis: KTP pemilik, NPWP, SIUP/NIB, dan rekening koran 3 bulan terakhir. Proses verifikasi biasanya selesai dalam 1 hari kerja melalui sistem e-KYC otomatis kami.", tags: ["Verifikasi", "KYC"] },
  { cat: "akun", q: "Berapa batas transaksi per hari?", a: "Akun terverifikasi basic: Rp 50 juta/hari. Akun terverifikasi premium: Rp 500 juta/hari. Akun bisnis terverifikasi: hingga Rp 5 miliar/hari. Limit dapat dinaikkan dengan mengajukan permohonan dan melengkapi verifikasi tambahan.", tags: ["Limit", "Transaksi"] },
  { cat: "teknis", q: "Apakah Kahade menyediakan API untuk integrasi?", a: "Ya. Kami menyediakan REST API yang lengkap dengan dokumentasi interaktif. Tersedia SDK untuk Node.js, Python, PHP, dan Go. Terdapat sandbox environment untuk pengujian tanpa biaya. API mendukung webhook untuk notifikasi real-time.", tags: ["API", "Developer", "Integrasi"] },
  { cat: "teknis", q: "Metode pembayaran apa saja yang didukung?", a: "Transfer bank (semua bank Indonesia), Virtual Account, QRIS, kartu kredit/debit Visa & Mastercard, serta dompet digital (GoPay, OVO, DANA, ShopeePay). Proses pencairan dana ke rekening membutuhkan 1-2 hari kerja.", tags: ["Pembayaran", "Metode"] },
];

function useInView(threshold = 0.12): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}


function FAQItem({ faq, index, inView }: { faq: (typeof faqs)[number]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  const delayClass = `faq-d${Math.min(index, 8)}`;
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`faq-item faq-fade-up ${inView ? "fv" : ""} ${delayClass} px-0 border-b border-black/10 ${index === 0 ? "border-t" : ""}`}>
      <button onClick={() => setOpen(!open)} id={buttonId} className="w-full flex items-center justify-between py-5 text-left gap-4 group" aria-expanded={open} aria-controls={panelId}>
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span className="text-xs font-bold text-black/20 tabular-nums mt-0.5 w-5 flex-shrink-0 font-sans">{String(index + 1).padStart(2, "0")}</span>
          <span className={`text-base sm:text-base font-semibold leading-snug transition-colors ${open ? "text-black" : "text-black/75 group-hover:text-black"}`}>{faq.q}</span>
        </div>
        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${open ? "bg-black" : "bg-black/[.05] group-hover:bg-black/10"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={open ? "white" : "rgba(0,0,0,0.55)"} strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="2" x2="6" y2="10" className="faq-icon-bar vertical" style={{ transform: open ? "scaleY(0)" : "scaleY(1)", transition: "transform .25s ease, opacity .25s ease", transformOrigin: "center", opacity: open ? 0 : 1 }} />
            <line x1="2" y1="6" x2="10" y2="6" />
          </svg>
        </div>
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`faq-answer-wrap ${open ? "open" : ""}`}>
        <div className="faq-answer-inner">
          <div className="faq-answer-content pb-5 pl-8">
            <p className="text-sm sm:text-base text-black/55 leading-relaxed mb-3">{faq.a}</p>
            <div className="flex flex-wrap gap-1.5">
              {faq.tags.map((tag, ti) => (
                <span key={ti} className="px-2 py-0.5 rounded-md bg-black/[.04] text-2xs font-semibold text-black/40 border border-black/6">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs><radialGradient id="faq-bg1" cx="100%" cy="0%" r="50%"><stop offset="0%" stopColor="#000" stopOpacity=".02" /><stop offset="100%" stopColor="#000" stopOpacity="0" /></radialGradient></defs>
    <rect width="100%" height="100%" fill="url(#faq-bg1)" />
    <pattern id="faq-dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.06)" /></pattern>
    <rect width="100%" height="100%" fill="url(#faq-dots)" />
    <circle cx="92%" cy="10%" r="220" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    <circle cx="92%" cy="10%" r="140" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
  </svg>
);

export default function FAQSection() {
  const [sectionRef, inView] = useInView(0.08);
  const cls = (base: string, visible: boolean, delay = "") => `${base} ${visible ? "fv" : ""} ${delay}`;

  return (
    <section id="faq" ref={sectionRef} className="faq-root relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-surface">
      <AbstractBg />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${cls("faq-fade-up", inView, "faq-d1")} text-4xl sm:text-5xl lg:text-5xl font-extrabold text-black leading-[1.1] tracking-tight mb-5`} >
            Pertanyaan <span className="text-black/30">yang Sering Ditanyakan</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
