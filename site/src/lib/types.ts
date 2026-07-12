/* Types partagés de l'univers Verluma. */

export type Language = {
  slug: string;
  /** Nom précédé de l'article contracté : « l'anglais », « le basque »… */
  withArticle: string;
  name: string;
  nativeName: string;
  /** Code court affiché dans la pastille (2 lettres, graphie native). */
  chip: string;
  /** Teinte d'identité de la langue (fond de pastille, pastel). */
  hue: string;
  /** Teinte de texte associée (contrastée AA sur `hue`). */
  hueText: string;
  tagline: string;
  description: string;
  learners: number;
  units: number;
  hoursOfAudio: number;
  voices: string[];
  sampleSentence: { original: string; translation: string };
  heritage?: boolean;
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
  age?: number;
  city: string;
  language: string;
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

export type Exercise =
  | {
      type: "choice";
      prompt: string;
      sentence: string;
      options: string[];
      answer: number;
      note?: string;
    }
  | {
      type: "arrange";
      prompt: string;
      sentence: string;
      words: string[];
      answer: string;
      note?: string;
    };

export type Lesson = {
  id: string;
  language: string;
  unit: string;
  title: string;
  exercises: Exercise[];
};

export type ReviewCard = {
  id: string;
  front: string;
  back: string;
  language: string;
  interval: string;
  strength: "fragile" | "stable" | "solide";
};

export type ActivityEvent = {
  date: string;
  label: string;
  detail: string;
  kind: "lesson" | "review" | "milestone" | "streak";
};
