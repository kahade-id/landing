"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { faqData } from "@/src/lib/site";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

type FAQCategory = keyof typeof faqData;

const categories: { id: FAQCategory; label: string; desc: string; count: number }[] = [
  { id: "umum", label: "Umum", desc: "Dasar-dasar Kahade & escrow", count: faqData.umum.length },
  { id: "transaksi", label: "Transaksi", desc: "Cara kerja transaksi", count: faqData.transaksi.length },
  { id: "biaya", label: "Biaya", desc: "Fee, tarif & pembayaran", count: faqData.biaya.length },
  { id: "keamanan", label: "Keamanan", desc: "Data, enkripsi & mediasi", count: faqData.keamanan.length },
];

export default function FAQPage() {
  const [headerRef, headerInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("umum");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const allFAQs = Object.entries(faqData).flatMap(([cat, items]) =>
    items.map((item) => ({ ...item, cat }))
  );

  const searchResults = searchQuery.length > 1
    ? allFAQs.filter((faq) =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const currentFAQs = searchResults ?? faqData[activeCategory];

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "FAQ",
        title: "Pertanyaan yang\nSering Diajukan.",
        description: "Jawaban lengkap untuk semua pertanyaan seputar Kahade, escrow, dan cara kerja layanan kami.",
      }}
      cta={{ show: false }}
    >
      {/* Category Overview Cards */}
      <section ref={headerRef} className="border-b border-border">
        <div className="container-base py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => { setActiveCategory(cat.id); setOpenItems(new Set()); setSearchQuery(""); }}
                className={`text-left p-5 rounded-xl border transition-all anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${headerInView ? "in-view" : ""} ${activeCategory === cat.id && !searchQuery ? "bg-foreground text-background border-foreground" : "bg-white border-border hover:border-foreground/30"}`}
              >
                <p className={`text-3xl font-display font-bold mb-1 ${activeCategory === cat.id && !searchQuery ? "text-background" : "text-foreground"}`}>
                  {cat.count}
                </p>
                <p className={`text-sm font-semibold mb-1 ${activeCategory === cat.id && !searchQuery ? "text-background" : "text-foreground"}`}>{cat.label}</p>
                <p className={`text-xs ${activeCategory === cat.id && !searchQuery ? "text-background/60" : "text-muted-foreground"}`}>{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section ref={faqRef} className="section">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className={`lg:col-span-1 anim-fade-up ${faqInView ? "in-view" : ""}`}>
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari pertanyaan..."
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors bg-white"
                />
              </div>

              {/* Category nav */}
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-3">Kategori</p>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => { setActiveCategory(cat.id); setOpenItems(new Set()); setSearchQuery(""); }}
                    className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${activeCategory === cat.id && !searchQuery ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-xs tabular-nums ${activeCategory === cat.id && !searchQuery ? "text-background/60" : "text-muted-foreground"}`}>{cat.count}</span>
                  </button>
                ))}
              </div>

              {/* Contact box */}
              <div className="mt-10 border border-border rounded-xl p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Tidak menemukan jawaban?</p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Tim support kami siap membantu lewat live chat, email, atau telepon.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* FAQ list */}
            <div className={`lg:col-span-3 anim-fade-up delay-100 ${faqInView ? "in-view" : ""}`}>
              {searchResults !== null && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    {searchResults.length > 0 ? (
                      <>{searchResults.length} hasil untuk <strong className="text-foreground">"{searchQuery}"</strong></>
                    ) : (
                      <>Tidak ada hasil untuk <strong className="text-foreground">"{searchQuery}"</strong></>
                    )}
                  </p>
                </div>
              )}

              {currentFAQs.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-border rounded-xl">
                  <p className="text-muted-foreground">Tidak ada hasil ditemukan.</p>
                  <button type="button" onClick={() => setSearchQuery("")} className="text-sm text-foreground underline underline-offset-4 mt-2">Reset pencarian</button>
                </div>
              ) : (
                <div className="divide-y divide-border border-y border-border">
                  {currentFAQs.map((faq, index) => (
                    <div key={`${activeCategory}-${index}`}>
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                        aria-expanded={openItems.has(index)}
                      >
                        <div className="flex-1">
                          {searchResults && "cat" in faq && (
                            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-muted-foreground border border-border rounded-full px-2 py-0.5 mb-2">
                              {(faq as any).cat}
                            </span>
                          )}
                          <span className={`block text-base font-medium transition-colors ${openItems.has(index) ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                            {faq.q}
                          </span>
                        </div>
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 text-muted-foreground mt-0.5 transition-transform duration-200 ${openItems.has(index) ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openItems.has(index) ? "max-h-96 pb-6" : "max-h-0"}`}>
                        <p className="text-sm text-muted-foreground leading-relaxed pr-10">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
