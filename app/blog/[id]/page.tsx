import { notFound } from "next/navigation";
import { blogArticles } from "@/src/lib/site";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: Promise<{ id: string }>;
}

// WAJIB untuk output: 'export' — semua ID harus diketahui saat build time
export function generateStaticParams() {
  return blogArticles.map((article) => ({ id: article.id }));
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const article = blogArticles.find((a) => a.id === id);
  if (!article) notFound();
  return <BlogPostClient id={id} />;
}
