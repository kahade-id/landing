"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M12 2 4 6v6c0 4.4 3.6 8 8 10 4.4-2 8-5.6 8-10V6l-8-4Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 118 0v3" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7 3l4 4-4 4" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const securityItems = [
  {
    title: "Dana Terisolasi di Rekening Escrow",
    description: "Dana pembeli disimpan di rekening terpisah yang tidak dapat diakses oleh penjual maupun Kahade hingga seluruh syarat transaksi terpenuhi.",
    icon: <ShieldIcon />,
  },
  {
    title: "Enkripsi Data Tingkat Tinggi",
    description: "Seluruh data transaksi dan informasi pengguna dienkripsi saat transit maupun saat disimpan, menggunakan standar enkripsi mutakhir.",
    icon: <LockIcon />,
  },
  {
    title: "Transparansi Status Real-Time",
    description: "Semua pihak dapat memantau status transaksi secara real-time. Tidak ada proses tersembunyi — alur dana terlihat jelas di setiap tahap.",
    icon: <EyeIcon />,
  },
  {
    title: "Verifikasi KYC Pengguna",
    description: "Setiap pengguna melalui proses verifikasi identitas (e-KYC) sebelum bertransaksi, memastikan hanya pihak terverifikasi yang dapat berpartisipasi.",
    icon: <UsersIcon />,
  },
];

const certificationsLine = "KYC/AML  ||  SSL/TLS  ||  2FA  ||  AUDIT";

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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SecuritySection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section id="keamanan" ref={sectionRef} className="section bg-surface">
      <div className="container-base">
        <div className="dark-section p-8 lg:p-12 xl:p-16">
          <div className="relative z-10">
            {/* Header */}
            <header className="text-center mb-10 lg:mb-12">
              <h2 className="section-title-inv">
                Keamanan{" "}
                <span className="section-title-muted-inv">Berlapis</span>{" "}
                untuk Setiap Transaksi
              </h2>
            </header>

            {/* Divider */}
            <div className="divider-dots-inv mb-10 lg:mb-12" />

            {/* Security features grid */}
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 lg:gap-x-12">
              {securityItems.map((item, i) => (
                <article
                  key={item.title}
                  className={`max-w-md ${inView ? `anim-fade-up in-view delay-${i}` : ""}`}
                >
                  <div className="mb-4 text-white/50">{item.icon}</div>
                  <h3 className="card-title mb-3">
                    {item.title}
                  </h3>
                  <p className="body text-white/50">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Divider */}
            <div className="divider-dots-inv my-10 lg:my-12" />

            {/* Certification line */}
            <p
              className={`text-center text-sm lg:text-base font-semibold tracking-wide text-white/70 ${
                inView ? "anim-fade-up in-view delay-4" : ""
              }`}
            >
              {certificationsLine}
            </p>

            {/* Divider */}
            <div className="divider-dots-inv my-10 lg:my-12" />

            {/* Bottom CTA */}
            <div className="text-center max-w-xl mx-auto">
              <h3 className="dark-cta-title mb-4">
                Aman. Transparan. Terlindungi.
              </h3>
              <p className="body text-white/50 mb-8">
                Dengan sistem escrow terpisah, verifikasi KYC, dan monitoring aktif 24/7, dana Anda selalu terlindungi dari awal hingga akhir transaksi.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={homeAnchors.cta} className="btn btn-inv-primary">
                  Mulai Transaksi Aman
                  <ArrowRight />
                </Link>
                <Link href={supportLinks.support} className="btn btn-inv-ghost">
                  Pelajari Keamanan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
