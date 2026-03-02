import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const points = [
  "Buyer takut dana hilang sebelum barang diterima.",
  "Seller khawatir barang dikirim tanpa pembayaran valid.",
  "Transaksi manual sulit diaudit dan rawan sengketa.",
];

export default function ProblemSection() {
  return (
    <Section id="platform" className="bg-[var(--color-muted)]">
      <Container>
        <div className="mx-auto max-w-4xl stack-6">
          <Stack gap="4">
            <Heading as="h2" size="h2">Kenapa escrow dibutuhkan?</Heading>
            <Text variant="body" className="text-black/60">Alur escrow menyelaraskan kepercayaan buyer dan seller dengan aturan pelepasan dana yang objektif.</Text>
          </Stack>
          <ul className="grid gap-4 md:grid-cols-3">
            {points.map((point) => (
              <li key={point} className="card-standard">
                <Text variant="body">{point}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
