"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { helpCategories, faqData } from "@/src/lib/site";
import { Rocket, RefreshCw, CreditCard, Shield, Scale, User, ArrowRight, ChevronDown, Search, MessageCircle, Phone, BookOpen } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, RefreshCw, CreditCard, Shield, Scale, User,
};

const quickActions = [
  { icon: MessageCircle, label: "Live Chat", desc: "Respon < 5 menit", href: "https://app.kahade.id", cta: "Mulai Chat" },
  { icon: Phone, label: "Telepon", desc: "0800-1234-5678", href: "tel:08001234567", cta: "Hubungi Sekarang" },
  { icon: BookOpen, label: "Panduan Lengkap", desc: "Tutorial step-by-step", href: "/faq", cta: "Buka Panduan" },
];

const guides = [
  { title: "Cara Membuat Transaksi Escrow Pertama", steps: ["Daftar dan verifikasi identitas", "Buat transaksi baru dan masukkan detail", "Kirim link ke pihak lawan", "Setelah setuju, dana ditransfer ke escrow", "Konfirmasi penerimaan untuk melepas dana"] },
  { title: "Cara Mengajukan Sengketa", steps: ["Buka detail transaksi yang bermasalah", "Klik 'Ajukan Sengketa'", "Isi formulir dan lampirkan bukti", "Tim mediasi kami akan menghubungi dalam 24 jam", "Keputusan diberikan dalam 3–5 hari kerja"] },
  { title: "Cara Menambahkan Metode Pembayaran", steps: ["Masuk ke Pengaturan > Pembayaran", "Klik 'Tambah Metode Baru'", "Pilih jenis: bank / dompet digital", "Masukkan detail dan verifikasi", "Metode siap digunakan dalam transaksi"] },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoriesRef, categoriesInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [guidesRef, guidesInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [faqRef, faqInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [openGuide, setOpenGuide] = useState<number | null>(null);

  const popularFAQs = [
    ...faqData.umum.slice(0, 2),
    ...faqData.transaksi.slice(0, 2),
    ...faqData.biaya.slice(0, 2),
    ...faqData.keamanan.slice(0, 1),
  ];

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Pusat Bantuan",
        title: "Bagaimana Kami\nBisa Membantu?",
        description: "Panduan, FAQ, dan tim support kami siap memastikan setiap transaksi Anda berjalan lancar.",
      }}
      cta={{
        show: true,
        title: "Masih Perlu Bantuan Lebih Lanjut?",
        description: "Tim support kami tersedia 24/7. Tidak ada pertanyaan yang terlalu kecil.",
        primaryButton: { label: "Hubungi Support", href: "/contact" },
        secondaryButton: { label: "Lihat Semua FAQ", href: "/faq" },
      }}
    >
      {/* Search + Quick Actions */}
      <section className="border-b border-border bg-muted/30">
        <div className="container-base py-12">
          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik bantuan..."
                className="w-full pl-11 pr-4 py-3.5 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors bg-white"
              />
            </div>
            {searchQuery && (
              <p className="text-xs text-muted-foreground mt-2 text-center">Menampilkan hasil untuk "{searchQuery}"</p>
            )}
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-4 bg-white border border-border rounded-xl px-6 py-5 hover:border-foreground/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{action.label}</p>
                    <p className="text-xs text-muted-foreground">{action.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section ref={categoriesRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${categoriesInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Topik</p>
            <h2 className="section-title">Jelajahi Berdasarkan<br />Topik Bantuan.</h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-100 ${categoriesInView ? "in-view" : ""}`}>
            {helpCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Shield;
              const filtered = searchQuery
                ? category.articles.filter((a: string) => a.toLowerCase().includes(searchQuery.toLowerCase()))
                : category.articles;
              return (
                <div key={category.id} className="bg-white p-7 hover:bg-muted/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-foreground transition-colors">
                    <IconComponent className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                  <ul className="space-y-2">
                    {filtered.map((article: string) => (
                      <li key={article} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-2" />
                        {article}
                      </li>
                    ))}
                  </ul>
                  {filtered.length === 0 && (
                    <p className="text-xs text-muted-foreground italic">Tidak ada artikel yang cocok</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step-by-step Guides */}
      <section ref={guidesRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${guidesInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Panduan</p>
            <h2 className="section-title">Panduan Langkah<br />demi Langkah.</h2>
          </div>
          <div className={`max-w-3xl divide-y divide-border border-y border-border anim-fade-up delay-100 ${guidesInView ? "in-view" : ""}`}>
            {guides.map((guide, i) => (
              <div key={guide.title}>
                <button
                  type="button"
                  onClick={() => setOpenGuide(openGuide === i ? null : i)}
                  aria-expanded={openGuide === i}
                  className="w-full py-5 flex items-center justify-between gap-6 text-left group"
                >
                  <p className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors">{guide.title}</p>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openGuide === i ? "rotate-180" : ""}`} />
                </button>
                {openGuide === i && (
                  <div className="pb-7">
                    <ol className="space-y-3">
                      {guide.steps.map((step, si) => (
                        <li key={step} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{si + 1}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section ref={faqRef} className="section">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${faqInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">FAQ</p>
            <h2 className="section-title">Pertanyaan yang<br />Paling Sering Ditanya.</h2>
          </div>
          <div className={`max-w-3xl divide-y divide-border border-y border-border anim-fade-up delay-100 ${faqInView ? "in-view" : ""}`}>
            {popularFAQs.map((faq, index) => (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full py-5 flex items-start justify-between gap-6 text-left group"
                  aria-expanded={openFAQ === index}
                >
                  <span className={`text-base font-medium transition-colors ${openFAQ === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${openFAQ === index ? "rotate-180" : ""}`} />
                </button>
                {openFAQ === index && (
                  <div className="pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed pr-10">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`mt-10 anim-fade-up delay-200 ${faqInView ? "in-view" : ""}`}>
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
              Lihat semua pertanyaan
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
