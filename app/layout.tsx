import type { Metadata, Viewport } from "next";
import "@/src/index.css";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

// FIX: Export viewport separately (Next.js 14+ requirement).
// Prevents "metadataBase" warning and ensures proper mobile scaling.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Kahade — Platform Escrow P2P",
    template: "%s — Kahade",
  },
  description: "Platform escrow untuk transaksi online yang aman. Dana ditahan sampai transaksi selesai.",
  metadataBase: new URL("https://kahade.id"),
  // FIX: Add canonical URL for SEO — prevents duplicate content issues
  alternates: {
    canonical: "https://kahade.id",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kahade — Platform Escrow P2P",
    description: "Platform escrow untuk transaksi online yang aman.",
    url: "https://kahade.id",
    siteName: "Kahade",
    locale: "id_ID",
    type: "website",
    images: [
      {
        // FIX: Changed from og-image.svg → og-image.png
        // SVG is NOT supported by social media crawlers (Facebook, Twitter, WhatsApp, LinkedIn).
        // All major platforms require raster images (PNG/JPG) for og:image.
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kahade — Platform Escrow P2P",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahade — Platform Escrow P2P",
    description: "Platform escrow untuk transaksi online yang aman.",
    // FIX: Same SVG → PNG fix for Twitter card
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {/* Skip to main content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Langsung ke konten utama
        </a>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
