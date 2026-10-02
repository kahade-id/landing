/**
 * Resolver konten: menggabungkan data pemilik + fixture (bila aktif),
 * lalu menurunkan status draft/ready dari kelengkapan field wajib.
 *
 * Fixture dimuat dari JSON via fs HANYA bila KAHADE_FIXTURES=1, sehingga
 * teks penanda fixture tidak pernah masuk bundle produksi.
 */
import fs from "node:fs";
import path from "node:path";
import type { PageMeta, PageStatus, ResolvedPage } from "@/content/types";

const useFixtures = process.env.KAHADE_FIXTURES === "1";

if (useFixtures && process.env.VERCEL) {
  throw new Error("KAHADE_FIXTURES=1 tidak boleh aktif di Vercel (build dibatalkan).");
}

function loadFixture(slug: string): Record<string, unknown> {
  if (!useFixtures) return {};
  const p = path.join(process.cwd(), "content", "__fixtures__", `${slug}.json`);
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return {};
  }
}

function isEmpty(v: unknown): boolean {
  return v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
}

export function resolvePage<T>(
  meta: PageMeta,
  required: readonly string[],
  data: Partial<T>
): ResolvedPage<T> {
  const merged = { ...data, ...loadFixture(meta.slug) } as T;
  const missing = required.filter((k) => isEmpty((merged as Record<string, unknown>)[k]));
  const status: PageStatus = missing.length === 0 ? "ready" : "draft";
  return { meta, status, missing: [...missing], data: merged };
}

export function isReady<T extends object>(page: ResolvedPage<T>): boolean {
  return page.status === "ready";
}

export { useFixtures };

/* ---------- Registry semua halaman konten ---------- */

import { meta as tentangMeta, required as tentangRequired, data as tentangData } from "@/content/tentang";
import { meta as karierMeta, required as karierRequired, data as karierData } from "@/content/karier";
import { meta as artikelMeta, required as artikelRequired, data as artikelData } from "@/content/artikel";
import { meta as kontakMeta, required as kontakRequired, data as kontakData } from "@/content/kontak";
import { meta as bantuanMeta, required as bantuanRequired, data as bantuanData } from "@/content/bantuan";
import { meta as keamananMeta, required as keamananRequired, data as keamananData } from "@/content/keamanan";
import { meta as biayaMeta, required as biayaRequired, data as biayaData } from "@/content/biaya";
import { meta as pressMeta, required as pressRequired, data as pressData } from "@/content/press";
import { meta as syaratMeta, required as syaratRequired, data as syaratData } from "@/content/syarat";
import { meta as privasiMeta, required as privasiRequired, data as privasiData } from "@/content/privasi";

const pageModules = [
  { meta: tentangMeta, required: tentangRequired, data: tentangData },
  { meta: karierMeta, required: karierRequired, data: karierData },
  { meta: artikelMeta, required: artikelRequired, data: artikelData },
  { meta: kontakMeta, required: kontakRequired, data: kontakData },
  { meta: bantuanMeta, required: bantuanRequired, data: bantuanData },
  { meta: keamananMeta, required: keamananRequired, data: keamananData },
  { meta: biayaMeta, required: biayaRequired, data: biayaData },
  { meta: pressMeta, required: pressRequired, data: pressData },
  { meta: syaratMeta, required: syaratRequired, data: syaratData },
  { meta: privasiMeta, required: privasiRequired, data: privasiData },
];

/** Semua halaman konten dengan status draft/ready yang diturunkan otomatis. */
export function allPages(): ResolvedPage<Record<string, unknown>>[] {
  return pageModules.map((m) =>
    resolvePage<Record<string, unknown>>(m.meta, m.required, m.data)
  );
}

/** Halaman berstatus ready saja. */
export function readyPages(): ResolvedPage<Record<string, unknown>>[] {
  return allPages().filter((p) => p.status === "ready");
}
