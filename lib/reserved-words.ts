/**
 * Reserved words — tidak boleh dipakai sebagai username publik.
 *
 * Kenapa: `kahade.id/<username>` (gaya Instagram) menempati root path.
 * Bila username cocok dengan salah satu kata di bawah, route `[username]`
 * akan menelan route lain (mis. `/p/123`, `/help/faq`). Halaman
 * `app/[username]/page.tsx` me-return 404 untuk kata-kata ini agar
 * route yang benar tetap menang.
 *
 * Sinkron dengan:
 * - Backend: validasi username saat registrasi/ganti username
 * - `public/.well-known/*`: path yang diklaim untuk App/Universal Links
 *
 * Perbandingan case-insensitive.
 */
export const RESERVED_WORDS = new Set([
  // Prefix route baru ala Instagram
  "p",
  "v",
  "r",
  "o",
  // Route aplikasi yang sudah ada
  "payment",
  "transfer",
  "register",
  "help",
  "order-link",
  "products",
  "product",
  "profile",
  "user",
  "showcase",
  "faq",
  "download",
  "login",
  "verify",
  "settings",
  "notifications",
  "notification",
  "chat",
  "wallet",
  "topup",
  "withdraw",
  "explore",
  "search",
  // Info / legal
  "terms",
  "privacy",
  "privacy-policy",
  "kebijakan-privasi",
  "about",
  "tentang",
  "contact",
  "kontak",
  "support",
  // Halaman marketing kahade.id (landing rewrite)
  "artikel",
  "bantuan",
  "biaya",
  "karier",
  "keamanan",
  "press",
  "syarat-dan-ketentuan",
  // Teknis
  "api",
  "admin",
  "static",
  "assets",
  "images",
  "_next",
  "not-found",
]);

export function isReservedWord(segment: string): boolean {
  return RESERVED_WORDS.has(segment.toLowerCase());
}
