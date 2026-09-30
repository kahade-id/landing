"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Apa itu escrow?",
    a: "Kahade bertindak sebagai pihak netral: menahan uang pembeli, lalu meneruskannya ke penjual setelah barang diterima dan dikonfirmasi.",
  },
  {
    q: "Apakah uang saya aman?",
    a: "Aman. Dana tidak bisa dicairkan penjual sebelum kamu mengonfirmasi bahwa barang sudah diterima.",
  },
  {
    q: "Bagaimana jika barang tidak datang?",
    a: "Jangan konfirmasi penerimaan. Ajukan sengketa dan tim kami akan membantu — uangmu bisa kembali.",
  },
  {
    q: "Apakah ada biaya?",
    a: "Detail biaya akan diumumkan saat peluncuran. Prinsip kami: aman dulu, transparan selalu.",
  },
  {
    q: "Kapan aplikasinya tersedia?",
    a: "Segera hadir di App Store dan Google Play. Pantau halaman ini untuk kabar peluncurannya.",
  },
  {
    q: "Bagaimana cara mulai berjualan?",
    a: "Buat etalase, unggah produk, dan terima pesanan — setiap transaksi otomatis dilindungi escrow.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-surface border-y border-surface">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[17px] font-semibold tracking-tight">
                  {f.q}
                </span>
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`shrink-0 text-ink transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <path
                    d="M9 2v14M2 9h14"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-8 text-[15px] leading-relaxed text-muted">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
