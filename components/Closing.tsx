import { Reveal } from "./Reveal";
import { KahadeMark } from "./Logo";

export function Closing() {
  return (
    <section id="download" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <KahadeMark className="mx-auto h-14 w-14" />
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
            Belanja di feed,
            <br />
            tanpa was-was.
          </h2>
        </Reveal>
        <Reveal delay={170}>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-[#525252]">
            Setiap transaksi dilindungi escrow. Jadilah yang pertama saat
            Kahade meluncur.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9">
            <a
              href="#top"
              className="btn-press inline-flex min-h-[56px] items-center rounded-full bg-black px-10 text-base font-semibold text-white"
            >
              Download Kahade
            </a>
            <p className="mt-4 text-sm text-[#525252]">Gratis · Segera hadir</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <KahadeMark className="h-8 w-8" />
          <p className="text-sm text-[#525252]">© 2026 Kahade</p>
        </div>
        <nav aria-label="Tautan footer" className="flex items-center gap-6">
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center text-sm text-[#525252] transition-colors hover:text-black"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center text-sm text-[#525252] transition-colors hover:text-black"
          >
            Syarat &amp; Ketentuan
          </a>
        </nav>
      </div>
    </footer>
  );
}
