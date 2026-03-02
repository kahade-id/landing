"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

const faqs = [
  { q: "Bagaimana mekanisme escrow Kahade bekerja?", a: "Dana dari pembeli ditahan pada alur escrow sampai syarat transaksi terpenuhi. Setelah pembeli mengonfirmasi penerimaan barang/jasa, barulah dana diteruskan ke penjual." },
  { q: "Berapa lama dana bisa disimpan di escrow?", a: "Dana dapat disimpan maksimal 30 hari untuk transaksi standar. Untuk transaksi dengan durasi lebih panjang, Anda dapat mengatur periode escrow hingga 180 hari." },
  { q: "Apakah dana saya aman jika terjadi sengketa?", a: "Ya. Dana tidak akan dilepas ke pihak manapun selama proses sengketa berlangsung. Tim mediator kami akan meninjau bukti dari kedua belah pihak dan memberikan keputusan dalam 3-5 hari kerja." },
  { q: "Apakah Kahade memiliki izin resmi?", a: "Kahade menerapkan pendekatan keamanan berlapis, proses verifikasi, dan pemantauan operasional untuk membantu menjaga transaksi tetap aman." },
  { q: "Berapa biaya layanan escrow Kahade?", a: "Biaya layanan 2.5% dari nilai transaksi. Tidak ada biaya setup atau biaya bulanan. Anda hanya membayar ketika transaksi berhasil diselesaikan." },
  { q: "Apakah ada biaya tambahan untuk pembatalan transaksi?", a: "Tidak ada biaya pembatalan jika dibatalkan sebelum penjual mengkonfirmasi. Dana dikembalikan penuh dalam 1-2 hari kerja." },
  { q: "Dokumen apa yang dibutuhkan untuk verifikasi akun?", a: "Untuk akun personal: KTP dan selfie. Untuk akun bisnis: KTP pemilik, NPWP, SIUP/NIB, dan rekening koran 3 bulan terakhir." },
  { q: "Berapa batas transaksi per hari?", a: "Akun terverifikasi basic: Rp 50 juta/hari. Akun terverifikasi premium: Rp 500 juta/hari. Akun bisnis: hingga Rp 5 miliar/hari." },
  { q: "Apakah Kahade menyediakan API untuk integrasi?", a: "Ya. Kami menyediakan REST API lengkap dengan dokumentasi interaktif. Tersedia SDK untuk Node.js, Python, PHP, dan Go." },
  { q: "Metode pembayaran apa saja yang didukung?", a: "Transfer bank, Virtual Account, QRIS, kartu kredit/debit Visa & Mastercard, serta dompet digital (GoPay, OVO, DANA, ShopeePay)." },
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

  return (
    <div 
      className={`accordion-item ${inView ? "anim-fade-up in-view" : ""}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button 
        onClick={() => setOpen(!open)} 
        className="accordion-trigger group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <span className="text-xs font-bold text-ink-20 tabular-nums mt-1 w-6 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-base font-semibold leading-snug transition-colors ${
            open ? "text-ink" : "text-ink-60 group-hover:text-ink"
          }`}>
            {faq.q}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
          open ? "bg-ink" : "bg-ink-4 group-hover:bg-ink-9"
        }`}>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="none" 
            stroke={open ? "white" : "rgba(0,0,0,0.55)"} 
            strokeWidth="2" 
            strokeLinecap="round"
            className="transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
          >
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}
      >
        <div className="pb-5 pl-10 pr-4">
          <p className="text-sm lg:text-base text-ink-45 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [sectionRef, inView] = useInView(0.08);

  return (
    <section id="faq" ref={sectionRef} className="section bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header mb-10">
          <div className={`${inView ? "anim-fade-up in-view" : ""}`}>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">
              Pertanyaan{" "}
              <span className="section-title-muted">yang Sering Ditanyakan</span>
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
