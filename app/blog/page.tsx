"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { blogArticles } from "@/src/lib/site";
import { Clock, ArrowRight, TrendingUp, Bookmark } from "lucide-react";
import Link from "next/link";

const categories = ["Semua", "Panduan", "Tips", "Update", "Bisnis", "Kisah"];

const readingListTips = [
  "Cara membuat transaksi yang aman",
  "Memahami mekanisme escrow",
  "Tips memilih platform yang terpercaya",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [featuredRef, featuredInView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.03 });
  const [sidebarRef, sidebarInView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const filteredArticles = activeCategory === "Semua"
    ? blogArticles
    : blogArticles.filter((a) => a.category === activeCategory);

  const featuredArticle = blogArticles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter(
    (a) => activeCategory !== "Semua" || a.id !== featuredArticle?.id,
  );

  const recentArticles = [...blogArticles]
    .filter((a) => !a.featured)
    .slice(0, 4);

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Blog",
        title: "Wawasan, Tips, dan\nUpdate dari Kahade.",
        description: "Artikel praktis untuk membantu Anda bertransaksi lebih aman, cerdas, dan percaya diri.",
      }}
      cta={{ show: false }}
    >
      {/* Featured + Sidebar */}
      {featuredArticle && activeCategory === "Semua" && (
        <section ref={featuredRef} className="section border-b border-border">
          <div className="container-base">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {/* Featured */}
              <div className={`lg:col-span-2 anim-fade-up ${featuredInView ? "in-view" : ""}`}>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Artikel Utama</p>
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border mb-8 overflow-hidden relative">
                  <span className="text-8xl font-display font-bold text-muted-foreground/10 select-none">K</span>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold bg-foreground text-background px-2.5 py-1 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">{featuredArticle.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{featuredArticle.readTime}</span>
                  <span className="text-xs text-muted-foreground">{featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight text-foreground mb-4">{featuredArticle.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-7">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">{featuredArticle.author.split(" ").map((n) => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{featuredArticle.author}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredArticle.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div ref={sidebarRef} className={`lg:col-span-1 anim-fade-up delay-200 ${sidebarInView ? "in-view" : ""}`}>
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Artikel Terbaru</p>
                    </div>
                    <div className="space-y-5 divide-y divide-border">
                      {recentArticles.map((article) => (
                        <Link key={article.id} href={`/blog/${article.id}`} className="block group pt-5 first:pt-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] border border-border rounded-full px-2 py-0.5 text-muted-foreground">{article.category}</span>
                            <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{article.readTime}</span>
                          </div>
                          <p className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors line-clamp-2">{article.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Bookmark className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Bacaan Populer</p>
                    </div>
                    <ul className="space-y-2.5">
                      {readingListTips.map((tip) => (
                        <li key={tip} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-2" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-foreground rounded-xl p-6 text-background">
                    <p className="text-sm font-semibold mb-2">Newsletter Kahade</p>
                    <p className="text-xs text-background/60 mb-4 leading-relaxed">Update produk, tips, dan artikel pilihan — langsung ke inbox Anda.</p>
                    <a href="mailto:newsletter@kahade.id" className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2 rounded-lg text-xs font-semibold hover:bg-background/90 transition-colors">
                      Subscribe
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category filter + Grid */}
      <section className="section">
        <div className="container-base">
          {/* Filter row */}
          <div className="flex items-center justify-between gap-6 flex-wrap mb-12">
            <div role="tablist" aria-label="Kategori blog" className="flex items-center gap-1 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all border whitespace-nowrap ${activeCategory === cat ? "bg-foreground text-background border-foreground" : "bg-white text-muted-foreground border-border hover:text-foreground"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{regularArticles.length} artikel</p>
          </div>

          {/* Grid */}
          <div ref={gridRef} id="blog-articles-panel" role="tabpanel">
            {regularArticles.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border rounded-xl">
                <p className="text-muted-foreground mb-2">Belum ada artikel di kategori ini.</p>
                <button type="button" onClick={() => setActiveCategory("Semua")} className="text-sm text-foreground underline underline-offset-4">Lihat semua artikel</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                {regularArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className={`anim-fade-up ${["","delay-100","delay-200","","delay-100","delay-200"][index] ?? ""} ${gridInView ? "in-view" : ""} border-t border-border pt-7`}
                  >
                    <div className="bg-muted rounded-xl aspect-video flex items-center justify-center border border-border mb-5">
                      <span className="text-4xl font-display font-bold text-muted-foreground/20">K</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">{article.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 leading-snug">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center">
                          <span className="text-[10px] font-bold text-muted-foreground">{article.author.split(" ").map((n) => n[0]).join("")}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">{article.author}</p>
                          <p className="text-[10px] text-muted-foreground">{article.date}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${article.id}`} className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                        Baca
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
