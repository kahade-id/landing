import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kahade lahir dari kebutuhan akan sistem escrow yang aman dan mudah digunakan untuk semua orang. Pelajari cerita, visi, dan tim kami.",
  alternates: { canonical: "https://kahade.id/about" },
  openGraph: {
    title: "Tentang Kami",
    description: "Kahade lahir dari kebutuhan akan sistem escrow yang aman dan mudah digunakan untuk semua orang.",
    url: "https://kahade.id/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
