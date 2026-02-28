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
  location: "Jakarta, Indonesia",
  socials: {
    instagram: "https://instagram.com/kahade.id",
    twitter: "https://twitter.com/kahade_id",
    linkedin: "https://linkedin.com/company/kahade",
  },
} as const;

/** Anchor links for sections on the home page */
export const homeAnchors = {
  home:         "/",
  platform:     "/#platform",
  howItWorks:   "/#cara-kerja",
  pricing:      "/#harga",
  testimonials: "/#testimoni",
  security:     "/#keamanan",
  faq:          "/#faq",
  cta:          "/#mulai",
} as const;

/** Links to support / company pages */
export const supportLinks = {
  docs:         "/docs",
  status:       "/status",
  support:      "/support",
  contact:      "/contact",
  about:        "/about",
  careers:      "/careers",
  blog:         "/blog",
  partners:     "/partners",
  privacy:      "/privacy",
  terms:        "/terms",
  cookies:      "/cookies",
  supportEmail: `mailto:${site.email}`,
  phone:        `tel:${site.phone.replace(/\s/g, "")}`,
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
