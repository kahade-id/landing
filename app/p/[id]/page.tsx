import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkFallback from "@/components/deeplink-fallback";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";
import { fetchSharePayload } from "@/lib/deeplink-api";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const payload = await fetchSharePayload(id);
  if (!payload?.title) {
    // Produk tidak dikenal → halaman fallback (fail-open untuk deeplink).
    // Tandai noindex agar URL sembarang tidak terindeks sebagai soft-404.
    return {
      title: "Produk — Kahade",
      description: "Lihat produk di aplikasi Kahade.",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${payload.title} — Kahade`,
    description: payload?.description || "Lihat produk di aplikasi Kahade.",
    alternates: { canonical: `/p/${encodeURIComponent(id)}` },
  };
}

/**
 * kahade.id/p/<id> — detail produk/etalase ala Instagram.
 * Pengganti /products/<id> dan /showcase/<id>.
 */
export default async function Page({ params }: Props) {
  const { id } = await params;

  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(id)) notFound();

  const payload = await fetchSharePayload(id);
  const appPath = `showcase/${encodeURIComponent(id)}`;

  // Tanpa payload dari API, tampilkan fallback generik (fail-open).
  if (!payload?.title) {
    return (
      <DeeplinkFallback
        appPath={appPath}
        copy={{ title: "Produk", desc: "Lihat produk di aplikasi Kahade." }}
      />
    );
  }

  return (
    <DeeplinkLayout
      deepLink={`kahade://${appPath}`}
      autoOpenPath={appPath}
      media={
        payload.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={payload.imageUrl}
            alt={payload.title}
            className="h-40 w-40 rounded-2xl object-cover"
          />
        ) : undefined
      }
      title={payload.title}
      desc={
        <>
          {payload.description ? <span className="block">{payload.description}</span> : null}
          {payload.authorUsername ? (
            <span className="mt-2 block">oleh @{payload.authorUsername}</span>
          ) : null}
        </>
      }
    />
  );
}
