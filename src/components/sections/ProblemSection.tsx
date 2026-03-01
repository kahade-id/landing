"use client";

const riskItems = [
  {
    title: "Dana berpindah terlalu cepat",
    body: "Tanpa escrow, pembeli harus percaya penuh sebelum barang atau jasa benar-benar diterima.",
  },
  {
    title: "Status transaksi tidak jelas",
    body: "Riwayat persetujuan, pengiriman, dan konfirmasi sering tercecer di chat atau kanal lain.",
  },
  {
    title: "Sengketa sulit dibuktikan",
    body: "Ketika muncul masalah, bukti dan timeline transaksi tidak terkumpul dalam satu alur yang rapi.",
  },
  {
    title: "Kepercayaan dibangun manual",
    body: "Buyer dan seller harus mengandalkan reputasi personal, bukan sistem yang memberi proteksi nyata.",
  },
];

const solutionItems = [
  {
    title: "Dana ditahan sampai syarat terpenuhi",
    body: "Pelepasan dana mengikuti milestone transaksi, bukan asumsi atau tekanan salah satu pihak.",
  },
  {
    title: "Status tercatat dalam satu alur",
    body: "Kesepakatan, bukti, progress, hingga keputusan akhir tersusun lebih mudah ditinjau.",
  },
  {
    title: "Buyer dan seller melihat hal yang sama",
    body: "Tidak ada langkah tersembunyi. Semua pihak mendapat visibilitas yang konsisten terhadap transaksi.",
  },
  {
    title: "Trust dibantu oleh sistem",
    body: "Kahade membantu transaksi terasa lebih formal, lebih rapi, dan lebih bisa dipertanggungjawabkan.",
  },
];

const visualSteps = [
  "Kesepakatan dibuat",
  "Dana masuk escrow",
  "Pengiriman berjalan",
  "Konfirmasi diterima",
  "Dana dilepas",
];

export default function ProblemSection() {
  return (
    <section id="platform" className="section-shell section-shell-muted">
      <div className="section-inner">
        <div className="section-heading center">
          <span className="section-kicker">Mengapa escrow penting</span>
          <h2 className="section-title max-w-[13ch] text-center">
            Satu alur yang tenang untuk transaksi yang lebih serius.
          </h2>
          <p className="section-lead max-w-[60ch] text-center">
            Kahade menjaga problem utama transaksi online tetap sederhana: siapa memegang dana, kapan dana bergerak, dan apa yang terjadi jika hasil transaksi belum sesuai.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)_minmax(0,1fr)] lg:items-start">
          <article className="surface-card-soft card-pad card-stack">
            <div className="flex items-center justify-between gap-4">
              <span className="meta-chip">Tanpa escrow</span>
              <span className="text-sm font-semibold text-black/36">Risiko utama</span>
            </div>
            <div className="divider-soft" />
            <div className="space-y-3">
              {riskItems.map((item, index) => (
                <div key={item.title} className="rounded-[18px] border border-black/[0.07] bg-white px-4 py-4">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/26">0{index + 1}</span>
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-black">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-black/55">{item.body}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="surface-card card-pad card-stack lg:sticky lg:top-28">
            <div className="flex items-center justify-between gap-3">
              <span className="meta-chip">Alur Kahade</span>
              <span className="text-sm font-semibold text-black/36">Escrow workflow</span>
            </div>
            <div className="rounded-[22px] border border-black/[0.08] bg-[radial-gradient(circle_at_top,rgba(10,10,10,0.05),transparent_42%),linear-gradient(180deg,#fff_0%,#fafaf8_100%)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/36">Transaksi aktif</p>
                  <p className="mt-2 text-[28px] font-bold tracking-[-0.05em] text-black">Dana di escrow</p>
                </div>
                <div className="meta-chip min-h-[28px] bg-black text-white border-transparent">Live</div>
              </div>

              <div className="space-y-3">
                {visualSteps.map((step, index) => {
                  const active = index === 2;
                  const done = index < 2;
                  return (
                    <div key={step} className="flex items-center gap-3 rounded-[16px] border border-black/[0.06] bg-white/85 px-4 py-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${done ? "bg-black text-white" : active ? "bg-black/10 text-black" : "border border-black/14 bg-white text-black/36"}`}>
                        {done ? "✓" : index + 1}
                      </div>
                      <span className={`flex-1 text-sm ${active ? "font-semibold text-black" : done ? "text-black/38 line-through" : "text-black/48"}`}>{step}</span>
                      {active ? <span className="meta-chip min-h-[24px] px-2 text-[9px]">Sedang berjalan</span> : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="small-meta">Dengan escrow, trust tidak bergantung pada janji lisan saja. Sistem membantu kedua pihak melihat titik yang sama sebelum dana bergerak.</p>
          </div>

          <article className="surface-card-dark card-pad card-stack text-white">
            <div className="flex items-center justify-between gap-4">
              <span className="meta-chip-dark">Dengan Kahade</span>
              <span className="text-sm font-semibold text-white/38">Yang berubah</span>
            </div>
            <div className="divider-soft dark" />
            <div className="space-y-3">
              {solutionItems.map((item, index) => (
                <div key={item.title} className="rounded-[18px] border border-white/[0.08] bg-white/[0.04] px-4 py-4">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/28">0{index + 1}</span>
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-white/62">{item.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
