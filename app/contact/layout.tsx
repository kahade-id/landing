import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Tim support Kahade siap membantu Anda 24/7. Kirim pesan atau hubungi kami melalui email dan telepon.",
  alternates: { canonical: "https://kahade.id/contact" },
  openGraph: {
    title: "Hubungi Kami",
    description: "Tim support Kahade siap membantu Anda 24/7.",
    url: "https://kahade.id/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
