import type { ReactNode } from "react";
import Link from "next/link";
import { COMPANY, LogoTile, SITES } from "@kahade/ui";
import DeeplinkAutoOpen from "@/components/deeplink-auto-open";
import { KahadeMark } from "@/components/Logo";
import { ShieldCheck } from "@/lib/icons";
import { Button } from "./Button";

/** Tahun hak cipta — dihitung sekali per build/proses, bukan per render. */
const YEAR = new Date().getFullYear();

const LEGAL_LINKS = [
  { label: "Syarat & Ketentuan", href: `${SITES.legal.origin}/syarat-ketentuan` },
  { label: "Privasi", href: `${SITES.legal.origin}/privasi` },
  { label: "Bantuan", href: `${SITES.bantuan.origin}/` },
];

/** Bilah atas & bawah halaman deeplink — dipakai juga oleh skeleton pemuatan. */
export function DeeplinkFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface-2">
      <header className="flex h-16 items-center justify-between px-5 pt-[env(safe-area-inset-top)] sm:px-8">
        <Link
          href="/"
          aria-label="Kahade — beranda"
          className="-m-2 flex min-h-11 min-w-11 items-center justify-center rounded-control p-2 focus-visible:ring-2 focus-visible:ring-fg focus-visible:outline-none"
        >
          <KahadeMark size={26} title="" />
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-small font-medium text-fg-muted transition-colors hover:text-fg"
        >
          Tentang Kahade
        </Link>
      </header>
      {children}
      <footer className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-[13px] text-fg-subtle">
        <nav aria-label="Tautan legal" className="flex flex-wrap justify-center gap-x-5">
          {LEGAL_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <p>© {YEAR} {COMPANY.name}</p>
      </footer>
    </div>
  );
}

/**
 * Kerangka halaman deeplink (kahade.id/<username>, /p/<id>, /r/<code>,
 * /payment/finish, dan fallback universal link).
 *
 * Satu panel terfokus: media (avatar / foto produk / ikon status) → judul →
 * deskripsi → "Buka di aplikasi" / "Unduh aplikasi". Bilah atas membawa
 * pulang ke kahade.id; catatan perlindungan transaksi di bawah panel.
 */
export function DeeplinkLayout({
  deepLink,
  autoOpenPath,
  media,
  title,
  desc,
  primaryLabel = "Buka di aplikasi",
}: {
  /** href penuh skema kahade:// untuk tombol utama */
  deepLink: string;
  /** bila diisi, coba buka aplikasi otomatis sekali saat mount */
  autoOpenPath?: string;
  /** pengganti ikon aplikasi (mis. avatar / foto produk / ikon status) */
  media?: ReactNode;
  title: string;
  desc?: ReactNode;
  primaryLabel?: string;
}) {
  return (
    <DeeplinkFrame>
      <main
        id="konten-utama"
        tabIndex={-1}
        className="flex flex-1 items-center justify-center px-4 pt-4 pb-10 outline-none sm:pb-16"
      >
        {autoOpenPath ? <DeeplinkAutoOpen appPath={autoOpenPath} /> : null}
        <div className="w-full max-w-[26rem]">
          <div className="rounded-panel border border-line bg-surface px-6 pt-10 pb-6 text-center shadow-soft sm:px-8">
            <div className="flex justify-center">{media ?? <LogoTile size={64} title="" />}</div>
            <h1 className="mt-6 text-h3 break-words text-fg">{title}</h1>
            {desc ? <div className="mt-2 text-body text-fg-muted">{desc}</div> : null}
            <div className="mt-8 flex flex-col gap-3">
              <Button href={deepLink}>{primaryLabel}</Button>
              <Button variant="secondary" href="/#download">
                Unduh aplikasi
              </Button>
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-small text-fg-muted">
            <ShieldCheck weight="regular" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Setiap transaksi di Kahade dilindungi.
          </p>
        </div>
      </main>
    </DeeplinkFrame>
  );
}
