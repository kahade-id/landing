"use client";

import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/src/hooks/useInView";

interface BreadcrumbItem { label: string; href?: string; }
interface HeroConfig {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}
interface CTAConfig {
  show?: boolean;
  title?: string;
  description?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}
interface InnerPageLayoutProps {
  children: React.ReactNode;
  hero?: HeroConfig;
  cta?: CTAConfig;
}

export default function InnerPageLayout({ children, hero, cta = { show: true } }: InnerPageLayoutProps) {
  const [ctaRef, ctaInView] = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        {hero && (
          <section className="relative overflow-hidden bg-white pt-20 pb-14 lg:pt-28 lg:pb-18 border-b border-border">
            <div className="container-narrow relative z-10 text-center">
              {hero.breadcrumbs && (
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                    {hero.breadcrumbs.map((item, index) => (
                      <li key={item.label ?? index} className="flex items-center gap-2">
                        {index > 0 && <span>/</span>}
                        {item.href ? (
                          <Link href={item.href} className="hover:text-foreground transition-colors">{item.label}</Link>
                        ) : (
                          <span className="text-foreground">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {hero.eyebrow && (
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                  {hero.eyebrow}
                </p>
              )}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {hero.title}
              </h1>
              {hero.description && (
                <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">{hero.description}</p>
              )}
              {hero.children && <div className="mt-8">{hero.children}</div>}
            </div>
          </section>
        )}
        {children}
        {cta?.show && (
          <section ref={ctaRef} className="section bg-white border-t border-border">
            <div className="container-base">
              <div className="bg-foreground rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
                  style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                <div className="relative z-10 max-w-xl mx-auto">
                  <div className={`anim-fade-up delay-100 ${ctaInView ? "in-view" : ""}`}>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-background">
                      {cta.title || "Siap Transaksi Aman?"}
                    </h2>
                  </div>
                  <div className={`anim-fade-up delay-200 ${ctaInView ? "in-view" : ""}`}>
                    <p className="text-background/60 max-w-md mx-auto mb-8 mt-4">
                      {cta.description || "Daftar gratis dalam 2 menit. Tanpa biaya setup."}
                    </p>
                  </div>
                  <div className={`anim-fade-up delay-300 ${ctaInView ? "in-view" : ""}`}>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={cta.primaryButton?.href || "https://app.kahade.id/register"}
                        className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
                      >
                        {cta.primaryButton?.label || "Daftar Sekarang"}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <Link
                        href={cta.secondaryButton?.href || "/contact"}
                        className="inline-flex items-center gap-2 text-background border border-background/30 px-6 py-3 rounded-lg font-medium hover:bg-background/10 transition-colors"
                      >
                        {cta.secondaryButton?.label || "Hubungi Kami"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
