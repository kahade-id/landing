import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";
import { fetchPublicProfile } from "@/lib/deeplink-api";
import { isReservedWord } from "@/lib/reserved-words";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  if (isReservedWord(username)) return { title: "Tidak ditemukan" };
  const profile = await fetchPublicProfile(username);
  const name = profile?.identity?.fullName || profile?.identity?.nickname || `@${username}`;
  return {
    title: `${name} (@${username}) — Kahade`,
    description: profile?.identity?.bio || `Lihat profil @${username} di Kahade.`,
    alternates: { canonical: `/${encodeURIComponent(username)}` },
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
    <DeeplinkLayout
      deepLink={`kahade://${appPath}`}
      autoOpenPath={appPath}
      media={
        identity?.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={identity.avatarUrl}
            alt={displayName}
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : undefined
      }
      title={displayName}
      desc={
        <>
          <span className="block">@{username}</span>
          <span className="mt-3 block">
            {identity?.bio || "Lihat profil di aplikasi Kahade."}
          </span>
        </>
      }
    />
  );
}
