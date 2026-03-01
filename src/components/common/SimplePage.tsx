"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface SimplePageProps {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  detailTitle?: string;
  detailBody?: string;
}

export default function SimplePage({
  eyebrow,
  title,
  description,
  points = [],
  detailTitle,
  detailBody,
}: SimplePageProps) {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="section-shell bg-[radial-gradient(circle_at_top_right,rgba(10,10,10,0.05),transparent_28%),linear-gradient(180deg,#fff_0%,#fafaf8_100%)] pb-10">
          <div className="section-inner">
            <div className="surface-card-soft card-pad max-w-5xl">
              <div className="section-heading mb-0 gap-5">
                {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
                <h1 className="section-title max-w-[14ch]">{title}</h1>
                <p className="section-lead max-w-[58ch]">{description}</p>
              </div>
            </div>
          </div>
        </section>

        {(points.length > 0 || detailTitle || detailBody) && (
          <section className="section-shell pt-8 bg-white">
            <div className="section-inner">
              <div className="grid gap-6 lg:grid-cols-2">
                {points.length > 0 ? (
                  <article className="surface-card card-pad card-stack">
                    <span className="section-kicker">Ringkasan</span>
                    <div className="space-y-3">
                      {points.map((point) => (
                        <div key={point} className="flex items-start gap-3 rounded-[18px] border border-black/[0.06] bg-black/[0.02] px-4 py-4">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-[11px] font-bold">✓</div>
                          <p className="text-sm leading-7 text-black/62">{point}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ) : null}

                {detailTitle || detailBody ? (
                  <article className="surface-card-soft card-pad card-stack">
                    <span className="section-kicker">Detail</span>
                    {detailTitle ? <h2 className="m-0 text-[28px] font-semibold tracking-[-0.04em] text-black">{detailTitle}</h2> : null}
                    {detailBody ? <p className="text-sm leading-7 text-black/58">{detailBody}</p> : null}
                  </article>
                ) : null}
              </div>
            </div>
          </section>
        )}

        <section className="section-shell pt-6 bg-white">
          <div className="section-inner">
            <div className="section-shell-dark surface-card-dark rounded-[32px] px-0 py-0">
              <div className="section-inner py-[clamp(40px,5vw,56px)] text-center">
                <span className="section-kicker-dark">Lanjutkan</span>
                <h2 className="section-title-dark mt-5 max-w-none text-center">Tetap satu keluarga dengan homepage.</h2>
                <p className="section-lead-dark mx-auto mt-4 max-w-[34ch] text-center">Halaman internal dibuat lebih branded, tetap sederhana, dan tidak terasa seperti pindah ke produk lain.</p>
                <div className="button-group mt-7 justify-center">
                  <Link href="/" className="btn-inv-primary">Kembali ke beranda</Link>
                  <Link href="/contact" className="btn-inv-ghost">Hubungi kami</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
