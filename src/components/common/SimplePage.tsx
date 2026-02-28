import Link from "next/link";
import { site, supportLinks } from "@/lib/site";

interface SimplePageProps {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  detailTitle?: string;
  detailBody?: string;
}

export default function SimplePage({
  eyebrow,
  title,
  description,
  points = [],
  detailTitle = "Yang bisa dilakukan dari halaman ini",
  detailBody = "Gunakan halaman ini sebagai titik rujukan singkat sebelum melanjutkan ke pusat bantuan, dokumentasi, atau tim operasional.",
}: SimplePageProps) {
  return (
    <main id="main-content" className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black transition-colors"
        >
          ← Kembali ke beranda
        </Link>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-black/60">{description}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_.95fr]">
            <section className="rounded-3xl border border-black/8 bg-black/[0.02] p-6">
              <h2 className="text-lg font-bold tracking-tight">{detailTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-black/55">{detailBody}</p>

              {points.length > 0 && (
                <ul className="mt-6 grid gap-3 text-sm text-black/65 sm:grid-cols-2">
                  {points.map((point) => (
                    <li key={point} className="rounded-2xl border border-black/8 bg-white px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <aside className="rounded-3xl border border-black/8 bg-white p-6">
              <h2 className="text-lg font-bold tracking-tight">Kontak & rute lanjutan</h2>
              <div className="mt-5 space-y-3 text-sm">
                <Link href={supportLinks.supportEmail} className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Email support</span>
                  <span>{site.email}</span>
                </Link>
                <Link href={supportLinks.phone} className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Telepon</span>
                  <span>{site.phone}</span>
                </Link>
                <Link href={supportLinks.support} className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Pusat bantuan</span>
                  <span>→</span>
                </Link>
                <Link href={supportLinks.docs} className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Dokumentasi</span>
                  <span>→</span>
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/support" className="inline-flex items-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black/85">
              Pusat Bantuan
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-xl border border-black/12 px-4 py-2.5 text-sm font-semibold text-black/70 transition-colors hover:border-black/20 hover:text-black">
              Hubungi Tim
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
