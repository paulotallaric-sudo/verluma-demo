import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site etabli.fr : éditeur, hébergement, propriété intellectuelle.",
  alternates: { canonical: "/legal/mentions-legales" },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      updated="12 juillet 2026"
      sections={[
        {
          title: "Éditeur du site",
          paragraphs: [
            "Le site etabli.fr est édité par Établi SAS, société par actions simplifiée au capital de 50 000 €, immatriculée au RCS de Nantes sous le numéro 921 738 264, dont le siège social est situé 5 quai des Antilles, 44200 Nantes, France.",
            "Directrice de la publication : Hélène Bréchet, présidente. Contact : bonjour@etabli.fr.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est hébergé par Vercel Inc. sur des infrastructures situées dans l'Union européenne (région Paris, cdg1). Les données des comptes clients sont hébergées par Scaleway SAS, 8 rue de la Ville-l'Évêque, 75008 Paris.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus du site — textes, bibliothèques d'ouvrages, marque, logo et éléments graphiques — est protégé par le droit d'auteur et le droit des marques. Toute reproduction, même partielle, est soumise à l'autorisation écrite préalable d'Établi SAS.",
            "Les documents que vous créez avec Établi (devis, factures, situations) vous appartiennent intégralement.",
          ],
        },
        {
          title: "Signalement",
          paragraphs: [
            "Pour signaler un contenu ou un dysfonctionnement : bonjour@etabli.fr. Nous accusons réception sous 48 heures ouvrées.",
          ],
        },
      ]}
    />
  );
}
