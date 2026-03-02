import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const features = [
  "KYC terstruktur untuk akun personal dan bisnis.",
  "Audit trail di setiap perubahan status transaksi.",
  "Review sengketa berbasis bukti dan timeline.",
];

export default function SecuritySection() {
  return (
    <Section id="keamanan" className="bg-black text-white">
      <Container>
        <Stack gap="6" className="mx-auto max-w-4xl">
          <Stack gap="4" className="text-center">
            <Heading as="h2" size="h2">Keamanan berlapis, tetap sederhana</Heading>
            <Text variant="body" className="text-white/70">Semua fitur utama tetap monochrome dan fokus pada kejelasan status.</Text>
          </Stack>
          <ul className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <li key={feature} className="rounded-2xl border border-white/20 p-6">
                <Text variant="body-sm" className="text-white/80">{feature}</Text>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Section>
  );
}
