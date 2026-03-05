import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pusat Bantuan",
  description: "Temukan jawaban, panduan, dan dukungan untuk menggunakan Kahade. Tim support kami tersedia 24/7.",
  alternates: { canonical: "https://kahade.id/support" },
  openGraph: {
    title: "Pusat Bantuan",
    description: "Temukan jawaban dan panduan penggunaan Kahade.",
    url: "https://kahade.id/support",
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
