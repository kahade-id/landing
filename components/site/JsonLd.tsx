/** JSON-LD script helper (Server Component safe). */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function orgJsonLd(siteUrl: string, companyName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kahade",
    legalName: companyName,
    url: siteUrl,
  };
}

export function websiteJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kahade",
    url: siteUrl,
    inLanguage: "id",
  };
}

export function breadcrumbJsonLd(siteUrl: string, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${siteUrl}${t.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(
  siteUrl: string,
  a: { slug: string; title: string; description: string; author: string; date: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    author: { "@type": "Person", name: a.author },
    datePublished: a.date,
    mainEntityOfPage: `${siteUrl}/artikel/${a.slug}`,
    inLanguage: "id",
  };
}
