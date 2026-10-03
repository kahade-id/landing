import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkAutoOpen from "@/components/deeplink-auto-open";
import DeeplinkFallback from "@/components/deeplink-fallback";
import { fetchSharePayload } from "@/lib/deeplink-api";
import { KahadeMark } from "@/components/Logo";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const payload = await fetchSharePayload(id);
  return {
    title: payload?.title ? `${payload.title} — Kahade` : "Produk — Kahade",
    description: payload?.description || "Lihat produk di aplikasi Kahade.",
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <DeeplinkAutoOpen appPath={appPath} />
      {payload.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={payload.imageUrl}
          alt={payload.title}
          className="h-40 w-40 rounded-2xl object-cover"
        />
      ) : (
        <KahadeMark className="h-14 w-14" />
      )}
      <h1 className="mt-6 max-w-md text-2xl font-semibold tracking-[-0.02em] text-black">
        {payload.title}
      </h1>
      {payload.description ? (
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#525252]">
          {payload.description}
        </p>
      ) : null}
      {payload.authorUsername ? (
        <p className="mt-2 text-[15px] text-[#525252]">oleh @{payload.authorUsername}</p>
      ) : null}
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
