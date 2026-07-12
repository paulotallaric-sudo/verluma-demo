import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { LeadForm } from "@/components/forms/LeadForm";
import { companyCase } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Verluma pour les équipes",
  description:
    "Formez vos équipes aux langues avec un tableau de bord manager, une facturation centralisée et la méthode Verluma : 12 € par personne et par mois, dès 5 licences, sans engagement annuel.",
  alternates: { canonical: "/entreprises" },
};

const benefits = [
  {
    title: "Un tableau de bord qui mesure ce qui compte",
    text: "Assiduité, minutes de pratique, progression par collaborateur : vous voyez si la formation vit vraiment — sans accéder au contenu des exercices de chacun, par principe.",
  },
  {
    title: "Une adoption qui ne retombe pas en novembre",
    text: "Le format 15 minutes se glisse dans la journée de travail au lieu d'exiger une soirée. Nos clients Équipes gardent en moyenne 82 % d'utilisateurs actifs après six mois.",
  },
  {
    title: "Une administration qui ne vous coûte rien",
    text: "Ajout et retrait de sièges en deux clics, facture unique mensuelle ou annuelle, export comptable. L'accompagnement au lancement est inclus, avec un webinaire d'équipe animé par nos soins.",
  },
  {
    title: "Des langues que les catalogues ignorent",
    text: "Vos équipes exportent en Italie, accueillent en pays basque, servent des clients japonais ? Dix langues au même tarif, y compris celles qu'aucune grande plateforme ne propose.",
  },
];

const steps = [
  { step: "1", title: "Un échange de 30 minutes", text: "Vous nous décrivez le contexte, nous vous montrons le produit et l'espace manager. Sans slides interminables." },
  { step: "2", title: "Lancement en une semaine", text: "Import des collaborateurs, webinaire de démarrage, choix des langues. Chacun part sur son propre parcours." },
  { step: "3", title: "Point mensuel les 3 premiers mois", text: "Nous suivons l'adoption avec vous et ajustons : rappels, défis d'équipe, réallocation des sièges inactifs." },
];

export default function EntreprisesPage() {
  return (
    <>
      <section className="lumen-glow on-dark py-16 text-paper sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow animate-fade text-lumen-400">Verluma Équipes</p>
            <h1 className="display-hero mt-4 animate-rise text-paper">
              La formation langues que vos équipes suivent vraiment
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              Les cours collectifs du jeudi soir se vident dès novembre. Quinze
              minutes par jour dans la poche de chacun, pilotées depuis un espace
              manager : voilà ce qui tient. 12 € par personne et par mois, dès
              5 licences, sans engagement annuel.
            </p>
            <p className="mt-8 text-sm text-ink-300">
              Éligible au budget formation · facturation centralisée · données hébergées dans l&apos;UE
            </p>
          </div>
          <Reveal className="rounded-(--radius-card) border border-ink-600/60 bg-ink-800/70 p-7">
            <p className="eyebrow text-lumen-400">Chez {companyCase.company}</p>
            <dl className="mt-5 space-y-5">
              {companyCase.results.map((r) => (
                <div key={r.label} className="flex items-center gap-5">
                  <dd className="display-num w-20 shrink-0 text-3xl text-paper">{r.figure}</dd>
                  <dt className="text-sm leading-snug text-ink-200">{r.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-ink-600/60 pt-4 text-xs text-ink-400">
              {companyCase.sector} — étude de cas de démonstration.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi Verluma"
            title="Quatre raisons de remplacer votre dispositif actuel"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
                <h3 className="display-md text-ink-900">{b.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-sand/50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Déploiement" title="De la démo au lancement en une semaine" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} as="li" delay={i * 80} className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-lg text-paper" aria-hidden="true">
                  {s.step}
                </span>
                <h3 className="display-md mt-5 text-ink-900">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Parlons-en"
              title="Demandez une démonstration"
              lead="Trente minutes en visio, avec le produit — pas un commercial qui « reviendra vers vous ». Réponse sous un jour ouvré."
            />
            <ul className="mt-8 space-y-3 text-[0.9375rem] text-ink-700">
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Devis en 24 h pour les équipes jusqu&apos;à 200 personnes</li>
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Pilote gratuit de 30 jours pour 10 collaborateurs</li>
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Au-delà de 200 licences : contactez-nous pour un tarif dédié</li>
            </ul>
          </div>
          <Reveal className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft) sm:p-9">
            <LeadForm intent="entreprises" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
