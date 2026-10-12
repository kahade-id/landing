import { Container, Reveal } from "@kahade/ui";

const PRINCIPLES = [
  { title: "Perlindungan di setiap transaksi", desc: "Dana pembeli aman." },
  { title: "Cair saat barang diterima", desc: "Dana diteruskan setelah konfirmasi." },
  { title: "Jejak transaksi jelas", desc: "Chat & status tercatat rapi." },
  { title: "Sengketa ada jalurnya", desc: "Tim Kahade membantu menengahi." },
];

/** Empat prinsip perlindungan — strip faktual tepat di bawah hero. */
export function Principles() {
  return (
    <section aria-labelledby="prinsip-judul" className="border-b border-line">
      <h2 id="prinsip-judul" className="sr-only">
        Prinsip perlindungan transaksi
      </h2>
      <Container>
        <ol className="grid grid-cols-1 gap-x-8 gap-y-8 py-12 min-[420px]:grid-cols-2 sm:py-14 lg:grid-cols-4 lg:py-16">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 70} className="border-t-2 border-fg pt-5">
                <span className="text-small tabular-nums text-fg-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-h4 text-fg">{p.title}</h3>
                <p className="mt-1.5 text-small text-fg-muted">{p.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
