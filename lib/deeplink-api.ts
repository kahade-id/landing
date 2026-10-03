/**
 * Helper fetch ke API backend publik Kahade untuk halaman deeplink.
 *
 * Dipakai oleh route `app/[username]`, `app/p/[id]` untuk validasi
 * keberadaan konten sebelum menampilkan fallback. Fail-open: bila
 * API error/timeout, kembalikan null (halaman tetap tampil sebagai
 * fallback, bukan 500).
 */

const API_BASE = "https://api.kahade.id/v1";

type ApiResult<T> = { ok: true; data: T } | { ok: false; status: number };

async function get<T>(path: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: 300 }, // cache 5 menit
      headers: { "User-Agent": "kahade-landing/1.0" },
    });
    if (!res.ok) return { ok: false, status: res.status };
    const data = (await res.json()) as T;
    return { ok: true, data };
  } catch {
    return { ok: false, status: 0 };
  }
}

export type PublicProfile = {
  identity?: {
    fullName?: string | null;
    nickname?: string | null;
    username?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
  };
  social?: {
    followersCount?: number | null;
    followingCount?: number | null;
  };
};

/** GET /v1/users/:username — profil publik. null bila tidak ada / API error. */
export async function fetchPublicProfile(username: string): Promise<PublicProfile | null> {
  const r = await get<PublicProfile>(`/users/${encodeURIComponent(username)}`);
  return r.ok ? r.data : null;
}

export type SharePayload = {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  authorUsername?: string | null;
  priceText?: string | null;
};

/** GET /v1/showcase/:id/share — metadata share etalase. null bila tidak ada / API error. */
export async function fetchSharePayload(id: string): Promise<SharePayload | null> {
  const r = await get<SharePayload>(`/showcase/${encodeURIComponent(id)}/share`);
  return r.ok ? r.data : null;
}
