"use client";

import Image from "next/image";
import { useState, useEffect, useRef, type RefObject } from "react";

const StarFilled = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 1l1.5 3h3L8.5 6.5l1 3L6 7.5 2.5 9.5l1-3L1.5 4h3L6 1z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="6" fill="var(--color-ink)" />
    <path d="M3.5 6L5 7.5L8.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Rizky Maulana",
    role: "Pedagang Online",
    location: "Jakarta",
    image: "/testimonials/IMG_20260302_171204_349.jpg",
    rating: 5,
    tag: "Seller",
    text: "Sudah 3 tahun jualan online, baru sekarang bisa tidur tenang. Dana masuk ke escrow dulu, barang saya kirim, begitu pembeli konfirmasi baru cair.",
    amount: "Rp 18.5jt",
    txLabel: "Transaksi terlindungi",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Pengusaha UMKM",
    location: "Surabaya",
    image: "/testimonials/IMG_20260302_171158_365.jpg",
    rating: 5,
    tag: "Verified Merchant",
    text: "Saya sempat ragu di awal — ternyata jauh melampaui ekspektasi. Uang saya dijaga ketat, proses transparan, dan tim support-nya responsif banget.",
    amount: "Rp 47.2jt",
    txLabel: "Total transaksi aman",
  },
  {
    id: 3,
    name: "Bagas Prasetyo",
    role: "Freelancer UI/UX",
    location: "Bandung",
    image: "/testimonials/IMG_20260302_171220_520.jpg",
    rating: 5,
    tag: "Buyer",
    text: "Beli laptop second senilai 12 juta lewat Kahade — barang datang sesuai deskripsi, kondisi mulus. Peace of mind yang tak ternilai.",
    amount: "Rp 12jt",
    txLabel: "Pembelian terlindungi",
  },
  {
    id: 4,
    name: "Diana Putri",
    role: "Content Creator",
    location: "Yogyakarta",
    image: "/testimonials/IMG_20260302_171212_884.jpg",
    rating: 5,
    tag: "Seller",
    text: "Jualan preset dan template digital, pembayarannya selalu lewat sini sekarang. Klien lebih percaya, konversi naik 40%.",
    amount: "Rp 8.3jt",
    txLabel: "Produk digital terjual",
  },
  {
    id: 5,
    name: "Fajar Nugroho",
    role: "Importir Elektronik",
    location: "Medan",
    image: "/testimonials/IMG_20260302_171234_876.jpg",
    rating: 5,
    tag: "Enterprise",
    text: "Kami pakai API Kahade untuk ratusan transaksi per bulan. Integrasinya mudah, dokumentasinya lengkap. Highly recommended.",
    amount: "Rp 280jt",
    txLabel: "Volume bulan ini",
  },
  {
    id: 6,
    name: "Mega Lestari",
    role: "Reseller Fashion",
    location: "Semarang",
    image: "/testimonials/IMG_20260302_171226_355.jpg",
    rating: 5,
    tag: "Buyer",
    text: "Pertama kali beli barang branded dari reseller yang belum saya kenal. Khawatir kena tipu, tapi pakai escrow jadi aman.",
    amount: "Rp 3.8jt",
    txLabel: "Pembelian fashion aman",
  },
  {
    id: 7,
    name: "Andi Saputra",
    role: "Pemilik Toko Gadget",
    location: "Makassar",
    image: "/testimonials/IMG_20260302_171152_238.jpg",
    rating: 5,
    tag: "Seller",
    text: "Penjualan lintas kota jadi lebih aman karena pembayaran ditahan dulu sampai barang diterima. Repeat order juga makin sering.",
    amount: "Rp 21.7jt",
    txLabel: "Omzet tersalurkan",
  },
];

function useInView(threshold = 0.15): [RefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5 text-ink">
    {[...Array(count)].map((_, i) => (
      <StarFilled key={i} />
    ))}
  </div>
);

const MarqueeCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="flex-shrink-0 w-[320px] lg:w-[380px] card mx-2">
    <div className="flex items-center gap-3 mb-4">
      <Image
        src={t.image}
        alt={t.name}
        width={56}
        height={56}
        quality={70}
        loading="lazy"
        sizes="(max-width: 1024px) 48px, 56px"
        className="w-12 h-12 lg:w-14 lg:h-14 object-cover rounded-xl flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="card-title truncate">{t.name}</span>
          <VerifiedIcon />
        </div>
        <p className="small truncate">
          {t.role} · {t.location}
        </p>
      </div>
      <Stars count={t.rating} />
    </div>

    <p className="body text-ink-60 mb-4 line-clamp-3">&ldquo;{t.text}&rdquo;</p>

    <div className="flex items-center justify-between pt-4 border-t border-ink-9">
      <div>
        <p className="small text-ink-30 uppercase tracking-wider">{t.txLabel}</p>
        <p className="font-extrabold tracking-tight">{t.amount}</p>
      </div>
      <span className="pill pill-subtle small">{t.tag}</span>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [sectionRef, inView] = useInView(0.12);

  const midpoint = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, midpoint);
  const row2 = testimonials.slice(midpoint);

  return (
    <section id="testimoni" ref={sectionRef} className="section bg-surface overflow-hidden">
      <div className="container-base pb-8 lg:pb-10">
        <div className="divider-dots" aria-hidden="true" />
      </div>

      <div className="container-base">
        <div className="section-header">
          <div className={`${inView ? "anim-fade-up in-view" : ""}`}>
            <h2 className="section-title">
              Dipercaya Ratusan Ribu
              <span className="section-title-muted"> Transaksi.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className={`space-y-4 ${inView ? "anim-fade-in delay-3 in-view" : ""}`}>
        <div className="marquee-mask">
          <div className="marquee-track marquee-speed-50">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <MarqueeCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div className="marquee-mask">
          <div className="marquee-track marquee-speed-55 marquee-reverse">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <MarqueeCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-base pt-8 lg:pt-10">
        <div className="divider-dots" aria-hidden="true" />
      </div>
    </section>
  );
}
