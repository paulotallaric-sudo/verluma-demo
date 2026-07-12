import type { Language } from "@/lib/types";

/**
 * Les 10 langues Verluma. Chaque langue a une identité visuelle
 * (pastille + teinte) et des chiffres cohérents avec le reste du site :
 * la somme des apprenants ≈ 38 000 (chiffre affiché en page d'accueil).
 */
export const languages: Language[] = [
  {
    slug: "anglais",
    withArticle: "l'anglais",
    name: "Anglais",
    nativeName: "English",
    chip: "En",
    hue: "#DCE8F5",
    hueText: "#274E75",
    tagline: "Celui qu'on croit connaître — jusqu'à la première réunion.",
    description:
      "Notre parcours d'anglais est pensé pour les adultes qui le « lisent très bien » mais se figent à l'oral. Chaque unité travaille la compréhension de vraies conversations : réunions, appels, small talk, accents britannique et américain.",
    learners: 14200,
    units: 42,
    hoursOfAudio: 9,
    voices: ["Harriet (Londres)", "Marcus (Chicago)"],
    sampleSentence: {
      original: "I'll get back to you by Friday at the latest.",
      translation: "Je reviens vers vous vendredi au plus tard.",
    },
  },
  {
    slug: "espagnol",
    withArticle: "l'espagnol",
    name: "Espagnol",
    nativeName: "Español",
    chip: "Es",
    hue: "#F7E3D4",
    hueText: "#8A4A1E",
    tagline: "500 millions de locuteurs, et une méthode qui va au-delà de « una cerveza ».",
    description:
      "De Madrid à Bogotá : un parcours qui assume les différences d'accents et d'usages plutôt que de les gommer. Le subjonctif y est introduit par l'oreille, pas par les tableaux de conjugaison.",
    learners: 8600,
    units: 38,
    hoursOfAudio: 7,
    voices: ["Carmen (Séville)", "Andrés (Medellín)"],
    sampleSentence: {
      original: "¿Quedamos mañana después del trabajo?",
      translation: "On se voit demain après le travail ?",
    },
  },
  {
    slug: "italien",
    withArticle: "l'italien",
    name: "Italien",
    nativeName: "Italiano",
    chip: "It",
    hue: "#E3EFDD",
    hueText: "#3D6B2E",
    tagline: "La langue qu'on apprend par plaisir — et qu'on garde par fierté.",
    description:
      "Un parcours construit autour de la conversation quotidienne : le marché, la table, le train, la famille. Les dialogues sont enregistrés à Rome et à Bologne, à vitesse réelle puis ralentie.",
    learners: 5100,
    units: 34,
    hoursOfAudio: 6,
    voices: ["Giulia (Bologne)", "Matteo (Rome)"],
    sampleSentence: {
      original: "Facciamo due passi prima di cena?",
      translation: "On fait quelques pas avant le dîner ?",
    },
  },
  {
    slug: "allemand",
    withArticle: "l'allemand",
    name: "Allemand",
    nativeName: "Deutsch",
    chip: "De",
    hue: "#E8E4F2",
    hueText: "#4A3B78",
    tagline: "Réputé difficile. Surtout mal enseigné.",
    description:
      "L'allemand devient limpide quand on cesse d'empiler les déclinaisons hors contexte. Notre parcours les fait entendre dans des phrases utiles avant de les nommer — l'ordre des mots vient naturellement.",
    learners: 3400,
    units: 30,
    hoursOfAudio: 6,
    voices: ["Katrin (Hambourg)", "Jonas (Vienne)"],
    sampleSentence: {
      original: "Können wir den Termin auf Dienstag verschieben?",
      translation: "Peut-on décaler le rendez-vous à mardi ?",
    },
  },
  {
    slug: "portugais",
    withArticle: "le portugais",
    name: "Portugais",
    nativeName: "Português",
    chip: "Pt",
    hue: "#DFEDEA",
    hueText: "#22635A",
    tagline: "Deux continents, deux musiques, un seul parcours honnête.",
    description:
      "Lisbonne et São Paulo ne parlent pas tout à fait la même langue. Verluma vous fait choisir votre variante dès la première leçon, avec des voix natives des deux rives.",
    learners: 2300,
    units: 26,
    hoursOfAudio: 5,
    voices: ["Inês (Lisbonne)", "Rafael (São Paulo)"],
    sampleSentence: {
      original: "Amanhã combinamos tudo com calma.",
      translation: "Demain, on organise tout ça tranquillement.",
    },
  },
  {
    slug: "japonais",
    withArticle: "le japonais",
    name: "Japonais",
    nativeName: "日本語",
    chip: "日",
    hue: "#F8DFE3",
    hueText: "#943B4A",
    tagline: "Trois écritures, une logique. On commence par l'oreille.",
    description:
      "Les kana s'apprennent en deux semaines avec la répétition espacée ; la politesse et les particules s'acquièrent par l'écoute de dialogues réels. Les kanji arrivent quand vous êtes prêt, jamais avant.",
    learners: 2900,
    units: 36,
    hoursOfAudio: 8,
    voices: ["Aoi (Tokyo)", "Kenji (Osaka)"],
    sampleSentence: {
      original: "駅までどうやって行きますか。",
      translation: "Comment va-t-on jusqu'à la gare ?",
    },
  },
  {
    slug: "occitan",
    withArticle: "l'occitan",
    name: "Occitan",
    nativeName: "Occitan",
    chip: "Oc",
    hue: "#F9E9CC",
    hueText: "#7A5410",
    tagline: "La langue de vos grands-parents mérite mieux que l'oubli.",
    heritage: true,
    description:
      "Le parcours d'occitan le plus complet jamais mis en ligne : languedocien de référence, ouvertures vers le gascon et le provençal, et 6 heures de voix enregistrées avec des locuteurs natifs de Toulouse, Rodez et Pau. Conçu avec des enseignants de Calandreta.",
    learners: 900,
    units: 24,
    hoursOfAudio: 6,
    voices: ["Miquèla (Toulouse)", "Joan (Rodez)"],
    sampleSentence: {
      original: "Cossí te dison, e d'ont venes?",
      translation: "Comment t'appelles-tu, et d'où viens-tu ?",
    },
  },
  {
    slug: "basque",
    withArticle: "le basque",
    name: "Basque",
    nativeName: "Euskara",
    chip: "Eu",
    hue: "#DBEDE4",
    hueText: "#1F6647",
    tagline: "La plus ancienne langue d'Europe, enfin accessible aux débutants.",
    heritage: true,
    description:
      "L'euskara n'est apparenté à aucune autre langue vivante — et c'est précisément pour cela qu'il faut l'apprendre par l'usage. Parcours batua avec voix de Bayonne et Saint-Sébastien, du premier « kaixo » jusqu'aux conversations de famille.",
    learners: 700,
    units: 22,
    hoursOfAudio: 5,
    voices: ["Maialen (Bayonne)", "Ander (Saint-Sébastien)"],
    sampleSentence: {
      original: "Bihar arte, ondo lo egin!",
      translation: "À demain, dors bien !",
    },
  },
  {
    slug: "francais",
    withArticle: "le français",
    name: "Français",
    nativeName: "Français",
    chip: "Fr",
    hue: "#E5E9F4",
    hueText: "#33477E",
    tagline: "Pour celles et ceux qui vivent en France et veulent y être chez eux.",
    description:
      "Un parcours FLE (français langue étrangère) orienté vie réelle : administration, travail, médecin, école des enfants. Interface disponible en anglais, espagnol et portugais.",
    learners: 1100,
    units: 32,
    hoursOfAudio: 7,
    voices: ["Claire (Paris)", "Sami (Marseille)"],
    sampleSentence: {
      original: "J'aurais besoin d'un rendez-vous cette semaine, si possible.",
      translation: "I would need an appointment this week, if possible.",
    },
  },
  {
    slug: "bresilien",
    withArticle: "le portugais du Brésil",
    name: "Portugais du Brésil",
    nativeName: "Português brasileiro",
    chip: "Br",
    hue: "#FBF3D2",
    hueText: "#6E5A0A",
    tagline: "La variante la plus parlée, avec sa musique à elle.",
    description:
      "Un parcours dédié — pas un simple doublage du portugais européen. Prononciation carioca et pauliste, usages informels réels, et la grammaire telle qu'elle se parle vraiment au Brésil.",
    learners: 800,
    units: 20,
    hoursOfAudio: 4,
    voices: ["Luiza (Rio)", "Thiago (São Paulo)"],
    sampleSentence: {
      original: "A gente se fala mais tarde, tá?",
      translation: "On se parle plus tard, d'accord ?",
    },
  },
];

export const totalLearners = languages.reduce((sum, l) => sum + l.learners, 0);

export function getLanguage(slug: string): Language | undefined {
  return languages.find((l) => l.slug === slug);
}
