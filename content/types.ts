/** Tipe sistem konten Kahade. */

export type PageStatus = "draft" | "ready";

export type PageGroup = "perusahaan" | "bantuan" | "legal";

export interface PageMeta {
  /** slug URL, mis. "tentang" */
  slug: string;
  /** judul dokumen <title> */
  title: string;
  /** label navigasi */
  navTitle: string;
  /** meta description */
  description: string;
  group: PageGroup;
  /** tampil di header bila ready */
  showInHeader: boolean;
}

export interface ResolvedPage<T> {
  meta: PageMeta;
  status: PageStatus;
  /** field wajib yang belum terisi */
  missing: string[];
  data: T;
}
