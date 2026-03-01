"use client";

import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

const steps = [
  {
    num: "01",
    title: "Buat kesepakatan",
    desc: "Buyer dan seller menyepakati nominal, objek transaksi, tenggat, dan syarat dalam satu alur yang tercatat.",
    details: ["Detail tersimpan rapi", "Notifikasi ke dua pihak"],
  },
  {
    num: "02",
    title: "Dana masuk escrow",
    desc: "Pembeli mentransfer ke escrow Kahade. Dana belum bisa diakses sampai transaksi benar-benar bergerak ke tahap berikutnya.",
    details: ["Konfirmasi real-time", "Proteksi sampai selesai"],
    featured: true,
  },
  {
    num: "03",
    title: "Pengiriman berjalan",
    desc: "Penjual mulai mengirim barang atau menyelesaikan jasa dengan rasa aman karena status dana sudah jelas.",
    details: ["Upload bukti", "Progress mudah dipantau"],
  },
  {
    num: "04",
    title: "Konfirmasi hasil",
    desc: "Pembeli meninjau hasil transaksi. Jika ada isu, kedua pihak masih punya alur yang lebih tertib untuk menindaklanjuti.",
    details: ["Ada masa peninjauan", "Timeline tetap jelas"],
  },
  {
    num: "05",
    title: "Dana dilepas",
    desc: "Setelah syarat terpenuhi, dana diteruskan ke penjual dan transaksi selesai dengan riwayat yang terdokumentasi.",
    details: ["Ringkas untuk buyer", "Jelas untuk seller"],
  },
];

const topStats = [
  { value: "5 langkah", label: "Alur yang mudah dipahami" },
  { value: "Real-time", label: "Status progres diperbarui" },
  { value: "1 dashboard", label: "Semua pihak melihat hal yang sama" },
];

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="section-shell bg-white">
      <div className="section-inner">
        <div className="section-heading center">
          <span className="section-kicker">Cara kerja</span>
          <h2 className="section-title max-w-[12ch] text-center">
            Jelas dari kesepakatan sampai dana cair.
          </h2>
          <p className="section-lead max-w-[58ch] text-center">
            Struktur transaksi Kahade dibuat ringan dibaca. Setiap tahap punya peran yang jelas agar buyer dan seller tidak perlu menebak-nebak prosesnya.
          </p>
        </div>

        <div className="stat-grid cols-3 mb-8">
          {topStats.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map((step) => {
            const isFeatured = step.featured;
            return (
              <article key={step.num} className={`${isFeatured ? "surface-card-dark" : "surface-card"} card-pad card-stack h-full`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`${isFeatured ? "meta-chip-dark" : "meta-chip"}`}>Step {step.num}</span>
                  <div className={`${isFeatured ? "icon-shell-dark" : "icon-shell"} h-10 w-10 rounded-[14px] text-[13px] font-bold`}>
                    {step.num}
                  </div>
                </div>

                <div>
                  <h3 className={`m-0 text-[20px] font-semibold tracking-[-0.03em] ${isFeatured ? "text-white" : "text-black"}`}>{step.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${isFeatured ? "text-white/62" : "text-black/56"}`}>{step.desc}</p>
                </div>

                <div className={`space-y-2 rounded-[18px] border px-4 py-4 ${isFeatured ? "border-white/[0.08] bg-white/[0.04]" : "border-black/[0.06] bg-black/[0.02]"}`}>
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${isFeatured ? "bg-white/72" : "bg-black/70"}`} />
                      <span className={`text-[13px] font-medium ${isFeatured ? "text-white/76" : "text-black/62"}`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-black/[0.08] bg-[#fafaf8] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/35">Butuh referensi lebih detail?</p>
            <p className="mt-2 text-sm leading-7 text-black/56">Lihat dokumentasi, panduan operasional, dan status sistem untuk memahami implementasi alur escrow lebih lanjut.</p>
          </div>
          <div className="button-group sm:w-auto">
            <Link href={homeAnchors.pricing} className="btn-primary btn-sm">Lihat harga</Link>
            <Link href={supportLinks.docs} className="btn-secondary btn-sm">Buka dokumentasi</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
