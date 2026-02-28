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
        <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">
              {eyebrow}
            </p>
          )}
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          <p className="text-lg text-black/60 max-w-2xl leading-relaxed">{description}</p>
        </section>

        {(points.length > 0 || detailTitle || detailBody) && (
          <section className="pb-24 px-4 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {points.length > 0 && (
                <div>
                  <ul className="space-y-4">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-black/75 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(detailTitle || detailBody) && (
                <div>
                  {detailTitle && <h2 className="text-xl font-bold mb-3 tracking-tight">{detailTitle}</h2>}
                  {detailBody && <p className="text-black/60 leading-relaxed">{detailBody}</p>}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="pb-24 px-4 max-w-4xl mx-auto" style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "64px", marginTop: "0" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 bg-black text-white text-sm font-bold rounded-xl px-5 py-3 hover:-translate-y-0.5 transition-transform">
              Mulai Sekarang →
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-black/50 hover:text-black transition-colors">
              Hubungi Kami →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
