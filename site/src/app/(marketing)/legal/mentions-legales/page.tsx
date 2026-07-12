import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site verluma.app : éditeur, hébergement, propriété intellectuelle.",
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
            "Le site verluma.app est édité par Verluma SAS, société par actions simplifiée au capital de 25 000 €, immatriculée au RCS de Toulouse sous le numéro 923 456 789, dont le siège social est situé 14 rue des Arts, 31000 Toulouse, France.",
            "Directrice de la publication : Claire Vasseur, présidente. Contact : bonjour@verluma.app.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est hébergé par Vercel Inc. sur des infrastructures situées dans l'Union européenne (région Paris, cdg1). Les données des comptes apprenants sont hébergées par Scaleway SAS, 8 rue de la Ville-l'Évêque, 75008 Paris.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus du site — textes, enregistrements audio, parcours pédagogiques, marque, logo et éléments graphiques — est protégé par le droit d'auteur et le droit des marques. Toute reproduction, même partielle, est soumise à l'autorisation écrite préalable de Verluma SAS.",
            "Les enregistrements de voix sont réalisés avec des comédiens professionnels dans le cadre de contrats de cession de droits couvrant l'usage pédagogique sur la plateforme.",
          ],
        },
        {
          title: "Signalement",
          paragraphs: [
            "Pour signaler un contenu ou un dysfonctionnement : bonjour@verluma.app. Nous accusons réception sous 48 heures ouvrées.",
          ],
        },
      ]}
    />
  );
}
