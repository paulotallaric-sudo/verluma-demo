import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const metadata: Metadata = {
  title: "Le produit",
  description:
    "Bibliothèque d'ouvrages, devis en 10 minutes, signature électronique avec acompte, suivi de chantiers, relances automatiques, trésorerie et export comptable : tout ce que fait Établi, en détail.",
  alternates: { canonical: "/produit" },
};

const features = [
  {
    step: "01",
    title: "La bibliothèque d'ouvrages, votre mémoire de prix",
    text: "Chaque ouvrage que vous chiffrez — le m² de façade de dressing, le point lumineux, le ml de gouttière — est enregistré avec son unité, son prix et sa TVA. Au devis suivant, vous assemblez au lieu de recalculer. Les bibliothèques de départ sont pré-remplies par métier, puis deviennent les vôtres : vos libellés, vos coefficients, vos marges.",
  },
  {
    step: "02",
    title: "Le devis qui se signe depuis un canapé",
    text: "Votre client reçoit un lien, pas une pièce jointe : le devis se lit bien sur téléphone, se signe électroniquement (valeur juridique pleine, horodatée), et l'acompte de 30 % se paie dans le même écran, par carte ou virement. Vous voyez quand il l'ouvre, combien de fois, et la relance douce part toute seule à J+5.",
  },
  {
    step: "03",
    title: "Les chantiers qui s'autofinancent",
    text: "Sur les gros chantiers, Établi découpe le devis en tranches — fondations, élévation, finitions — et génère les appels d'acompte et situations de travaux à chaque étape franchie. Le chantier avance, la trésorerie suit. Plus jamais 40 000 € d'avance sur votre compte courant.",
  },
  {
    step: "04",
    title: "La facture qui se paie sans que vous relanciez",
    text: "Facture émise en un clic depuis le devis ou la situation, paiement en ligne intégré, et un calendrier de relances polies mais fermes pour les retardataires : J+3, J+10, puis proposition de mise en demeure pré-rédigée. L'outil insiste, vous gardez la relation.",
  },
  {
    step: "05",
    title: "La trésorerie lisible en un écran",
    text: "Devis en attente, situations à facturer, factures échues, retards : un seul tableau répond à la question qui vous réveille la nuit — « qui me doit quoi ? ». Votre expert-comptable, lui, reçoit un export FEC propre et un accès dédié.",
  },
  {
    step: "06",
    title: "La conformité sans y penser",
    text: "Mentions obligatoires, CGV à jour, numérotation légale, TVA du bâtiment (20 %, 10 %, 5,5 %), et le raccordement à une plateforme agréée pour la facturation électronique 2026-2027. Le jour où la réglementation change, c'est notre problème — pas le vôtre.",
  },
];

const proofs = [
  { figure: "8 j", label: "de délai médian entre l'envoi d'un devis et sa signature, contre 23 jours de moyenne constatée dans le secteur" },
  { figure: "12 j", label: "de délai moyen de paiement des factures avec relances automatiques, contre 31 jours avant Établi (cohorte 2025)" },
  { figure: "3 h 40", label: "de paperasse économisées par semaine, déclarées en médiane par nos utilisateurs après trois mois" },
  { figure: "61 %", label: "de taux de signature moyen des devis envoyés avec acompte en ligne activé" },
];

export default function ProduitPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container width="narrow" className="text-center">
          <p className="eyebrow animate-fade text-lumen-700">Le produit</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Tout le trajet de l&apos;argent, du devis au virement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Établi ne fait pas « de la gestion ». Il suit le chemin exact d&apos;un
            chantier : chiffrer, faire signer, encaisser l&apos;acompte, facturer à
            l&apos;avancement, relancer, solder. Six maillons, zéro tableur.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container width="narrow">
          <ol className="space-y-14">
            {features.map((f, i) => (
              <Reveal key={f.step} as="li" delay={i * 60} className="grid gap-5 sm:grid-cols-[5rem_1fr]">
                <p className="display-num text-5xl text-lumen-500" aria-hidden="true">{f.step}</p>
                <div>
                  <h2 className="display-lg text-ink-900">{f.title}</h2>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">{f.text}</p>
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
            lead="Nous publions nos mesures internes, avec leurs conditions. Un logiciel qui promet sans mesurer, c'est un dépliant."
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
            title="Le meilleur test reste un devis"
            lead="Deux minutes, sans compte : créez un devis complet avec la bibliothèque de démonstration. Si l'outil ne vous convainc pas, vous aurez au moins chiffré un dressing."
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/demo" size="lg">Créer un devis d&apos;essai</ButtonLink>
            <ButtonLink href="/tarifs" variant="outline" size="lg">Voir les tarifs</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
