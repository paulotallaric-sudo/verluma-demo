import { Container } from "@/components/ui/Container";

type Section = { title: string; paragraphs: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <article className="py-14 sm:py-20">
      <Container width="narrow">
        <p className="eyebrow text-lumen-700">Informations légales</p>
        <h1 className="display-xl mt-3 text-ink-900">{title}</h1>
        <p className="mt-3 text-sm text-ink-500">Dernière mise à jour : {updated}</p>
        {intro && <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-700">{intro}</p>}
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="display-md text-ink-900">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-[0.9375rem] leading-relaxed text-ink-600">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 rounded-(--radius-card) bg-sand p-5 text-sm leading-relaxed text-ink-600">
          Ce site est une démonstration : Établi SAS, ses coordonnées et les
          traitements décrits ici sont présentés à titre d&apos;exemple réaliste et ne
          constituent pas des documents contractuels en vigueur.
        </p>
      </Container>
    </article>
  );
}
