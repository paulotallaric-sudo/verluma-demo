import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { languages } from "@/lib/data/languages";

export const metadata: Metadata = {
  title: "Les 10 langues",
  description:
    "Anglais, espagnol, italien, allemand, portugais, japonais, français — et les langues d'héritage que personne d'autre n'enseigne sérieusement : l'occitan et le basque.",
  alternates: { canonical: "/langues" },
};

const formatNumber = new Intl.NumberFormat("fr-FR");

export default function LanguesPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="eyebrow animate-fade text-lumen-700">Le catalogue</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Dix langues. Chacune avec ses voix, jamais un doublage.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            Chaque parcours est écrit pour sa langue — pas traduit d&apos;un tronc commun —
            et enregistré par des comédiens natifs de la région. C&apos;est plus lent à
            produire. C&apos;est aussi pour cela que ça fonctionne.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container width="wide">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang, i) => (
              <Reveal key={lang.slug} as="li" delay={(i % 3) * 80}>
                <Link
                  href={`/langues/${lang.slug}`}
                  className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft) transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
                      style={{ backgroundColor: lang.hue, color: lang.hueText }}
                      aria-hidden="true"
                    >
                      {lang.chip}
                    </span>
                    {lang.heritage && <Badge tone="lumen">Langue d&apos;héritage</Badge>}
                  </div>
                  <h2 className="display-md mt-5 text-ink-900">{lang.name}</h2>
                  <p className="mt-0.5 text-sm text-ink-500">{lang.nativeName}</p>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                    {lang.tagline}
                  </p>
                  <dl className="mt-5 flex gap-5 border-t border-line pt-4 text-sm text-ink-500">
                    <div>
                      <dt className="sr-only">Apprenants</dt>
                      <dd>
                        <strong className="font-semibold text-ink-900">{formatNumber.format(lang.learners)}</strong> apprenants
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Unités</dt>
                      <dd>
                        <strong className="font-semibold text-ink-900">{lang.units}</strong> unités
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Heures d&apos;audio</dt>
                      <dd>
                        <strong className="font-semibold text-ink-900">{lang.hoursOfAudio} h</strong> de studio
                      </dd>
                    </div>
                  </dl>
                </Link>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-center text-[0.9375rem] text-ink-500">
            Une langue vous manque ? Les apprenants votent pour la prochaine depuis leur tableau de bord —
            breton, alsacien et corse sont en tête du scrutin 2026.
          </p>
        </Container>
      </section>
    </>
  );
}
