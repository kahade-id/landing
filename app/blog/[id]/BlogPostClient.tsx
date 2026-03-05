"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { blogArticles } from "@/src/lib/site";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

interface BlogPostClientProps {
  id: string;
}

export default function BlogPostClient({ id }: BlogPostClientProps) {
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center">
          <div className="text-center py-24">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Artikel Tidak Ditemukan
            </h1>
            <p className="text-muted-foreground mb-8">
              Artikel yang Anda cari tidak ada atau telah dihapus.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        <section className="section bg-white pt-20 pb-8 border-b border-border">
          <div className="container-narrow">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-muted text-xs font-semibold rounded-full border border-border mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} baca
              </span>
            </div>
          </div>
        </section>

        <section className="section bg-white pt-8">
          <div className="container-narrow">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="p-6 bg-muted rounded-xl border border-border text-center">
              <p className="text-muted-foreground">
                Konten artikel lengkap akan segera tersedia.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
