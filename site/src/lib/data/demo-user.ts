import type { ActivityEvent, ReviewCard } from "@/lib/types";

/**
 * Sylvie Marchand — persona de démonstration de Verluma.
 * Toutes les données de l'application démo racontent la même histoire :
 * 54 ans, Toulouse, réapprend l'occitan de sa grand-mère depuis fin mars,
 * a ajouté l'italien en mai pour un voyage à Bologne.
 */
export const demoUser = {
  firstName: "Sylvie",
  lastName: "Marchand",
  email: "sylvie@demo.verluma.app",
  password: "occitan2026", // identifiants de démonstration, affichés sur /connexion
  city: "Toulouse",
  memberSince: "28 mars 2026",
  plan: {
    name: "Fluide",
    cycle: "annuel",
    price: "79 € / an",
    renewal: "28 mars 2027",
    paymentMethod: "Visa •••• 4382",
  },
  languages: [
    { slug: "occitan", name: "Occitan", level: "A2", unitsDone: 9, unitsTotal: 24 },
    { slug: "italien", name: "Italien", level: "A1", unitsDone: 3, unitsTotal: 34 },
  ],
  stats: {
    streakDays: 23,
    longestStreak: 31,
    wordsMastered: 412,
    wordsFragile: 57,
    wordsStable: 189,
    wordsSolid: 166,
    minutesThisWeek: 96,
    weeklyGoalMinutes: 105, // 15 min × 7 jours
    accuracy30d: 87,
    reviewsDueToday: 14,
    totalLessons: 118,
  },
  /** Minutes de pratique par jour — 14 derniers jours (dim. 28 juin → sam. 11 juil.). */
  dailyMinutes: [
    { day: "29 juin", label: "L", minutes: 16 },
    { day: "30 juin", label: "M", minutes: 12 },
    { day: "1 juil.", label: "M", minutes: 18 },
    { day: "2 juil.", label: "J", minutes: 9 },
    { day: "3 juil.", label: "V", minutes: 15 },
    { day: "4 juil.", label: "S", minutes: 22 },
    { day: "5 juil.", label: "D", minutes: 11 },
    { day: "6 juil.", label: "L", minutes: 14 },
    { day: "7 juil.", label: "M", minutes: 17 },
    { day: "8 juil.", label: "M", minutes: 13 },
    { day: "9 juil.", label: "J", minutes: 19 },
    { day: "10 juil.", label: "V", minutes: 12 },
    { day: "11 juil.", label: "S", minutes: 21 },
    { day: "12 juil.", label: "D", minutes: 0 }, // aujourd'hui — la leçon du jour n'est pas faite
  ],
  /** Mots maîtrisés, relevé hebdomadaire depuis l'inscription (15 semaines). */
  vocabularyGrowth: [
    12, 31, 54, 79, 102, 131, 148, 177, 214, 246, 271, 305, 342, 381, 412,
  ],
};

export const reviewsDue: ReviewCard[] = [
  { id: "r1", front: "l'ostal", back: "la maison", language: "Occitan", interval: "6 jours", strength: "stable" },
  { id: "r2", front: "polit / polida", back: "joli / jolie", language: "Occitan", interval: "3 jours", strength: "fragile" },
  { id: "r3", front: "lo mercat", back: "le marché", language: "Occitan", interval: "13 jours", strength: "stable" },
  { id: "r4", front: "uèi", back: "aujourd'hui", language: "Occitan", interval: "2 jours", strength: "fragile" },
  { id: "r5", front: "la lenga", back: "la langue", language: "Occitan", interval: "1 mois", strength: "solide" },
  { id: "r6", front: "trabalhar", back: "travailler", language: "Occitan", interval: "8 jours", strength: "stable" },
  { id: "r7", front: "doman", back: "demain", language: "Occitan", interval: "4 jours", strength: "fragile" },
  { id: "r8", front: "la sopa", back: "la soupe", language: "Occitan", interval: "19 jours", strength: "solide" },
  { id: "r9", front: "il treno", back: "le train", language: "Italien", interval: "5 jours", strength: "stable" },
  { id: "r10", front: "la colazione", back: "le petit-déjeuner", language: "Italien", interval: "2 jours", strength: "fragile" },
  { id: "r11", front: "insieme", back: "ensemble", language: "Italien", interval: "7 jours", strength: "stable" },
  { id: "r12", front: "lo peis", back: "le poisson", language: "Occitan", interval: "3 jours", strength: "fragile" },
  { id: "r13", front: "l'aiga", back: "l'eau", language: "Occitan", interval: "1 mois", strength: "solide" },
  { id: "r14", front: "volentieri", back: "volontiers", language: "Italien", interval: "4 jours", strength: "fragile" },
];

export const recentActivity: ActivityEvent[] = [
  {
    date: "Hier, 21 h 40",
    label: "Révision du soir terminée",
    detail: "18 cartes · 16 justes · 6 min",
    kind: "review",
  },
  {
    date: "Hier, 8 h 05",
    label: "Leçon « Au marché » terminée",
    detail: "Occitan · Unité 9 · précision 92 %",
    kind: "lesson",
  },
  {
    date: "Vendredi",
    label: "400 mots maîtrisés en occitan",
    detail: "Palier atteint — 412 aujourd'hui",
    kind: "milestone",
  },
  {
    date: "Vendredi",
    label: "Leçon « Il conto, per favore » terminée",
    detail: "Italien · Unité 3 · précision 84 %",
    kind: "lesson",
  },
  {
    date: "Jeudi",
    label: "Série de 20 jours",
    detail: "Record personnel : 31 jours",
    kind: "streak",
  },
  {
    date: "Jeudi",
    label: "Révision du matin terminée",
    detail: "21 cartes · 19 justes · 7 min",
    kind: "review",
  },
];
