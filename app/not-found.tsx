import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Path yang TIDAK diklaim sebagai universal link (mis. /terms, /faq)
 * jatuh ke sini — arahkan kembali ke landing, bukan 404 mati.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <Logo size="sm" />
      <h1 className="mt-10 text-3xl font-bold tracking-tight">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-sm text-muted">
        Tautan yang kamu buka tidak tersedia di website.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[15px] font-semibold text-paper transition-opacity hover:opacity-80"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
