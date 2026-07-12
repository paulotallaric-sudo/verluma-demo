import type { Lesson } from "@/lib/types";

/**
 * Leçon jouable de démonstration : occitan, unité 1.
 * Jouée telle quelle dans l'application démo et depuis la page Méthode.
 */
export const demoLesson: Lesson = {
  id: "oc-u1-l3",
  language: "occitan",
  unit: "Unité 1 · Se saluer",
  title: "Premiers échanges",
  exercises: [
    {
      type: "choice",
      prompt: "Que veut dire :",
      sentence: "Adiu !",
      options: ["Au revoir !", "Salut !", "Merci !", "Bienvenue !"],
      answer: 1,
      note: "« Adiu » sert à saluer quelqu'un qu'on tutoie — à l'arrivée comme au départ.",
    },
    {
      type: "choice",
      prompt: "Comment dit-on « bonjour » (formel) ?",
      sentence: "—",
      options: ["Adiu", "Al reveire", "Bonjorn", "Mercés"],
      answer: 2,
      note: "« Bonjorn » est la salutation neutre, utilisable avec tout le monde.",
    },
    {
      type: "arrange",
      prompt: "Remettez la phrase dans l'ordre :",
      sentence: "Comment t'appelles-tu ?",
      words: ["dison", "te", "Cossí", "?"],
      answer: "Cossí te dison ?",
      note: "Littéralement : « Comment te disent-ils ? » — la tournure occitane consacrée.",
    },
    {
      type: "choice",
      prompt: "Que répond-on à « Cossí vas ? » (comment vas-tu ?) :",
      sentence: "Va plan, mercés !",
      options: [
        "Ça va bien, merci !",
        "Je m'appelle Plan !",
        "À demain, merci !",
        "Doucement, merci !",
      ],
      answer: 0,
      note: "« Plan » signifie « bien » — vous le retrouverez partout.",
    },
    {
      type: "arrange",
      prompt: "Traduisez en occitan :",
      sentence: "Je viens de Toulouse.",
      words: ["de", "Veni", "Tolosa", "."],
      answer: "Veni de Tolosa .",
      note: "Le pronom sujet est facultatif : « veni » suffit, comme en espagnol ou en italien.",
    },
    {
      type: "choice",
      prompt: "Pour prendre congé, on dit :",
      sentence: "—",
      options: ["Bonjorn !", "Cossí vas ?", "Benvenguda !", "Al reveire !"],
      answer: 3,
      note: "« Al reveire » — vous entendrez aussi « adiu », qui fait les deux.",
    },
  ],
};
