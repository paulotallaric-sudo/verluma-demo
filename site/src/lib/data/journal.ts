import type { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "voix-studio-contre-synthese-vocale",
    title: "Pourquoi nous avons enregistré 60 heures de voix en studio (et jeté la synthèse vocale)",
    excerpt:
      "La synthèse vocale coûte cent fois moins cher et se génère en une nuit. Nous avons quand même choisi les studios, les comédiens natifs et les reprises à 23 h. Voici pourquoi votre oreille nous a donné raison.",
    date: "2026-05-12",
    readingMinutes: 6,
    author: { name: "Claire Vasseur", role: "Cofondatrice, direction pédagogique" },
    tag: "Méthode",
    body: [
      {
        type: "p",
        text: "En 2024, quand nous avons commencé Verluma, la question ne se posait officiellement plus : tout le monde passait à la synthèse vocale. Les voix générées étaient devenues « indiscernables des voix humaines », nous répétait-on. Nous avons fait le test sérieusement, avec un panel de 40 apprenants et deux orthophonistes. Le résultat nous a coûté très cher — et il a défini le produit.",
      },
      {
        type: "h2",
        text: "Ce que l'oreille d'un débutant entend (et que la vôtre n'entend plus)",
      },
      {
        type: "p",
        text: "Une voix de synthèse moderne est convaincante pour quelqu'un qui parle déjà la langue. Mais un débutant ne « comprend » pas une phrase : il la décompose. Il s'accroche aux attaques de consonnes, aux fins de mots avalées, à la respiration qui signale qu'une proposition se termine. Or c'est exactement là que la synthèse triche : elle lisse. Les liaisons facultatives deviennent systématiques, les hésitations disparaissent, l'intonation de question monte toujours au même endroit.",
      },
      {
        type: "p",
        text: "Nos testeurs débutants faisaient 22 % d'erreurs de plus en dictée sur les phrases synthétiques que sur les mêmes phrases lues par un comédien — alors que les intermédiaires ne voyaient presque pas de différence. Autrement dit : la synthèse pénalise précisément les gens qu'une méthode doit servir en premier.",
      },
      {
        type: "h2",
        text: "Le cas des langues que personne n'enregistre",
      },
      {
        type: "p",
        text: "Pour l'occitan et le basque, le débat n'existait même pas : les modèles de synthèse y sont soit inexistants, soit entraînés sur si peu de données qu'ils produisent un accent qui n'est celui de personne. Enseigner une langue minorisée avec une voix qui n'a jamais existé nulle part, c'est passer à côté de la raison même pour laquelle on l'apprend. Miquèla, notre voix toulousaine, roule les r comme sa mère les roulait. C'est cela, la transmission.",
      },
      {
        type: "quote",
        text: "Une langue, ce n'est pas de l'information à transférer. C'est une manière d'habiter sa bouche.",
        source: "Miquèla Delpech, voix occitane de Verluma",
      },
      {
        type: "h2",
        text: "Ce que ça change pour vous, concrètement",
      },
      {
        type: "p",
        text: "Chaque phrase de Verluma existe en deux prises : vitesse naturelle et vitesse détendue — la même personne, le même souffle, pas un ralenti artificiel qui déforme les voyelles. Quand vous passez de l'une à l'autre, vous entendez la langue se déplier. Et le jour où quelqu'un vous parle dans la rue, à Osaka ou à Bayonne, il parle comme votre application. C'est le compliment qu'on nous fait le plus souvent, et celui qui justifie chaque heure de studio.",
      },
    ],
  },
  {
    slug: "occitan-langue-vivante",
    title: "L'occitan n'est pas une langue morte. Elle avait juste besoin de meilleurs outils.",
    excerpt:
      "On compte encore des centaines de milliers de locuteurs d'occitan, des écoles immersives pleines, et jusqu'ici aucune méthode numérique sérieuse. Retour sur la construction de notre parcours le plus symbolique.",
    date: "2026-03-30",
    readingMinutes: 7,
    author: { name: "Tomàs Alberny", role: "Responsable des parcours héritage" },
    tag: "Langues",
    body: [
      {
        type: "p",
        text: "Quand nous avons annoncé que la septième langue de Verluma serait l'occitan — avant le chinois, avant l'arabe, avant tout ce qu'un tableur de responsable produit aurait recommandé — on nous a pris pour des romantiques. Six mois plus tard, le parcours occitan affichait le meilleur taux de complétion de toute la plateforme.",
      },
      {
        type: "h2",
        text: "Un public que tout le monde voyait, que personne ne servait",
      },
      {
        type: "p",
        text: "Les études estiment que plus d'un demi-million de personnes comprennent l'occitan, et des millions d'autres en ont hérité des bribes : une grand-mère qui comptait en « un, dos, tres », des noms de villages dont on saisit soudain le sens. Les écoles Calandreta refusent du monde. Et pourtant, sur les grandes applications, l'occitan n'existe tout simplement pas — trop petit marché, trop peu de données.",
      },
      {
        type: "p",
        text: "C'est une logique d'inventaire. La nôtre est une logique de demande réelle : les apprenants de langues d'héritage sont les plus motivés qui existent. Ils ne cherchent pas un passe-temps, ils recousent quelque chose. Leur taux de rétention à 90 jours dépasse de 30 points celui des autres parcours.",
      },
      {
        type: "h2",
        text: "Construire sans corpus, ou presque",
      },
      {
        type: "p",
        text: "Pas de manuels récents, pas de corpus audio propre, des graphies concurrentes : construire un parcours d'occitan, c'est faire de l'artisanat. Nous avons choisi le languedocien comme colonne vertébrale — c'est la variante la plus centrale et la mieux documentée — avec des fenêtres régulières vers le gascon et le provençal, clairement signalées. Deux enseignants de Calandreta ont relu chaque unité ; nos comédiens viennent de Toulouse et de Rodez.",
      },
      {
        type: "quote",
        text: "Mes élèves de CM2 sont bilingues. Le problème n'a jamais été l'envie, c'était l'accès des adultes à un outil moderne.",
        source: "Enseignante en Calandreta, relectrice du parcours",
      },
      {
        type: "h2",
        text: "Et maintenant, le basque — et après ?",
      },
      {
        type: "p",
        text: "Le parcours d'euskara a suivi la même recette, avec l'aide de deux ikastola des Pyrénées-Atlantiques. Le prochain chantier héritage est à l'étude : breton, alsacien et corse sont les trois candidats, et nos apprenants votent depuis leur tableau de bord. Une langue par an, faite correctement ou pas du tout : c'est notre rythme, et nous le tiendrons.",
      },
    ],
  },
  {
    slug: "repetition-espacee-expliquee",
    title: "La répétition espacée, expliquée à ceux qui ont raté leurs listes de vocabulaire",
    excerpt:
      "Vous n'avez pas une mauvaise mémoire : vous révisez au mauvais moment. Comment Verluma décide, mot par mot, du jour exact où il vous réinterroge — et pourquoi oublier fait partie de la méthode.",
    date: "2026-02-10",
    readingMinutes: 5,
    author: { name: "Claire Vasseur", role: "Cofondatrice, direction pédagogique" },
    tag: "Méthode",
    body: [
      {
        type: "p",
        text: "Souvenez-vous des listes de vocabulaire du collège : vingt mots le lundi soir, interrogation le mardi matin, oubli général le vendredi. Ce n'était pas votre mémoire le problème. C'était le calendrier.",
      },
      {
        type: "h2",
        text: "L'oubli n'est pas un bug",
      },
      {
        type: "p",
        text: "Depuis Ebbinghaus (1885), on sait que la mémoire décline selon une courbe prévisible — et surtout, que chaque rappel réussi au bon moment aplatit cette courbe. Le « bon moment », c'est juste avant l'oubli : assez tard pour que le rappel demande un effort, assez tôt pour qu'il aboutisse. Cet effort-là, légèrement inconfortable, est précisément ce qui grave le mot.",
      },
      {
        type: "p",
        text: "Réviser trop tôt est confortable et inutile. Réviser trop tard, c'est réapprendre. Toute la science consiste à viser la fenêtre entre les deux — et cette fenêtre s'élargit à chaque succès : 1 jour, 3 jours, 1 semaine, 3 semaines, 2 mois.",
      },
      {
        type: "h2",
        text: "Ce que Verluma fait de différent",
      },
      {
        type: "p",
        text: "Chaque mot, chaque tournure que vous rencontrez devient une carte avec son propre calendrier. Quand vous répondez, l'algorithme note trois choses : juste ou faux, le temps d'hésitation, et le type d'erreur (sens, forme, ou simple frappe). Une hésitation longue raccourcit l'intervalle même si la réponse est juste — parce qu'une bonne réponse arrachée n'est pas un mot maîtrisé.",
      },
      {
        type: "p",
        text: "Résultat : votre session de révision quotidienne fait rarement plus de sept minutes, et elle ne contient que des cartes qui méritent d'y être. Le tableau de bord vous montre trois niveaux — fragile, stable, solide — et le chiffre qui compte vraiment : combien de mots vous pouvez mobiliser sans y penser.",
      },
      {
        type: "quote",
        text: "La régularité bat l'intensité. Quinze minutes par jour battent deux heures le dimanche, et ce n'est même pas serré.",
      },
      {
        type: "p",
        text: "C'est aussi pour cela que la série (votre nombre de jours consécutifs) occupe une place centrale dans l'application : non comme un gadget de gamification, mais parce qu'elle est, littéralement, la variable dont dépend tout le reste.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
