#!/usr/bin/env node
/**
 * npm run content:check — laporkan halaman draft dan field wajib yang kurang.
 * Skrip Node tanpa dependency: membaca modul content/*.ts sebagai teks.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const contentDir = path.join(root, "content");

const SKIP = new Set(["site.ts", "types.ts"]);

function parseModule(file) {
  const src = fs.readFileSync(path.join(contentDir, file), "utf-8");
  const slug = /slug:\s*"([^"]+)"/.exec(src)?.[1] ?? file.replace(/\.ts$/, "");
  const title = /title:\s*"([^"]+)"/.exec(src)?.[1] ?? slug;
  const required = /export const required[^=]*=\s*(\[[^\]]*\])/.exec(src)?.[1] ?? "[]";
  // field dianggap terisi bila ada assignment non-kosong di `data`
  const dataMatch = /export const data[^=]*=\s*(\{[\s\S]*?\});/.exec(src);
  const dataBody = dataMatch ? dataMatch[1] : "{}";
  const fields = [...required.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const missing = fields.filter((f) => {
    const re = new RegExp(`${f}\\s*:\\s*([^,}]+)`);
    const m = re.exec(dataBody);
    if (!m) return true;
    const v = m[1].trim();
    return v === "undefined" || v === '""' || v === "[]" || v === "{}";
  });
  return { slug, title, missing };
}

const rows = [];
for (const file of fs.readdirSync(contentDir)) {
  if (!file.endsWith(".ts") || SKIP.has(file)) continue;
  rows.push({ file, ...parseModule(file) });
}

// cek site.ts
const siteSrc = fs.readFileSync(path.join(contentDir, "site.ts"), "utf-8");
const siteFields = ["productionUrl", "appStoreUrl", "playStoreUrl", "apkUrl", "contactEmail", "contactWhatsapp"];
const siteMissing = siteFields.filter((f) => new RegExp(`${f}:\\s*undefined`).test(siteSrc));

console.log("== Status halaman konten ==\n");
for (const r of rows) {
  const status = r.missing.length === 0 ? "ready" : "draft";
  console.log(`${status === "ready" ? "READY" : "DRAFT"}  /${r.slug}  (${r.title})`);
  if (r.missing.length > 0) {
    console.log(`       kurang: ${r.missing.join(", ")}  [${r.file}]`);
  }
}
console.log("\n== content/site.ts ==");
console.log(siteMissing.length === 0 ? "semua terisi" : `belum diisi: ${siteMissing.join(", ")}`);

const drafts = rows.filter((r) => r.missing.length > 0).length;
console.log(`\n${rows.length - drafts} ready, ${drafts} draft.`);
process.exit(0);
