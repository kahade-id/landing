import Image from "next/image";
import { Header } from "@/components/header";
import { Faq } from "@/components/faq";
import { LogoMark } from "@/components/logo";
import {
  APP_STORE_URL,
  EXPO_GO_URL,
  PLAY_STORE_URL,
} from "@/lib/constants";

function DownloadButton() {
  return (
    <a
      href="#download"
      className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-[15px] font-semibold text-paper transition-all duration-200 hover:bg-ink-soft active:scale-[0.98]"
    >
      Download
    </a>
  );
}

function StoreButtons() {
  const stores = [
    {
      name: "Expo Go",
      desc: "Coba langsung tanpa install",
      url: EXPO_GO_URL,
      ready: EXPO_GO_URL.length > 0,
    },
    {
      name: "App Store",
      desc: "Untuk iPhone",
      url: APP_STORE_URL,
      ready: APP_STORE_URL.length > 0,
    },
    {
      name: "Google Play",
      desc: "Untuk Android",
      url: PLAY_STORE_URL,
      ready: PLAY_STORE_URL.length > 0,
    },
  ];

  return (
    <div className="grid gap-3 text-left sm:grid-cols-3">
      {stores.map((s) =>
        s.ready ? (
          <a
            key={s.name}
            href={s.url}
            className="group flex flex-col items-start gap-1 rounded-2xl bg-ink px-6 py-5 text-paper transition-opacity hover:opacity-85"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest opacity-60">
              {s.desc}
            </span>
            <span className="text-lg font-semibold">{s.name}</span>
          </a>
        ) : (
          <div
            key={s.name}
            aria-disabled="true"
            className="flex flex-col items-start gap-1 rounded-2xl bg-surface px-6 py-5"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted">
              {s.desc}
            </span>
            <span className="flex items-center gap-2 text-lg font-semibold text-ink">
              {s.name}
              <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-semibold text-paper">
                Segera hadir
              </span>
            </span>
          </div>
        )
      )}
    </div>
  );
}

/* ---------- Ikon garis monokrom ---------- */

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink">
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink">
      <path d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-5 4V6z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink">
      <path d="M4 9l1.5-5h13L20 9M4 9h16M4 9v2.5A2.5 2.5 0 009 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0V9M6 11.5V20h12v-8.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink">
      <circle cx="9" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5M16 5.4a3.25 3.25 0 010 5.2M17.5 14.9c1.7.7 2.7 2 3 4.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Data section ---------- */

// Value props — gabungan "Kenapa aman?" + "Fitur", deduplikasi.
// Prinsip: satu pesan satu kartu, tidak ada pengulangan.
const VALUE_PROPS = [
  {
    icon: <ShieldIcon />,
    title: "Escrow di setiap transaksi",
    desc: "Uang ditahan aman dan baru diteruskan ke penjual setelah kamu mengonfirmasi barang diterima.",
  },
  {
    icon: <StoreIcon />,
    title: "Etalase sosial",
    desc: "Jualan semudah posting di medsos — like, komen, share.",
  },
  {
    icon: <UsersIcon />,
    title: "Patungan & Jastip",
    desc: "Beli bareng atau titip beli — tetap aman dengan escrow.",
  },
  {
    icon: <ChatIcon />,
    title: "Bantuan sengketa manusia",
    desc: "Ada masalah? Tim kami menengahi dengan adil, bukan sekadar bot.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Pembeli bayar ke escrow",
    desc: "Uang ditahan aman oleh Kahade, bukan langsung ke penjual.",
  },
  {
    n: "2",
    title: "Penjual kirim barang",
    desc: "Penjual mengirim pesanan seperti biasa.",
  },
  {
    n: "3",
    title: "Dana cair",
    desc: "Setelah barang diterima, uang diteruskan ke penjual.",
  },
];

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {sub ? <p className="mt-3 text-muted">{sub}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-14 text-center sm:pb-24 sm:pt-20">
          <div className="relative mx-auto mb-10 aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-black/[0.06] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/hero-app.webp"
              alt="Pratinjau aplikasi Kahade di ponsel: feed Discover dengan produk berlabel escrow"
              fill
              priority
              sizes="300px"
              className="object-cover object-center"
            />
          </div>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Jual beli online tanpa takut ditipu.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Uang pembeli ditahan escrow sampai barang diterima — penjual dan
            pembeli sama-sama aman.
          </p>
          <div className="mt-10">
            <DownloadButton />
          </div>
        </section>

        {/* Kenapa Kahade — value props, satu pesan satu kartu */}
        <section id="fitur" className="scroll-mt-24 border-y border-surface bg-surface/50">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <SectionHead
              title="Kenapa Kahade"
              sub="Jual beli online tanpa takut ditipu."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl bg-paper p-6 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.25)]"
                >
                  {v.icon}
                  <h3 className="mt-4 text-[17px] font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara kerja */}
        <section id="cara-kerja" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <SectionHead
              title="Cara kerja"
              sub="Tiga langkah. Tanpa ribet."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-3xl border border-surface bg-paper p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-base font-semibold text-paper">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-surface bg-surface/50"
        >
          <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
            <SectionHead
              title="Pertanyaan umum"
              sub="Yang paling sering ditanyakan tentang Kahade."
            />
            <Faq />
          </div>
        </section>

        {/* CTA Penutup */}
        <section id="download" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-paper sm:px-12 sm:py-20">
              <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Siap jual beli tanpa takut ditipu?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-paper/70">
                Segera hadir di iOS dan Android. Gratis.
              </p>
              <div className="mx-auto mt-10 max-w-3xl">
                <StoreButtons />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface">
        <div className="mx-auto max-w-5xl px-6 pb-8 pt-14">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            {/* Brand */}
            <div className="max-w-xs">
              <a href="#top" aria-label="Kahade — kembali ke atas">
                <LogoMark size={36} />
              </a>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Jual beli online tanpa takut ditipu.
              </p>
            </div>

            {/* Navigasi */}
            <nav
              className="grid grid-cols-2 gap-10 sm:gap-16"
              aria-label="Navigasi footer"
            >
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-widest text-muted">
                  Jelajahi
                </h3>
                <ul className="mt-4 space-y-3 text-[15px]">
                  <li>
                    <a href="#fitur" className="text-ink-soft transition-colors hover:text-ink">
                      Kenapa Kahade
                    </a>
                  </li>
                  <li>
                    <a href="#cara-kerja" className="text-ink-soft transition-colors hover:text-ink">
                      Cara kerja
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-ink-soft transition-colors hover:text-ink">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#download" className="text-ink-soft transition-colors hover:text-ink">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-widest text-muted">
                  Bantuan
                </h3>
                <ul className="mt-4 space-y-3 text-[15px]">
                  <li>
                    <a href="#faq" className="text-ink-soft transition-colors hover:text-ink">
                      Pertanyaan umum
                    </a>
                  </li>
                  <li>
                    {/* Dokumen legal menyusul — jadi link saat dokumen 35 halaman selesai */}
                    <span className="text-muted/60">Syarat &amp; Ketentuan</span>
                  </li>
                  <li>
                    <span className="text-muted/60">Kebijakan Privasi</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Bar bawah */}
          <div className="mt-12 flex flex-col gap-1 border-t border-surface pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PT Kawal Hak Dengan Aman</p>
            <p>Escrow aman untuk jual beli online Indonesia.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
