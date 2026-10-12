import type { Metadata } from "next";
import { meta, required, data } from "@/content/kontak";
import { resolvePage } from "@/lib/content";
import { DraftPage } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { Container, DescriptionList } from "@kahade/ui";
import { Button } from "@/components/site/Button";
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

export default function KontakPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  const channels = [
    site.contactEmail && { label: "Email", value: site.contactEmail, href: `mailto:${site.contactEmail}` },
    site.contactWhatsapp && { label: "WhatsApp", value: `+${site.contactWhatsapp}`, href: `https://wa.me/${site.contactWhatsapp}` },
  ].filter(Boolean) as { label: string; value: string; href: string }[];
  return (
    <PageShell trail={TRAIL} kicker="Bantuan" title={d.headline} desc={d.intro}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3 text-fg">Kanal resmi</h2>
          </div>
          <div className="lg:col-span-8">
            {channels.length === 0 ? (
              <div className="max-w-reading border-t-2 border-fg pt-6">
                <p className="text-h4 text-fg">Kanal kontak langsung segera diumumkan.</p>
                <p className="mt-2 text-body text-fg-muted">
                  Sementara itu, tim kami bisa dihubungi melalui Pusat Bantuan Kahade.
                </p>
                <div className="mt-6">
                  <Button size="md" href="https://bantuan.kahade.id/kontak">
                    Buka Pusat Bantuan
                  </Button>
                </div>
              </div>
            ) : (
              <DescriptionList
                items={channels.map((c) => ({
                  term: c.label,
                  detail: (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-fg underline decoration-line-control underline-offset-4 hover:decoration-fg">
                      {c.value}
                    </a>
                  ),
                }))}
              />
            )}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
