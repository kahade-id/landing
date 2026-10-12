import { Section, SectionHeader } from "@kahade/ui";
import { Check, Minus, X } from "@/lib/icons";

type CellStatus = "check" | "minus" | "x";

const ROWS: {
  aspect: string;
  mp: { status: CellStatus; text: string };
  manual: { status: CellStatus; text: string };
  kahade: string;
}[] = [
  {
    aspect: "Etalase produk",
    mp: { status: "check", text: "Katalog toko" },
    manual: { status: "minus", text: "Foto dikirim via chat" },
    kahade: "Feed seperti media sosial",
  },
  {
    aspect: "Interaksi pembeli",
    mp: { status: "check", text: "Chat & ulasan" },
    manual: { status: "minus", text: "Chat manual" },
    kahade: "Like, komen, share, follow",
  },
  {
    aspect: "Keamanan dana",
    mp: { status: "check", text: "Proteksi pembeli" },
    manual: { status: "minus", text: "Via admin perantara" },
    kahade: "Perlindungan otomatis",
  },
  {
    aspect: "Alur transaksi",
    mp: { status: "check", text: "Dalam satu aplikasi" },
    manual: { status: "x", text: "Chat & dana terpisah" },
    kahade: "Chat terhubung ke pembayaran",
  },
  {
    aspect: "Penyelesaian sengketa",
    mp: { status: "check", text: "CS platform" },
    manual: { status: "minus", text: "Mediasi admin" },
    kahade: "Jalur jelas di aplikasi",
  },
];

const STATUS_LABEL: Record<CellStatus, string> = {
  check: "Tersedia",
  minus: "Sebagian",
  x: "Tidak tersedia",
};

function StatusMark({ status, inverse = false }: { status: CellStatus; inverse?: boolean }) {
  const Glyph = status === "check" ? Check : status === "minus" ? Minus : X;
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        inverse ? "bg-white text-black" : status === "check" ? "bg-fg text-white" : "border border-line-control text-fg-muted"
      }`}
    >
      <Glyph weight="bold" className="h-3 w-3" aria-hidden="true" />
      <span className="sr-only">{STATUS_LABEL[status]}: </span>
    </span>
  );
}

/** Tabel perbandingan tiga pendekatan jual beli online. */
export function Compare() {
  return (
    <Section divider spacing="lg">
      <SectionHeader
        layout="split"
        eyebrow="Perbandingan"
        title="Marketplace, manual, atau Kahade?"
        description="Tiga pendekatan jual beli online yang berbeda. Bandingkan, lalu putuskan mana yang paling pas untukmu."
      />

      {/* Mobile: per aspek, bertumpuk */}
      <ol className="mt-12 border-t border-line md:hidden">
        {ROWS.map((row) => (
          <li key={row.aspect} className="border-b border-line py-6">
            <h3 className="text-h4 text-fg">{row.aspect}</h3>
            <dl className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-control bg-fg px-4 py-3 text-white">
                <dt className="text-small font-semibold">Kahade</dt>
                <dd className="text-right text-small font-medium">{row.kahade}</dd>
              </div>
              {[
                { label: "Marketplace", cell: row.mp },
                { label: "Perantara manual", cell: row.manual },
              ].map(({ label, cell }) => (
                <div key={label} className="flex items-start justify-between gap-4 px-4">
                  <dt className="text-small text-fg-muted">{label}</dt>
                  <dd className="flex items-start gap-2 text-right text-small text-fg-2">
                    {cell.text}
                    <StatusMark status={cell.status} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>

      {/* Tablet & desktop: tabel */}
      <div className="mt-14 hidden md:block lg:mt-20">
        <table className="w-full border-separate border-spacing-0 text-left">
          <caption className="sr-only">Perbandingan marketplace, perantara manual, dan Kahade</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[22%] pb-5 align-bottom">
                <span className="text-small font-semibold text-fg-muted">Aspek</span>
              </th>
              <th scope="col" className="w-[26%] border-b border-fg px-5 pb-5 align-bottom">
                <span className="block text-h4 text-fg">Marketplace</span>
                <span className="mt-1 block text-small font-normal text-fg-muted">Platform jual beli besar</span>
              </th>
              <th scope="col" className="w-[26%] border-b border-fg px-5 pb-5 align-bottom">
                <span className="block text-h4 text-fg">Perantara manual</span>
                <span className="mt-1 block text-small font-normal text-fg-muted">Jasa perantara manual</span>
              </th>
              <th scope="col" className="w-[26%] rounded-t-panel bg-fg px-5 pt-6 pb-5 align-bottom">
                <span className="block text-h4 text-white">Kahade</span>
                <span className="mt-1 block text-small font-normal text-white/70">
                  Social commerce + perlindungan transaksi
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, ri) => {
              const last = ri === ROWS.length - 1;
              return (
                <tr key={row.aspect}>
                  <th
                    scope="row"
                    className={`py-5 pr-5 align-top text-body font-semibold text-fg ${last ? "" : "border-b border-line"}`}
                  >
                    {row.aspect}
                  </th>
                  {[row.mp, row.manual].map((cell, ci) => (
                    <td key={ci} className={`px-5 py-5 align-top ${last ? "" : "border-b border-line"}`}>
                      <span className="flex items-start gap-2.5 text-body text-fg-muted">
                        <StatusMark status={cell.status} />
                        {cell.text}
                      </span>
                    </td>
                  ))}
                  <td
                    className={`bg-fg px-5 py-5 align-top ${last ? "rounded-b-panel" : "border-b border-white/15"}`}
                  >
                    <span className="flex items-start gap-2.5 text-body font-medium text-white">
                      <StatusMark status="check" inverse />
                      {row.kahade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-xl text-caption text-fg-subtle">
        Perbandingan berdasarkan pola umum masing-masing layanan. Detail ketentuan dapat
        berbeda di tiap penyedia.
      </p>
    </Section>
  );
}
