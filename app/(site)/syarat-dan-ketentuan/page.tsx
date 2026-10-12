import type { Metadata } from "next";
import { meta, required, data } from "@/content/syarat";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { LegalDoc } from "@/components/site/LegalDoc";
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

export default function SyaratPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell
      trail={TRAIL}
      kicker="Legal"
      title={d.headline}
      meta={[
        { label: "Terakhir diperbarui", value: d.updatedAt },
        { label: "Penyelenggara", value: site.companyName },
      ]}
    >
      <LegalDoc idPrefix="syarat" sections={d.sections} />
    </PageShell>
  );
}
