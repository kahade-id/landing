import type { Metadata } from "next";

export const site = {
  name: "Kahade",
  url: "https://kahade.id",
  email: "support@kahade.id",
  phone: "+62 21 3000 9000",
  location: "Jakarta, Indonesia",
  description:
    "Kahade membantu proses transaksi escrow terasa lebih aman dengan alur dana yang transparan, pengalaman pengguna yang rapi, dan dukungan operasional yang jelas.",
  ogImage: "/og-image.svg",
};

export const homeAnchors = {
  home: "/#home",
  platform: "/#platform",
  howItWorks: "/#cara-kerja",
  pricing: "/#harga",
  testimonials: "/#testimoni",
  security: "/#keamanan",
  faq: "/#faq",
  cta: "/#mulai",
};

export const supportLinks = {
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  status: "/status",
  docs: "/docs",
  blog: "/blog",
  careers: "/careers",
  partners: "/partners",
  support: "/support",
  salesEmail: `mailto:${site.email}?subject=Konsultasi%20Kahade`,
  supportEmail: `mailto:${site.email}`,
  phone: `tel:${site.phone.replace(/\s+/g, "")}`,
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "id_ID",
      siteName: site.name,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}
