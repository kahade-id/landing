import type { ReactNode } from "react";
import Image from "next/image";
import { Eyebrow, Reveal, Section, SectionHeader } from "@kahade/ui";
import { Check, Receipt, SealCheck, ShieldCheck } from "@/lib/icons";

function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-panel bg-surface-2">
      {children}
    </div>
  );
}

function FeedVisual() {
  return (
    <Stage>
      <div className="absolute top-[9%] left-1/2 w-[62%] -translate-x-1/2 overflow-hidden rounded-control border border-line bg-surface shadow-lift">
        <Image
          src="/IMG_20261003_200600_623.jpg"
          alt="Tampilan asli etalase produk di feed Kahade dengan tombol suka, komentar, dan bagikan"
          width={1080}
          height={1448}
          sizes="(max-width: 1024px) 60vw, 360px"
          className="h-auto w-full"
        />
      </div>
    </Stage>
  );
}

/** Gelembung chat — meniru UI chat aplikasi (hitam = kamu, abu = lawan bicara). */
function Bubble({ out = false, time, read = false, children }: { out?: boolean; time: string; read?: boolean; children: ReactNode }) {
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] rounded-[14px] px-3.5 pt-2.5 pb-1.5 text-[13px] leading-[1.45] sm:text-[14px] ${
          out ? "bg-fg text-fg-inverse" : "bg-surface-2 text-fg"
        }`}
      >
        <p>{children}</p>
        <p className={`mt-1 flex items-center justify-end gap-1 text-[11px] tabular-nums ${out ? "text-white/45" : "text-fg-subtle"}`}>
          {time}
          {read && <Check weight="bold" className="h-3 w-3" />}
        </p>
      </div>
    </div>
  );
}

/**
 * Chat transaksi, dibangun ulang dari UI chat aplikasi (gelembung, pil
 * tanggal, cap waktu) dengan percakapan jual beli yang relevan: tawar →
 * transaksi dibuat dari chat → dana diamankan.
 */
function ChatVisual() {
  return (
    <Stage>
      <figure className="absolute top-1/2 left-1/2 w-[84%] max-w-[440px] -translate-x-1/2 -translate-y-1/2 space-y-2.5 rounded-control border border-line bg-surface p-4 shadow-lift sm:p-5">
        <figcaption className="sr-only">
          Ilustrasi chat di Kahade: pembeli menanyakan ukuran, penjual membuat transaksi langsung dari chat, dan dana pembeli diamankan.
        </figcaption>
        <p className="mx-auto w-fit rounded-full bg-surface-2 px-3 py-1 text-[11px] text-fg-muted">Hari ini</p>
        <Bubble out time="17:18">Kak, sneakers-nya masih ada ukuran 42?</Bubble>
        <Bubble time="17:20">Masih, kak. Aku buatkan transaksinya di sini ya.</Bubble>
        <div className="flex justify-start">
          <div className="w-[78%] rounded-[14px] border border-line p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-fg-muted">
              <Receipt weight="regular" className="h-3.5 w-3.5" />
              Transaksi dibuat dari chat
            </p>
            <div className="mt-2 flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-semibold text-fg">Sneakers · ukuran 42</p>
              <p className="text-[13px] font-semibold text-fg tabular-nums">Rp450.000</p>
            </div>
            <p className="mt-2.5 flex items-center gap-1.5 border-t border-line pt-2.5 text-[12px] text-fg-2">
              <ShieldCheck weight="regular" className="h-3.5 w-3.5 shrink-0" />
              Dana diamankan sampai barang diterima
            </p>
          </div>
        </div>
        <Bubble out read time="17:26">Sudah kubayar. Ditunggu kirimannya, kak.</Bubble>
      </figure>
    </Stage>
  );
}

function VerifiedVisual() {
  return (
    <Stage>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[76%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-panel border border-line bg-surface p-5 shadow-lift sm:p-6"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fg text-[15px] font-bold text-fg-inverse">
            L
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-[15px] font-semibold text-fg">
              Lemari Thrift
              <SealCheck weight="fill" className="h-4 w-4 text-fg" />
            </p>
            <p className="text-[13px] text-fg-muted">Penjual terverifikasi</p>
          </div>
        </div>
        <div className="mt-5 border-t border-line">
          {["Identitas penjual sudah dicek", "Transaksi lewat Kahade terlindungi"].map((t) => (
            <p key={t} className="flex items-center gap-2.5 border-b border-line py-3 text-[13px] text-fg-2">
              <ShieldCheck weight="regular" className="h-4 w-4 shrink-0 text-fg" />
              {t}
            </p>
          ))}
        </div>
      </div>
    </Stage>
  );
}

const FEATURES = [
  {
    label: "Feed",
    title: "Jualan semudah posting.",
    desc: "Unggah produk ke feed seperti memposting di media sosial. Pembeli menemukanmu lewat interaksi yang natural.",
    points: ["Etalase produk yang visual", "Like, komentar & share", "Follow penjual favorit"],
    visual: <FeedVisual />,
  },
  {
    label: "Chat",
    title: "Semua kesepakatan tercatat.",
    desc: "Tawar menawar, atur pengiriman, dan buat transaksi — dalam satu chat yang terhubung langsung ke pembayaran.",
    points: ["Riwayat chat tersimpan rapi", "Transaksi dibuat dari chat", "Status pesanan real-time"],
    visual: <ChatVisual />,
  },
  {
    label: "Penjual terverifikasi",
    title: "Kenali penjual sebelum membeli.",
    desc: "Lencana verifikasi membantu kamu mengenali penjual yang identitasnya sudah dicek.",
    points: [],
    visual: <VerifiedVisual />,
  },
];

/** Fitur: baris bergantian teks + visual produk asli, bukan grid kartu. */
export function Features() {
  return (
    <Section id="fitur" spacing="lg" className="scroll-mt-16">
      <SectionHeader
        layout="split"
        eyebrow="Aplikasi"
        title="Satu aplikasi untuk seluruh jual beli."
        description="Feed, chat, dan pembayaran bekerja sebagai satu alur — bukan tiga aplikasi terpisah."
      />

      <div className="mt-16 space-y-20 sm:mt-20 lg:mt-28 lg:space-y-32">
        {FEATURES.map((f, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={f.label} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
                <Eyebrow index={String(i + 1).padStart(2, "0")}>{f.label}</Eyebrow>
                <h3 className="mt-5 max-w-[14ch] text-h2 text-fg">{f.title}</h3>
                <p className="mt-5 max-w-md text-body-lg text-fg-muted">{f.desc}</p>
                {f.points.length > 0 && (
                  <ul className="mt-8 max-w-md border-t border-line">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 border-b border-line py-3.5 text-body text-fg-2">
                        <Check weight="bold" className="h-4 w-4 shrink-0 text-fg" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Reveal className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:col-start-7"}`}>
                {f.visual}
              </Reveal>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
