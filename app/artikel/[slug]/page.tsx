import type { Metadata } from "next";
import { Button } from "@/components/site/Button";
import { notFound } from "next/navigation";
import { meta, required, data, type ArtikelData } from "@/content/artikel";
import { resolvePage } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { articleJsonLd, JsonLd } from "@/components/site/JsonLd";
import { site } from "@/content/site";

function getArticle(slug: string) {
  const page = resolvePage(meta, required, data);
  if (page.status !== "ready") return null;
  return (page.data as ArtikelData).articles.find((a) => a.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const page = resolvePage(meta, required, data);
  if (page.status !== "ready") return [];
  return (page.data as ArtikelData).articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { robots: { index: false, follow: false } };
  return {
    title: `${article.title} — Kahade`,
    description: article.description,
    alternates: { canonical: `/artikel/${slug}` },
  };
}

function Block({ block }: { block: ArtikelData["articles"][number]["blocks"][number] }) {
  switch (block.type) {
    case "heading":
      return <h2 className="type-h3 mt-10 text-black">{block.text}</h2>;
    case "paragraph":
      return <p className="type-body text-[#262626]">{block.text}</p>;
    case "list":
      return (
        <ul className="list-disc space-y-2 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="type-body text-[#262626]">{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-black pl-6">
          <p className="text-xl font-medium leading-relaxed text-black">{block.text}</p>
          {block.by && <cite className="mt-2 block text-sm not-italic text-[#525252]">— {block.by}</cite>}
        </blockquote>
      );
    case "callout":
      return (
        <div className="rounded-2xl bg-[#F3F4F6] p-6">
          <p className="text-[15px] leading-relaxed text-[#262626]">{block.text}</p>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const trail = [
    { name: "Beranda", path: "/" },
    { name: "Artikel", path: "/artikel" },
    { name: article.title, path: `/artikel/${slug}` },
  ];

  return (
    <>
      <JsonLd data={articleJsonLd(site.siteUrl, article)} />
      <PageShell
        trail={trail}
        kicker={article.category}
        title={article.title}
        desc={`${article.author} · ${article.date} · ${article.minutes} menit baca`}
      >
        <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
          <div className="max-w-[680px] space-y-5">
            {article.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
          <div className="mt-14 border-t border-black/10 pt-8">
            <Button variant="secondary" size="md" href="/artikel">
              Semua artikel
            </Button>
          </div>
        </div>
      </PageShell>
    </>
  );
}
