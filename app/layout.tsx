import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-helpers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kahade — Social commerce dengan escrow di setiap transaksi",
  description:
    "Kahade adalah platform social commerce Indonesia: feed produk seperti media sosial, setiap transaksi dilindungi escrow.",
  keywords: ["kahade", "escrow", "rekber", "social commerce", "jual beli online aman", "marketplace indonesia"],
  metadataBase: new URL("https://kahade.id"),
  alternates: { canonical: "/" },
  themeColor: "#ffffff",
  icons: { icon: "/favicon.svg" },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-white font-sans text-[#262626]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
