import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, panduan, dan cerita untuk membantu Anda bertransaksi dengan lebih aman. Wawasan terbaru dari tim Kahade.",
  alternates: { canonical: "https://kahade.id/blog" },
  openGraph: {
    title: "Blog",
    description: "Tips, panduan, dan cerita untuk membantu Anda bertransaksi dengan lebih aman.",
    url: "https://kahade.id/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
