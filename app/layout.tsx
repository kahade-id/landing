import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-helpers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kahade — Aplikasi Jual Beli Aman Seperti Media Sosial",
  description:
    "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Jual beli aman tanpa takut tertipu.",
  keywords: ["kahade", "aplikasi jual beli", "aplikasi jual beli aman", "jual beli online aman", "jual beli seperti media sosial", "social commerce", "marketplace indonesia", "jual beli p2p"],
  metadataBase: new URL("https://kahade.id"),
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kahade — Aplikasi Jual Beli Aman Seperti Media Sosial",
    description:
      "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Jual beli aman tanpa takut tertipu.",
    type: "website",
    locale: "id_ID",
    siteName: "Kahade",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahade — Aplikasi Jual Beli Aman Seperti Media Sosial",
    description: "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Jual beli aman tanpa takut tertipu.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="bg-white font-sans text-[#262626]">
        <a href="#konten-utama" className="skip-link">
          Lewati ke konten utama
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
