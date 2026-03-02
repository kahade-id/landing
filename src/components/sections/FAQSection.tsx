import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const faqs = [
  { q: "Kapan dana dilepas?", a: "Dana dilepas setelah buyer mengonfirmasi transaksi selesai atau periode verifikasi berakhir sesuai syarat." },
  { q: "Berapa lama verifikasi akun?", a: "Rata-rata kurang dari 1 hari kerja untuk akun personal dengan dokumen lengkap." },
  { q: "Apakah tersedia API?", a: "Ya, tersedia endpoint transaksi, webhook status, dan dokumentasi integrasi untuk tim teknis." },
];

export default function FAQSection() {
  return (
    <Section id="faq">
      <Container>
        <Stack gap="6" className="mx-auto max-w-4xl">
          <Heading as="h2" size="h2" className="text-center">Pertanyaan umum</Heading>
          <div className="stack-4">
            {faqs.map((item) => (
              <article key={item.q} className="card-standard stack-3">
                <Heading as="h3" size="h6">{item.q}</Heading>
                <Text variant="body-sm" className="text-black/60">{item.a}</Text>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
