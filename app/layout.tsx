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
  title: "Kahade — Social commerce dengan escrow di setiap transaksi",
  description:
    "Kahade adalah platform social commerce Indonesia: feed produk seperti media sosial, setiap transaksi dilindungi escrow.",
  keywords: ["kahade", "escrow", "rekber", "social commerce", "jual beli online aman", "marketplace indonesia"],
  metadataBase: new URL("https://kahade.id"),
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kahade — Social commerce dengan escrow di setiap transaksi",
    description:
      "Jual beli di feed seperti media sosial. Setiap transaksi dilindungi escrow.",
    type: "website",
    locale: "id_ID",
    siteName: "Kahade",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahade — Social commerce dengan escrow di setiap transaksi",
    description: "Jual beli di feed seperti media sosial. Setiap transaksi dilindungi escrow.",
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
