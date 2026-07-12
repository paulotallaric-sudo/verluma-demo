import type { Metier } from "@/lib/types";

/**
 * Les 8 métiers couverts par Établi au lancement. Chaque métier a une
 * identité visuelle (pastille + teinte) et une bibliothèque d'ouvrages
 * pré-chiffrés. La somme des utilisateurs ≈ 12 400 (chiffre de l'accueil).
 */
export const metiers: Metier[] = [
  {
    slug: "menuisier",
    name: "Menuisier-agenceur",
    plural: "menuisiers-agenceurs",
    chip: "Me",
    hue: "#F1E4D2",
    hueText: "#7A4E14",
    tagline: "Du sur-mesure dans l'atelier, pas dans la paperasse.",
    description:
      "Dressing, cuisine, escalier : chaque ouvrage est unique, mais vos lignes de devis se ressemblent. La bibliothèque menuiserie d'Établi chiffre débit, quincaillerie, finition et pose en gardant vos prix à vous — et vos devis sortent pendant que le client est encore chaud.",
    users: 2900,
    libraryExamples: [
      "Agencement dressing (m² de façade)",
      "Escalier droit chêne, pose comprise",
      "Fenêtre bois double vitrage (à l'unité)",
      "Plan de travail massif, façonnage + pose",
    ],
    painPoint: "Les devis d'agencement à la ligne près, c'est 2 h chaque soir.",
  },
  {
    slug: "electricien",
    name: "Électricien",
    plural: "électriciens",
    chip: "Él",
    hue: "#F9E9C8",
    hueText: "#755410",
    tagline: "Le tableau est aux normes. Vos devis aussi.",
    description:
      "Mise en sécurité, tableau, domotique, bornes IRVE : la bibliothèque électricité suit les libellés que vos clients comprennent et les unités que vous pratiquez (point lumineux, prise, circuit). Les attestations et mentions obligatoires sont posées d'office.",
    users: 2400,
    libraryExamples: [
      "Point lumineux commandé (à l'unité)",
      "Tableau 3 rangées, pose et raccordement",
      "Borne de recharge 7,4 kW, config incluse",
      "Mise à la terre complète pavillon",
    ],
    painPoint: "Trois relances par facture, ça use plus qu'une dalle béton.",
  },
  {
    slug: "plombier",
    name: "Plombier-chauffagiste",
    plural: "plombiers-chauffagistes",
    chip: "Pl",
    hue: "#D9E8F0",
    hueText: "#1F5A78",
    tagline: "Le dépannage se facture sur place, pas dimanche soir.",
    description:
      "Entre deux urgences, personne n'a le temps d'ouvrir un tableur. Sur Établi, le devis de dépannage part du fourgon en 4 minutes, la facture suit en un geste, et l'acompte de la salle de bains est encaissé avant d'acheter la robinetterie.",
    users: 2200,
    libraryExamples: [
      "Remplacement chauffe-eau 200 L, dépose incluse",
      "Salle de bains complète (pack rénovation)",
      "Recherche de fuite + reprise cuivre",
      "PAC air/eau, mise en service comprise",
    ],
    painPoint: "L'acompte pas encaissé, c'est vous qui financez la robinetterie.",
  },
  {
    slug: "macon",
    name: "Maçon",
    plural: "maçons",
    chip: "Ma",
    hue: "#E6E2DA",
    hueText: "#57503F",
    tagline: "Les fondations, c'est votre métier. Y compris en trésorerie.",
    description:
      "Gros œuvre = gros montants = gros risques d'impayés. Établi structure vos devis en tranches, déclenche les appels d'acompte à chaque étape (fondations, élévation, toiture) et vous montre en un écran ce que chaque chantier vous doit encore.",
    users: 1600,
    libraryExamples: [
      "Ouverture mur porteur + IPN (forfait étude incluse)",
      "Dalle béton 15 cm ferraillée (m²)",
      "Élévation parpaing 20 (m²)",
      "Enduit taloché 2 couches (m²)",
    ],
    painPoint: "40 000 € de chantier, 3 acomptes : sans suivi, on s'y perd.",
  },
  {
    slug: "peintre",
    name: "Peintre en bâtiment",
    plural: "peintres",
    chip: "Pe",
    hue: "#E4E9E2",
    hueText: "#3F5C3A",
    tagline: "Des finitions impeccables, jusque dans les CGV.",
    description:
      "Le peintre est souvent le dernier payé du chantier. Établi vous arme : devis clairs pièce par pièce, acompte à la commande, situation intermédiaire à mi-chantier, relances automatiques mais polies. Vos marges cessent de s'évaporer dans les « on verra à la fin ».",
    users: 1300,
    libraryExamples: [
      "Murs et plafonds 2 couches (m²)",
      "Préparation supports anciens (m²)",
      "Laque tendue boiseries (ml)",
      "Ravalement façade au rouleau (m²)",
    ],
    painPoint: "Dernier arrivé sur le chantier, dernier payé. Plus maintenant.",
  },
  {
    slug: "couvreur",
    name: "Couvreur-zingueur",
    plural: "couvreurs",
    chip: "Co",
    hue: "#E2E4EC",
    hueText: "#3D4770",
    tagline: "Vous travaillez en hauteur. Vos devis restent au niveau.",
    description:
      "Urgences tempête, rénovations complètes, zinguerie fine : la bibliothèque couverture gère les unités du métier (m², ml de gouttière, à l'unité pour les vélux) et les photos de chantier s'attachent au devis — le client comprend ce qu'il paie, il signe plus vite.",
    users: 900,
    libraryExamples: [
      "Réfection complète tuile mécanique (m²)",
      "Gouttière zinc développé 33 (ml)",
      "Remplacement vélux 78×98 (à l'unité)",
      "Traitement + hydrofuge toiture (m²)",
    ],
    painPoint: "Après la tempête, 30 devis à sortir en une semaine.",
  },
  {
    slug: "carreleur",
    name: "Carreleur",
    plural: "carreleurs",
    chip: "Ca",
    hue: "#F0E0E0",
    hueText: "#7A3B3B",
    tagline: "Au millimètre sur les joints. Au centime sur les devis.",
    description:
      "Entre le grand format qui se facture à la difficulté et les chapes qui changent tout, un devis de carrelage mal chiffré se paie cash. La bibliothèque carrelage intègre vos coefficients (format, diagonale, chape, plinthes) pour que le prix juste sorte du premier coup.",
    users: 600,
    libraryExamples: [
      "Pose droite 60×60 sur chape (m²)",
      "Faïence salle de bains toute hauteur (m²)",
      "Chape fluide anhydrite (m²)",
      "Plinthes assorties (ml)",
    ],
    painPoint: "Un coefficient oublié sur du 120×120, et la marge y passe.",
  },
  {
    slug: "paysagiste",
    name: "Paysagiste",
    plural: "paysagistes",
    chip: "Pa",
    hue: "#DFEBDD",
    hueText: "#2F6136",
    tagline: "Vous dessinez des jardins. Établi dessine le reste.",
    description:
      "Création et entretien ne se facturent pas pareil : Établi gère les deux — devis de création par postes (terrassement, plantation, arrosage) et contrats d'entretien récurrents avec facturation automatique chaque mois. Votre hiver se prépare l'été.",
    users: 500,
    libraryExamples: [
      "Engazonnement par plaques (m²)",
      "Terrasse bois exotique sur plots (m²)",
      "Contrat entretien annuel (12 passages)",
      "Arrosage automatique 6 zones",
    ],
    painPoint: "Les contrats d'entretien à refacturer chaque mois, à la main…",
  },
];

export const totalUsers = metiers.reduce((sum, m) => sum + m.users, 0);

export function getMetier(slug: string): Metier | undefined {
  return metiers.find((m) => m.slug === slug);
}
