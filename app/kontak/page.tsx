import type { Metadata } from "next";
import { meta, required, data } from "@/content/kontak";
import { resolvePage } from "@/lib/content";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DraftState } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
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
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-32">
        <Breadcrumb trail={TRAIL} />
        <div className="mt-8 max-w-3xl pb-10">
          <h1 className="type-h2 text-black">{meta.title}</h1>
        </div>
      </div>
      <DraftState title={meta.navTitle} />
    </main>
  );
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
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        {channels.length === 0 ? (
          <div className="rounded-[1.75rem] border border-black/10 bg-[#F3F4F6] p-8 text-center">
            <p className="text-[17px] font-semibold text-black">Kanal kontak segera diumumkan.</p>
            <p className="mt-2 text-[15px] text-[#525252]">Ikuti kabar peluncuran Kahade untuk info terbaru.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-[1.75rem] border border-black/10 bg-white p-6 transition-colors hover:border-black/30">
                  <div>
                    <p className="text-sm text-[#525252]">{c.label}</p>
                    <p className="mt-0.5 text-[17px] font-semibold text-black">{c.value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
