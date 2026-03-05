import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketentuan Layanan",
  description: "Ketentuan layanan platform escrow Kahade. Pelajari hak, kewajiban, dan aturan penggunaan layanan kami.",
  alternates: { canonical: "https://kahade.id/terms" },
  openGraph: {
    title: "Ketentuan Layanan",
    description: "Ketentuan penggunaan layanan escrow Kahade.",
    url: "https://kahade.id/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
