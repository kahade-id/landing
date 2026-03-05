import type { Metadata } from "next";
import { blogArticles } from "@/src/lib/site";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://kahade.id/blog/${id}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://kahade.id/blog/${id}`,
      type: "article",
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
