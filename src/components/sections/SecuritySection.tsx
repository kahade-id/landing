"use client";

import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

const features = [
  {
    title: "Dana terisolasi di alur escrow",
    body: "Dana tidak bergerak ke penjual sebelum syarat transaksi benar-benar terpenuhi.",
  },
  {
    title: "Verifikasi pengguna lebih tertib",
    body: "KYC membantu membangun lapisan trust tambahan sebelum transaksi bernilai tinggi dijalankan.",
  },
  {
    title: "Status dan bukti lebih mudah ditinjau",
    body: "Riwayat progress, bukti, dan keputusan transaksi tersusun lebih rapi dalam satu tempat.",
  },
  {
    title: "Pendekatan monitoring berlapis",
    body: "Keamanan tidak hanya berada di satu titik, tetapi dibangun melalui struktur proses dan visibilitas status.",
  },
];

const certifications = [
  { label: "KYC/AML", sub: "Verifikasi identitas" },
  { label: "SSL/TLS", sub: "Enkripsi koneksi" },
  { label: "2FA", sub: "Autentikasi ganda" },
  { label: "Audit", sub: "Pemeriksaan berkala" },
];

export default function SecuritySection() {
  return (
    <section id="keamanan" className="section-shell px-0">
      <div className="section-inner">
        <div className="section-shell-dark surface-card-dark rounded-[32px] px-0 py-0">
          <div className="section-inner py-[clamp(56px,7vw,88px)]">
            <div className="section-heading center">
              <span className="section-kicker-dark">Keamanan</span>
              <h2 className="section-title-dark max-w-[12ch] text-center">Satu keluarga visual dengan pricing dan CTA dark surface.</h2>
              <p className="section-lead-dark max-w-[60ch] text-center">Security layer Kahade disusun agar terasa premium, tepercaya, dan tetap sederhana dibaca. Fokusnya bukan dekorasi, tetapi struktur proteksi yang lebih jelas.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-6">
                  <div className="icon-shell-dark mb-5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 2.5 4 4.9v3.4c0 3 2.1 5.5 5 6.2 2.9-.7 5-3.2 5-6.2V4.9L9 2.5Z" />
                      <path d="m6.4 9 1.6 1.6L11.7 7" />
                    </svg>
                  </div>
                  <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{feature.body}</p>
                </article>
              ))}
            </div>

            <div className="my-8">
              <div className="divider-soft dark" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] px-5 py-6 text-center">
                  <div className="text-[28px] font-bold tracking-[-0.04em] text-white">{item.label}</div>
                  <div className="mt-2 text-sm text-white/48">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-6 py-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/34">Aman. Transparan. Terlindungi.</p>
                <p className="mt-3 max-w-[56ch] text-sm leading-7 text-white/62">Dengan escrow terpisah, verifikasi pengguna, dan visibilitas status yang lebih jelas, Kahade menjaga transaksi tetap meyakinkan dari awal sampai akhir.</p>
              </div>
              <div className="button-group mt-5 sm:mt-0 sm:w-auto">
                <Link href={homeAnchors.cta} className="btn-inv-primary btn-sm">Mulai transaksi</Link>
                <Link href={supportLinks.support} className="btn-inv-ghost btn-sm">Pelajari keamanan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
