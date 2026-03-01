"use client";

const testimonials = [
  {
    id: 1,
    name: "Arief Wicaksono",
    role: "Pedagang Online",
    location: "Jakarta",
    avatar: "AW",
    amount: "Rp 18.5jt",
    tag: "Seller",
    text: "Sudah 3 tahun jualan online, baru sekarang bisa tidur tenang. Dana masuk ke escrow dulu, barang saya kirim, begitu pembeli konfirmasi baru cair.",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Pengusaha UMKM",
    location: "Surabaya",
    avatar: "SR",
    amount: "Rp 47.2jt",
    tag: "Verified merchant",
    text: "Prosesnya terasa jauh lebih tertib. Buyer lebih percaya, saya juga punya alur yang jelas ketika transaksi bernilai besar mulai berjalan.",
    featured: true,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Freelancer UI/UX",
    location: "Bandung",
    avatar: "BS",
    amount: "Rp 12jt",
    tag: "Buyer",
    text: "Kalau ada masalah, dana tidak langsung cair. Peace of mind-nya kerasa sekali saat beli barang second bernilai tinggi.",
  },
  {
    id: 4,
    name: "Diana Putri",
    role: "Content Creator",
    location: "Yogyakarta",
    avatar: "DP",
    amount: "Rp 8.3jt",
    tag: "Seller",
    text: "Sekarang buyer lebih percaya karena alurnya profesional. Saya tidak perlu lagi menjelaskan trust secara manual di awal percakapan.",
  },
  {
    id: 5,
    name: "Reza Pratama",
    role: "Importir Elektronik",
    location: "Medan",
    avatar: "RP",
    amount: "Rp 280jt",
    tag: "Enterprise",
    text: "Integrasinya rapi dan tim teknisnya mudah diajak bicara. Cocok untuk volume transaksi yang lebih serius.",
  },
  {
    id: 6,
    name: "Mega Lestari",
    role: "Reseller Fashion",
    location: "Semarang",
    avatar: "ML",
    amount: "Rp 3.8jt",
    tag: "Buyer",
    text: "Pertama kali beli dari reseller yang belum saya kenal, tapi escrow membuat prosesnya terasa jauh lebih aman dan profesional.",
  },
];

const marqueeItems = [...testimonials, ...testimonials];

function Stars({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="12" height="12" viewBox="0 0 12 12" fill={dark ? "rgba(255,255,255,0.9)" : "rgba(10,10,10,0.9)"}>
          <path d="M6 1l1.35 2.75 3.05.45-2.2 2.13.52 3.02L6 7.96 3.28 9.35l.52-3.02-2.2-2.13 3.05-.45L6 1Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item, compact = false }: { item: (typeof testimonials)[number]; compact?: boolean }) {
  const featured = Boolean(item.featured);
  return (
    <article className={`${featured ? "surface-card-dark text-white" : "surface-card"} ${compact ? "min-w-[290px] max-w-[290px]" : "h-full"} card-pad card-stack`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${featured ? "bg-white/12 text-white" : "bg-black text-white"}`}>
            {item.avatar}
          </div>
          <div>
            <div className={`text-[15px] font-semibold tracking-[-0.02em] ${featured ? "text-white" : "text-black"}`}>{item.name}</div>
            <div className={`text-xs ${featured ? "text-white/55" : "text-black/42"}`}>{item.role} · {item.location}</div>
          </div>
        </div>
        <span className={`${featured ? "meta-chip-dark" : "meta-chip"} min-h-[26px] px-2.5 text-[9px]`}>{item.tag}</span>
      </div>

      <Stars dark={featured} />

      <p className={`text-sm leading-7 ${featured ? "text-white/68" : "text-black/58"}`}>“{item.text}”</p>

      <div className={`mt-auto flex items-center justify-between border-t pt-4 ${featured ? "border-white/10" : "border-black/8"}`}>
        <div>
          <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${featured ? "text-white/34" : "text-black/32"}`}>Nilai transaksi</p>
          <p className={`mt-2 text-[22px] font-bold tracking-[-0.04em] ${featured ? "text-white" : "text-black"}`}>{item.amount}</p>
        </div>
        <span className={`${featured ? "trust-item-dark" : "trust-item"} min-h-[32px] px-3 text-xs`}>Terverifikasi</span>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="section-shell bg-white">
      <div className="section-inner">
        <div className="section-heading center">
          <span className="section-kicker">Kepercayaan pengguna</span>
          <h2 className="section-title max-w-[12ch] text-center">Testimoni dibuat lebih tenang, lebih kredibel, dan tidak terlalu showy.</h2>
          <p className="section-lead max-w-[58ch] text-center">Motion tetap ada sebagai lapisan polish, tetapi fokus utamanya dikembalikan ke cerita pengguna, konteks transaksi, dan sinyal kepercayaan.</p>
        </div>

        <div className="stat-grid cols-3 mb-8">
          <div className="stat-card"><div className="stat-value">24/7</div><div className="stat-label">Status transaksi bisa dipantau lebih konsisten</div></div>
          <div className="stat-card"><div className="stat-value">Buyer & seller</div><div className="stat-label">Keduanya mendapat visibilitas yang sama</div></div>
          <div className="stat-card"><div className="stat-value">Trust-first</div><div className="stat-label">Motion diposisikan sebagai pendukung, bukan pusat perhatian</div></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <TestimonialCard item={testimonials.find((item) => item.featured)!} />

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.filter((item) => !item.featured).slice(0, 2).map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 marquee-mask">
        <div className="marquee-track gap-4 px-4 sm:px-6 lg:px-8">
          {marqueeItems.map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`} item={item} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
