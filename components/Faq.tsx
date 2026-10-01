"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Apa itu escrow?",
    a: "Escrow adalah pihak ketiga netral yang menahan dana pembeli selama transaksi berlangsung. Dana baru diteruskan ke penjual setelah pembeli mengonfirmasi barang diterima sesuai kesepakatan.",
  },
  {
    q: "Apakah uang saya aman selama ditahan escrow?",
    a: "Ya. Dana yang kamu bayarkan tidak langsung masuk ke penjual, melainkan ditahan aman oleh Kahade sampai kamu mengonfirmasi penerimaan barang.",
  },
  {
    q: "Bagaimana cara mulai menjual di Kahade?",
    a: "Buat akun, unggah foto produkmu ke feed seperti memposting di media sosial, lalu atur harga. Saat ada pembeli, seluruh proses transaksi berjalan di dalam aplikasi.",
  },
  {
    q: "Kapan penjual menerima dananya?",
    a: "Setelah pembeli mengonfirmasi bahwa barang sudah diterima dan sesuai, dana yang ditahan escrow akan dicairkan ke penjual.",
  },
  {
    q: "Bagaimana jika barang tidak sesuai atau tidak sampai?",
    a: "Jangan konfirmasi penerimaan terlebih dahulu. Kamu bisa mengajukan sengketa melalui aplikasi, dan tim Kahade akan membantu menengahi penyelesaiannya.",
  },
  {
    q: "Apakah Kahade sudah bisa digunakan?",
    a: "Kahade sedang dalam tahap persiapan menuju peluncuran. Download aplikasinya agar menjadi yang pertama tahu saat kami resmi meluncur.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="faq-icon h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-[#F3F4F6]">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-wide text-[#525252]">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
            Pertanyaan yang sering ditanyakan.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 3) * 60}>
                <div
                  className="faq-item rounded-2xl border border-black/10 bg-white"
                  data-open={open}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-black">{item.q}</span>
                    <PlusIcon />
                  </button>
                  <div className="faq-answer">
                    <div>
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#525252]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
