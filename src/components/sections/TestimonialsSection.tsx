"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const StarFilled = ({ size = 13, op = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill={`rgba(0,0,0,${op})`}>
    <path d="M6.5 1L8 4.5H12L9 6.8L10.2 10.5L6.5 8.2L2.8 10.5L4 6.8L1 4.5H5L6.5 1Z" />
  </svg>
);
const StarWhite = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="rgba(255,255,255,0.9)">
    <path d="M6.5 1L8 4.5H12L9 6.8L10.2 10.5L6.5 8.2L2.8 10.5L4 6.8L1 4.5H5L6.5 1Z" />
  </svg>
);
const VerifiedIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="5.5" fill="#000" fillOpacity="0.85" />
    <path d="M3.5 5.5L4.8 6.8L7.5 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const VerifiedIconWhite = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="5.5" fill="rgba(255,255,255,0.85)" />
    <path d="M3.5 5.5L4.8 6.8L7.5 4" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4L6 8L10 12" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4L10 8L6 12" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Arief Wicaksono",
    role: "Pedagang Online",
    location: "Jakarta",
    avatar: "AW",
    avatarBg: "#1a1a1a",
    rating: 5,
    tag: "Seller",
    text: "Sudah 3 tahun jualan online, baru sekarang bisa tidur tenang. Dana masuk ke escrow dulu, barang saya kirim, begitu pembeli konfirmasi baru cair. Tidak ada lagi istilah 'kabur setelah transfer'.",
    amount: "Rp 18.5jt",
    txLabel: "Transaksi terlindungi",
    featured: false },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Pengusaha UMKM",
    location: "Surabaya",
    avatar: "SR",
    avatarBg: "#333",
    rating: 5,
    tag: "Verified Merchant",
    text: "Saya sempat ragu di awal — apakah platform ini benar-benar aman? Ternyata jauh melampaui ekspektasi saya. Uang saya dijaga ketat, proses transparan, dan tim support-nya responsif banget. Ini yang saya cari selama bertahun-tahun.",
    amount: "Rp 47.2jt",
    txLabel: "Total transaksi aman",
    featured: true },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Freelancer UI/UX",
    location: "Bandung",
    avatar: "BS",
    avatarBg: "#444",
    rating: 5,
    tag: "Buyer",
    text: "Beli laptop second senilai 12 juta lewat Kahade — barang datang sesuai deskripsi, kondisi mulus. Kalau ada masalah, dana tidak langsung cair. Peace of mind yang tak ternilai.",
    amount: "Rp 12jt",
    txLabel: "Pembelian terlindungi",
    featured: false },
  {
    id: 4,
    name: "Diana Putri",
    role: "Content Creator",
    location: "Yogyakarta",
    avatar: "DP",
    avatarBg: "#555",
    rating: 5,
    tag: "Seller",
    text: "Jualan preset dan template digital, pembayarannya selalu lewat sini sekarang. Klien lebih percaya, konversi naik 40%. Terima kasih Kahade!",
    amount: "Rp 8.3jt",
    txLabel: "Produk digital terjual",
    featured: false },
  {
    id: 5,
    name: "Reza Pratama",
    role: "Importir Elektronik",
    location: "Medan",
    avatar: "RP",
    avatarBg: "#666",
    rating: 5,
    tag: "Enterprise",
    text: "Kami pakai API Kahade untuk ratusan transaksi per bulan. Integrasinya mudah, dokumentasinya lengkap, dan tim teknisnya siap bantu kapanpun. Highly recommended untuk bisnis skala besar.",
    amount: "Rp 280jt",
    txLabel: "Volume bulan ini",
    featured: false },
  {
    id: 6,
    name: "Mega Lestari",
    role: "Reseller Fashion",
    location: "Semarang",
    avatar: "ML",
    avatarBg: "#777",
    rating: 5,
    tag: "Buyer",
    text: "Pertama kali beli barang branded dari reseller yang belum saya kenal. Khawatir kena tipu, tapi pakai escrow jadi aman. Barang asli, sesuai foto. Penjualnya juga jadi lebih profesional.",
    amount: "Rp 3.8jt",
    txLabel: "Pembelian fashion aman",
    featured: false },
];

// Extended set for marquee rows
const marqueeRow1 = [testimonials[0], testimonials[2], testimonials[4], testimonials[0], testimonials[2], testimonials[4]];
const marqueeRow2 = [testimonials[1], testimonials[3], testimonials[5], testimonials[1], testimonials[3], testimonials[5]];

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.15): [RefObject<any>, boolean] {
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

// ─── Star Row ─────────────────────────────────────────────────────────────────
const Stars = ({ count = 5, white = false }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[...Array(count)].map((_, i) =>
      white ? <StarWhite key={i} /> : <StarFilled key={i} />
    )}
  </div>
);

// ─── Single Card (reusable) ───────────────────────────────────────────────────
const TestimonialCard = ({ t, compact = false }: { t: (typeof testimonials)[number]; compact?: boolean }) => {
  const isF = t.featured;
  const textColor = isF ? "rgba(255,255,255,0.86)" : "rgba(0,0,0,0.7)";
  const nameColor = isF ? "#fff" : "#000";
  const metaColor = isF ? "rgba(255,255,255,0.62)" : "rgba(0,0,0,0.58)";

  return (
    <div className={`tm-card${isF ? " featured" : ""}`} style={compact ? { minWidth: 300, maxWidth: 320, flexShrink: 0 } : {}}>
      {/* Quote mark */}
      <div className="tm-quote-mark">"</div>

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="tm-avatar" style={{ background: isF ? "rgba(255,255,255,0.12)" : t.avatarBg, color: isF ? "#fff" : "#fff" }}>
            {t.avatar}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: nameColor, fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
                {t.name}
              </span>
              {isF ? <VerifiedIconWhite /> : <VerifiedIcon />}
            </div>
            <p style={{ fontSize: 11, color: metaColor, margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              {t.role} · {t.location}
            </p>
          </div>
        </div>
        <span className="tm-tag">{t.tag}</span>
      </div>

      {/* Stars */}
      <Stars white={isF} />

      {/* Text */}
      <p style={{
        fontSize: compact ? 13 : 14,
        lineHeight: 1.72,
        color: textColor,
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontStyle: "italic",
        fontWeight: 400,
        position: "relative",
        zIndex: 1 }}>
        "{t.text}"
      </p>

      {/* Bottom amount */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderTop: `1px solid ${isF ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
        paddingTop: 14, marginTop: 4 }}>
        <div>
          <p style={{ fontSize: 11, color: metaColor, margin: "0 0 2px 0", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {t.txLabel}
          </p>
          <p style={{ fontSize: 16, fontWeight: 800, color: nameColor, margin: 0, fontFamily: "var(--font-sans)", letterSpacing: "-0.03em" }}>
            {t.amount}
          </p>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 5,
          padding: "6px 10px", borderRadius: 99,
          background: isF ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.06)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: isF ? "rgba(255,255,255,0.7)" : "#000", display: "block" }} />
          <span style={{ fontSize: 10.5, fontWeight: 600, color: isF ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.62)", fontFamily: "var(--font-sans)" }}>
            Terverifikasi
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── Marquee Card (compact) ───────────────────────────────────────────────────
const MarqueeCard = ({ t }: { t: (typeof testimonials)[number] }) => {
  const textColor = "rgba(0,0,0,0.68)";
  return (
    <div style={{
      minWidth: 290, maxWidth: 310, flexShrink: 0,
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.12)",
      borderRadius: 16,
      padding: "20px 22px",
      marginRight: 14,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      position: "relative",
      overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 14, right: 18, fontSize: 44, lineHeight: 0.6, color: "rgba(0,0,0,0.12)", fontFamily: "var(--font-sans)", fontWeight: 800, pointerEvents: "none" }}>"</div>
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: t.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "var(--font-sans)" }}>{t.avatar}</span>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#000", fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>{t.name}</span>
            <VerifiedIcon />
          </div>
          <p style={{ fontSize: 10.5, color: "rgba(0,0,0,0.5)", margin: 0, fontFamily: "var(--font-sans)" }}>{t.role}</p>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Stars count={5} />
        </div>
      </div>
      <p style={{ fontSize: 12.5, lineHeight: 1.68, color: textColor, margin: 0, fontFamily: "var(--font-sans)", fontStyle: "italic" }}>
        "{t.text.length > 120 ? t.text.slice(0, 118) + "…" : t.text}"
      </p>
    </div>
  );
};

// ─── Abstract Background ──────────────────────────────────────────────────────
const TmAbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="tm-rg1" cx="5%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="tm-rg2" cx="95%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.025" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#tm-rg1)" />
    <rect width="100%" height="100%" fill="url(#tm-rg2)" />
    <pattern id="tm-grid" width="52" height="52" patternUnits="userSpaceOnUse">
      <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#000" strokeWidth="0.25" strokeOpacity="0.015" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#tm-grid)" />
    <circle cx="-3%" cy="30%" r="200" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.028" />
    <circle cx="-3%" cy="30%" r="140" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.022" />
    <circle cx="103%" cy="70%" r="220" fill="none" stroke="#000" strokeWidth="0.6" strokeOpacity="0.028" />
    <circle cx="103%" cy="70%" r="150" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.022" />
    <circle cx="50%" cy="50%" r="400" fill="none" stroke="#000" strokeWidth="0.3" strokeOpacity="0.015" />
    <line x1="5%" y1="0" x2="5%" y2="100%" stroke="#000" strokeWidth="0.3" strokeOpacity="0.022" />
    <line x1="95%" y1="0" x2="95%" y2="100%" stroke="#000" strokeWidth="0.3" strokeOpacity="0.022" />
    <circle cx="18%" cy="8%" r="1.8" fill="#000" fillOpacity="0.04" />
    <circle cx="20%" cy="9%" r="1.2" fill="#000" fillOpacity="0.03" />
    <circle cx="82%" cy="92%" r="1.8" fill="#000" fillOpacity="0.04" />
    <circle cx="84%" cy="93%" r="1.2" fill="#000" fillOpacity="0.03" />
    <line x1="92%" y1="12%" x2="92%" y2="18%" stroke="#000" strokeWidth="0.7" strokeOpacity="0.04" />
    <line x1="89%" y1="15%" x2="95%" y2="15%" stroke="#000" strokeWidth="0.7" strokeOpacity="0.04" />
    <line x1="8%"  y1="85%" x2="8%"  y2="91%" stroke="#000" strokeWidth="0.7" strokeOpacity="0.04" />
    <line x1="5%"  y1="88%" x2="11%" y2="88%" stroke="#000" strokeWidth="0.7" strokeOpacity="0.04" />
  </svg>
);

// ─── Main Testimonials Section ────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [sectionRef, inView] = useInView(0.12);
  const cls = (base: string, d = "") => `${base} ${d} ${inView ? "is-visible" : ""}`;

  return (
    <>
      <section
        id="testimoni"
        ref={sectionRef}
        className="tm-root relative overflow-hidden"
        style={{ background: "#FFFFFF", padding: "100px 0 96px 0" }}
      >
        <TmAbstractBg />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>

            {/* Eyebrow */}
            <div className={cls("tm-fade-up tm-d0")} style={{ display: "none", justifyContent: "center", marginBottom: 20 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 16px", borderRadius: 99,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => <StarFilled key={i} size={11} />)}
                </div>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(0,0,0,0.62)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Ringkasan pengalaman pengguna
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className={cls("tm-fade-up tm-d100")}>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(30px, 5vw, 56px)",
                fontWeight: 800,
                color: "#000",
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                margin: "0 auto 16px auto",
                maxWidth: 560 }}>
                Dipercaya Ratusan Ribu
                <span style={{ color: "rgba(0,0,0,0.62)" }}> Transaksi.</span>
              </h2>
            </div>

            {/* Sub */}
            <div className={cls("tm-fade-up tm-d200")}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                color: "rgba(0,0,0,0.66)",
                lineHeight: 1.75,
                maxWidth: 440,
                margin: "0 auto" }}>
                Testimoni di bawah merupakan ilustrasi use case umum pengguna escrow untuk membantu memahami alur layanan.
              </p>
            </div>

            {/* Aggregate stats */}
            <div className={cls("tm-fade-up tm-d300")} style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: 32, flexWrap: "wrap" }}>
              {[
                { val: "4.9", label: "Rating Rata-rata", sub: "dari 5.0" },
                { val: "Workflow", label: "Use Case", sub: "buyer & seller" },
                { val: "Support", label: "Pusat Bantuan", sub: "siap dihubungi" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 24, fontWeight: 800, color: "#000", letterSpacing: "-0.04em", margin: "0 0 2px 0" }}>{s.val}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, color: "rgba(0,0,0,0.62)", margin: "0 0 1px 0" }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, color: "rgba(0,0,0,0.58)", margin: 0 }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop Grid ─────────────────────────────────────────────────── */}
          {/* Section Removed as per request */}
          
          {/* ── Mobile Carousel ───────────────────────────────────────────────── */}
          {/* Section Removed as per request */}
        </div>

        {/* ── Marquee Rows (below grid, full width) ───────────────────────────── */}
        <div className={cls("tm-fade-in tm-d500")} style={{ marginTop: 64 }}>
          {/* Row 1 — scroll left */}
          <div className="tm-mask" style={{ marginBottom: 14 }}>
            <div className="tm-track-l">
              {[...marqueeRow1, ...marqueeRow1].map((t, i) => (
                <MarqueeCard key={`l-${i}`} t={t} />
              ))}
            </div>
          </div>

          {/* Row 2 — scroll right */}
          <div className="tm-mask">
            <div className="tm-track-r">
              {[...marqueeRow2, ...marqueeRow2].map((t, i) => (
                <MarqueeCard key={`r-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Responsive toggle script */}
      <style>{`
        @media (min-width: 1024px) {
          #tm-desktop-grid { display: grid !important; }
          #tm-mobile-carousel { display: none !important; }
        }
        @media (max-width: 1023px) {
          #tm-desktop-grid { display: none !important; }
          #tm-mobile-carousel { display: block !important; }
        }
      `}</style>
    </>
  );
}
