import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Pourquoi Verluma existe : rendre aux adultes le plaisir d'apprendre une langue, avec de vraies voix, une vraie méthode, et un respect égal pour l'anglais des affaires et l'occitan des grands-parents.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "L'oreille d'abord",
    text: "Une langue est un son avant d'être une grammaire. Tout ce que nous construisons commence par une voix humaine.",
  },
  {
    title: "La science, sans le jargon",
    text: "Répétition espacée, rappel actif, charge cognitive : nous appliquons la recherche — et nous la traduisons en français.",
  },
  {
    title: "Aucune langue n'est petite",
    text: "L'occitan de Sylvie vaut l'anglais d'Élodie. Une langue par an, faite correctement ou pas du tout.",
  },
  {
    title: "Votre attention n'est pas à vendre",
    text: "Pas de publicité, pas de revente de données, pas de mécaniques anxiogènes. Nos revenus viennent de nos abonnés, donc nos intérêts sont les vôtres.",
  },
];

const timeline = [
  { year: "2024", event: "Claire Vasseur (linguiste) et Romain Adélaïde (ingénieur) commencent Verluma à Toulouse, après un constat têtu : personne n'enseignait l'occitan correctement en ligne." },
  { year: "2025", event: "Lancement avec quatre langues et 25 heures de voix studio. Les parcours occitan puis basque suivent — et signent les meilleurs taux de complétion de la plateforme." },
  { year: "2026", event: "Dix langues, 60 heures de studio, 40 000 apprenants, une équipe de quatorze personnes. L'offre Équipes ouvre au printemps, et les apprenants votent pour la langue d'héritage de 2027." },
];

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container width="narrow">
          <p className="eyebrow animate-fade text-lumen-700">Manifeste</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            On ne « consomme » pas une langue. On l&apos;habite.
          </h1>
          <div className="mt-10 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-700">
            <p>
              Verluma est né d&apos;un agacement. Celui d&apos;entendre des voix synthétiques
              enseigner des langues que des millions de personnes parlent avec un corps,
              un accent, une histoire. Celui de voir des applications transformer
              l&apos;apprentissage en machine à sous — et des adultes intelligents se sentir
              coupables de « ne pas être doués pour les langues », alors qu&apos;on leur a
              simplement vendu de mauvais outils.
            </p>
            <p>
              Nous croyons qu&apos;un adulte de 54 ans peut réapprendre la langue de sa
              grand-mère. Qu&apos;une cheffe de projet peut cesser de redouter ses réunions
              en anglais. Que quinze minutes par jour, bien placées, valent tous les
              stages intensifs. Et que la technologie doit servir cette ambition-là :
              discrètement, précisément, sans jamais se prendre pour le sujet.
            </p>
            <p>
              Alors nous louons des studios. Nous payons des comédiens natifs, des
              enseignants de Calandreta, des relecteurs d&apos;ikastola. Nous publions nos
              mesures. Et chaque matin, quarante mille personnes ouvrent Verluma avec
              leur café — c&apos;est notre définition du succès.
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
          <SectionHeading eyebrow="Le chemin" title="Trois ans, dix langues, une obsession" />
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
          <h2 className="display-xl text-ink-900">Écrivez la suite avec nous</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-600">
            Apprenez une langue, proposez une voix, ou rejoignez l&apos;équipe — nous
            recrutons des passionnés qui savent pourquoi ils le sont.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/inscription" size="lg">Commencer une langue</ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">Nous écrire</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
