import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allPages } from "@/lib/content";

/** Slug yang di-redirect permanen ke subdomain (lihat redirects() di next.config.ts). */
const EXTERNALLY_REDIRECTED = new Set(["artikel", "bantuan"]);

/** Hanya halaman berstatus ready yang masuk sitemap. Draft: noindex + tidak di sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  for (const page of allPages()) {
    // Kecualikan rute yang di-redirect permanen ke subdomain (sinkron dengan
    // redirects() di next.config.ts) — URL yang me-redirect keluar domain
    // tidak boleh ada di sitemap.
    if (page.status === "ready" && !EXTERNALLY_REDIRECTED.has(page.meta.slug)) {
      entries.push({
        url: `${base}/${page.meta.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
