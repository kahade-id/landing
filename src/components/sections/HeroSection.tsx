import Link from "next/link";
import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";
import { homeAnchors } from "@/lib/site";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Stack gap="4">
            <Text variant="caption" className="uppercase tracking-wide text-black/40">Platform Escrow P2P Indonesia</Text>
            <Heading as="h1" size="h1">Transaksi online lebih aman, rapi, dan terkendali.</Heading>
            <Text variant="body-lg" className="text-black/60">Kahade menahan dana sampai kedua pihak sepakat. Semua status transaksi terlihat jelas untuk buyer dan seller.</Text>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href={homeAnchors.cta} className="btn-primary">Mulai Transaksi</Link>
              <Link href={homeAnchors.howItWorks} className="btn-secondary">Lihat Cara Kerja</Link>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
