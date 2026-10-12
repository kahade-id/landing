/** Ponsel/tablet (Android, iOS, iPadOS) — tempat aplikasi Kahade bisa terpasang. */
export function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  // iPadOS 13+ melapor sebagai Macintosh; bedakan lewat layar sentuh.
  return /Android|iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}
