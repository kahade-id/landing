import { Container, Prose, TextLink, Toc } from "@kahade/ui";

/** Isi dokumen legal: daftar isi menempel (desktop) + tipografi baca. */
export function LegalDoc({
  idPrefix,
  sections,
}: {
  idPrefix: string;
  sections: { title: string; body: string[] }[];
}) {
  const toc = sections.map((s, i) => ({ id: `${idPrefix}-${i + 1}`, label: s.title }));
  return (
    <Container className="py-12 sm:py-16 lg:py-20 print:py-0">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:col-span-3 lg:block print:hidden">
          <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-4">
            <Toc items={toc} />
          </div>
        </aside>
        <div className="min-w-0 lg:col-span-8 lg:col-start-5">
          {toc.length > 2 && (
            <Toc items={toc} title="Daftar isi" variant="disclosure" className="mb-10 lg:hidden print:hidden" />
          )}
          <Prose className="max-w-reading">
            {sections.map((s, i) => (
              <section key={s.title} aria-labelledby={toc[i].id}>
                <h2 id={toc[i].id}>{s.title}</h2>
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
            ))}
          </Prose>
          <div className="mt-14 max-w-reading border-t border-line pt-6 print:hidden">
            <p className="text-small text-fg-muted">
              Dokumen resmi Kahade lainnya tersedia di pusat legal.
            </p>
            <TextLink href="https://legal.kahade.id/" arrow="external">
              Buka legal.kahade.id
            </TextLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
