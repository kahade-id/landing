import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkAutoOpen from "@/components/deeplink-auto-open";
import { fetchPublicProfile } from "@/lib/deeplink-api";
import { isReservedWord } from "@/lib/reserved-words";
import { KahadeMark } from "@/components/Logo";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  if (isReservedWord(username)) return { title: "Tidak ditemukan" };
  const profile = await fetchPublicProfile(username);
  const name = profile?.identity?.fullName || profile?.identity?.nickname || `@${username}`;
  return {
    title: `${name} (@${username}) — Kahade`,
    description: profile?.identity?.bio || `Lihat profil @${username} di Kahade.`,
  };
}

/**
 * kahade.id/<username> — profil publik ala Instagram.
 *
 * - Reserved words → 404 (tidak menelan route lain).
 * - Format username invalid → 404.
 * - API 404/timeout → tampil sebagai fallback (fail-open); aplikasi
 *   yang menampilkan status final bila dibuka di app.
 */
export default async function Page({ params }: Props) {
  const { username } = await params;

  if (isReservedWord(username)) notFound();
  if (!/^[a-zA-Z0-9_.-]{1,30}$/.test(username)) notFound();

  const profile = await fetchPublicProfile(username);
  const identity = profile?.identity;
  const displayName = identity?.fullName || identity?.nickname || `@${username}`;
  const appPath = `user/${encodeURIComponent(username)}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <DeeplinkAutoOpen appPath={appPath} />
      {identity?.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={identity.avatarUrl}
          alt={displayName}
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <KahadeMark className="h-14 w-14" />
      )}
      <h1 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-black">{displayName}</h1>
      <p className="mt-1 text-[17px] text-[#525252]">@{username}</p>
      {identity?.bio ? (
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#525252]">{identity.bio}</p>
      ) : (
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#525252]">
          Lihat profil di aplikasi Kahade.
        </p>
      )}
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        <a
          href={`kahade://${appPath}`}
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Buka di aplikasi
        </a>
        <a
          href="/#download"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-black/15 px-9 text-base font-semibold text-black transition-colors hover:bg-black/5"
        >
          Download aplikasi
        </a>
      </div>
    </main>
  );
}
