import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const tiers = [
  { name: "Starter", fee: "1.9%", desc: "Untuk transaksi personal volume ringan." },
  { name: "Business", fee: "1.5%", desc: "Untuk seller aktif dan UMKM." },
  { name: "Enterprise", fee: "Custom", desc: "Untuk marketplace dan integrasi API." },
];

export default function PricingSection() {
  return (
    <Section id="harga" className="bg-[var(--color-muted)]">
      <Container>
        <Stack gap="6">
          <Stack gap="4" className="mx-auto max-w-3xl text-center">
            <Heading as="h2" size="h2">Biaya transparan tanpa kejutan</Heading>
            <Text variant="body" className="text-black/60">Semua paket memakai alur keamanan dan dukungan yang sama.</Text>
          </Stack>
          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className="card-standard stack-4">
                <Heading as="h3" size="h5">{tier.name}</Heading>
                <p className="text-h3">{tier.fee}</p>
                <Text variant="body-sm" className="text-black/60">{tier.desc}</Text>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
