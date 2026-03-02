import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

const testimonials = [
  "Alur transaksi jadi jelas, komplain turun signifikan.",
  "Buyer lebih percaya karena dana tidak langsung diteruskan.",
  "Tim operasional kami lebih cepat audit riwayat sengketa.",
];

export default function TestimonialsSection() {
  return (
    <Section id="testimoni">
      <Container>
        <Stack gap="6">
          <Heading as="h2" size="h2" className="text-center">Dipercaya tim operasional dan seller</Heading>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item} className="card-standard">
                <Text variant="body">“{item}”</Text>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
