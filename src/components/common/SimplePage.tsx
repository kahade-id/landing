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

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7 3l4 4-4 4" />
  </svg>
);

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
        {/* Hero Section */}
        <section className="pt-[44px] lg:pt-[48px] pb-16 lg:pb-20 px-4 bg-surface">
          <div className="max-w-3xl mx-auto text-center">
            {eyebrow && (
              <p className="meta-label mb-[10px]">{eyebrow}</p>
            )}
            <h1 className="inner-hero-title mb-[20px]">
              {title}
            </h1>
            <p className="inner-hero-lead">{description}</p>
          </div>
        </section>

        {/* Content Section */}
        {(points.length > 0 || detailTitle || detailBody) && (
          <section className="py-16 lg:py-20 px-4 bg-surface">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                {points.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold mb-5">Poin Penting</h2>
                    <ul className="space-y-4">
                      {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                            <CheckIcon />
                          </span>
                          <span className="text-ink-60 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(detailTitle || detailBody) && (
                  <div>
                    {detailTitle && <h2 className="text-lg font-bold mb-4">{detailTitle}</h2>}
                    {detailBody && <p className="text-ink-60 leading-relaxed">{detailBody}</p>}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-20 px-4 bg-surface border-t border-ink-9">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/" className="btn btn-primary">
                Mulai Sekarang
                <ArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
