"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { homeAnchors, supportLinks } from "@/lib/site";

const PRESETS = [
  { label: "Rp 100rb", val: 100_000 },
  { label: "Rp 500rb", val: 500_000 },
  { label: "Rp 1jt", val: 1_000_000 },
  { label: "Rp 5jt", val: 5_000_000 },
  { label: "Rp 10jt", val: 10_000_000 },
  { label: "Rp 50jt", val: 50_000_000 },
];

const COMPARE_ROWS = [
  { label: "Biaya bulanan", kahade: "Tidak wajib", other: "Bervariasi" },
  { label: "Biaya setup", kahade: "Tidak wajib", other: "Bervariasi" },
  { label: "Fee per transaksi", kahade: "Mulai 2,5%", other: "Bervariasi" },
  { label: "Fee minimum", kahade: "Mulai Rp 2.500", other: "Bervariasi" },
  { label: "Fee maksimum", kahade: "Hingga Rp 250rb", other: "Bervariasi" },
  { label: "API access", kahade: "Tersedia", other: "Tergantung paket" },
  { label: "Dispute handling", kahade: "Tersedia", other: "Bervariasi" },
];

const FEATURES = [
  "Tanpa biaya pendaftaran",
  "Tanpa komitmen bulanan",
  "Biaya ditampilkan di awal transaksi",
  "Dispute tidak dikenakan tarif tambahan",
  "API tersedia untuk integrasi",
  "Harga custom untuk volume besar",
];

const FEE_PCT = 0.025;
const FEE_MIN = 2500;
const FEE_MAX = 250000;
const SLIDER_MAX = 100_000_000;

function calcFee(amount: number) {
  const raw = amount * FEE_PCT;
  return Math.max(FEE_MIN, Math.min(FEE_MAX, raw));
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("id-ID");
}

export default function PricingSection() {
  const [amount, setAmount] = useState(1_000_000);
  const [rawInput, setRawInput] = useState("1000000");

  const fee = useMemo(() => calcFee(amount), [amount]);
  const net = Math.max(0, amount - fee);
  const percent = amount > 0 ? ((fee / amount) * 100).toFixed(2) : "0.00";

  const onAmountChange = (next: number) => {
    const safe = Math.max(0, Math.min(SLIDER_MAX, next));
    setAmount(safe);
    setRawInput(String(safe));
  };

  return (
    <section id="harga" className="section-shell section-shell-muted">
      <div className="section-inner">
        <div className="section-heading center">
          <span className="section-kicker">Harga</span>
          <h2 className="section-title max-w-[12ch] text-center">Biaya yang jelas, tanpa terasa seperti tabel yang berantakan.</h2>
          <p className="section-lead max-w-[58ch] text-center">Fokus utama Kahade sederhana: buyer dan seller tahu berapa biaya layanan sejak awal, tanpa setup fee, tanpa komitmen bulanan, dan tanpa susunan pricing yang membingungkan.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <article className="surface-card-dark card-pad card-stack text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="section-kicker-dark">Fee calculator</span>
                <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-white">Simulasikan biaya transaksi</h3>
              </div>
              <div className="meta-chip-dark">Mulai 2,5%</div>
            </div>

            <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-5">
              <label htmlFor="amount-input" className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/35">Nilai transaksi</label>
              <div className="mt-3 rounded-[18px] border border-white/[0.1] bg-white/[0.05] px-4 py-4">
                <div className="mb-2 text-sm text-white/45">Masukkan nominal</div>
                <div className="flex items-center gap-2 text-[30px] font-bold tracking-[-0.05em] text-white">
                  <span className="text-[16px] text-white/35">Rp</span>
                  <input
                    id="amount-input"
                    inputMode="numeric"
                    value={rawInput.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    onChange={(e) => {
                      const clean = e.target.value.replace(/\D/g, "");
                      setRawInput(clean);
                      onAmountChange(Number(clean || 0));
                    }}
                    className="w-full bg-transparent outline-none placeholder:text-white/18"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => onAmountChange(preset.val)}
                    className={`rounded-[14px] border px-3 py-2 text-xs font-semibold transition ${amount === preset.val ? "border-white/28 bg-white/12 text-white" : "border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/[0.08]"}`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <input type="range" min={0} max={SLIDER_MAX} step={50_000} value={amount} onChange={(e) => onAmountChange(Number(e.target.value))} className="w-full accent-white" />
              </div>
            </div>

            <div className="stat-grid cols-3">
              <div className="stat-card dark">
                <div className="stat-value">Rp {fmt(fee)}</div>
                <div className="stat-label">Estimasi biaya layanan</div>
              </div>
              <div className="stat-card dark">
                <div className="stat-value">Rp {fmt(net)}</div>
                <div className="stat-label">Estimasi dana diterima penjual</div>
              </div>
              <div className="stat-card dark">
                <div className="stat-value">{percent}%</div>
                <div className="stat-label">Persentase efektif untuk nominal ini</div>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">Kenapa struktur ini terasa lebih rapi?</p>
                <span className="small-meta-dark">Bayar saat berhasil</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 rounded-[16px] border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-sm text-white/72">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/75" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="surface-card card-pad card-stack">
              <span className="section-kicker">Struktur utama</span>
              <h3 className="m-0 text-[28px] font-semibold tracking-[-0.04em] text-black">Pricing difokuskan pada tiga hal inti.</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Fokus utama",
                    body: "Nominal transaksi dan fee layanan selalu tampil lebih dulu agar pengguna cepat memahami konteks biaya.",
                  },
                  {
                    title: "Fokus kedua",
                    body: "Prinsip harga dan benefit operasional dijelaskan tanpa menambah sub-layout yang saling berebut perhatian.",
                  },
                  {
                    title: "Pendukung",
                    body: "Perbandingan ringkas membantu memberi konteks tanpa membuat section terasa seperti spreadsheet yang ditempel ke landing page.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[18px] border border-black/[0.07] bg-black/[0.02] px-4 py-4">
                    <div className="text-[15px] font-semibold tracking-[-0.02em] text-black">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-black/55">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="button-group">
                <Link href={homeAnchors.cta} className="btn-primary btn-sm">Mulai transaksi</Link>
                <Link href={supportLinks.contact} className="btn-secondary btn-sm">Hubungi tim</Link>
              </div>
            </article>

            <article className="surface-card-soft overflow-hidden">
              <div className="card-pad pb-0">
                <span className="section-kicker">Perbandingan singkat</span>
                <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.04em] text-black">Kahade dibuat lebih mudah dipahami sejak awal.</h3>
                <p className="mt-3 text-sm leading-7 text-black/55">Tabel ini tidak mencoba membandingkan semua hal. Fokusnya hanya pada area pricing yang paling sering membingungkan pengguna baru.</p>
              </div>
              <div className="mt-5 overflow-hidden border-t border-black/[0.07]">
                <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-black/[0.04] text-[11px] font-bold uppercase tracking-[0.14em] text-black/42">
                  <div className="px-4 py-3">Area</div>
                  <div className="px-4 py-3 text-center text-black">Kahade</div>
                  <div className="px-4 py-3 text-center">Lainnya</div>
                </div>
                {COMPARE_ROWS.map((row) => (
                  <div key={row.label} className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-black/[0.06] text-sm">
                    <div className="px-4 py-4 font-medium text-black/58">{row.label}</div>
                    <div className="px-4 py-4 text-center font-semibold tracking-[-0.02em] text-black">{row.kahade}</div>
                    <div className="px-4 py-4 text-center text-black/45">{row.other}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
