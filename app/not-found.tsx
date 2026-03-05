"use client";
// "use client" is required because this page calls window.history.back()
// in the back-button click handler.

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-64px)] bg-white flex items-center">
        <div className="container-base py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-8 border border-border">
              <span className="text-5xl font-display font-bold text-muted-foreground">
                404
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-muted-foreground mb-8">
              Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
              Silakan kembali ke beranda atau coba halaman lain.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Home className="w-4 h-4" />
                Ke Beranda
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <Search className="w-4 h-4" />
                Cari Bantuan
              </Link>
            </div>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke halaman sebelumnya
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
