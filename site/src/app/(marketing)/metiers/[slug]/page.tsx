import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { metiers, getMetier } from "@/lib/data/metiers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return metiers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metier = getMetier(slug);
  if (!metier) return {};
  return {
    title: `Établi pour les ${metier.plural}`,
    description: `${metier.tagline} Bibliothèque d'ouvrages dédiée, devis en 10 minutes, acompte encaissé à la signature. Essai 30 jours gratuit.`,
    alternates: { canonical: `/metiers/${metier.slug}` },
  };
}

const formatNumber = new Intl.NumberFormat("fr-FR");

export default async function MetierPage({ params }: Props) {
  const { slug } = await params;
  const metier = getMetier(slug);
  if (!metier) notFound();

  const others = metiers.filter((m) => m.slug !== metier.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-sm text-ink-500">
              <Link href="/metiers" className="hover:text-ink-900 hover:underline">Métiers</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page" className="text-ink-900">{metier.name}</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
                style={{ backgroundColor: metier.hue, color: metier.hueText }}
                aria-hidden="true"
              >
                {metier.chip}
              </span>
              <h1 className="display-xl text-ink-900">{metier.name}</h1>
            </div>
            <p className="display-md mt-7 text-ink-700">{metier.tagline}</p>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">
              {metier.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/inscription?metier=${metier.slug}`} size="lg">
                Essayer 30 jours gratuitement
              </ButtonLink>
              <ButtonLink href="/demo" variant="outline" size="lg">
                Créer un devis d&apos;essai
              </ButtonLink>
            </div>
          </div>

          <Reveal className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
            <h2 className="eyebrow text-lumen-700">Dans votre bibliothèque de départ</h2>
            <ul className="mt-5 space-y-3">
              {metier.libraryExamples.map((example) => (
                <li key={example} className="flex items-start gap-2.5 border-b border-line pb-3 text-[0.9375rem] text-ink-700">
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-sauge-600" aria-hidden="true">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {example}
                </li>
              ))}
            </ul>
            <figure className="mt-6 rounded-xl bg-sand p-5">
              <blockquote className="font-display text-lg leading-snug text-ink-900">
                « {metier.painPoint} »
              </blockquote>
              <figcaption className="mt-2 text-sm text-ink-600">
                Ce qu&apos;on entend le plus souvent — et ce qu&apos;Établi corrige en premier.
              </figcaption>
            </figure>
            <p className="mt-5 text-sm text-ink-500">
              <strong className="font-semibold text-ink-900">{formatNumber.format(metier.users)}</strong>{" "}
              {metier.plural} travaillent déjà avec Établi.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="display-lg text-ink-900">Ce qui change, concrètement</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Semaine 1",
                title: "Vos prix entrent une bonne fois",
                text: "Vous partez de la bibliothèque pré-remplie de votre métier et vous l'ajustez à vos tarifs. Une soirée suffit — c'est la dernière que la paperasse vous prend.",
              },
              {
                phase: "Semaine 2 à 4",
                title: "Les devis partent le jour même",
                text: "Visite le matin, devis à midi, signature dans la semaine. Le suivi « envoyé / vu / signé » vous dit qui rappeler, et la relance douce s'occupe des silencieux.",
              },
              {
                phase: "Mois 2 et après",
                title: "La trésorerie cesse d'être une angoisse",
                text: "Acomptes encaissés à la signature, situations facturées à l'avancement, retards relancés automatiquement. Vous savez chaque matin qui vous doit quoi.",
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
          <h2 className="display-md text-ink-900">Voir d&apos;autres métiers</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/metiers/${o.slug}`}
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
