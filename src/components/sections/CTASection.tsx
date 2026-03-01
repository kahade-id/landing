"use client";

import Link from "next/link";
import { homeAnchors } from "@/lib/site";

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7.5h9M8.5 3.5l4 4-4 4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="6.25" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.55" />
    <path d="M6.2 5.3 10 7.5 6.2 9.7V5.3Z" fill="currentColor" />
  </svg>
);

export default function CTASection() {
  return (
    <section id="mulai" className="section-shell bg-white pt-0">
      <div className="section-inner">
        <div className="section-shell-dark surface-card-dark rounded-[32px] px-0 py-0">
          <div className="section-inner py-[clamp(56px,7vw,88px)] text-center">
            <div className="mx-auto max-w-3xl">
              <span className="section-kicker-dark">Mulai hari ini</span>
              <h2 className="section-title-dark mt-5 max-w-none text-center">Transaksi aman yang terasa tenang, bukan teatrikal.</h2>
              <p className="section-lead-dark mx-auto mt-5 max-w-[36ch] text-center">Daftar gratis, gunakan hanya saat dibutuhkan, dan pertahankan kejelasan alur dana dari awal sampai transaksi selesai.</p>
            </div>

            <div className="button-group mt-8 justify-center">
              <Link href={homeAnchors.cta} className="btn-inv-primary">
                Mulai transaksi gratis
                <ArrowRight />
              </Link>
              <Link href={homeAnchors.howItWorks} className="btn-inv-ghost">
                <PlayIcon />
                Lihat cara kerja
              </Link>
            </div>

            <div className="trust-row-dark mt-8 justify-center">
              <span className="trust-item-dark">Tanpa biaya setup</span>
              <span className="trust-item-dark">Alur dana transparan</span>
              <span className="trust-item-dark">Buyer & seller friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
