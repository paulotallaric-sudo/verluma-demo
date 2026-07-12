import type { Plan } from "@/lib/types";

export const plans: Plan[] = [
  {
    id: "decouverte",
    name: "Découverte",
    price: { monthly: 0, yearly: 0 },
    audience: "Pour vérifier que la méthode vous convient, sans carte bancaire.",
    summary: "L'essentiel pour commencer une langue et prendre l'habitude.",
    features: [
      "1 langue au choix parmi les 10",
      "1 leçon complète par jour",
      "Révision espacée limitée à 20 cartes",
      "Toutes les voix studio, sans restriction de qualité",
    ],
    limits: [
      "Pas de mode hors-ligne",
      "Statistiques sur 7 jours uniquement",
    ],
    cta: { label: "Commencer gratuitement", href: "/inscription" },
  },
  {
    id: "fluide",
    name: "Fluide",
    price: { monthly: 9.9, yearly: 79 },
    audience: "Pour les apprenants réguliers qui veulent progresser sans plafond.",
    summary: "Tout Verluma, toutes les langues, sans aucune limite quotidienne.",
    features: [
      "Les 10 langues, en parallèle si vous voulez",
      "Leçons et révisions illimitées",
      "Mode hors-ligne (train, avion, montagne)",
      "Statistiques complètes et objectifs personnalisés",
      "Dictées et exercices d'écoute avancés",
    ],
    limits: [],
    cta: { label: "Essayer 14 jours", href: "/inscription?plan=fluide" },
    highlighted: true,
  },
  {
    id: "immersion",
    name: "Immersion",
    price: { monthly: 19.9, yearly: 159 },
    audience: "Pour viser un vrai niveau conversationnel, avec des humains en face.",
    summary: "Fluide, plus la pratique orale encadrée qui fait la différence.",
    features: [
      "Tout le plan Fluide",
      "2 sessions de conversation par mois en visio, en petit groupe (4 max.)",
      "Correction personnalisée de votre prononciation chaque semaine",
      "Certificat de niveau Verluma (aligné CECRL)",
      "Accès prioritaire aux nouvelles langues",
    ],
    limits: [],
    cta: { label: "Essayer 14 jours", href: "/inscription?plan=immersion" },
  },
  {
    id: "equipes",
    name: "Équipes",
    price: null,
    priceLabel: "12 € / pers. / mois",
    audience: "Pour les entreprises qui forment leurs équipes aux langues.",
    summary: "Le plan Fluide pour chaque collaborateur, piloté depuis un espace manager.",
    features: [
      "À partir de 5 licences, sans engagement annuel",
      "Tableau de bord manager : assiduité, progression, temps investi",
      "Facturation centralisée et gestion des sièges",
      "Accompagnement au lancement (webinaire d'équipe offert)",
      "Éligible au budget formation",
    ],
    limits: [],
    cta: { label: "Parler à l'équipe", href: "/entreprises#contact" },
  },
];

export const pricingFaq = [
  {
    question: "Puis-je changer de plan ou résilier à tout moment ?",
    answer:
      "Oui. Les abonnements sont sans engagement : vous pouvez passer d'un plan à l'autre ou résilier en deux clics depuis vos réglages. En cas de résiliation, vous gardez l'accès jusqu'à la fin de la période payée, et vos progrès sont conservés si vous revenez.",
  },
  {
    question: "Que se passe-t-il à la fin des 14 jours d'essai ?",
    answer:
      "Nous vous envoyons un rappel 3 jours avant la fin de l'essai. Sans action de votre part, l'abonnement démarre au tarif choisi. Vous pouvez annuler pendant l'essai sans être débité — et vous repassez alors simplement au plan Découverte.",
  },
  {
    question: "Le plan Découverte est-il vraiment gratuit, ou limité dans le temps ?",
    answer:
      "Vraiment gratuit, pour toujours, sans carte bancaire. Il est limité en volume (une leçon par jour, une langue) mais pas en durée ni en qualité : vous entendez exactement les mêmes voix studio que les abonnés.",
  },
  {
    question: "Proposez-vous un tarif réduit ?",
    answer:
      "Oui : −40 % pour les étudiants et les demandeurs d'emploi sur les plans Fluide et Immersion, sur justificatif, depuis la page Tarifs de votre compte. Les parcours occitan et basque bénéficient en plus d'un tarif associatif pour les écoles Calandreta et les ikastola.",
  },
  {
    question: "Comment fonctionnent les sessions de conversation du plan Immersion ?",
    answer:
      "Deux fois par mois, vous réservez un créneau de 40 minutes en visio avec un animateur natif et au maximum trois autres apprenants de votre niveau. Les thèmes reprennent le vocabulaire de vos leçons récentes, pour que vous parliez avec ce que vous venez d'apprendre.",
  },
  {
    question: "Mes données d'apprentissage sont-elles utilisées à des fins publicitaires ?",
    answer:
      "Non. Verluma est financé par les abonnements, pas par la publicité. Vos données de progression servent uniquement à calibrer vos révisions. Elles sont hébergées dans l'Union européenne et vous pouvez les exporter ou les supprimer à tout moment.",
  },
];
