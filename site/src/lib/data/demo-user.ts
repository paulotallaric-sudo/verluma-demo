import type { ActivityEvent, Chantier, Devis } from "@/lib/types";

/**
 * Denis Roubaud — persona de démonstration d'Établi.
 * Toutes les données de l'application racontent la même histoire :
 * menuisier-agenceur à Bordeaux, seul avec un apprenti, sur Établi
 * depuis septembre 2025. Les montants sont en euros HT.
 */
export const demoUser = {
  firstName: "Denis",
  lastName: "Roubaud",
  email: "denis@demo.etabli.fr",
  password: "chantier2026", // identifiants de démonstration, affichés sur /connexion
  company: "Atelier Roubaud — menuiserie & agencement",
  city: "Bordeaux",
  metier: "menuisier",
  siret: "912 480 335 00027",
  memberSince: "8 septembre 2025",
  plan: {
    name: "Artisan",
    cycle: "annuel",
    price: "240 € / an",
    renewal: "8 septembre 2026",
    paymentMethod: "Visa •••• 7204",
  },
  stats: {
    /** Devis envoyés non signés. */
    quotesPending: 5,
    quotesPendingAmount: 21350,
    signatureRate3m: 61,
    medianSignatureDays: 8,
    invoicedYearHT: 90100, // = somme de monthlyRevenue

    /** Factures envoyées, non réglées. */
    toCollect: 12300,
    /** Dont en retard. */
    overdue: 3260,
    activeChantiers: 3,
  },
  /** CA facturé HT par mois, juillet 2025 → juin 2026 (en euros). */
  monthlyRevenue: [
    { month: "Juil.", amount: 4200 },
    { month: "Août", amount: 2600 },
    { month: "Sept.", amount: 7900 },
    { month: "Oct.", amount: 8400 },
    { month: "Nov.", amount: 9600 },
    { month: "Déc.", amount: 5100 },
    { month: "Janv.", amount: 6200 },
    { month: "Févr.", amount: 7800 },
    { month: "Mars", amount: 9400 },
    { month: "Avr.", amount: 8900 },
    { month: "Mai", amount: 10200 },
    { month: "Juin", amount: 9800 },
  ],
};

export const devisList: Devis[] = [
  {
    id: "d1",
    ref: "DE-2026-047",
    client: "M. et Mme Ferrand",
    label: "Dressing chambre principale, portes coulissantes",
    amountHT: 6840,
    status: "vu",
    date: "8 juil.",
    statusDetail: "Vu 3 fois, dernière hier soir — chaud",
  },
  {
    id: "d2",
    ref: "DE-2026-046",
    client: "Dr Klein",
    label: "Bibliothèque murale sur mesure, chêne clair",
    amountHT: 4980,
    status: "envoyé",
    date: "6 juil.",
    statusDetail: "Relance automatique prévue demain",
  },
  {
    id: "d3",
    ref: "DE-2026-045",
    client: "Brasserie Darwin",
    label: "Banquettes + claustra salle du fond",
    amountHT: 7420,
    status: "vu",
    date: "3 juil.",
    statusDetail: "Vu il y a 5 jours — relancé mardi",
  },
  {
    id: "d4",
    ref: "DE-2026-044",
    client: "Mme Lacoste",
    label: "Remplacement 4 fenêtres bois double vitrage",
    amountHT: 5230,
    status: "signé",
    date: "1 juil.",
    statusDetail: "Signé en 2 jours · acompte 30 % encaissé",
  },
  {
    id: "d5",
    ref: "DE-2026-043",
    client: "SCI Les Chartrons",
    label: "Porte cochère restaurée + bloc-porte",
    amountHT: 2880,
    status: "envoyé",
    date: "28 juin",
    statusDetail: "Jamais ouvert — relance J+12 partie",
  },
  {
    id: "d6",
    ref: "DE-2026-042",
    client: "M. Bideau",
    label: "Escalier droit hêtre, garde-corps câbles",
    amountHT: 8790,
    status: "refusé",
    date: "24 juin",
    statusDetail: "Parti avec un concurrent — motif : délai",
  },
  {
    id: "d7",
    ref: "DE-2026-041",
    client: "Mme Okafor",
    label: "Plan de travail noyer massif + crédence",
    amountHT: 2140,
    status: "signé",
    date: "21 juin",
    statusDetail: "Signé le jour même · chantier planifié",
  },
];

export const chantiers: Chantier[] = [
  {
    id: "c1",
    label: "Cuisine complète — pose et agencement",
    client: "Famille Vasseur",
    city: "Bordeaux Caudéran",
    amountHT: 18400,
    progress: 65,
    stage: "Caissons posés, façades en cours",
    dueLabel: "Fin prévue : 24 juillet",
  },
  {
    id: "c2",
    label: "Remplacement 4 fenêtres bois",
    client: "Mme Lacoste",
    city: "Le Bouscat",
    amountHT: 5230,
    progress: 15,
    stage: "Fenêtres commandées chez le fournisseur",
    dueLabel: "Pose : semaine du 18 août",
  },
  {
    id: "c3",
    label: "Plan de travail noyer + crédence",
    client: "Mme Okafor",
    city: "Bordeaux Chartrons",
    amountHT: 2140,
    progress: 40,
    stage: "Débit fait, façonnage en atelier",
    dueLabel: "Pose : 22 juillet",
    alert: "Situation intermédiaire à facturer (40 %)",
  },
];

export const encaissements = [
  {
    id: "f1",
    ref: "FA-2026-038",
    client: "Famille Vasseur",
    label: "Situation n° 2 — cuisine (40 %)",
    amountTTC: 8096,
    due: "Échéance : 20 juillet",
    state: "à venir" as const,
  },
  {
    id: "f2",
    ref: "FA-2026-036",
    client: "Syndic Foncia Gambetta",
    label: "Remplacement porte hall d'immeuble",
    amountTTC: 3260,
    due: "En retard de 18 jours — 3ᵉ relance partie",
    state: "retard" as const,
  },
  {
    id: "f3",
    ref: "FA-2026-037",
    client: "M. Delhome",
    label: "Solde volets bois (2 paires)",
    amountTTC: 944,
    due: "Échéance : 15 juillet",
    state: "à venir" as const,
  },
];

export const recentActivity: ActivityEvent[] = [
  {
    date: "Hier, 21 h 12",
    label: "Devis Ferrand consulté (3ᵉ fois)",
    detail: "DE-2026-047 · 6 840 € HT — pensez à appeler",
    kind: "devis",
  },
  {
    date: "Hier, 9 h 30",
    label: "Acompte encaissé — Mme Lacoste",
    detail: "1 726 € TTC par carte · FA-2026-039",
    kind: "paiement",
  },
  {
    date: "Mercredi",
    label: "Devis signé électroniquement",
    detail: "DE-2026-044 · fenêtres Lacoste · signé en 2 jours",
    kind: "signature",
  },
  {
    date: "Mercredi",
    label: "Chantier Vasseur passé à 65 %",
    detail: "Situation n° 2 générée automatiquement",
    kind: "chantier",
  },
  {
    date: "Mardi",
    label: "Relance envoyée — Brasserie Darwin",
    detail: "DE-2026-045 · relance douce J+5",
    kind: "devis",
  },
  {
    date: "Lundi",
    label: "Facture Foncia en retard : 3ᵉ relance",
    detail: "FA-2026-036 · 3 260 € TTC · mise en demeure proposée",
    kind: "paiement",
  },
];
