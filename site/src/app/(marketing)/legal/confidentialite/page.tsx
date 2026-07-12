import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Établi collecte, utilise et protège vos données et celles de vos clients, conformément au RGPD.",
  alternates: { canonical: "/legal/confidentialite" },
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updated="12 juillet 2026"
      intro="Le principe qui gouverne tout le reste : vos données de gestion — et celles de vos clients — servent à faire tourner votre entreprise, pas la nôtre. Nous ne vendons rien à personne, et vous repartez avec tout, quand vous voulez."
      sections={[
        {
          title: "Données collectées",
          paragraphs: [
            "Données de compte : identité, entreprise, SIRET, e-mail, mot de passe (haché avec Argon2id — nous ne le connaissons jamais en clair).",
            "Données de gestion : vos clients, devis, factures, ouvrages, règlements. Vous en êtes le responsable de traitement ; Établi agit comme sous-traitant au sens du RGPD, et un accord de sous-traitance (DPA) est intégré aux CGV.",
            "Données de paiement pour l'encaissement en ligne : traitées par notre prestataire agréé (Stripe) ; Établi ne stocke jamais les numéros de carte de vos clients.",
          ],
        },
        {
          title: "Ce que nous ne faisons pas",
          paragraphs: [
            "Pas de publicité, pas de revente ni de partage de données à des fins commerciales, pas de démarchage de vos clients — jamais. Notre mesure d'audience sur le site public est auto-hébergée, sans cookie, et ne permet pas de vous identifier.",
          ],
        },
        {
          title: "Base légale et durées de conservation",
          paragraphs: [
            "Le traitement repose sur l'exécution du contrat (CGV). Vos documents comptables sont conservés pendant toute la vie du compte ; après résiliation, ils restent exportables 12 mois puis sont archivés de manière chiffrée pendant les durées légales avant suppression.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Accès, rectification, effacement, portabilité, opposition : l'export complet (CSV, PDF, FEC) et la suppression du compte sont disponibles directement dans Réglages → Confidentialité, sans nous écrire.",
            "Pour toute autre demande : rgpd@etabli.fr. Vous pouvez également saisir la CNIL (cnil.fr).",
          ],
        },
        {
          title: "Hébergement et sécurité",
          paragraphs: [
            "Toutes les données sont hébergées dans l'Union européenne. Chiffrement TLS 1.3 en transit et AES-256 au repos, sauvegardes quotidiennes chiffrées, accès interne restreint, journalisé et soumis à double authentification.",
          ],
        },
      ]}
    />
  );
}
