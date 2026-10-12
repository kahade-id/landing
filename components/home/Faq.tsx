import { Accordion, Section, SectionHeader, TextLink } from "@kahade/ui";
import { faqJsonLd, JsonLd } from "@/components/site/JsonLd";

const FAQS = [
  {
    q: "Apakah Kahade aman?",
    a: "Ya. Setiap transaksi di Kahade berjalan dalam sistem pembayaran yang aman — dana pembeli diamankan sampai pembeli mengonfirmasi barang diterima sesuai kesepakatan, baru diteruskan ke penjual.",
  },
  {
    q: "Bagaimana cara kerja Kahade?",
    a: "Pilih barang di feed seperti scroll media sosial, bayar lewat aplikasi dengan tombol “Beli via Kahade”, penjual mengirim barang, dan dana diteruskan ke penjual setelah kamu mengonfirmasi penerimaan.",
  },
  {
    q: "Berapa biaya transaksi di Kahade?",
    a: "Biaya transaksi 2,5% per transaksi, dengan minimum Rp2.500 dan maksimum Rp250.000. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Kapan Kahade diluncurkan?",
    a: "Kahade ditargetkan meluncur pada 8 Desember 2026. Unduh aplikasinya agar menjadi yang pertama tahu saat kami resmi meluncur.",
  },
  {
    q: "Apa itu Kahade Plus?",
    a: "Kahade Plus adalah langganan premium Rp99.000 per bulan atau Rp899.000 per tahun — dapat potongan 50% biaya transaksi, prioritas layanan pelanggan, dan badge Plus.",
  },
  {
    q: "Bagaimana cara jualan di Kahade?",
    a: "Buat akun, unggah foto produk ke feed seperti memposting di media sosial, atur harga, dan mulai terima pesanan. Seluruh proses transaksi berjalan di dalam aplikasi.",
  },
];

/** FAQ: judul kiri menempel, accordion kanan. JSON-LD FAQPage. */
export function Faq() {
  return (
    <Section id="faq" tone="muted" spacing="lg" className="scroll-mt-16">
      <JsonLd data={faqJsonLd(FAQS)} />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan." />
            <p className="mt-6 text-body text-fg-muted">Belum menemukan jawabanmu?</p>
            <TextLink href="https://bantuan.kahade.id/faq" arrow="external">
              Kunjungi pusat bantuan
            </TextLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion
            size="lg"
            items={FAQS.map((f, i) => ({ id: `faq-${i + 1}`, title: f.q, content: f.a }))}
          />
        </div>
      </div>
    </Section>
  );
}
