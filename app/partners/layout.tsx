import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitra",
  description: "Bergabung sebagai mitra Kahade. Integrasi escrow API, mitra pembayaran, atau mitra teknologi untuk kolaborasi inovatif.",
  alternates: { canonical: "https://kahade.id/partners" },
  openGraph: {
    title: "Mitra",
    description: "Bergabung sebagai mitra Kahade untuk kolaborasi yang saling menguntungkan.",
    url: "https://kahade.id/partners",
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
