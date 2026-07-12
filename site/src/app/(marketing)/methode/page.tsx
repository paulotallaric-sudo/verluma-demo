import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const metadata: Metadata = {
  title: "La méthode",
  description:
    "Voix enregistrées en studio, répétition espacée calibrée mot par mot, sessions de 15 minutes : comment la méthode Verluma fait tenir une langue dans une vie d'adulte.",
  alternates: { canonical: "/methode" },
};

const steps = [
  {
    step: "01",
    title: "Vous écoutez d'abord, vous lisez ensuite",
    text: "Chaque notion arrive par l'oreille : une phrase, à vitesse réelle, dite par un comédien natif. La transcription ne s'affiche qu'après votre première écoute. C'est inconfortable trois jours, puis votre compréhension orale décolle — parce qu'elle n'a jamais pu se cacher derrière le texte.",
  },
  {
    step: "02",
    title: "Vous manipulez tout de suite",
    text: "Pas de leçon magistrale : dès la deuxième minute, vous répondez, assemblez, traduisez. Les exercices alternent quatre formats pour empêcher les automatismes de façade. Une bonne réponse hésitante compte comme fragile — l'algorithme le sait, et il y reviendra.",
  },
  {
    step: "03",
    title: "Chaque mot reçoit son calendrier",
    text: "Derrière l'écran, chaque mot rencontré devient une carte avec sa propre échéance de rappel : 1 jour, 3 jours, 1 semaine, 3 semaines, 2 mois. Votre session de révision quotidienne ne contient que les cartes arrivées à échéance — rarement plus de 7 minutes.",
  },
  {
    step: "04",
    title: "La série fait le reste",
    text: "Quinze minutes par jour, tous les jours, battent n'importe quel week-end studieux. L'application défend votre série de jours consécutifs : rappel discret le soir, gel de série offert pendant les vraies vacances, et jamais de culpabilisation sonore.",
  },
];

const proofs = [
  { figure: "22 %", label: "d'erreurs de dictée en moins avec des voix humaines qu'avec la synthèse, chez les débutants (panel interne, 40 apprenants)" },
  { figure: "×2,4", label: "de rétention de vocabulaire à 90 jours par rapport aux listes classiques" },
  { figure: "7 min", label: "durée médiane de la session de révision quotidienne" },
  { figure: "68 %", label: "des apprenants actifs ont une série de plus de 14 jours" },
];

export default function MethodePage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container width="narrow" className="text-center">
          <p className="eyebrow animate-fade text-lumen-700">La méthode</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Une langue s&apos;attrape par l&apos;oreille et se garde par le calendrier
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Verluma n&apos;a rien inventé : l&apos;écoute active et la répétition espacée sont
            documentées depuis un siècle. Notre travail, c&apos;est de les appliquer sans
            tricher — avec de vraies voix, de vrais intervalles, et des sessions
            dimensionnées pour des adultes qui ont une vie.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container width="narrow">
          <ol className="space-y-14">
            {steps.map((s, i) => (
              <Reveal key={s.step} as="li" delay={i * 60} className="grid gap-5 sm:grid-cols-[5rem_1fr]">
                <p className="display-num text-5xl text-lumen-500" aria-hidden="true">{s.step}</p>
                <div>
                  <h2 className="display-lg text-ink-900">{s.title}</h2>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="lumen-glow on-dark py-20 text-paper sm:py-24">
        <Container>
          <SectionHeading
            tone="paper"
            eyebrow="Ce que ça donne"
            title="Des chiffres que nous mesurons vraiment"
            lead="Nous publions nos mesures internes, avec leurs conditions. Une méthode qui promet sans mesurer n'est pas une méthode : c'est un slogan."
          />
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {proofs.map((p, i) => (
              <Reveal key={p.figure} delay={i * 70} className="border-l-2 border-lumen-500 pl-5">
                <dt className="sr-only">{p.label}</dt>
                <dd>
                  <span className="display-num block text-5xl text-paper">{p.figure}</span>
                  <span className="mt-2 block text-[0.9375rem] leading-relaxed text-ink-200">{p.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container width="narrow" className="text-center">
          <SectionHeading
            align="center"
            eyebrow="À vous"
            title="Le meilleur test reste une leçon"
            lead="Six minutes d'occitan, sans compte et sans carte bancaire. Si la méthode ne vous parle pas, vous aurez au moins appris à dire bonjour à Toulouse."
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/demo" size="lg">Essayer la leçon de démonstration</ButtonLink>
            <ButtonLink href="/tarifs" variant="outline" size="lg">Voir les tarifs</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
