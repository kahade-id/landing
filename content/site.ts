/**
 * Konfigurasi situs Kahade — satu sumber untuk semua nilai yang diisi pemilik.
 * Nilai `undefined` = belum tersedia → UI menampilkan status "Segera hadir"
 * (tombol nonaktif, tanpa href). Dilarang URL karangan.
 */

export type SiteConfig = {
  /** URL produksi Vercel, mis. https://kahade-id.vercel.app */
  productionUrl: string | undefined;
  /** Tautan App Store */
  appStoreUrl: string | undefined;
  /** Tautan Google Play */
  playStoreUrl: string | undefined;
  /** Tautan unduh APK langsung */
  apkUrl: string | undefined;
  /** Email kontak resmi */
  contactEmail: string | undefined;
  /** Nomor WhatsApp kontak (format internasional, mis. 62812xxxxxxx) */
  contactWhatsapp: string | undefined;
  /** Nama badan hukum */
  companyName: string;
  /** URL situs */
  siteUrl: string;
};

export const site: SiteConfig = {
  productionUrl: undefined,
  appStoreUrl: undefined,
  playStoreUrl: undefined,
  apkUrl: undefined,
  contactEmail: undefined,
  contactWhatsapp: undefined,
  companyName: "PT Kawal Hak Dengan Aman",
  siteUrl: "https://kahade.id",
};

/** true bila tautan unduhan sudah terisi dan boleh ditampilkan aktif. */
export function hasDownloadLinks(): boolean {
  return Boolean(site.appStoreUrl || site.playStoreUrl || site.apkUrl);
}
