/* Types partagés de l'univers Établi. */

export type Metier = {
  slug: string;
  /** Nom du métier : « Menuisier-agenceur ». */
  name: string;
  /** Pluriel pour les titres : « menuisiers-agenceurs ». */
  plural: string;
  /** Code court affiché dans la pastille (2 lettres). */
  chip: string;
  /** Teinte d'identité du métier (fond de pastille, pastel). */
  hue: string;
  /** Teinte de texte associée (contrastée AA sur `hue`). */
  hueText: string;
  tagline: string;
  description: string;
  users: number;
  /** Exemples de lignes de devis pré-remplies dans la bibliothèque métier. */
  libraryExamples: string[];
  painPoint: string;
};

export type Plan = {
  id: string;
  name: string;
  price: { monthly: number; yearly: number } | null;
  priceLabel?: string;
  audience: string;
  summary: string;
  features: string[];
  limits: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export type Testimonial = {
  name: string;
  metier: string;
  city: string;
  quote: string;
  detail?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  author: { name: string; role: string };
  tag: string;
  body: ArticleBlock[];
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; source?: string };

export type DevisStatus = "brouillon" | "envoyé" | "vu" | "signé" | "refusé";

export type Devis = {
  id: string;
  ref: string;
  client: string;
  label: string;
  amountHT: number;
  status: DevisStatus;
  date: string;
  /** Détail temporel utile à l'écran : « vu il y a 2 j », etc. */
  statusDetail: string;
};

export type Chantier = {
  id: string;
  label: string;
  client: string;
  city: string;
  amountHT: number;
  /** Avancement 0–100. */
  progress: number;
  stage: string;
  dueLabel: string;
  alert?: string;
};

export type ActivityEvent = {
  date: string;
  label: string;
  detail: string;
  kind: "devis" | "paiement" | "chantier" | "signature";
};

/** Ligne d'un devis dans le créateur interactif. */
export type QuoteLine = {
  id: number;
  label: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  vat: 10 | 20 | 5.5;
};
