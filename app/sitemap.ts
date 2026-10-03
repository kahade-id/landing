import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allPages } from "@/lib/content";

/** Hanya halaman berstatus ready yang masuk sitemap. Draft: noindex + tidak di sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  for (const page of allPages()) {
    if (page.status === "ready") {
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
