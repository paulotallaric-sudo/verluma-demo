import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Verluma collecte, utilise et protège vos données personnelles, conformément au RGPD.",
  alternates: { canonical: "/legal/confidentialite" },
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updated="12 juillet 2026"
      intro="Le principe qui gouverne tout le reste : Verluma est financé par ses abonnés, pas par vos données. Nous collectons le minimum nécessaire au fonctionnement du service, nous ne vendons rien à personne, et vous gardez la main."
      sections={[
        {
          title: "Données collectées",
          paragraphs: [
            "Données de compte : prénom, adresse e-mail, mot de passe (haché avec Argon2id — nous ne le connaissons jamais en clair).",
            "Données d'apprentissage : langues étudiées, réponses aux exercices, calendrier de révision, temps de pratique. Elles servent exclusivement à calibrer vos révisions et à afficher votre progression.",
            "Données de facturation pour les abonnés : traitées par notre prestataire de paiement (Stripe) ; Verluma ne stocke jamais votre numéro de carte.",
          ],
        },
        {
          title: "Ce que nous ne faisons pas",
          paragraphs: [
            "Pas de publicité ciblée, pas de revente ni de partage de données à des fins commerciales, pas de traceurs tiers sur le site public. Notre mesure d'audience (auto-hébergée, sans cookie) ne permet pas de vous identifier.",
          ],
        },
        {
          title: "Base légale et durées de conservation",
          paragraphs: [
            "Le traitement des données de compte et d'apprentissage repose sur l'exécution du contrat (CGV). Les données de facturation sont conservées 10 ans au titre des obligations comptables. Un compte inactif depuis 3 ans est supprimé après deux relances par e-mail.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition. L'export complet de vos données (format JSON lisible) et la suppression du compte sont disponibles directement dans Réglages → Confidentialité, sans nous écrire.",
            "Pour toute autre demande : rgpd@verluma.app. Vous pouvez également saisir la CNIL (cnil.fr).",
          ],
        },
        {
          title: "Hébergement et sécurité",
          paragraphs: [
            "Toutes les données sont hébergées dans l'Union européenne. Les échanges sont chiffrés (TLS 1.3), les sauvegardes quotidiennes sont chiffrées au repos, et l'accès interne aux données de production est restreint, journalisé et soumis à double authentification.",
          ],
        },
      ]}
    />
  );
}
