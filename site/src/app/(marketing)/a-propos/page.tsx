import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Pourquoi Établi existe : rendre aux artisans du bâtiment le temps et l'argent que la paperasse leur prend, avec un outil qui parle leur métier et respecte leur intelligence.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Le métier d'abord",
    text: "Un carreleur ne facture pas comme un paysagiste. Chaque écran d'Établi est pensé avec des artisans en activité — leurs unités, leurs mots, leurs usages. C'est l'outil qui s'adapte, jamais l'inverse.",
  },
  {
    title: "L'argent, sujet sérieux",
    text: "Acomptes, situations, relances, retards : nous parlons trésorerie sans pudeur, parce que c'est elle qui fait vivre ou mourir une boîte artisanale. Un outil de gestion qui n'ose pas parler d'argent est un gadget.",
  },
  {
    title: "La sobriété technique",
    text: "Pas de fonctionnalités-vitrines, pas d'« IA » plaquée sur un bouton. Chaque écran doit se comprendre en dix secondes après une journée de chantier — c'est notre barre de qualité, et elle est haute.",
  },
  {
    title: "Vos données vous suivent",
    text: "Export complet à tout moment, dans des formats lisibles. Nous voulons vous garder par le service rendu, pas par la difficulté de partir. Un client captif est un client mal servi.",
  },
];

const timeline = [
  { year: "2024", event: "Simon Aldebert (conducteur de travaux) et Hélène Bréchet (juriste devenue développeuse) commencent Établi à Nantes, après un constat têtu : les logiciels du bâtiment sont pensés pour les bureaux d'études, jamais pour l'artisan seul dans son fourgon." },
  { year: "2025", event: "Lancement avec quatre bibliothèques métiers, co-écrites avec une trentaine d'artisans pilotes. La signature avec acompte intégré arrive à l'été — et devient immédiatement la fonctionnalité la plus citée dans les avis." },
  { year: "2026", event: "Huit métiers couverts, 12 400 artisans, une équipe de dix-sept personnes, l'offre Réseaux qui équipe ses premières coopératives — et le raccordement à la facturation électronique livré dix-huit mois avant l'échéance." },
];

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container width="narrow">
          <p className="eyebrow animate-fade text-lumen-700">Manifeste</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Les mains qui construisent méritent mieux que des soirées de paperasse
          </h1>
          <div className="mt-10 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-700">
            <p>
              Établi est né d&apos;un agacement. Celui de voir des artisans exceptionnels
              — des gens qui savent monter un escalier dans une trémie impossible —
              perdre leurs dimanches sur des devis Word, courir après des chèques
              d&apos;acompte, et financer les fournitures de leurs clients avec leur
              propre découvert. Le talent était sur le chantier ; le logiciel, lui,
              était pensé pour un bureau d&apos;études.
            </p>
            <p>
              Nous croyons qu&apos;un devis peut partir le soir même de la visite. Qu&apos;un
              acompte se paie à la signature, pas « quand j&apos;aurai un chéquier ».
              Qu&apos;une relance peut être polie, automatique et efficace à la fois.
              Et que la réglementation — TVA du bâtiment, mentions obligatoires,
              facturation électronique — doit être le problème de l&apos;éditeur,
              jamais celui de l&apos;artisan.
            </p>
            <p>
              Alors nous passons nos journées avec des menuisiers, des électriciennes,
              des maçons. Nous écrivons leurs bibliothèques d&apos;ouvrages avec eux.
              Et chaque soir, des milliers de devis partent pendant que leurs auteurs
              dînent en famille — c&apos;est notre définition du succès.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Nos principes" title="Quatre choix qui ne se négocient pas" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft)">
                <h3 className="display-md text-ink-900">{v.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-sand/50 py-20 sm:py-24">
        <Container width="narrow">
          <SectionHeading eyebrow="Le chemin" title="Trois ans, huit métiers, une obsession" />
          <ol className="mt-12 space-y-10 border-l-2 border-lumen-500 pl-8">
            {timeline.map((item) => (
              <Reveal key={item.year} as="li" className="relative">
                <span className="absolute -left-[2.65rem] top-1 h-4 w-4 rounded-full border-2 border-lumen-500 bg-paper" aria-hidden="true" />
                <p className="display-num text-2xl text-ink-900">{item.year}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.event}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 text-center sm:py-24">
        <Container width="narrow">
          <h2 className="display-xl text-ink-900">Construisez la suite avec nous</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-600">
            Essayez l&apos;outil, proposez votre métier, ou rejoignez l&apos;équipe —
            nous recrutons des gens qui savent pourquoi un acompte se demande sans rougir.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/inscription" size="lg">Essayer Établi</ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">Nous écrire</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
