import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://kahade.id";
const DESCRIPTION =
  "Kahade — jual beli online tanpa takut ditipu. Dana pembeli ditahan escrow sampai barang diterima.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kahade — Jual Beli Aman dengan Escrow",
    template: "%s — Kahade",
  },
  description: DESCRIPTION,
  keywords: ["kahade", "escrow", "rekber", "jual beli aman", "marketplace"],
  authors: [{ name: "PT Kawal Hak Dengan Aman" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Kahade",
    title: "Kahade — Jual Beli Aman dengan Escrow",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Kahade — Jual Beli Aman dengan Escrow",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
