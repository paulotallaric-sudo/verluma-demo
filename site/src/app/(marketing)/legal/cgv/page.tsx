import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales de vente et d'utilisation du service Établi.",
  alternates: { canonical: "/legal/cgv" },
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <LegalPage
      title="Conditions générales de vente et d'utilisation"
      updated="12 juillet 2026"
      sections={[
        {
          title: "1. Objet",
          paragraphs: [
            "Les présentes conditions régissent l'utilisation du service Établi (site web et applications), édité par Établi SAS, ainsi que la souscription des plans Établi, Artisan, Atelier et Réseaux. Le service s'adresse aux professionnels.",
          ],
        },
        {
          title: "2. Compte et accès",
          paragraphs: [
            "La création d'un compte est réservée aux professionnels agissant dans le cadre de leur activité. Vous êtes responsable de la confidentialité de vos identifiants. Sur le plan Atelier, les accès sont nominatifs et gérés par le titulaire du compte, avec des rôles et droits configurables.",
          ],
        },
        {
          title: "3. Abonnements, essai et prix",
          paragraphs: [
            "Les plans payants débutent par un essai gratuit de 30 jours, sans carte bancaire. À l'issue de l'essai, sans souscription, le compte bascule sur le plan gratuit. Les prix sont affichés hors taxes et payables mensuellement ou annuellement, à échoir, par carte ou prélèvement SEPA via notre prestataire Stripe.",
            "Les frais d'encaissement en ligne (1,4 % + 0,25 € par transaction carte) sont ceux du prestataire de paiement et sont affichés avant activation. Toute évolution tarifaire est notifiée au moins 30 jours avant application.",
          ],
        },
        {
          title: "4. Résiliation et réversibilité",
          paragraphs: [
            "La résiliation s'effectue en deux clics depuis Réglages → Abonnement et prend effet à la fin de la période en cours. Vos documents (devis, factures, règlements) restent exportables pendant 12 mois après résiliation, dans des formats lisibles (CSV, PDF, FEC).",
          ],
        },
        {
          title: "5. Conformité des documents",
          paragraphs: [
            "Établi met à disposition des modèles conformes à la réglementation française (mentions obligatoires, numérotation, TVA du bâtiment) et assure le raccordement à une plateforme de dématérialisation agréée pour la facturation électronique. L'utilisateur reste responsable de l'exactitude des informations saisies (taux de TVA applicable à chaque chantier, attestations, assurances).",
          ],
        },
        {
          title: "6. Responsabilité et disponibilité",
          paragraphs: [
            "Établi s'engage sur une disponibilité cible de 99,5 % mensuelle, hors maintenances programmées annoncées 48 h à l'avance. En cas d'indisponibilité majeure de plus de 72 heures, l'abonnement est remboursé au prorata. Établi n'est pas responsable des litiges commerciaux entre l'utilisateur et ses clients.",
          ],
        },
        {
          title: "7. Droit applicable",
          paragraphs: [
            "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité ; à défaut, compétence est attribuée aux tribunaux de Nantes.",
          ],
        },
      ]}
    />
  );
}
