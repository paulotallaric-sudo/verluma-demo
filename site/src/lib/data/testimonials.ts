import type { Testimonial } from "@/lib/types";

/**
 * Témoignages de démonstration — personas fictifs mais réalistes,
 * cohérents avec les langues et les usages du produit.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sylvie Marchand",
    age: 54,
    city: "Toulouse",
    language: "Occitan",
    quote:
      "Ma grand-mère me parlait occitan et je ne savais lui répondre qu'en français. Vingt-trois jours de suite que j'ouvre Verluma avec mon café. La semaine dernière, j'ai rêvé en occitan.",
    detail: "412 mots maîtrisés · série de 23 jours",
  },
  {
    name: "Karim Benhaddou",
    age: 33,
    city: "Lyon",
    language: "Japonais",
    quote:
      "Je pars à Osaka en mars pour mon travail. Les kana en douze jours, vraiment. Et surtout : quand la voix parle à vitesse réelle, je comprends — parce que c'est comme ça qu'on m'a entraîné depuis le début.",
    detail: "Unité 14 sur 36 · plan Immersion",
  },
  {
    name: "Élodie Rivoal",
    age: 41,
    city: "Nantes",
    language: "Anglais",
    quote:
      "Quinze ans d'anglais scolaire, zéro réunion à l'aise. Les dialogues « réunion client » de Verluma sont d'un réalisme gênant. Trois mois plus tard, j'anime nos calls avec Manchester sans préparer mes phrases la veille.",
    detail: "Précision d'écoute : 68 % → 91 %",
  },
  {
    name: "Jon Etcheverry",
    age: 29,
    city: "Bayonne",
    language: "Basque",
    quote:
      "J'avais essayé deux applis « générales » : le basque n'y existait pas, ou en version robot. Ici, c'est la voix de quelqu'un de Saint-Sébastien qui me corrige. Ma mère n'en revient pas qu'on se parle en euskara au téléphone.",
    detail: "Série de 61 jours",
  },
  {
    name: "Amélie Kastler",
    city: "Strasbourg",
    language: "Allemand",
    quote:
      "Le tableau de bord me dit exactement quoi réviser et quand. Dix minutes le matin, cinq le soir. C'est la première méthode où je n'ai pas l'impression de repartir de zéro après une semaine de vacances.",
    detail: "Cheffe de projet export",
  },
  {
    name: "Paulo Ferreira",
    age: 47,
    city: "Bordeaux",
    language: "Portugais",
    quote:
      "Fils d'immigrés portugais, je comprenais tout sans oser parler. Verluma m'a rendu la parole — littéralement. Aux dernières vacances à Braga, c'est moi qui commandais pour toute la table.",
    detail: "Parcours héritage · 9 mois",
  },
];

export const companyCase = {
  company: "Maison Bergame",
  sector: "Maroquinerie — 85 salariés, Grasse",
  contact: "Nathalie Combes, directrice des ressources humaines",
  challenge:
    "Un tiers du chiffre d'affaires réalisé en Italie, et des équipes atelier comme commerciales qui dépendaient de deux personnes bilingues pour chaque échange avec les partenaires de Florence.",
  solution:
    "22 licences Équipes déployées en septembre, avec l'italien pour objectif commun et un créneau « quart d'heure Verluma » institué après la pause déjeuner.",
  results: [
    { figure: "19/22", label: "collaborateurs actifs chaque semaine après 6 mois" },
    { figure: "14 min", label: "de pratique quotidienne en moyenne" },
    { figure: "2×", label: "moins de sollicitations des deux référents bilingues" },
  ],
  quote:
    "On avait testé des cours collectifs le jeudi soir : présence en chute libre dès novembre. Avec Verluma, la pratique s'est glissée dans la journée de travail. Le tableau de bord me permet de valoriser l'assiduité, pas de fliquer — et ça, les équipes l'ont très bien compris.",
};
