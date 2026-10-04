import { ArrowLeft, Envelope } from "@/lib/icons";
import { site } from "@/content/site";
import { Button } from "./Button";

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
          <Button size="md" href="/">
            <ArrowLeft weight="regular" className="h-4 w-4" aria-hidden="true" />
            Kembali ke beranda
          </Button>
          {site.contactEmail && (
            <Button size="md" variant="secondary" href={`mailto:${site.contactEmail}`}>
              <Envelope weight="regular" className="h-4 w-4" aria-hidden="true" />
              Hubungi kami
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
