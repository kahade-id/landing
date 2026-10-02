import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "artikel",
  title: "Artikel Kahade",
  navTitle: "Artikel",
  description: "Artikel dan kabar terbaru dari tim Kahade.",
  group: "perusahaan",
  showInHeader: false,
};

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; by?: string }
  | { type: "callout"; text: string };

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  minutes: number;
}

export interface ArtikelData {
  headline: string;
  intro: string;
  articles: (ArticleMeta & { blocks: ArticleBlock[] })[];
}

export const required: (keyof ArtikelData)[] = ["headline", "articles"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<ArtikelData> = {};
