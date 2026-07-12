import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { metiers } from "@/lib/data/metiers";

export const metadata: Metadata = {
  title: "Les métiers",
  description:
    "Menuisiers, électriciens, plombiers-chauffagistes, maçons, peintres, couvreurs, carreleurs, paysagistes : Établi parle votre métier, avec vos unités et vos ouvrages.",
  alternates: { canonical: "/metiers" },
};

const formatNumber = new Intl.NumberFormat("fr-FR");

export default function MetiersPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="eyebrow animate-fade text-lumen-700">Les métiers</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Un logiciel qui connaît la différence entre un ml et un m²
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            Les logiciels généralistes vous font traduire votre métier dans leur
            vocabulaire. Établi fait l&apos;inverse : chaque métier a sa bibliothèque
            d&apos;ouvrages, ses unités, ses taux de TVA et ses usages de facturation.
            Vous vous installez, vous vous reconnaissez.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container width="wide">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metiers.map((metier, i) => (
              <Reveal key={metier.slug} as="li" delay={(i % 3) * 80}>
                <Link
                  href={`/metiers/${metier.slug}`}
                  className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft) transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
                    style={{ backgroundColor: metier.hue, color: metier.hueText }}
                    aria-hidden="true"
                  >
                    {metier.chip}
                  </span>
                  <h2 className="display-md mt-5 text-ink-900">{metier.name}</h2>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                    {metier.tagline}
                  </p>
                  <p className="mt-5 border-t border-line pt-4 text-sm text-ink-500">
                    <strong className="font-semibold text-ink-900">
                      {formatNumber.format(metier.users)}
                    </strong>{" "}
                    {metier.plural} sur Établi
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-center text-[0.9375rem] text-ink-500">
            Votre métier n&apos;y est pas ? Établi fonctionne pour tout le bâtiment —
            les bibliothèques dédiées plaquiste, serrurier-métallier et chauffagiste
            fioul/bois arrivent à l&apos;automne 2026.
          </p>
        </Container>
      </section>
    </>
  );
}
