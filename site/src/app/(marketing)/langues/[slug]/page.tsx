import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { languages, getLanguage } from "@/lib/data/languages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return languages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) return {};
  return {
    title: `Apprendre ${lang.withArticle}`,
    description: `${lang.tagline} ${lang.units} unités, ${lang.hoursOfAudio} h de voix studio (${lang.voices.join(", ")}). Méthode Verluma : écoute active et répétition espacée.`,
    alternates: { canonical: `/langues/${lang.slug}` },
  };
}

const formatNumber = new Intl.NumberFormat("fr-FR");

export default async function LanguePage({ params }: Props) {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) notFound();

  const others = languages.filter((l) => l.slug !== lang.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-sm text-ink-500">
              <Link href="/langues" className="hover:text-ink-900 hover:underline">Langues</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page" className="text-ink-900">{lang.name}</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
                style={{ backgroundColor: lang.hue, color: lang.hueText }}
                aria-hidden="true"
              >
                {lang.chip}
              </span>
              <div>
                <h1 className="display-xl text-ink-900">{lang.name}</h1>
                <p className="text-ink-500">{lang.nativeName}</p>
              </div>
              {lang.heritage && <Badge tone="lumen">Langue d&apos;héritage</Badge>}
            </div>
            <p className="display-md mt-7 text-ink-700">{lang.tagline}</p>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">
              {lang.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/inscription?langue=${lang.slug}`} size="lg">
                Commencer {lang.withArticle} gratuitement
              </ButtonLink>
              {lang.slug === "occitan" && (
                <ButtonLink href="/demo" variant="outline" size="lg">
                  Essayer la première leçon
                </ButtonLink>
              )}
            </div>
          </div>

          <Reveal className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
            <h2 className="eyebrow text-lumen-700">Le parcours en chiffres</h2>
            <dl className="mt-5 space-y-5">
              {[
                { dt: "Apprenants actifs", dd: formatNumber.format(lang.learners) },
                { dt: "Unités thématiques", dd: String(lang.units) },
                { dt: "Voix studio", dd: `${lang.hoursOfAudio} heures` },
                { dt: "Comédiens", dd: lang.voices.join(" · ") },
              ].map((row) => (
                <div key={row.dt} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-sm text-ink-500">{row.dt}</dt>
                  <dd className="text-right font-semibold text-ink-900">{row.dd}</dd>
                </div>
              ))}
            </dl>
            <figure className="mt-6 rounded-xl bg-sand p-5">
              <blockquote className="font-display text-lg italic leading-snug text-ink-900">
                « {lang.sampleSentence.original} »
              </blockquote>
              <figcaption className="mt-2 text-sm text-ink-600">
                {lang.sampleSentence.translation}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="display-lg text-ink-900">Ce que vous saurez faire</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Semaines 1 à 4",
                title: "Survivre avec élégance",
                text: "Saluer, se présenter, commander, demander son chemin — et comprendre les réponses, ce qui est toute la différence.",
              },
              {
                phase: "Mois 2 à 4",
                title: "Tenir une conversation",
                text: "Raconter votre journée, donner un avis, gérer un imprévu. Le vocabulaire des situations que vous vivrez vraiment.",
              },
              {
                phase: "Mois 5 et au-delà",
                title: "Être vous-même",
                text: "Humour, nuances, registres. Le moment où l'on cesse de traduire dans sa tête — et où la langue devient la vôtre.",
              },
            ].map((stage, i) => (
              <Reveal key={stage.title} delay={i * 80} className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
                <p className="eyebrow text-lumen-700">{stage.phase}</p>
                <h3 className="display-md mt-3 text-ink-900">{stage.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{stage.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-sand/50 py-16">
        <Container>
          <h2 className="display-md text-ink-900">Explorer d&apos;autres langues</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/langues/${o.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 font-medium text-ink-900 transition-colors hover:border-ink-300"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: o.hue, color: o.hueText }}
                    aria-hidden="true"
                  >
                    {o.chip}
                  </span>
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
