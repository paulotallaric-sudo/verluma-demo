import type { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "facturation-electronique-artisans",
    title: "Facturation électronique : ce qui change vraiment pour les artisans en 2026-2027",
    excerpt:
      "Non, vous n'aurez pas le droit d'envoyer un PDF par e-mail. Oui, c'est plus simple que ça en a l'air — si votre outil s'en charge. Le calendrier, les obligations, et ce qu'Établi fait à votre place.",
    date: "2026-06-02",
    readingMinutes: 6,
    author: { name: "Hélène Bréchet", role: "Cofondatrice — produit et conformité" },
    tag: "Réglementation",
    body: [
      {
        type: "p",
        text: "Depuis des mois, vos fournisseurs, votre banque et probablement votre beau-frère vous parlent de « facturation électronique obligatoire ». Démêlons ce qui vous concerne réellement, avec les dates qui comptent pour une entreprise artisanale.",
      },
      { type: "h2", text: "Le calendrier, sans jargon" },
      {
        type: "p",
        text: "Septembre 2026 : toutes les entreprises, y compris la vôtre, doivent être capables de recevoir des factures électroniques. Septembre 2027 : les TPE et PME doivent aussi les émettre à ce format pour leurs clients professionnels. Entre artisan et particulier, rien ne change — mais dès qu'un client est une entreprise (promoteur, syndic, restaurant, autre artisan), la facture devra transiter par une plateforme agréée, dans un format structuré que l'administration sait lire.",
      },
      { type: "h2", text: "Ce qui ne marchera plus" },
      {
        type: "p",
        text: "Le PDF fabriqué sous Word et envoyé par e-mail ne sera plus une facture valable entre professionnels. Le carnet à souche non plus. Ce n'est pas une lubie de technocrate : le format structuré permet à l'État de pré-remplir la TVA et de lutter contre la fraude — et accessoirement, il supprime la double saisie chez votre comptable.",
      },
      {
        type: "quote",
        text: "La bonne question n'est pas « comment je m'y mets ? » mais « est-ce que mon outil s'en occupe pour moi ? ». Si la réponse est non, changez d'outil, pas de métier.",
      },
      { type: "h2", text: "Ce qu'Établi fait à votre place" },
      {
        type: "p",
        text: "Établi est raccordé à une plateforme de dématérialisation agréée. Concrètement : vous continuez à faire vos factures exactement comme aujourd'hui, et selon le destinataire, le document part au bon format vers le bon canal — plateforme pour un professionnel, e-mail et PDF pour un particulier. Les statuts de traitement (déposée, rejetée, encaissée) remontent dans votre suivi, à côté du « vu » de vos devis.",
      },
      {
        type: "p",
        text: "Notre conseil : n'attendez pas l'été 2027. Les artisans qui s'y mettent maintenant lissent le changement sur dix-huit mois tranquilles, pendant que les autres découvriront le sujet dans l'urgence, entre deux chantiers d'automne.",
      },
    ],
  },
  {
    slug: "devis-qui-dorment",
    title: "Pourquoi vos devis dorment 23 jours (et comment les faire signer en une semaine)",
    excerpt:
      "Le devis moyen du bâtiment attend plus de trois semaines avant d'être signé — quand il l'est. Ce délai n'est pas une fatalité : c'est la somme de cinq petites frictions, toutes corrigeables.",
    date: "2026-04-14",
    readingMinutes: 5,
    author: { name: "Simon Aldebert", role: "Cofondateur — ancien conducteur de travaux" },
    tag: "Vendre mieux",
    body: [
      {
        type: "p",
        text: "Sur les devis envoyés via Établi, le délai médian de signature est de 8 jours. La moyenne du secteur dépasse les trois semaines. L'écart ne vient pas d'un talent commercial particulier de nos utilisateurs : il vient de la mécanique. Voici les cinq frottements qui endorment un devis, dans l'ordre où ils se produisent.",
      },
      { type: "h2", text: "1. Le devis part trop tard" },
      {
        type: "p",
        text: "Chaque jour entre la visite et l'envoi fait baisser la probabilité de signature : le client compare, doute, refroidit. Un devis envoyé le soir même de la visite — possible quand la bibliothèque d'ouvrages chiffre à votre place — arrive pendant que votre passage est encore le sujet du dîner.",
      },
      { type: "h2", text: "2. Le client ne comprend pas ce qu'il lit" },
      {
        type: "p",
        text: "« Fourniture et pose de menuiseries selon DTU 36.5 » ne parle qu'à vous. Le même poste, écrit « Fenêtre chambre côté rue, bois, double vitrage, pose comprise », se comprend — et ce qu'on comprend, on l'accepte. Vos libellés de bibliothèque méritent d'être écrits une fois, correctement, pour toujours.",
      },
      { type: "h2", text: "3. Signer demande une imprimante" },
      {
        type: "p",
        text: "Imprimer, signer, scanner, renvoyer : en 2026, chaque étape perd un client sur dix. La signature électronique depuis le téléphone supprime les quatre. Elle a la même valeur juridique, et elle horodate tout.",
      },
      { type: "h2", text: "4. L'acompte est une deuxième décision" },
      {
        type: "p",
        text: "Devis signé, puis « je vous fais un chèque pour l'acompte » — et voilà deux semaines de perdues. Quand le paiement de l'acompte est intégré au parcours de signature, la décision est une, pas deux : celui qui signe paie dans la minute.",
      },
      { type: "h2", text: "5. Personne ne relance" },
      {
        type: "p",
        text: "Relancer soi-même est désagréable, donc on ne le fait pas. Une relance automatique à J+5 puis J+12, écrite sur un ton simple et sans reproche, double le taux de réponse. Le secret honteux : les clients sont rarement réticents — ils sont distraits.",
      },
      {
        type: "quote",
        text: "Un devis n'est pas un document. C'est un moment. Tout ce qui l'allonge le refroidit.",
        source: "Simon Aldebert",
      },
    ],
  },
  {
    slug: "acompte-30-pourcent",
    title: "L'acompte de 30 % n'est pas de la défiance. C'est de l'hygiène.",
    excerpt:
      "Beaucoup d'artisans n'osent pas demander d'acompte, ou le demandent sans jamais le percevoir avant d'engager les frais. Parlons trésorerie, la vraie cause de mortalité des entreprises du bâtiment.",
    date: "2026-02-24",
    readingMinutes: 5,
    author: { name: "Hélène Bréchet", role: "Cofondatrice — produit et conformité" },
    tag: "Trésorerie",
    body: [
      {
        type: "p",
        text: "Une entreprise artisanale ne meurt presque jamais d'un manque de travail. Elle meurt d'un décalage : les fournitures se paient à 30 jours, les clients paient à 60, et entre les deux, c'est votre compte courant qui fait la banque. L'acompte n'est pas une option commerciale — c'est le correcteur de ce décalage.",
      },
      { type: "h2", text: "Ce que dit la loi (et ce que dit le bon sens)" },
      {
        type: "p",
        text: "Rien n'interdit de demander 30 % à la commande — c'est l'usage, et jusqu'à 40 % sur des fournitures importantes commandées sur mesure. Le bon sens ajoute : l'acompte doit être encaissé avant d'engager le premier euro d'achat. Un acompte promis n'est pas un acompte ; c'est une phrase.",
      },
      { type: "h2", text: "Pourquoi on n'ose pas" },
      {
        type: "p",
        text: "Par peur de paraître méfiant, ou de perdre le chantier. L'expérience de nos utilisateurs dit l'inverse : l'acompte intégré au parcours de signature est perçu comme un signe de professionnalisme. Les clients sérieux le paient sans discuter — et ceux qui discutent un acompte de 30 % auraient discuté la facture de 100 %.",
      },
      {
        type: "quote",
        text: "Le client qui refuse un acompte vous rend service : il se signale avant le chantier, pas après.",
      },
      { type: "h2", text: "La suite : situations et solde" },
      {
        type: "p",
        text: "Sur les chantiers longs, l'acompte ne suffit pas. La facturation à l'avancement — 30 % à la commande, 40 % à mi-chantier, solde à réception — maintient le chantier à flot en permanence. Établi génère ces appels automatiquement aux étapes que vous définissez, et votre tableau de trésorerie vous montre, chantier par chantier, qui vous doit quoi. Vous n'avez plus à le calculer de tête sous la douche.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
