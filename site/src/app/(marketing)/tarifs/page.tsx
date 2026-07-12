import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { plans, pricingFaq } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Découverte gratuit pour toujours, Fluide à 9,90 €/mois, Immersion avec conversation en visio à 19,90 €/mois, offre Équipes dès 5 licences. Sans engagement, essai de 14 jours.",
  alternates: { canonical: "/tarifs" },
};

function PlanCard({ plan, index }: { plan: (typeof plans)[number]; index: number }) {
  return (
    <Reveal
      delay={index * 80}
      className={
        plan.highlighted
          ? "relative flex flex-col rounded-(--radius-card) border-2 border-ink-900 bg-card p-7 shadow-(--shadow-lift)"
          : "flex flex-col rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)"
      }
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-7 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-paper">
          Le plus choisi
        </span>
      )}
      <h2 className="display-md text-ink-900">{plan.name}</h2>
      <p className="mt-1 min-h-10 text-sm leading-snug text-ink-500">{plan.audience}</p>

      <p className="mt-5">
        {plan.price ? (
          <>
            <span className="display-num text-[2.75rem] leading-none text-ink-900">
              {plan.price.monthly === 0 ? "0 €" : `${plan.price.monthly.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €`}
            </span>
            <span className="text-sm text-ink-500"> / mois</span>
          </>
        ) : (
          <span className="display-num text-3xl leading-none text-ink-900">{plan.priceLabel}</span>
        )}
      </p>
      {plan.price && plan.price.yearly > 0 && (
        <p className="mt-1.5 text-sm text-ink-500">
          ou {plan.price.yearly} € / an{" "}
          <span className="font-semibold text-sauge-600">
            (−{Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100)} %)
          </span>
        </p>
      )}

      <p className="mt-5 text-[0.9375rem] font-medium text-ink-700">{plan.summary}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-ink-700">
            <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-sauge-600" aria-hidden="true">
              <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
        {plan.limits.map((limit) => (
          <li key={limit} className="flex items-start gap-2.5 text-sm leading-snug text-ink-400">
            <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            {limit}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={plan.cta.href}
        variant={plan.highlighted ? "primary" : "outline"}
        className="mt-7 w-full"
      >
        {plan.cta.label}
      </ButtonLink>
    </Reveal>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="text-center">
          <p className="eyebrow animate-fade text-lumen-700">Tarifs</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Simple, sans engagement, sans publicité
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Verluma est financé par ses abonnés — pas par vos données, pas par des
            bannières entre deux exercices. Tous les plans payants commencent par
            14 jours d&apos;essai, résiliables en deux clics.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-500">
            −40 % pour les étudiants et demandeurs d&apos;emploi · tarif associatif pour
            les écoles Calandreta et les ikastola · paiement sécurisé, TVA incluse.
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-sand/50 py-16 sm:py-24">
        <Container width="narrow">
          <SectionHeading
            align="center"
            eyebrow="Parlons franchement"
            title="« Encore un abonnement… »"
            lead="Objection entendue. Trois éléments de réponse, sans langue de bois."
          />
          <div className="mt-10 space-y-5">
            {[
              {
                title: "Le gratuit suffit pour de vrai",
                text: "Une leçon par jour et 20 cartes de révision, c'est un apprentissage réel — pas une vitrine bridée. Des apprenants terminent des unités entières en Découverte. Vous passez à Fluide quand la limite vous gêne, pas avant.",
              },
              {
                title: "9,90 €, c'est le prix de 20 minutes de cours particulier",
                text: "Un cours particulier coûte 25 à 40 € de l'heure et a lieu une fois par semaine. Verluma travaille avec vous tous les jours, pour un quart de ce prix mensuel. Les deux sont complémentaires — mais un seul tient dans toutes les vies.",
              },
              {
                title: "Résilier prend deux clics, et vos progrès restent",
                text: "Réglages → Abonnement → Résilier. Pas d'appel téléphonique, pas de formulaire caché, pas de « offre de la dernière chance » en six écrans. Si vous revenez dans un an, vos cartes de révision vous attendent.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
                <h3 className="display-md text-ink-900">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container width="narrow">
          <SectionHeading align="center" eyebrow="FAQ" title="Questions sur les tarifs" />
          <Accordion className="mt-10" items={pricingFaq} />
          <div className="mt-10 text-center">
            <ButtonLink href="/inscription" size="lg">Commencer gratuitement</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
