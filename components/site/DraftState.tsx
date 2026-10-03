import Link from "next/link";
import { ArrowLeft, Envelope } from "@/lib/icons";
import { site } from "@/content/site";

/** State elegan untuk halaman berstatus draft: konten sedang disiapkan. */
export function DraftState({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8">
      <div className="rounded-[1.75rem] border border-black/10 bg-[#F3F4F6] p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#525252]">
          Segera hadir
        </p>
        <h2 className="type-h3 mt-3 text-black">Halaman {title} sedang kami siapkan.</h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#525252]">
          Kami sedang menyusun konten halaman ini agar akurat dan bermanfaat.
          Silakan kembali lagi nanti.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-black px-7 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <ArrowLeft weight="regular" className="h-4 w-4" aria-hidden="true" />
            Kembali ke beranda
          </Link>
          {site.contactEmail && (
            <a
              href={`mailto:${site.contactEmail}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/15 px-7 text-[15px] font-semibold text-black transition-colors hover:border-black/40"
            >
              <Envelope weight="regular" className="h-4 w-4" aria-hidden="true" />
              Hubungi kami
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
