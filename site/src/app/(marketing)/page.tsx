import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ProductGlimpse } from "@/components/marketing/ProductGlimpse";
import { languages, totalLearners } from "@/lib/data/languages";
import { plans, pricingFaq } from "@/lib/data/pricing";
import { testimonials, companyCase } from "@/lib/data/testimonials";
import { demoUser } from "@/lib/data/demo-user";

export const metadata: Metadata = {
  title: "Verluma — Apprenez une langue avec de vraies voix",
  description:
    "10 langues dont l'occitan et le basque, des voix enregistrées en studio, une méthode de répétition espacée. 15 minutes par jour pour parler vraiment. Essai gratuit, sans carte bancaire.",
  alternates: { canonical: "/" },
};

const formatNumber = new Intl.NumberFormat("fr-FR");

/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-grid absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block" aria-hidden="true" />
      <Container width="wide" className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-rise">
          <p className="eyebrow text-lumen-700">
            10 langues · voix studio · 15 minutes par jour
          </p>
          <h1 className="display-hero mt-4 text-ink-900">
            Apprenez une langue avec de vraies voix.{" "}
            <em className="text-ink-600">Gardez-la</em> avec une vraie méthode.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Verluma remplace la synthèse vocale par des comédiens natifs enregistrés
            en studio, et le bachotage par la répétition espacée. Quinze minutes par
            jour, et la langue reste — celle des affaires comme celle de vos
            grands-parents.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/inscription" size="lg">
              Commencer gratuitement
            </ButtonLink>
            <ButtonLink href="/demo" variant="outline" size="lg">
              Essayer une leçon d&apos;occitan
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            Sans carte bancaire · {formatNumber.format(totalLearners)} apprenants ·
            noté 4,8/5 sur les stores
          </p>
        </div>
        <div className="mx-auto w-full max-w-105 pb-10 sm:pb-0 lg:justify-self-end">
          <ProductGlimpse />
        </div>
      </Container>
    </section>
  );
}

function LanguageStrip() {
  return (
    <section aria-label="Langues disponibles" className="border-y border-line bg-sand/60">
      <Container width="wide" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 py-5">
        {languages.map((lang) => (
          <Link
            key={lang.slug}
            href={`/langues/${lang.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-(--shadow-soft)"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold"
              style={{ backgroundColor: lang.hue, color: lang.hueText }}
              aria-hidden="true"
            >
              {lang.chip}
            </span>
            {lang.name}
          </Link>
        ))}
      </Container>
    </section>
  );
}

function Problem() {
  const causes = [
    {
      title: "Vous avez appris avec des voix qui n'existent pas",
      text: "Synthèse vocale lissée, débit artificiel, liaisons parfaites : votre oreille a été entraînée sur une langue que personne ne parle. Première conversation réelle, premier mur.",
    },
    {
      title: "Vous avez révisé au mauvais moment",
      text: "Vingt mots un dimanche, plus rien pendant dix jours : la courbe de l'oubli gagne à tous les coups. Sans calendrier de rappel, chaque semaine efface la précédente.",
    },
    {
      title: "Vous avez visé trop gros, trop vite",
      text: "Deux heures le week-end tiennent trois semaines. Quinze minutes par jour tiennent des années — et c'est la régularité, pas l'intensité, qui fabrique une langue.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Le vrai problème"
          title="Vous avez déjà « fait » une langue. Pourquoi n'est-elle jamais venue ?"
          lead="Ce n'est ni un don qui vous manque, ni de la volonté. Trois erreurs de méthode expliquent presque tous les abandons — et les trois se corrigent."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {causes.map((cause, i) => (
            <Reveal key={cause.title} delay={i * 90} className="flex flex-col rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
              <span className="display-num text-4xl text-lumen-500" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display-md mt-4 text-ink-900">{cause.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{cause.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Method() {
  const pillars = [
    {
      figure: "60 h",
      label: "de voix enregistrées en studio",
      title: "Des voix humaines, ou rien",
      text: "Chaque phrase est lue par un comédien natif — Harriet à Londres, Miquèla à Toulouse — en deux prises : vitesse réelle et vitesse détendue. Votre oreille apprend la langue telle qu'elle se parle.",
    },
    {
      figure: "×2,4",
      label: "de rétention à 90 jours vs listes classiques",
      title: "La répétition espacée, mot par mot",
      text: "Chaque mot a son propre calendrier de rappel, recalculé selon vos réponses et vos hésitations. Vous révisez juste avant d'oublier — jamais trop tôt, jamais trop tard.",
    },
    {
      figure: "15 min",
      label: "par jour, c'est le contrat",
      title: "Des sessions qui tiennent dans une vie",
      text: "Une leçon, une révision, terminé. L'application protège votre série de jours consécutifs parce que c'est elle, la variable qui décide de tout le reste.",
    },
  ];
  return (
    <section className="border-t border-line bg-sand/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="La méthode Verluma"
          title="Trois principes, appliqués sans compromis"
          lead="Tout le produit découle de trois choix assumés — coûteux pour nous, décisifs pour vous."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90} className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
              <p className="display-num text-5xl text-ink-900">{pillar.figure}</p>
              <p className="mt-1 text-sm font-medium text-lumen-700">{pillar.label}</p>
              <h3 className="display-md mt-6 text-ink-900">{pillar.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{pillar.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href="/methode" variant="outline">
            Comprendre la méthode en détail
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

function DashboardTeaser() {
  const bars = demoUser.dailyMinutes.slice(0, 13);
  const max = 25;
  return (
    <section className="py-20 sm:py-28">
      <Container width="wide" className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          {/* Mini-dashboard rendu en HTML réel (aucune capture d'écran) */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-(--shadow-lift)">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink-900">Cette semaine</p>
              <span className="rounded-full bg-sauge-100 px-2.5 py-0.5 text-xs font-semibold text-sauge-600">
                Objectif en vue
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[
                { value: "23", label: "jours de série" },
                { value: "412", label: "mots maîtrisés" },
                { value: "96", label: "min cette semaine" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="display-num text-3xl text-ink-900">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex h-28 items-end gap-1.5" aria-hidden="true">
              {bars.map((d, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="w-full rounded-t-[4px] bg-ink-600"
                    style={{ height: `${Math.max(6, (d.minutes / max) * 104)}px`, opacity: 0.55 + (i / bars.length) * 0.45 }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-500">Minutes de pratique — 13 derniers jours</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Votre tableau de bord"
            title="Vous voyez exactement où vous en êtes, et quoi faire ensuite"
            lead="Pas de forêt de graphiques : trois chiffres qui comptent, vos révisions du jour, et la prochaine leçon. Le reste, l'algorithme s'en occupe."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Mots classés fragiles, stables ou solides — vous savez ce qui tient vraiment",
              "Révisions du jour calibrées : rarement plus de 7 minutes",
              "Série protégée : un rappel doux avant minuit, jamais de culpabilisation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink-700">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-sauge-600" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
                  <path d="m6 10.5 2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Heritage() {
  const heritage = languages.filter((l) => l.heritage);
  return (
    <section className="lumen-glow on-dark py-20 text-paper sm:py-28">
      <Container>
        <SectionHeading
          tone="paper"
          eyebrow="Langues d'héritage"
          title="Les langues que les géants ignorent, nous les enregistrons en premier"
          lead="L'occitan et le basque ne rapportent rien aux plateformes mondiales. Pour nous, ce sont les parcours les plus importants du catalogue — conçus avec des enseignants de Calandreta et d'ikastola, et de vraies voix du pays."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {heritage.map((lang, i) => (
            <Reveal key={lang.slug} delay={i * 100}>
              <Link
                href={`/langues/${lang.slug}`}
                className="group block rounded-(--radius-card) border border-ink-600/60 bg-ink-800/60 p-7 transition-colors hover:border-lumen-500/60"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                    style={{ backgroundColor: lang.hue, color: lang.hueText }}
                    aria-hidden="true"
                  >
                    {lang.chip}
                  </span>
                  <h3 className="display-md text-paper">{lang.name}</h3>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-200">{lang.tagline}</p>
                <p className="mt-5 font-display text-lg italic text-lumen-300">
                  « {lang.sampleSentence.original} »
                </p>
                <p className="mt-1 text-sm text-ink-300">{lang.sampleSentence.translation}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lumen-400">
                  Découvrir le parcours
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const featured = testimonials.slice(0, 3);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ils parlent, vraiment"
          title="Des apprenants qui tiennent dans la durée"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} as="article" className="flex flex-col rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-lumen-400" aria-hidden="true">
                <path d="M4 14c0-4.4 2.6-7.8 6.5-9.5l1 1.8C8.9 7.6 7.5 9.4 7.2 11.2c.3-.1.7-.2 1.1-.2 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.5-3.6 3.5C5.6 17.8 4 16.2 4 14Zm9.5 0c0-4.4 2.6-7.8 6.5-9.5l1 1.8c-2.6 1.3-4 3.1-4.3 4.9.3-.1.7-.2 1.1-.2 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.5-3.6 3.5-2.3 0-3.9-1.6-3.9-3.8Z" fill="currentColor" />
              </svg>
              <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-700">
                {t.quote}
              </blockquote>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink-900">
                  {t.name}
                  {t.age ? `, ${t.age} ans` : ""}
                </p>
                <p className="mt-0.5 text-sm text-ink-500">
                  {t.city} · {t.language}
                  {t.detail ? ` · ${t.detail}` : ""}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-400">
          Témoignages fictifs présentés à titre de démonstration.
        </p>
      </Container>
    </section>
  );
}

function BusinessTeaser() {
  return (
    <section className="border-y border-line bg-sand/50 py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Étude de cas · Équipes"
            title={`${companyCase.company} a fait de l'italien une habitude d'équipe`}
            lead={companyCase.challenge}
          />
          <blockquote className="mt-8 border-l-2 border-lumen-500 pl-5 font-display text-lg italic leading-relaxed text-ink-700">
            « {companyCase.quote} »
            <footer className="mt-3 text-sm not-italic font-sans font-medium text-ink-500">
              {companyCase.contact} — {companyCase.sector}
            </footer>
          </blockquote>
          <ButtonLink href="/entreprises" variant="outline" className="mt-8">
            Découvrir l&apos;offre Équipes
          </ButtonLink>
        </div>
        <div className="grid gap-4">
          {companyCase.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 90} className="flex items-center gap-6 rounded-(--radius-card) border border-line bg-card px-7 py-5 shadow-(--shadow-soft)">
              <p className="display-num w-24 shrink-0 text-4xl text-ink-900">{r.figure}</p>
              <p className="text-[0.9375rem] text-ink-600">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PricingTeaser() {
  const teased = plans.filter((p) => p.id !== "equipes");
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tarifs"
          title="Un prix honnête pour une méthode qui coûte cher à fabriquer"
          lead="Pas de publicité, pas de revente de données : Verluma vit de ses abonnements. Le gratuit est vraiment gratuit, l'essai est vraiment sans risque."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {teased.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 90}
              className={
                plan.highlighted
                  ? "relative rounded-(--radius-card) border-2 border-ink-900 bg-card p-7 shadow-(--shadow-lift)"
                  : "rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-7 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-paper">
                  Le plus choisi
                </span>
              )}
              <h3 className="display-md text-ink-900">{plan.name}</h3>
              <p className="mt-3">
                <span className="display-num text-4xl text-ink-900">
                  {plan.price && plan.price.monthly > 0
                    ? `${plan.price.monthly.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €`
                    : "0 €"}
                </span>
                <span className="text-sm text-ink-500"> / mois</span>
              </p>
              <p className="mt-4 min-h-12 text-sm leading-relaxed text-ink-600">{plan.summary}</p>
              <ButtonLink
                href={plan.cta.href}
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-6 w-full"
              >
                {plan.cta.label}
              </ButtonLink>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/tarifs" className="font-semibold text-ink-900 underline decoration-lumen-500 decoration-2 underline-offset-4 hover:decoration-lumen-600">
            Comparer les plans en détail →
          </Link>
        </p>
      </Container>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container width="narrow">
        <SectionHeading eyebrow="Questions fréquentes" title="Avant de vous lancer" align="center" />
        <Accordion className="mt-10" items={pricingFaq.slice(0, 4)} />
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-4">
      <Container>
        <Reveal className="lumen-glow on-dark overflow-hidden rounded-3xl px-7 py-14 text-center text-paper sm:px-14 sm:py-20">
          <h2 className="display-xl mx-auto max-w-2xl text-paper">
            La première leçon prend six minutes. La langue, elle, vous restera.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-200">
            Choisissez une langue, écoutez une vraie voix, laissez la méthode faire le reste.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/inscription" variant="lumen" size="lg">
              Commencer gratuitement
            </ButtonLink>
            <ButtonLink href="/demo" variant="on-dark" size="lg">
              Essayer sans compte
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verluma",
  url: "https://verluma.app",
  logo: "https://verluma.app/icon.svg",
  description:
    "Plateforme d'apprentissage des langues : voix enregistrées en studio, répétition espacée, 10 langues dont l'occitan et le basque.",
  foundingDate: "2024",
  address: { "@type": "PostalAddress", addressLocality: "Toulouse", addressCountry: "FR" },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verluma",
  url: "https://verluma.app",
  inLanguage: "fr",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, webSiteJsonLd]) }}
      />
      <Hero />
      <LanguageStrip />
      <Problem />
      <Method />
      <DashboardTeaser />
      <Heritage />
      <Testimonials />
      <BusinessTeaser />
      <PricingTeaser />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
