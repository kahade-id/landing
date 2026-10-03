"use client";

import { AppleLogo, DownloadSimple, GooglePlayLogo } from "@/lib/icons";
import { site } from "@/content/site";

type Size = "md" | "lg";

const SIZES: Record<Size, string> = {
  md: "min-h-[48px] px-6 text-[15px]",
  lg: "min-h-[56px] px-5 text-[15px] sm:min-h-[58px] sm:px-9 sm:text-base",
};

function StoreButton({
  href,
  icon,
  label,
  sub,
  size,
  primary = true,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  size: Size;
  primary?: boolean;
}) {
  const cls = `btn-press inline-flex items-center gap-3 rounded-2xl ${SIZES[size]} font-semibold transition-colors ${
    primary
      ? "bg-black text-white hover:bg-[#262626]"
      : "border border-black/15 bg-white text-black hover:border-black/30"
  }`;

  const inner = (
    <>
      <span aria-hidden="true" className="text-[22px] leading-none">{icon}</span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-medium opacity-70">{sub}</span>
        <span>{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <button type="button" className={cls}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}

/**
 * Aksi unduh aplikasi. Membaca content/site.ts:
 * tersedia → tautan eksternal; belum → tombol disabled "Segera hadir".
 */
export function DownloadActions({
  size = "lg",
  layout = "row",
  showApk = true,
  compact = false,
  className = "",
}: {
  size?: Size;
  layout?: "row" | "column";
  showApk?: boolean;
  /** compact: tombol ikon 44px untuk header */
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    const stores = [
      { href: site.appStoreUrl, icon: <AppleLogo weight="regular" />, label: "App Store" },
      { href: site.playStoreUrl, icon: <GooglePlayLogo weight="regular" />, label: "Google Play" },
    ];
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {stores.map((s) =>
          s.href ? (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Unduh di ${s.label}`}
              className="btn-press inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black text-lg text-white"
            >
              <span aria-hidden="true">{s.icon}</span>
            </a>
          ) : (
            <button
              key={s.label}
              type="button"
              disabled
              aria-disabled="true"
              aria-label={`${s.label} — segera hadir`}
              title="Segera hadir"
              className="inline-flex min-h-[44px] min-w-[44px] cursor-not-allowed items-center justify-center rounded-full border border-black/15 text-lg text-[#525252] opacity-70"
            >
              <span aria-hidden="true">{s.icon}</span>
            </button>
          )
        )}
      </div>
    );
  }

  return (
    <div className={`flex ${layout === "row" ? "flex-row" : "flex-col"} items-stretch gap-3 ${className}`}>
      <StoreButton
        href={site.appStoreUrl}
        icon={<AppleLogo weight="regular" />}
        sub="Unduh di"
        label="App Store"
        size={size}
      />
      <StoreButton
        href={site.playStoreUrl}
        icon={<GooglePlayLogo weight="regular" />}
        sub="Dapatkan di"
        label="Google Play"
        size={size}
        primary={false}
      />
      {showApk && site.apkUrl && (
        <a
          href={site.apkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 px-2 text-[15px] font-semibold text-black underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
        >
          <DownloadSimple weight="regular" aria-hidden="true" />
          Unduh APK langsung
        </a>
      )}
    </div>
  );
}
