import type { Metadata } from "next";

export const site = {
  name: "Kahade",
  url: "https://kahade.id",
  description:
    "Platform Escrow P2P Indonesia yang aman, transparan, dan terdaftar resmi. Lindungi transaksi online Anda dengan sistem rekening bersama yang teregulasi.",
  ogImage: "/og-image.svg",
  email: "halo@kahade.id",
  phone: "+62 21 1234 5678",
  address: "Jakarta, Indonesia",
  socials: {
    instagram: "https://instagram.com/kahade.id",
    twitter: "https://twitter.com/kahade_id",
    linkedin: "https://linkedin.com/company/kahade",
  },
} as const;

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}): Metadata {
  const desc = description ?? site.description;
  const img = image ?? site.ogImage;

  return {
    title,
    description: desc,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: desc,
      url: `${site.url}${path}`,
      type: "website",
      locale: "id_ID",
      siteName: site.name,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description: desc,
      images: [img],
    },
  };
}
