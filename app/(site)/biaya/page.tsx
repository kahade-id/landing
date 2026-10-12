import type { Metadata } from "next";
import { meta, required, data } from "@/content/biaya";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { Container, DescriptionList } from "@kahade/ui";

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

export default function BiayaPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Bantuan" title={d.headline} desc={d.intro}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3 text-fg">Rincian biaya</h2>
            <p className="mt-2 max-w-xs text-small text-fg-muted">
              Semua potongan ditampilkan sebelum kamu membayar.
            </p>
          </div>
          <div className="lg:col-span-8">
            <DescriptionList items={d.rows.map((r) => ({ term: r.item, detail: r.desc }))} />
            {d.note && <p className="mt-6 max-w-reading text-small text-fg-muted">{d.note}</p>}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
