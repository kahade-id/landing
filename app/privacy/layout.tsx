import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Kahade. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
  alternates: { canonical: "https://kahade.id/privacy" },
  openGraph: {
    title: "Kebijakan Privasi",
    description: "Pelajari bagaimana Kahade melindungi informasi pribadi Anda.",
    url: "https://kahade.id/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
