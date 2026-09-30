import { Logo } from "@/components/logo";
import {
  APP_STORE_URL,
  EXPO_GO_URL,
  PLAY_STORE_URL,
} from "@/lib/constants";

function DownloadButton() {
  return (
    <a
      href="#download"
      className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[15px] font-semibold text-paper transition-opacity hover:opacity-80"
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
    <div className="grid gap-3 sm:grid-cols-3">
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

const FEATURES = [
  {
    title: "Etalase sosial",
    desc: "Jelajahi produk, like, komen, dan share — seperti media sosial.",
  },
  {
    title: "Escrow aman",
    desc: "Dana pembeli dilindungi sampai transaksi selesai.",
  },
  {
    title: "Bantuan sengketa",
    desc: "Ada masalah? Tim kami bantu selesaikan dengan adil.",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-surface bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Logo size="sm" />
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-80"
          >
            Download
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center sm:pt-32">
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

        {/* Download */}
        <section id="download" className="border-t border-surface scroll-mt-16">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight">
              Download Kahade
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Gratis. Tersedia untuk iOS dan Android.
            </p>
            <div className="mt-8">
              <StoreButtons />
            </div>
          </div>
        </section>

        {/* Cara kerja */}
        <section className="border-t border-surface bg-surface/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight">Cara kerja</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-base font-semibold text-paper">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fitur */}
        <section className="border-t border-surface">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight">Fitur</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © 2026 PT Kawal Hak Dengan Aman
          </p>
          <nav className="flex gap-6 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-ink">
              Syarat &amp; Ketentuan
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Kebijakan Privasi
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
