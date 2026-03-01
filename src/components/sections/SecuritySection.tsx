"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M12 2 4 6v6c0 4.4 3.6 8 8 10 4.4-2 8-5.6 8-10V6l-8-4Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const securityItems = [
  {
    title: "Dana Terisolasi di Rekening Escrow",
    description:
      "Dana pembeli disimpan di rekening terpisah yang tidak dapat diakses oleh penjual maupun Kahade hingga seluruh syarat transaksi terpenuhi.",
    icon: <ShieldIcon />,
  },
  {
    title: "Enkripsi Data Tingkat Tinggi",
    description:
      "Seluruh data transaksi dan informasi pengguna dienkripsi saat transit maupun saat disimpan, menggunakan standar enkripsi mutakhir.",
    icon: <LockIcon />,
  },
  {
    title: "Transparansi Status Real-Time",
    description:
      "Semua pihak dapat memantau status transaksi secara real-time. Tidak ada proses tersembunyi — alur dana terlihat jelas di setiap tahap.",
    icon: <EyeIcon />,
  },
  {
    title: "Verifikasi KYC Pengguna",
    description:
      "Setiap pengguna melalui proses verifikasi identitas (e-KYC) sebelum bertransaksi, memastikan hanya pihak terverifikasi yang dapat berpartisipasi.",
    icon: <UsersIcon />,
  },
];

const certifications = [
  { label: "KYC/AML", sub: "Verifikasi Identitas" },
  { label: "SSL/TLS", sub: "Enkripsi Koneksi" },
  { label: "2FA", sub: "Autentikasi Ganda" },
  { label: "Audit", sub: "Pemeriksaan Berkala" },
];

// ─── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.1): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Dot Divider ─────────────────────────────────────────────────────────────
const SectionDivider = () => (
  <div
    aria-hidden="true"
    className="h-[2px] w-full"
    style={{
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2.2px)",
      backgroundSize: "16px 2px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "left center" }}
  />
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SecuritySection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section id="keamanan" ref={sectionRef} className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-card bg-[#111] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16 relative overflow-hidden">

        {/* Background decoration */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <pattern id="sec-dot" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="0.8" cy="0.8" r="0.8" fill="rgba(255,255,255,0.04)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#sec-dot)" />
          <circle cx="-3%" cy="20%" r="260" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
          <circle cx="103%" cy="80%" r="280" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
        </svg>

        <div className="relative z-10">
          {/* Header */}
          <header className="mx-auto max-w-3xl text-center">
            <h2
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              Keamanan{" "}
              <span className="text-white/35">Berlapis</span>{" "}
              untuk Setiap Transaksi
            </h2>
          </header>

          <div className="mt-10 sm:mt-12">
            <SectionDivider />
          </div>

          {/* Security features grid */}
          <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
            {securityItems.map((item, i) => (
              <article
                key={item.title}
                className="max-w-md"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s` }}
              >
                <div className="mb-5 text-white/60">{item.icon}</div>
                <h3
                  className="text-2xl font-bold leading-snug tracking-tight"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/55">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="my-12 sm:my-14">
            <SectionDivider />
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {certifications.map((cert, i) => (
              <div
                key={cert.label}
                className="flex flex-col items-center justify-center gap-1.5 h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-white/10 bg-white/5 text-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(0.9)",
                  transition: `opacity 0.5s ease ${0.4 + i * 0.08}s, transform 0.5s ease ${0.4 + i * 0.08}s` }}
              >
                <span className="text-base font-extrabold text-white" style={{ letterSpacing: "-0.02em" }}>
                  {cert.label}
                </span>
                <span className="text-2xs font-medium text-white/35 leading-tight px-2">
                  {cert.sub}
                </span>
              </div>
            ))}
          </div>

          <div className="my-12 sm:my-14">
            <SectionDivider />
          </div>

          {/* Bottom CTA */}
          <div className="mx-auto mt-4 max-w-3xl text-center">
            <h3
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              Aman. Transparan. Terlindungi.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg max-w-xl mx-auto">
              Dengan sistem escrow terpisah, verifikasi KYC, dan monitoring aktif 24/7, dana Anda selalu terlindungi dari awal hingga akhir transaksi.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={homeAnchors.cta} className="btn-inv-primary">
                Mulai Transaksi Aman
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M3 7h8M7 3l4 4-4 4" />
                </svg>
              </Link>
              <Link href={supportLinks.support} className="btn-inv-ghost">
                Pelajari Keamanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
