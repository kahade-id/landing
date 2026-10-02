import Link from "next/link";
import { KahadeMark } from "@/components/Logo";

export const metadata = {
  title: "Syarat & Ketentuan — Kahade",
  description: "Syarat dan ketentuan penggunaan platform Kahade.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <Link href="/" aria-label="Kembali ke beranda" className="inline-block">
          <KahadeMark className="h-10 w-10" />
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#525252]">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
          Syarat &amp; Ketentuan
        </h1>
        <div className="mt-8 rounded-[1.75rem] border border-black/10 bg-[#F3F4F6] p-8 sm:p-10">
          <p className="text-[17px] leading-relaxed text-[#262626]">
            Dokumen Syarat &amp; Ketentuan Kahade sedang dalam tahap finalisasi dan
            akan diterbitkan sebelum aplikasi resmi meluncur.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#525252]">
            Intinya: gunakan Kahade dengan jujur. Setiap transaksi dilindungi escrow —
            dana pembeli ditahan aman dan baru dicairkan ke penjual setelah barang
            dikonfirmasi diterima.
          </p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-[52px] items-center rounded-full bg-black px-8 text-[15px] font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
