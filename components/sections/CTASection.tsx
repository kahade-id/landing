"use client";

import { useInView } from "@/src/hooks/useInView";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Gratis daftar",
  "Tanpa biaya setup",
  "Bisa mulai dalam 2 menit",
];

export default function CTASection() {
  const [sectionRef, ctaInView] = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section id="mulai" ref={sectionRef} className="section bg-white">
      <div className="container-base">
        <div className="bg-foreground rounded-2xl p-8 lg:p-16 relative overflow-hidden text-center">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className={`anim-fade-up delay-100 ${ctaInView ? "in-view" : ""}`}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-background">
                Siap Transaksi Aman?
              </h2>
            </div>

            <div className={`anim-fade-up delay-200 ${ctaInView ? "in-view" : ""}`}>
              <p className="text-background/60 max-w-md mx-auto mb-8 mt-4 text-lg">
                Daftar gratis dalam 2 menit. Tanpa biaya setup, tanpa kontrak.
              </p>
            </div>

            <div className={`anim-fade-up delay-300 ${ctaInView ? "in-view" : ""}`}>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <a
                  href="https://app.kahade.id/register"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-background/90 transition-colors"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent text-background border border-background/30 px-7 py-3.5 rounded-lg font-medium hover:bg-background/10 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className={`anim-fade-up delay-400 ${ctaInView ? "in-view" : ""}`}>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-background/60">
                    <Check className="w-4 h-4 text-background/40" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
