import type { Metadata } from "next";
import { meta, required, data } from "@/content/tentang";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { Container, Prose, Section, SectionHeader } from "@kahade/ui";

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

export default function TentangPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.subheadline}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-fg">Cerita kami</p>
          </div>
          <Prose className="max-w-reading lg:col-span-8">
            {d.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </div>
      </Container>
      {d.values.length > 0 && (
        <Section tone="muted">
          <SectionHeader eyebrow="Nilai" title="Yang kami pegang." />
          <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {d.values.map((v, i) => (
              <li key={v.title} className="border-t-2 border-fg pt-5">
                <span className="text-small tabular-nums text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-h3 text-fg">{v.title}</h2>
                <p className="mt-2 text-body text-fg-muted">{v.desc}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}
    </PageShell>
  );
}
