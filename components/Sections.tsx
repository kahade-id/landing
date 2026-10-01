import { Reveal } from "./Reveal";

/* ---------------- Trust strip ---------------- */

const TRUST = [
  {
    title: "Escrow di setiap transaksi",
    desc: "Dana pembeli ditahan aman, tidak langsung masuk ke penjual.",
  },
  {
    title: "Cair saat barang diterima",
    desc: "Penjual menerima dana setelah kamu konfirmasi penerimaan.",
  },
  {
    title: "Jejak transaksi jelas",
    desc: "Chat dan status pesanan tercatat rapi dalam satu tempat.",
  },
];

function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
      <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="Keunggulan escrow" className="border-y border-black/8 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:py-14">
        {TRUST.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F3F4F6] text-black">
                <TrustIcon />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold text-black">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-[#525252]">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Problem & Solution ---------------- */

const WITHOUT = [
  "Transfer langsung ke penjual yang belum dikenal",
  "Barang tak kunjung datang, penjual menghilang",
  "Uang yang sudah terkirim sulit kembali",
];

const WITH = [
  "Dana ditahan aman oleh escrow",
  "Penjual kirim barang dulu, dana cair setelahnya",
  "Ada jalur penyelesaian jika terjadi sengketa",
];

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#525252]">Kenapa Kahade</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
            Belanja online seharusnya tidak bikin was-was.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-lift h-full rounded-3xl border border-black/10 bg-white p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#525252]">
                Tanpa escrow
              </p>
              <ul className="mt-6 space-y-4">
                {WITHOUT.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#525252]">
                    <span className="text-black/40">
                      <CrossIcon />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-lift h-full rounded-3xl bg-black p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Dengan Kahade
              </p>
              <ul className="mt-6 space-y-4">
                {WITH.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-white/90">
                    <CheckIcon />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const STEPS = [
  {
    n: "01",
    title: "Bayar ke escrow",
    desc: "Dana ditahan aman oleh Kahade, bukan langsung ke penjual.",
  },
  {
    n: "02",
    title: "Penjual mengirim",
    desc: "Penjual mengirim barang sesuai kesepakatan di chat.",
  },
  {
    n: "03",
    title: "Konfirmasi terima",
    desc: "Periksa barang, lalu konfirmasi penerimaan di aplikasi.",
  },
  {
    n: "04",
    title: "Dana cair",
    desc: "Setelah konfirmasi, dana diteruskan ke penjual.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="scroll-mt-20 bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#525252]">Cara kerja</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
            Empat langkah, semua terlindungi.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px bg-black/10 lg:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="card-lift relative h-full rounded-3xl bg-white p-7">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#525252]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */

const FEATURES = [
  {
    title: "Feed yang personal",
    desc: "Jelajahi etalase produk seperti media sosial — like, komen, dan follow penjual favoritmu.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 5h16v11H4z" strokeLinejoin="round" />
        <path d="M4 20h16" strokeLinecap="round" />
        <path d="M9 9.5h6M9 12.5h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Chat transaksi",
    desc: "Tawar, sepakati detail, dan pantau status pesanan — semua tercatat dalam satu chat.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z" strokeLinejoin="round" />
        <path d="M8.5 12h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Penjual terverifikasi",
    desc: "Lencana verifikasi membantu kamu mengenali penjual yang identitasnya sudah dicek.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="9" r="4" />
        <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
        <path d="M15.5 13.5l1.5 1.5 3-3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="fitur" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#525252]">Fitur unggulan</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
            Dibuat untuk jual beli yang tenang.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="card-lift h-full rounded-3xl border border-black/10 bg-white p-7 sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F4F6] text-black">
                  {f.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-black">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#525252]">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
