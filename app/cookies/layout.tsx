import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Cookie",
  description: "Kebijakan cookie Kahade. Pelajari jenis cookie yang kami gunakan dan cara mengelola preferensi cookie Anda.",
  alternates: { canonical: "https://kahade.id/cookies" },
  openGraph: {
    title: "Kebijakan Cookie",
    description: "Pelajari jenis cookie yang digunakan Kahade.",
    url: "https://kahade.id/cookies",
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
