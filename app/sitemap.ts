import type { MetadataRoute } from "next";

const BASE = "https://kahade.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/kebijakan-privasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/syarat-ketentuan`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
