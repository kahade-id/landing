import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const steps = [
  { title: "Buat transaksi", desc: "Buyer dan seller menyepakati nominal, jadwal, dan syarat." },
  { title: "Dana ditahan", desc: "Dana buyer diamankan sementara hingga kewajiban seller selesai." },
  { title: "Verifikasi selesai", desc: "Setelah barang/jasa tervalidasi, dana dilepas ke seller." },
];

export default function HowItWorksSection() {
  return (
    <Section id="cara-kerja">
      <Container>
        <Stack gap="6" className="mx-auto max-w-5xl">
          <Heading as="h2" size="h2" className="text-center">Cara kerja dalam 3 langkah</Heading>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="card-standard stack-3">
                <Text variant="caption" className="text-black/40">0{index + 1}</Text>
                <Heading as="h3" size="h5">{step.title}</Heading>
                <Text variant="body-sm" className="text-black/60">{step.desc}</Text>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
