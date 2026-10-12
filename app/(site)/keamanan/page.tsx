import type { Metadata } from "next";
import { meta, required, data } from "@/content/keamanan";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@kahade/ui";

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

export default function KeamananPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Bantuan" title={d.headline} desc={d.intro}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <ol className="border-t border-line">
          {d.points.map((p, i) => (
            <li key={p.title} className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
              <span className="text-h3 tabular-nums text-fg-subtle sm:col-span-2">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="text-h3 text-fg sm:col-span-4">{p.title}</h2>
              <p className="max-w-reading text-body-lg text-fg-muted sm:col-span-6">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </PageShell>
  );
}
