import type { Plan } from "@/lib/types";

export const plans: Plan[] = [
  {
    id: "etabli",
    name: "Établi",
    price: { monthly: 0, yearly: 0 },
    audience: "Pour démarrer, ou pour les toutes petites activités.",
    summary: "L'essentiel pour faire des devis et factures propres, gratuitement.",
    features: [
      "3 devis et 3 factures par mois",
      "Mentions légales et CGV conformes, à jour",
      "Suivi « envoyé / vu / signé » sur chaque devis",
      "Export PDF et envoi par e-mail",
    ],
    limits: [
      "Pas d'encaissement en ligne",
      "Pas de bibliothèque d'ouvrages métier",
    ],
    cta: { label: "Commencer gratuitement", href: "/inscription" },
  },
  {
    id: "artisan",
    name: "Artisan",
    price: { monthly: 24, yearly: 240 },
    audience: "Pour l'artisan seul qui veut récupérer ses soirées.",
    summary: "Devis illimités, signature électronique et acomptes encaissés en ligne.",
    features: [
      "Devis, factures et avoirs illimités",
      "Bibliothèque d'ouvrages de votre métier, à vos prix",
      "Signature électronique + acompte payé en ligne (CB, virement)",
      "Relances automatiques et polies des devis et factures",
      "Suivi de chantiers et tableau de trésorerie",
      "Prêt pour la facturation électronique 2026-2027",
    ],
    limits: [],
    cta: { label: "Essayer 30 jours", href: "/inscription?plan=artisan" },
    highlighted: true,
  },
  {
    id: "atelier",
    name: "Atelier",
    price: { monthly: 49, yearly: 490 },
    audience: "Pour les équipes de 2 à 10 : conjoint·e, chef d'équipe, secrétariat.",
    summary: "Artisan, plus le travail à plusieurs et les chantiers complexes.",
    features: [
      "Tout le plan Artisan, pour 3 utilisateurs (puis 8 €/util.)",
      "Situations de travaux et facturation à l'avancement",
      "Devis en tranches avec appels d'acompte par étape",
      "Rôles et droits (le poseur voit ses chantiers, pas vos marges)",
      "Export comptable (FEC) et accès dédié pour votre expert-comptable",
    ],
    limits: [],
    cta: { label: "Essayer 30 jours", href: "/inscription?plan=atelier" },
  },
  {
    id: "reseaux",
    name: "Réseaux",
    price: null,
    priceLabel: "Sur devis",
    audience: "Pour les coopératives, franchises et groupements d'artisans.",
    summary: "Déployez Établi sur tout votre réseau, avec vos tarifs négociés.",
    features: [
      "À partir de 20 adhérents équipés",
      "Bibliothèques d'ouvrages mutualisées aux prix du groupement",
      "Tableau de bord réseau : volumes, délais de signature, impayés",
      "Formation des adhérents incluse (visio + hotline dédiée)",
      "Marque blanche possible sur les documents",
    ],
    limits: [],
    cta: { label: "Parler à l'équipe", href: "/reseaux#contact" },
  },
];

export const pricingFaq = [
  {
    question: "Puis-je changer de plan ou résilier à tout moment ?",
    answer:
      "Oui. Les abonnements sont sans engagement : changement de plan ou résiliation en deux clics depuis vos réglages. Vos documents restent téléchargeables même après résiliation — devis et factures signés vous appartiennent, et la loi vous impose de les conserver.",
  },
  {
    question: "Que se passe-t-il à la fin des 30 jours d'essai ?",
    answer:
      "Nous vous prévenons 5 jours avant la fin. Sans action de votre part, vous basculez automatiquement sur le plan gratuit — jamais sur un prélèvement surprise. Vous choisissez de payer le jour où l'outil vous a déjà fait gagner ses 24 €.",
  },
  {
    question: "L'encaissement en ligne, combien ça coûte ?",
    answer:
      "L'acompte payé par carte coûte 1,4 % + 0,25 € par transaction (le tarif de notre prestataire de paiement, sans marge cachée de notre part). Le virement instantané est gratuit. Vous pouvez aussi continuer à encaisser les chèques — on ne juge pas, on les suit quand même.",
  },
  {
    question: "Suis-je prêt pour la facturation électronique obligatoire ?",
    answer:
      "Oui. Établi est raccordé à une plateforme agréée : dès que l'obligation s'applique à votre entreprise (2026 pour la réception, 2027 pour l'émission des TPE), vos factures partent au bon format sans que vous changiez quoi que ce soit à vos habitudes.",
  },
  {
    question: "Mes prix et mes clients sont-ils récupérables si je pars ?",
    answer:
      "Toujours. Export complet en un clic : clients, ouvrages, devis, factures, règlements — dans des formats lisibles (CSV, PDF, FEC). Un outil qui vous retient en prenant vos données en otage ne mérite pas vos 24 € mensuels.",
  },
  {
    question: "Et si je ne suis pas à l'aise avec l'informatique ?",
    answer:
      "Établi est pensé pour être pris en main en une soirée, et notre support est assuré par des humains qui connaissent le bâtiment — pas un chatbot. Au téléphone ou par e-mail, du lundi au vendredi, réponse en moins de 4 heures ouvrées.",
  },
];
