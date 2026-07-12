import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "La politique cookies la plus courte que vous lirez cette année : Établi n'utilise aucun traceur publicitaire.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      updated="12 juillet 2026"
      intro="C'est la politique cookies la plus courte que vous lirez cette année, et c'est volontaire."
      sections={[
        {
          title: "Pourquoi il n'y a pas de bannière",
          paragraphs: [
            "Le site public d'Établi ne dépose aucun cookie publicitaire, aucun traceur tiers, aucun pixel de réseau social. Notre mesure d'audience est auto-hébergée et fonctionne sans cookie ni identifiant individuel. La réglementation n'exige un recueil de consentement que pour les traceurs non essentiels : nous n'en avons pas.",
          ],
        },
        {
          title: "Ce que nous stockons quand même",
          paragraphs: [
            "Un cookie de session strictement nécessaire lorsque vous êtes connecté·e à votre compte (authentification). Ce stockage est exempté de consentement au sens des lignes directrices de la CNIL.",
            "Sur cette version de démonstration, la « session » est simulée dans le stockage local de votre navigateur et ne quitte jamais votre machine.",
          ],
        },
        {
          title: "Comment tout effacer",
          paragraphs: [
            "Déconnectez-vous, ou supprimez les données du site etabli.fr depuis les réglages de votre navigateur. Il n'y a rien d'autre à effacer ailleurs — c'est toute l'idée.",
          ],
        },
      ]}
    />
  );
}
