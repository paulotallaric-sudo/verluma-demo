import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales de vente et d'utilisation du service Verluma.",
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
            "Les présentes conditions régissent l'utilisation de la plateforme d'apprentissage des langues Verluma (site web et applications), éditée par Verluma SAS, ainsi que la souscription des abonnements Découverte, Fluide, Immersion et Équipes.",
          ],
        },
        {
          title: "2. Compte et accès",
          paragraphs: [
            "La création d'un compte est gratuite et ouverte à toute personne majeure ou mineure de plus de 15 ans avec accord parental. Vous êtes responsable de la confidentialité de vos identifiants. Un compte est strictement personnel ; les licences Équipes sont nominatives et réattribuables par l'administrateur du compte entreprise.",
          ],
        },
        {
          title: "3. Abonnements, essai et prix",
          paragraphs: [
            "Les plans payants débutent par un essai gratuit de 14 jours, annulable à tout moment avant son terme sans facturation. Les prix affichés sont en euros, toutes taxes comprises. Le paiement s'effectue mensuellement ou annuellement, à échoir, par carte bancaire via notre prestataire Stripe.",
            "Verluma peut faire évoluer ses tarifs ; toute modification est notifiée au moins 30 jours avant application et n'affecte jamais la période déjà payée.",
          ],
        },
        {
          title: "4. Rétractation et résiliation",
          paragraphs: [
            "Conformément à l'article L221-28 du Code de la consommation, vous bénéficiez d'un droit de rétractation de 14 jours pour tout abonnement souscrit en ligne, sauf renoncement exprès en cas d'accès immédiat au contenu numérique.",
            "La résiliation s'effectue en deux clics depuis Réglages → Abonnement et prend effet à la fin de la période en cours. Les progrès d'apprentissage sont conservés et restent accessibles au niveau du plan Découverte.",
          ],
        },
        {
          title: "5. Usage loyal",
          paragraphs: [
            "Le service est destiné à un usage personnel d'apprentissage. Sont notamment interdits : l'extraction massive des contenus pédagogiques ou audio, le partage de compte, la revente d'accès, et toute tentative de contournement des mesures techniques de protection.",
          ],
        },
        {
          title: "6. Responsabilité et disponibilité",
          paragraphs: [
            "Verluma s'engage sur une disponibilité cible de 99,5 % mensuelle, hors maintenances programmées annoncées 48 h à l'avance. Verluma ne garantit pas un résultat d'apprentissage donné — aucune méthode honnête ne le peut — mais rembourse au prorata toute indisponibilité majeure de plus de 72 heures.",
          ],
        },
        {
          title: "7. Droit applicable",
          paragraphs: [
            "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité ; à défaut, vous pouvez recourir gratuitement au médiateur de la consommation CM2C, avant toute action devant les tribunaux de Toulouse.",
          ],
        },
      ]}
    />
  );
}
