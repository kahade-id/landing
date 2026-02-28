"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { homeAnchors, supportLinks, site } from "@/lib/site";

// ─── Icons ─────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="7" cy="7" r="4.5" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" />
  </svg>
);

const ChevronRight = ({ className = "" }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <path d="M5 3l4 4-4 4" />
  </svg>
);

const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 11.5a2 2 0 01-2 2H5l-3 3V3a2 2 0 012-2h10a2 2 0 012 2v8.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="16" height="12" rx="2" />
    <polyline points="1,3 9,10 17,3" />
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3a2 2 0 012-2h10a2 2 0 012 2v13l-7-3-7 3V3z" />
  </svg>
);

// ─── FAQ Data ──────────────────────────────────────────────────────────────────
const faqCategories = [
  { id: "all", label: "Semua" },
  { id: "escrow", label: "Escrow" },
  { id: "keamanan", label: "Keamanan" },
  { id: "biaya", label: "Biaya" },
  { id: "akun", label: "Akun & Verifikasi" },
  { id: "teknis", label: "Teknis" },
];

const faqs = [
  {
    cat: "escrow",
    q: "Bagaimana mekanisme escrow Kahade bekerja?",
    a: "Dana dari pembeli ditahan pada alur escrow sampai syarat transaksi terpenuhi. Setelah pembeli mengonfirmasi penerimaan barang/jasa, barulah dana diteruskan ke penjual. Proses ini membantu kedua belah pihak bertransaksi dengan lebih tenang.",
    tags: ["Escrow", "Cara Kerja"] },
  {
    cat: "escrow",
    q: "Berapa lama dana bisa disimpan di escrow?",
    a: "Dana dapat disimpan maksimal 30 hari untuk transaksi standar. Untuk transaksi dengan durasi lebih panjang (misal: proyek development), Anda dapat mengatur periode escrow hingga 180 hari melalui fitur Extended Escrow di dashboard.",
    tags: ["Escrow", "Durasi"] },
  {
    cat: "keamanan",
    q: "Apakah dana saya aman jika terjadi sengketa?",
    a: "Ya. Dana tidak akan dilepas ke pihak manapun selama proses sengketa berlangsung. Tim mediator kami akan meninjau bukti dari kedua belah pihak dan memberikan keputusan dalam 3-5 hari kerja. Keputusan mediator bersifat final dan mengikat.",
    tags: ["Sengketa", "Perlindungan"] },
  {
    cat: "keamanan",
    q: "Apakah Kahade memiliki izin resmi?",
    a: "Kahade menerapkan pendekatan keamanan berlapis, proses verifikasi, dan pemantauan operasional untuk membantu menjaga transaksi tetap aman. Detail legal, kebijakan, dan informasi operasional dapat dilihat pada halaman bantuan dan dokumentasi yang tersedia.",
    tags: ["Keamanan", "Operasional"] },
  {
    cat: "biaya",
    q: "Berapa biaya layanan escrow Kahade?",
    a: "Biaya layanan berkisar antara 0.5% hingga 2% dari nilai transaksi, tergantung kategori dan nominal. Tidak ada biaya setup atau biaya bulanan. Anda hanya membayar ketika transaksi berhasil diselesaikan. Lihat halaman Harga untuk tabel biaya lengkap.",
    tags: ["Biaya", "Pricing"] },
  {
    cat: "biaya",
    q: "Apakah ada biaya tambahan untuk pembatalan transaksi?",
    a: "Tidak ada biaya pembatalan jika dibatalkan sebelum penjual mengkonfirmasi. Jika dibatalkan setelah penjual mengkonfirmasi namun barang belum dikirim, dikenakan biaya administrasi sebesar Rp 5.000. Dana dikembalikan penuh dalam 1-2 hari kerja.",
    tags: ["Biaya", "Pembatalan"] },
  {
    cat: "akun",
    q: "Dokumen apa yang dibutuhkan untuk verifikasi akun?",
    a: "Untuk akun personal: KTP dan selfie. Untuk akun bisnis: KTP pemilik, NPWP, SIUP/NIB, dan rekening koran 3 bulan terakhir. Proses verifikasi biasanya selesai dalam 1 hari kerja melalui sistem e-KYC otomatis kami.",
    tags: ["Verifikasi", "KYC"] },
  {
    cat: "akun",
    q: "Berapa batas transaksi per hari?",
    a: "Akun terverifikasi basic: Rp 50 juta/hari. Akun terverifikasi premium: Rp 500 juta/hari. Akun bisnis terverifikasi: hingga Rp 5 miliar/hari. Limit dapat dinaikkan dengan mengajukan permohonan dan melengkapi verifikasi tambahan.",
    tags: ["Limit", "Transaksi"] },
  {
    cat: "teknis",
    q: "Apakah Kahade menyediakan API untuk integrasi?",
    a: "Ya. Kami menyediakan REST API yang lengkap dengan dokumentasi interaktif. Tersedia SDK untuk Node.js, Python, PHP, dan Go. Terdapat sandbox environment untuk pengujian tanpa biaya. API mendukung webhook untuk notifikasi real-time.",
    tags: ["API", "Developer", "Integrasi"] },
  {
    cat: "teknis",
    q: "Metode pembayaran apa saja yang didukung?",
    a: "Transfer bank (semua bank Indonesia), Virtual Account, QRIS, kartu kredit/debit Visa & Mastercard, serta dompet digital (GoPay, OVO, DANA, ShopeePay). Proses pencairan dana ke rekening membutuhkan 1-2 hari kerja.",
    tags: ["Pembayaran", "Metode"] },
];

// ─── useInView Hook ─────────────────────────────────────────────────────────
function useInView(threshold = 0.12): [RefObject<any>, boolean] {
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

// ─── Highlight helper ────────────────────────────────────────────────────────
function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((p, i) =>
    regex.test(p) ? <mark key={i} className="faq-highlight">{p}</mark> : p
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FAQItem({ faq, index, inView, searchQuery }: { faq: (typeof faqs)[number]; index: number; inView: boolean; searchQuery: string }) {
  const [open, setOpen] = useState(false);
  const delayClass = `faq-d${Math.min(index, 8)}`;
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`faq-item faq-fade-up ${inView ? "fv" : ""} ${delayClass} px-0`}>
      <button
        onClick={() => setOpen(!open)}
        id={buttonId}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Number */}
          <span className="text-[11px] font-bold text-black/20 tabular-nums mt-0.5 w-5 flex-shrink-0"
            style={{ fontFamily: "var(--font-sans)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Question */}
          <span className={`text-[14.5px] sm:text-[15px] font-semibold leading-snug transition-colors ${open ? "text-black" : "text-black/75 group-hover:text-black"}`}>
            {highlight(faq.q, searchQuery)}
          </span>
        </div>
        {/* Plus / Minus icon */}
        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${open ? "bg-black" : "bg-black/[.05] group-hover:bg-black/10"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={open ? "white" : "rgba(0,0,0,0.1)"} strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="2" x2="6" y2="10" className="faq-icon-bar vertical" style={{ transform: open ? "scaleY(0)" : "scaleY(1)", transition: "transform .25s ease, opacity .25s ease", transformOrigin: "center", opacity: open ? 0 : 1 }} />
            <line x1="2" y1="6" x2="10" y2="6" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`faq-answer-wrap ${open ? "open" : ""}`}>
        <div className="faq-answer-inner">
          <div className="faq-answer-content pb-5 pl-8">
            <p className="text-[13.5px] sm:text-[14px] text-black/55 leading-relaxed mb-3">
              {highlight(faq.a, searchQuery)}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {faq.tags.map((tag, ti) => (
                <span key={ti} className="px-2 py-0.5 rounded-md bg-black/[.04] text-[10.5px] font-semibold text-black/40 border border-black/6">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Abstract Background ──────────────────────────────────────────────────────
const AbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="faq-bg1" cx="100%" cy="0%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity=".02" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#faq-bg1)" />
    <pattern id="faq-dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.1)" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#faq-dots)" />
    <circle cx="92%" cy="10%" r="220" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
    <circle cx="92%" cy="10%" r="140" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FAQSection() {
  const [sectionRef, inView] = useInView(0.08);
  const searchId = "faq-search";
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openCount, setOpenCount] = useState(0);

  const filteredFaqs = faqs.filter((f) => {
    const matchCat = activeCategory === "all" || f.cat === activeCategory;
    const matchSearch =
      !searchQuery.trim() ||
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const cls = (base: string, visible: boolean, delay = "") => `${base} ${visible ? "fv" : ""} ${delay}`;

  return (
    <section id="faq" ref={sectionRef} className="faq-root relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <AbstractBg />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Layout: Two Columns on large ─────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-[1fr,2fr] lg:gap-16 xl:gap-20">

          {/* ─── Left: Sticky Header ────────────────────────────────────── */}
          <div className="lg:sticky lg:top-28 lg:self-start mb-12 lg:mb-0">
            <div className={cls("faq-fade-up", inView, "faq-d0")} style={{ display: "none" }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 mb-5">
                <span className="text-[11px] font-semibold text-black/40 tracking-widest uppercase">FAQ</span>
              </div>
            </div>

            <h2 className={`${cls("faq-fade-up", inView, "faq-d1")} text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-extrabold text-black leading-[1.1] tracking-tight mb-5`}
              style={{ fontFamily: "var(--font-sans)" }}>
              Pertanyaan
              <br />
              <span className="text-black/30">yang Sering</span>
              <br />
              Ditanyakan
            </h2>

            <p className={`${cls("faq-fade-up", inView, "faq-d2")} text-sm text-black/45 leading-relaxed mb-8 max-w-xs`}>
              Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu 24 jam.
            </p>

            {/* Contact options */}
            <div className={`${cls("faq-fade-up", inView, "faq-d3")} space-y-2.5`}>
              {[
                { icon: <MessageIcon />, label: "Hubungi Tim", sub: "Respon melalui email atau kontak", href: supportLinks.contact },
                { icon: <MailIcon />, label: "Email Support", sub: site.email, href: supportLinks.supportEmail },
                { icon: <BookIcon />, label: "Help Center", sub: "FAQ & panduan penggunaan", href: supportLinks.support },
              ].map((c, i) => {
                const cardClassName = "flex items-center gap-3 p-3.5 rounded-xl border border-black/8 bg-white/50 hover:border-black/15 hover:bg-white transition-all duration-200 group";
                const content = (
                  <>
                    <div className="w-9 h-9 rounded-lg bg-black/[.04] flex items-center justify-center text-black/50 group-hover:text-black/70 transition-colors flex-shrink-0">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-bold text-black">{c.label}</div>
                      <div className="text-[11.5px] text-black/40">{c.sub}</div>
                    </div>
                    <ChevronRight className="opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 -translate-x-1 group-hover:translate-x-0 duration-200" />
                  </>
                );

                return c.href.startsWith("mailto:") ? (
                  <a key={i} href={c.href} className={cardClassName}>
                    {content}
                  </a>
                ) : (
                  <Link key={i} href={c.href} className={cardClassName}>
                    {content}
                  </Link>
                );
              })}
            </div>

            {/* Stats */}
            <div className={`${cls("faq-fade-up", inView, "faq-d4")} mt-8 p-4 rounded-xl border border-black/6 bg-black/[.02]`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "< 2min", label: "Avg. Response" },
                  { val: "24/7", label: "Support" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-extrabold text-black" style={{ fontFamily: "var(--font-sans)" }}>{s.val}</div>
                    <div className="text-[10.5px] text-black/35 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right: FAQ Content ──────────────────────────────────────── */}
          <div>
            {/* Search bar */}
            <div className={`${cls("faq-fade-up", inView, "faq-d1")} mb-6`}>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30">
                  <SearchIcon />
                </div>
                <label htmlFor={searchId} className="sr-only">Cari pertanyaan</label>
                <input
                  id={searchId}
                  type="text"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  placeholder="Cari pertanyaan…"
                  className="w-full pl-10 pr-4 py-3 text-sm text-black placeholder-black/30 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-black/25 focus:ring-2 focus:ring-black/5 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/30 hover:text-black/60 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category tabs */}
            <div role="tablist" aria-label="Kategori FAQ" className={`${cls("faq-fade-up", inView, "faq-d2")} flex flex-wrap gap-2 mb-8`}>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  id={`faq-tab-${cat.id}`}
                  role="tab"
                  aria-controls={`faq-panel-${cat.id}`}
                  aria-selected={activeCategory === cat.id}
                  tabIndex={activeCategory === cat.id ? 0 : -1}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`faq-cat-badge px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-black text-white border-transparent"
                      : "bg-white text-black/55 border-black/12 hover:border-black/20"
                  }`}
                >
                  {cat.label}
                  {cat.id !== "all" && (
                    <span className={`ml-1.5 text-[10px] ${activeCategory === cat.id ? "opacity-60" : "opacity-40"}`}>
                      {faqs.filter((f) => f.cat === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Results summary */}
            {searchQuery && (
              <div className="mb-4 text-[12.5px] text-black/40">
                Menampilkan <span className="font-bold text-black/70">{filteredFaqs.length}</span> hasil untuk &ldquo;<span className="font-semibold text-black/60">{searchQuery}</span>&rdquo;
              </div>
            )}

            {/* FAQ List */}
            <div id={`faq-panel-${activeCategory}`} role="tabpanel" aria-labelledby={`faq-tab-${activeCategory}`} className="divide-y-0">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <FAQItem
                    key={`${activeCategory}-${faq.q}`}
                    faq={faq}
                    index={i}
                    inView={inView}
                    searchQuery={searchQuery}
                  />
                ))
              ) : (
                <div className="py-16 text-center">
                  <div className="text-3xl mb-3">🔍</div>
                  <div className="text-sm font-semibold text-black/50">Tidak ada hasil ditemukan</div>
                  <div className="text-[12.5px] text-black/30 mt-1">Coba kata kunci yang berbeda atau{" "}
                    <button onClick={() => setSearchQuery("")} className="text-black/60 underline underline-offset-2 hover:text-black">
                      hapus pencarian
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom CTA bar */}
            <div className={`${cls("faq-fade-up", inView, "faq-d8")} mt-10 rounded-2xl bg-black overflow-hidden relative`}>
              <div className="faq-cta-shimmer absolute inset-0" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" style={{ animationName: "faqPing" }} />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80" />
                    </span>
                    <span className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Support Online</span>
                  </div>
                  <div className="text-[15px] font-bold text-white leading-snug" style={{ fontFamily: "var(--font-sans)" }}>
                    Masih ada pertanyaan?
                  </div>
                  <div className="text-[12.5px] text-white/40 mt-0.5">
                    Tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full sm:w-auto">
                  <Link href={supportLinks.contact}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black text-[13px] font-bold rounded-xl hover:bg-white/90 transition-colors">
                    <MessageIcon />
                    Mulai Chat
                  </Link>
                  <a href={supportLinks.supportEmail}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white text-[13px] font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10">
                    <MailIcon />
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

