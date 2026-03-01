"use client";

import { useState } from "react";

const faqs = [
  {
    cat: "Escrow",
    q: "Bagaimana mekanisme escrow Kahade bekerja?",
    a: "Dana pembeli ditahan di alur escrow sampai syarat transaksi terpenuhi. Setelah pembeli mengonfirmasi hasil transaksi sesuai, dana diteruskan ke penjual.",
  },
  {
    cat: "Durasi",
    q: "Berapa lama dana bisa disimpan di escrow?",
    a: "Untuk transaksi standar, dana dapat disimpan hingga 30 hari. Untuk transaksi dengan durasi lebih panjang, periode dapat disesuaikan mengikuti struktur transaksi yang disepakati.",
  },
  {
    cat: "Keamanan",
    q: "Apa yang terjadi jika muncul sengketa?",
    a: "Dana tidak dilepas ke pihak mana pun selama tindak lanjut masih berlangsung. Struktur escrow membantu kedua pihak meninjau bukti dan status dengan lebih tertib.",
  },
  {
    cat: "Biaya",
    q: "Berapa biaya layanan Kahade?",
    a: "Biaya layanan mulai dari 2,5% dengan minimum dan maksimum yang jelas. Tidak ada biaya setup atau komitmen bulanan untuk memulai transaksi.",
  },
  {
    cat: "Akun",
    q: "Dokumen apa yang dibutuhkan untuk verifikasi akun?",
    a: "Untuk akun personal biasanya diperlukan identitas dan verifikasi dasar. Untuk akun bisnis, dokumen tambahan dapat diminta sesuai kebutuhan operasional dan volume transaksi.",
  },
  {
    cat: "Developer",
    q: "Apakah Kahade menyediakan API untuk integrasi?",
    a: "Ya. Dokumentasi integrasi tersedia agar tim produk dan engineering dapat memahami alur dasar, webhook, dan kebutuhan implementasi lebih awal.",
  },
];

function FAQItem({ item, open, onToggle, index }: { item: (typeof faqs)[number]; open: boolean; onToggle: () => void; index: number }) {
  return (
    <article className="rounded-[24px] border border-black/[0.08] bg-white px-5 py-2 shadow-[0_12px_36px_rgba(10,10,10,0.03)]">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-start gap-4 py-4 text-left">
        <span className="pt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-black/24">0{index + 1}</span>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="meta-chip min-h-[24px] px-2 text-[9px]">{item.cat}</span>
          </div>
          <h3 className="text-[17px] font-semibold leading-7 tracking-[-0.02em] text-black">{item.q}</h3>
        </div>
        <div className={`mt-1 flex h-9 w-9 items-center justify-center rounded-[14px] border transition ${open ? "border-black bg-black text-white" : "border-black/[0.08] bg-black/[0.03] text-black/55"}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M7 3v8M3 7h8" className={open ? "opacity-0" : "opacity-100"} />
            <path d="M3 7h8" />
          </svg>
        </div>
      </button>
      <div className={`simple-accordion-panel ${open ? "open" : ""}`}>
        <div className="simple-accordion-inner">
          <div className="pb-5 pl-8 pr-12">
            <p className="text-sm leading-7 text-black/58">{item.a}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell section-shell-muted">
      <div className="section-inner">
        <div className="section-heading center">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-title max-w-[12ch] text-center">Simple, rapi, dan tetap terasa sekeluarga dengan Kahade.</h2>
          <p className="section-lead max-w-[58ch] text-center">FAQ dibuat tetap utilitarian, tetapi shell, spacing, dan hierarchy-nya dinaikkan agar tidak terasa seperti komponen default SaaS generik.</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item, index) => (
            <FAQItem key={item.q} item={item} index={index} open={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
