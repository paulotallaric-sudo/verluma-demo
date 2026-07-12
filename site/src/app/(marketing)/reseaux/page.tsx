import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { LeadForm } from "@/components/forms/LeadForm";
import { networkCase } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Établi pour les réseaux d'artisans",
  description:
    "Coopératives, franchises, groupements : équipez vos adhérents avec des bibliothèques d'ouvrages à vos tarifs négociés, un tableau de bord réseau et la formation incluse. Dès 20 adhérents.",
  alternates: { canonical: "/reseaux" },
};

const benefits = [
  {
    title: "Des bibliothèques aux tarifs du groupement",
    text: "Vos prix négociés fournisseurs deviennent des ouvrages pré-chiffrés dans la bibliothèque de chaque adhérent. Le réseau vend mieux ce qu'il achète bien — et vos conditions cessent de dormir dans un classeur.",
  },
  {
    title: "Une vue réseau qui respecte les adhérents",
    text: "Le bureau voit les volumes, les délais de signature et les encours en souffrance — agrégés et anonymisables. Jamais le détail commercial d'un adhérent sans son accord : la confiance est la condition de l'adoption.",
  },
  {
    title: "Une adoption qui ne retombe pas",
    text: "Formation en visio par groupes de dix, hotline dédiée, et un outil que les artisans comprennent en une soirée parce qu'il parle leur métier. Chez Artibat 17 : 72 % d'actifs hebdomadaires après un an.",
  },
  {
    title: "Votre marque, si vous voulez",
    text: "Documents en marque blanche aux couleurs du réseau, ou co-brandés. L'artisan reste chez lui, le réseau gagne en cohérence, le client final voit du professionnalisme partout.",
  },
];

const steps = [
  { step: "1", title: "Un atelier de cadrage", text: "Une demi-journée avec le bureau : vos tarifs négociés, vos métiers, vos objectifs de réseau. Nous repartons avec de quoi pré-remplir les bibliothèques." },
  { step: "2", title: "Un pilote de 60 jours", text: "Vingt adhérents volontaires, formés en deux visios. On mesure ensemble : délais de signature, acomptes encaissés, temps administratif." },
  { step: "3", title: "Le déploiement au rythme du réseau", text: "Vagues de 20 à 40 adhérents, hotline dédiée, point mensuel avec le bureau. Le tableau de bord réseau s'allume au fur et à mesure." },
];

export default function ReseauxPage() {
  return (
    <>
      <section className="lumen-glow on-dark py-16 text-paper sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow animate-fade text-lumen-400">Établi Réseaux</p>
            <h1 className="display-hero mt-4 animate-rise text-paper">
              Vos adhérents achètent bien. Aidez-les à vendre aussi bien.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              Coopératives, franchises et groupements d&apos;artisans : déployez
              Établi sur votre réseau avec des bibliothèques d&apos;ouvrages à vos
              tarifs négociés, une vue d&apos;ensemble pour le bureau et la formation
              des adhérents incluse. À partir de 20 adhérents équipés.
            </p>
            <p className="mt-8 text-sm text-ink-300">
              Pilote de 60 jours · formation incluse · marque blanche possible
            </p>
          </div>
          <Reveal className="rounded-(--radius-card) border border-ink-600/60 bg-ink-800/70 p-7">
            <p className="eyebrow text-lumen-400">Chez {networkCase.company}</p>
            <dl className="mt-5 space-y-5">
              {networkCase.results.map((r) => (
                <div key={r.label} className="flex items-center gap-5">
                  <dd className="display-num w-20 shrink-0 text-3xl text-paper">{r.figure}</dd>
                  <dt className="text-sm leading-snug text-ink-200">{r.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-ink-600/60 pt-4 text-xs text-ink-400">
              {networkCase.sector} — étude de cas de démonstration.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi Établi"
            title="Quatre raisons d'en faire un service du réseau"
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
          <SectionHeading eyebrow="Déploiement" title="Du cadrage au réseau équipé, en trois temps" />
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
              title="Demandez une démonstration réseau"
              lead="Quarante-cinq minutes en visio avec le produit et le tableau de bord réseau — pas de slides interminables. Réponse sous un jour ouvré."
            />
            <ul className="mt-8 space-y-3 text-[0.9375rem] text-ink-700">
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Proposition chiffrée en 48 h pour les réseaux jusqu&apos;à 300 adhérents</li>
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Pilote de 60 jours sur 20 adhérents, sans engagement</li>
              <li className="flex gap-3"><span className="text-lumen-600" aria-hidden="true">◆</span> Au-delà de 300 adhérents : programme dédié, parlons-en</li>
            </ul>
          </div>
          <Reveal className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft) sm:p-9">
            <LeadForm intent="reseaux" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
