import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Platform Escrow P2P untuk Transaksi Lebih Aman`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "escrow",
    "transaksi aman",
    "jual beli online",
    "P2P escrow",
    "Kahade",
    "platform escrow indonesia",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Platform Escrow P2P untuk Transaksi Lebih Aman`,
    description: site.description,
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    url: site.url,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Platform Escrow P2P`,
    description: "Landing page Kahade untuk transaksi escrow yang lebih aman.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Source Sans 3 — body / UI font */}
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        {/* Fraunces — display / heading font (adds visual hierarchy) */}
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
