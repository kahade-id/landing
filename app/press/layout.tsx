import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruang Media",
  description: "Sumber daya media, siaran pers, dan informasi perusahaan Kahade. Download press kit, logo, dan brand guidelines.",
  alternates: { canonical: "https://kahade.id/press" },
  openGraph: {
    title: "Ruang Media",
    description: "Sumber daya media dan informasi perusahaan Kahade.",
    url: "https://kahade.id/press",
  },
};

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
