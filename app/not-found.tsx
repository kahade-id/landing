import Link from "next/link";
import { KahadeMark } from "@/components/Logo";

export const metadata = {
  title: "Halaman tidak ditemukan — Kahade",
  description: "Tautan yang kamu buka tidak tersedia. Kembali ke beranda Kahade.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <KahadeMark className="h-14 w-14" />
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#525252]">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
        Halaman tidak ditemukan.
      </h1>
      <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#525252]">
        Tautan yang kamu buka tidak tersedia atau sudah dipindahkan. Mari kembali ke tempat yang aman.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex min-h-[56px] items-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
