import Link from "next/link";
import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";
import { supportLinks } from "@/lib/site";

export default function CTASection() {
  return (
    <Section id="mulai" className="bg-[var(--color-muted)]">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <Stack gap="4" className="text-center">
            <Heading as="h2" size="h2">Siap mulai transaksi lebih aman?</Heading>
            <Text variant="body" className="text-black/60">Mulai dengan alur escrow standar, lalu skalakan sesuai kebutuhan bisnis.</Text>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/" className="btn-primary">Mulai Sekarang</Link>
              <Link href={supportLinks.contact} className="btn-secondary">Hubungi Tim</Link>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
