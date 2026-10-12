import type { Metadata } from "next";
import { meta, required, data } from "@/content/press";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { Container, TextLink } from "@kahade/ui";
import { site } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const page = resolvePage(meta, required, data);
  const base: Metadata = {
    title: `${meta.title} — Kahade`,
    description: meta.description,
    alternates: { canonical: `/${meta.slug}` },
  };
  if (page.status === "draft") {
    return { ...base, robots: { index: false, follow: false } };
  }
  return base;
}

const TRAIL = [
  { name: "Beranda", path: "/" },
  { name: meta.navTitle, path: `/${meta.slug}` },
];

function DraftView() {
  return <DraftPage trail={TRAIL} title={meta.title} navTitle={meta.navTitle} />;
}

export default function PressPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.intro}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3 text-fg">Boilerplate</h2>
            <p className="mt-2 max-w-xs text-small text-fg-muted">Deskripsi resmi untuk dikutip media.</p>
          </div>
          <div className="lg:col-span-8">
            <blockquote className="max-w-reading border-l-2 border-fg pl-6 text-lead text-fg-2">
              {d.boilerplate}
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
              <TextLink href="https://legal.kahade.id/brand" arrow="external">
                Brand guidelines
              </TextLink>
              {site.contactEmail && (
                <TextLink href={`mailto:${site.contactEmail}`} arrow="none">
                  {site.contactEmail}
                </TextLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
