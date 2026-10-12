import { Container, Reveal, SectionHeader } from "@kahade/ui";
import { Phone } from "./Phone";
import { ProtectionScreen } from "./ProtectionScreen";

const STEPS = [
  { title: "Chat & sepakat", desc: "Tawar-menawar dan sepakati detail barang di chat." },
  { title: "Bayar dengan aman", desc: "Dana diamankan oleh Kahade, bukan langsung ke penjual." },
  { title: "Penjual mengirim", desc: "Penjual mengirim barang sesuai kesepakatan di chat." },
  { title: "Konfirmasi terima", desc: "Periksa barang, lalu konfirmasi penerimaan di aplikasi." },
  { title: "Dana cair", desc: "Setelah konfirmasi, dana diteruskan ke penjual." },
];

/**
 * Cara kerja perlindungan transaksi — seksi gelap: judul + layar status
 * menempel di kiri, lima langkah bernomor di kanan.
 */
export function HowItWorks() {
  return (
    <section id="cara-kerja" className="scroll-mt-16 bg-surface-inverse text-white">
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                inverse
                eyebrow="Cara kerja"
                title="Lima langkah, semua terlindungi."
                description="Alurnya sederhana — kamu selalu tahu danamu ada di mana."
              />
              <div className="mt-14 hidden w-[292px] lg:block">
                <Phone onDark>
                  <ProtectionScreen />
                </Phone>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t border-white/15 last:border-b">
                <Reveal
                  delay={i * 70}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 py-8 sm:grid-cols-[5rem_1fr] sm:py-10"
                >
                  <span className="text-h3 tabular-nums text-white/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-h3 text-white">{s.title}</h3>
                    <p className="mt-2 max-w-md text-body-lg text-white/70">{s.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mx-auto w-[264px] sm:w-[292px] lg:hidden">
            <Phone onDark>
              <ProtectionScreen />
            </Phone>
          </div>
        </div>
      </Container>
    </section>
  );
}
