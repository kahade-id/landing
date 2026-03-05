import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karir",
  description: "Bergabunglah dengan tim Kahade dan bantu kami membangun platform escrow terdepan di Indonesia. Lihat posisi terbuka.",
  alternates: { canonical: "https://kahade.id/careers" },
  openGraph: {
    title: "Karir",
    description: "Bergabunglah dengan tim Kahade. Lihat posisi terbuka dan benefitnya.",
    url: "https://kahade.id/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
