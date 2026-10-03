"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, Reveal, SectionHeading } from "./motion-helpers";
import { Plus } from "@/lib/icons";
import { faqJsonLd, JsonLd } from "./site/JsonLd";

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

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: Math.min(index, 3) * 0.07 }}
    >
      <motion.div
        animate={{
          borderColor: open ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.1)",
          boxShadow: open
            ? "0 18px 44px -22px rgb(0 0 0 / 0.22)"
            : "0 0px 0px 0px rgb(0 0 0 / 0)",
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className="overflow-hidden rounded-2xl border bg-white"
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
        >
          <span className="text-[15px] font-semibold text-black">{item.q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0, scale: open ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
              open ? "bg-black text-white" : "bg-[#F3F4F6] text-black"
            }`}
          >
            <Plus weight="regular" className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="px-6 pb-6 text-[15px] leading-relaxed text-[#525252]"
              >
                {item.a}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden bg-[#F3F4F6]">
      <JsonLd data={faqJsonLd(FAQS)} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-white blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 section-pad sm:px-8">
        <SectionHeading title="Pertanyaan yang sering ditanyakan." />

        <div className="mt-12 space-y-3.5">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <p className="text-sm text-[#525252]">
            Masih penasaran?{" "}
            <a href="#download" className="font-semibold text-black underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black">
              Jadilah yang pertama tahu saat kami meluncur
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
