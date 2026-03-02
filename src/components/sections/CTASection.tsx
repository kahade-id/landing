"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { homeAnchors } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const PlayCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="currentColor" />
  </svg>
);

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.18): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { setInView(true); obs.disconnect(); } 
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
export default function CTASection() {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section
      id="mulai"
      ref={sectionRef}
      className="section relative overflow-hidden bg-dark-bg"
    >
      {/* Decorative rings */}
      <div className="absolute -top-20 -left-20 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 container-base text-center">
        {/* Main Headline */}
        <div className={`${inView ? "anim-fade-up delay-2 in-view" : ""}`}>
          <h2 className="section-title-inv">
            <span className="block">Transaksi Aman.</span>
            <span className="block section-title-muted-inv">Dimulai Hari Ini.</span>
          </h2>
        </div>

        {/* Subtext */}
        <div className={`${inView ? "anim-fade-up delay-3 in-view" : ""}`}>
          <p className="body text-white/45 max-w-md mx-auto mb-8">
            Daftar gratis dalam 2 menit. Tanpa biaya setup, tanpa kontrak jangka panjang — bayar hanya saat transaksi berhasil.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`${inView ? "anim-fade-up delay-4 in-view" : ""}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={homeAnchors.cta} className="btn btn-inv-primary">
              Mulai Transaksi Gratis
              <ArrowRight />
            </Link>
            <Link href={homeAnchors.howItWorks} className="btn btn-inv-ghost">
              <PlayCircle />
              Lihat Cara Kerja
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
