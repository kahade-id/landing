import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Temukan jawaban untuk pertanyaan umum tentang Kahade, biaya transaksi, keamanan dana, dan cara kerja escrow.",
  alternates: { canonical: "https://kahade.id/faq" },
  openGraph: {
    title: "FAQ",
    description: "Temukan jawaban untuk pertanyaan umum tentang Kahade dan layanan escrow kami.",
    url: "https://kahade.id/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
