import { Check } from "@/lib/icons";

const STEPS = [
  { t: "Dana diamankan", d: "Aman di Kahade", state: "done" },
  { t: "Barang dikirim", d: "Resi tercatat", state: "done" },
  { t: "Konfirmasi terima", d: "Menunggu kamu", state: "active" },
  { t: "Dana cair", d: "Ke penjual setelah konfirmasi", state: "todo" },
] as const;

/** Tampilan contoh layar status transaksi (ilustrasi alur perlindungan). */
export function ProtectionScreen() {
  return (
    <div className="flex h-full flex-col bg-surface px-4 pb-5 text-fg">
      <div className="pt-3">
        <p className="text-[15px] font-bold">Status transaksi</p>
        <p className="text-[12px] text-fg-muted">Contoh produk</p>
      </div>
      <div className="mt-4 rounded-[18px] bg-black p-4 text-white">
        <p className="text-[11px] font-medium text-white/70">Dana diamankan</p>
        <p className="mt-1 text-[24px] font-bold tracking-[-0.02em] tabular-nums">Rp250.000</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[62%] rounded-full bg-white" />
        </div>
      </div>
      <ol className="mt-4">
        {STEPS.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <span className="flex flex-col items-center">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  s.state === "done"
                    ? "bg-black text-white"
                    : s.state === "active"
                      ? "border-2 border-black bg-surface"
                      : "bg-surface-2"
                }`}
              >
                {s.state === "done" ? (
                  <Check weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <span className={`h-2 w-2 rounded-full ${s.state === "active" ? "bg-black" : "bg-line-control"}`} />
                )}
              </span>
              {i < STEPS.length - 1 && (
                <span className={`my-1 w-px flex-1 ${s.state === "done" ? "bg-black" : "bg-line-strong"}`} />
              )}
            </span>
            <div className="pb-4">
              <p className={`text-[13px] font-semibold ${s.state === "todo" ? "text-fg-muted" : "text-fg"}`}>{s.t}</p>
              <p className="text-[11px] text-fg-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-auto rounded-full bg-black py-3 text-center text-[13px] font-semibold text-white">
        Konfirmasi barang diterima
      </div>
    </div>
  );
}
