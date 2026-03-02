import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/primitives/Container";
import Heading from "@/components/primitives/Heading";
import Section from "@/components/primitives/Section";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";

interface SimplePageProps {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  detailTitle?: string;
  detailBody?: string;
}

export default function SimplePage({ eyebrow, title, description, points = [], detailTitle, detailBody }: SimplePageProps) {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section>
          <Container>
            <div className="mx-auto max-w-4xl stack-6">
              <Stack gap="4">
                {eyebrow ? <Text variant="caption" className="uppercase tracking-wide text-black/40">{eyebrow}</Text> : null}
                <Heading as="h1" size="h1">{title}</Heading>
                <Text variant="body-lg" className="text-black/60">{description}</Text>
              </Stack>
              {(points.length > 0 || detailTitle || detailBody) && (
                <div className="grid gap-6 md:grid-cols-2">
                  {points.length > 0 && (
                    <ul className="stack-3">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                          <Text variant="body">{point}</Text>
                        </li>
                      ))}
                    </ul>
                  )}
                  {(detailTitle || detailBody) && (
                    <Stack gap="3">
                      {detailTitle ? <Heading as="h2" size="h4">{detailTitle}</Heading> : null}
                      {detailBody ? <Text variant="body" className="text-black/60">{detailBody}</Text> : null}
                    </Stack>
                  )}
                </div>
              )}
              <div className="border-t border-black/10 pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/" className="btn-primary">Mulai Sekarang</Link>
                  <Link href="/contact" className="btn-secondary">Hubungi Kami</Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
