import { Container } from "@kahade/ui";
import { site } from "@/content/site";
import { Button } from "./Button";
import { PageShell } from "./PageShell";

/** Halaman berstatus draft: konten sedang disiapkan (noindex, tidak di sitemap). */
export function DraftPage({
  trail,
  title,
  navTitle,
}: {
  trail: { name: string; path: string }[];
  title: string;
  navTitle: string;
}) {
  return (
    <PageShell trail={trail} title={title}>
      <Container className="py-16 sm:py-20">
        <div className="max-w-reading border-t-2 border-fg pt-6">
          <p className="text-eyebrow text-fg-subtle">Sedang kami siapkan</p>
          <h2 className="mt-3 text-h3 text-fg">Halaman {navTitle} sedang kami siapkan.</h2>
          <p className="mt-3 text-body-lg text-fg-muted">
            Kami sedang menyusun konten halaman ini agar akurat dan bermanfaat. Silakan
            kembali lagi nanti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="md" href="/">
              Kembali ke beranda
            </Button>
            {site.contactEmail && (
              <Button size="md" variant="secondary" href={`mailto:${site.contactEmail}`}>
                Hubungi kami
              </Button>
            )}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
