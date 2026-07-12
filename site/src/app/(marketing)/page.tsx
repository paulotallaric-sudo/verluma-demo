import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ProductGlimpse } from "@/components/marketing/ProductGlimpse";
import { metiers, totalUsers } from "@/lib/data/metiers";
import { plans, pricingFaq } from "@/lib/data/pricing";
import { testimonials, networkCase } from "@/lib/data/testimonials";
import { demoUser } from "@/lib/data/demo-user";
import { euro } from "@/lib/data/quote-library";

export const metadata: Metadata = {
  title: "Établi — Devis, factures et chantiers pour artisans du bâtiment",
  description:
    "Faites vos devis en 10 minutes, encaissez l'acompte à la signature, suivez chantiers et trésorerie. Le logiciel des artisans du bâtiment. Essai 30 jours, sans carte bancaire.",
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
            Devis · signature · acompte · chantiers · trésorerie
          </p>
          <h1 className="display-hero mt-4 text-ink-900">
            Le devis part ce soir. L&apos;acompte arrive avec la signature.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Établi est le back-office des artisans du bâtiment : des devis chiffrés
            en 10 minutes avec votre bibliothèque d&apos;ouvrages, signés depuis le
            téléphone du client, payés d&apos;un acompte dans la minute. La paperasse
            du dimanche soir, c&apos;était avant.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/inscription" size="lg">
              Essayer 30 jours gratuitement
            </ButtonLink>
            <ButtonLink href="/demo" variant="outline" size="lg">
              Créer un devis d&apos;essai
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            Sans carte bancaire · {formatNumber.format(totalUsers)} artisans ·
            support par des humains qui connaissent le bâtiment
          </p>
        </div>
        <div className="mx-auto w-full max-w-105 pb-10 sm:pb-0 lg:justify-self-end">
          <ProductGlimpse />
        </div>
      </Container>
    </section>
  );
}

function MetierStrip() {
  return (
    <section aria-label="Métiers couverts" className="border-y border-line bg-sand/60">
      <Container width="wide" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 py-5">
        {metiers.map((metier) => (
          <Link
            key={metier.slug}
            href={`/metiers/${metier.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-(--shadow-soft)"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold"
              style={{ backgroundColor: metier.hue, color: metier.hueText }}
              aria-hidden="true"
            >
              {metier.chip}
            </span>
            {metier.name}
          </Link>
        ))}
      </Container>
    </section>
  );
}

function Problem() {
  const causes = [
    {
      title: "Le devis part trop tard, donc il part mal",
      text: "Entre la visite et l'envoi, il se passe une semaine — le temps que le client compare, doute, refroidisse. Chaque jour de retard fait chuter vos chances de signer, et c'est votre soirée qui saute pour le rattraper.",
    },
    {
      title: "L'acompte promis n'est pas un acompte",
      text: "« Je vous ferai un chèque » — et vous commandez les fournitures avec votre trésorerie. Le décalage entre ce qu'on vous doit et ce que vous avancez, c'est la première cause de mortalité des boîtes artisanales.",
    },
    {
      title: "Relancer, personne n'aime ça",
      text: "Alors on ne le fait pas, ou trop tard, ou énervé. Des milliers d'euros dorment dans des factures « en attente » simplement parce que la relance est une corvée émotionnelle.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Le vrai problème"
          title="Vous n'avez pas un problème de travail. Vous avez un problème de papier."
          lead="Le carnet est plein, les journées aussi. Ce qui coince, c'est tout ce qui se passe autour du chantier — et ça se corrige."
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

function Pillars() {
  const pillars = [
    {
      figure: "10 min",
      label: "pour un devis complet, chez le client",
      title: "Votre bibliothèque chiffre à votre place",
      text: "Vos ouvrages, vos unités, vos prix — enregistrés une fois pour toutes. Vous assemblez les lignes, Établi calcule HT, TVA à 10 ou 20 %, acompte. Le devis part avant que vous remontiez dans le fourgon.",
    },
    {
      figure: "8 j",
      label: "de délai médian de signature (vs 23 j en moyenne)",
      title: "Signature et acompte dans le même geste",
      text: "Le client signe depuis son téléphone — valeur juridique pleine — et paie l'acompte de 30 % dans la foulée, par carte ou virement. Une décision au lieu de deux, et votre trésorerie respire.",
    },
    {
      figure: "0",
      label: "relance à faire vous-même",
      title: "Les relances partent toutes seules, poliment",
      text: "Devis sans réponse à J+5, facture échue à J+3 : Établi relance avec des mots simples et un ton correct. C'est l'outil qui insiste, pas vous — et ça change tout, pour vous comme pour le client.",
    },
  ];
  return (
    <section className="border-t border-line bg-sand/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ce qu'Établi fait pour vous"
          title="Trois mécanismes, un objectif : être payé juste, à l'heure, sans y penser"
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
          <ButtonLink href="/produit" variant="outline">
            Voir tout ce que fait Établi
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

function DashboardTeaser() {
  const bars = demoUser.monthlyRevenue.slice(4);
  const max = Math.max(...bars.map((b) => b.amount)) * 1.15;
  return (
    <section className="py-20 sm:py-28">
      <Container width="wide" className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          {/* Mini-dashboard rendu en HTML réel (aucune capture d'écran) */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-(--shadow-lift)">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink-900">Votre trésorerie, sans tableur</p>
              <span className="rounded-full bg-garance-100 px-2.5 py-0.5 text-xs font-semibold text-garance-600">
                1 facture en retard
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[
                { value: euro.format(demoUser.stats.quotesPendingAmount), label: "de devis en attente" },
                { value: euro.format(demoUser.stats.toCollect), label: "à encaisser" },
                { value: `${demoUser.stats.signatureRate3m} %`, label: "de devis signés (3 mois)" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="display-num text-2xl text-ink-900 sm:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex h-28 items-end gap-1.5" aria-hidden="true">
              {bars.map((b, i) => (
                <div key={b.month} className="flex-1">
                  <div
                    className="w-full rounded-t-[4px] bg-ink-600"
                    style={{ height: `${Math.max(6, (b.amount / max) * 104)}px`, opacity: 0.55 + (i / bars.length) * 0.45 }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-500">CA facturé HT — 8 derniers mois</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Chantiers et trésorerie"
            title="Qui vous doit quoi ? Un écran, et vous savez."
            lead="Chaque chantier affiche son avancement, ses situations à facturer et ce qui reste dû. Fini le calcul mental sous la douche."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Situations de travaux générées automatiquement aux étapes que vous fixez",
              "Retards de paiement repérés et relancés avant que ça devienne gênant",
              "Export propre pour votre expert-comptable — il vous en reparlera",
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

function Reglementation() {
  return (
    <section className="lumen-glow on-dark py-20 text-paper sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading
            tone="paper"
            eyebrow="2026-2027"
            title="La facturation électronique arrive. Vous, vous êtes déjà prêt."
            lead="Dès septembre 2026, toutes les entreprises devront recevoir des factures électroniques ; en 2027, les TPE devront en émettre entre professionnels. Le PDF envoyé par e-mail ne suffira plus. Avec Établi, vous ne changez rien à vos habitudes : vos factures partent au bon format, sur la bonne plateforme, automatiquement."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/journal/facturation-electronique-artisans" variant="lumen">
              Comprendre ce qui change
            </ButtonLink>
            <ButtonLink href="/inscription" variant="on-dark">
              Prendre de l&apos;avance
            </ButtonLink>
          </div>
        </div>
        <Reveal className="rounded-(--radius-card) border border-ink-600/60 bg-ink-800/70 p-7">
          <p className="eyebrow text-lumen-400">Le calendrier</p>
          <ol className="mt-5 space-y-5">
            {[
              { date: "Sept. 2026", text: "Toutes les entreprises doivent pouvoir recevoir des factures électroniques." },
              { date: "Sept. 2027", text: "Les TPE/PME doivent aussi les émettre pour leurs clients professionnels." },
              { date: "Aujourd'hui", text: "Les artisans sur Établi sont déjà raccordés à une plateforme agréée. Il n'y a rien à faire." },
            ].map((item) => (
              <li key={item.date} className="flex gap-4">
                <span className="display-num w-24 shrink-0 text-lg text-lumen-300">{item.date}</span>
                <span className="text-sm leading-relaxed text-ink-200">{item.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>
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
          eyebrow="Sur les chantiers"
          title="Des artisans qui ont récupéré leurs soirées"
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
                <p className="font-semibold text-ink-900">{t.name}</p>
                <p className="mt-0.5 text-sm text-ink-500">
                  {t.metier} · {t.city}
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

function NetworkTeaser() {
  return (
    <section className="border-y border-line bg-sand/50 py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Étude de cas · Réseaux"
            title={`${networkCase.company} a équipé 85 adhérents en un an`}
            lead={networkCase.challenge}
          />
          <blockquote className="mt-8 border-l-2 border-lumen-500 pl-5 font-display text-lg leading-relaxed text-ink-700">
            « {networkCase.quote} »
            <footer className="mt-3 font-sans text-sm font-medium text-ink-500">
              {networkCase.contact} — {networkCase.sector}
            </footer>
          </blockquote>
          <ButtonLink href="/reseaux" variant="outline" className="mt-8">
            Découvrir l&apos;offre Réseaux
          </ButtonLink>
        </div>
        <div className="grid gap-4">
          {networkCase.results.map((r, i) => (
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
  const teased = plans.filter((p) => p.id !== "reseaux");
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tarifs"
          title="Moins cher qu'une heure facturée. Chaque mois."
          lead="Un plan gratuit qui suffit pour démarrer, un plan Artisan à 24 € qui se rembourse à la première relance encaissée, et zéro engagement."
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
                  {plan.price && plan.price.monthly > 0 ? `${plan.price.monthly} €` : "0 €"}
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
            Votre premier devis Établi peut partir ce soir.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-200">
            Trente jours d&apos;essai, vos vraies affaires, et le dimanche soir qui
            redevient un dimanche soir.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/inscription" variant="lumen" size="lg">
              Essayer gratuitement
            </ButtonLink>
            <ButtonLink href="/demo" variant="on-dark" size="lg">
              Créer un devis sans compte
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
  name: "Établi",
  url: "https://etabli.fr",
  logo: "https://etabli.fr/icon.svg",
  description:
    "Logiciel de devis, factures, chantiers et trésorerie pour les artisans du bâtiment.",
  foundingDate: "2024",
  address: { "@type": "PostalAddress", addressLocality: "Nantes", addressCountry: "FR" },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Établi",
  url: "https://etabli.fr",
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
      <MetierStrip />
      <Problem />
      <Pillars />
      <DashboardTeaser />
      <Reglementation />
      <Testimonials />
      <NetworkTeaser />
      <PricingTeaser />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
