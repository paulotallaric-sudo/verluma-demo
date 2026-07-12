import type { Testimonial } from "@/lib/types";

/**
 * Témoignages de démonstration — personas fictifs mais réalistes,
 * cohérents avec les métiers et les usages du produit.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Denis Roubaud",
    metier: "Menuisier-agenceur",
    city: "Bordeaux",
    quote:
      "Avant, le devis d'un dressing me prenait ma soirée du mercredi. Maintenant je le fais chez le client, sur la tablette, avec mes prix à moi. Il signe une fois sur deux avant que je remonte dans le fourgon.",
    detail: "37 devis envoyés ce trimestre · 61 % signés",
  },
  {
    name: "Nadia Ferhat",
    metier: "Électricienne",
    city: "Villeurbanne",
    quote:
      "La relance automatique a récupéré 4 800 € de factures que je n'osais plus réclamer. Le mail est poli, il part tout seul, et c'est l'outil qui a l'air insistant — pas moi. Honnêtement, rien que ça paie l'abonnement pour dix ans.",
    detail: "Délai de paiement moyen : 31 j → 12 j",
  },
  {
    name: "Fabien Guéguen",
    metier: "Plombier-chauffagiste",
    city: "Lorient",
    quote:
      "L'acompte en ligne a tout changé : le client signe le devis de la salle de bains et paie ses 30 % dans la foulée, le soir même sur son canapé. Je ne commande plus la robinetterie avec ma trésorerie, mais avec la sienne.",
    detail: "9 400 € d'acomptes encaissés en mars",
  },
  {
    name: "Sofia Delmas",
    metier: "Peintre en bâtiment",
    city: "Toulouse",
    quote:
      "Mon comptable m'a demandé ce qui s'était passé : tout arrive classé, numéroté, exportable. Moi, ce que je vois, c'est que je fais mes papiers le vendredi en 40 minutes au lieu du dimanche en 3 heures.",
    detail: "Passée du classeur A4 à Établi en un week-end",
  },
  {
    name: "Marc Antonini",
    metier: "Maçon",
    city: "Bastia",
    quote:
      "Sur une extension à 58 000 €, Établi m'a découpé le devis en quatre tranches avec appel d'acompte automatique à chaque étape. Le client sait ce qu'il paie et quand. Zéro discussion en fin de chantier — une première en vingt ans.",
    detail: "Plan Atelier · 4 salariés",
  },
  {
    name: "Julien Vasse",
    metier: "Couvreur-zingueur",
    city: "Rouen",
    quote:
      "Après la tempête de novembre, 26 devis dans la semaine, tous avec photos jointes. Ma bibliothèque connaît mes prix au m² : je dicte, ça chiffre. Sans ça, je refusais la moitié des chantiers, tout simplement.",
    detail: "26 devis en 6 jours · 19 signés",
  },
];

export const networkCase = {
  company: "Coopérative Artibat 17",
  sector: "Groupement d'achats — 140 artisans adhérents, Charente-Maritime",
  contact: "Laurence Pommier, directrice du groupement",
  challenge:
    "Des adhérents qui achètent bien grâce au groupement, mais qui vendent mal : devis tardifs, relances inexistantes, aucune visibilité du bureau sur la santé commerciale du réseau.",
  solution:
    "Établi déployé en offre Réseaux sur 85 adhérents volontaires, avec les bibliothèques d'ouvrages pré-remplies aux tarifs négociés de la coopérative et deux sessions de formation en visio.",
  results: [
    { figure: "72 %", label: "des adhérents équipés actifs chaque semaine après un an" },
    { figure: "9 j", label: "de délai médian entre devis envoyé et signature (vs 23 j avant)" },
    { figure: "−38 %", label: "d'encours client en souffrance sur le périmètre équipé" },
  ],
  quote:
    "On a essayé de former nos adhérents à un logiciel généraliste : abandon massif en trois mois. Avec Établi, ils retrouvent leurs unités, leurs ouvrages, leurs mots. Le bureau voit enfin les vrais chiffres du réseau, et les artisans ont récupéré leurs dimanches — c'est eux qui le disent.",
};
