import { Reveal } from "./Reveal";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-40">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-black/10 bg-[#F3F4F6] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#525252]">
              Segera hadir
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl lg:text-[4.4rem]">
              Jual beli di feed,
              <br />
              aman dengan escrow.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#525252]">
              Kahade memadukan serunya social commerce dengan perlindungan
              escrow di setiap transaksi.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9">
              <a
                href="#download"
                className="btn-press inline-flex min-h-[56px] items-center rounded-full bg-black px-9 text-base font-semibold text-white"
              >
                Download Kahade
              </a>
              <p className="mt-4 text-sm text-[#525252]">Gratis · Segera hadir</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:justify-self-end">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
