# Verluma — plateforme web premium

Site marketing complet + application interactive de démonstration pour **Verluma**,
la méthode d'apprentissage des langues « voix studio + répétition espacée »
(10 langues, dont l'occitan et le basque).

> Production de niveau agence : marque, direction artistique, copywriting,
> design system, application démo, SEO, accessibilité et tests inclus.
> Les témoignages, chiffres et entreprises citées sont fictifs (site de démonstration).

---

## Démarrage

```bash
cd site
npm install
npm run dev        # http://localhost:3000
```

Build de production :

```bash
npm run build
npm start
```

**Aucune variable d'environnement n'est requise.** Le projet est 100 % statique
(SSG) et se déploie tel quel sur Vercel (répertoire racine : `site/`), Netlify
ou tout hébergeur Node.

## Identifiants de démonstration

| Champ | Valeur |
|---|---|
| E-mail | `sylvie@demo.verluma.app` |
| Mot de passe | `occitan2026` |

- **Compte Sylvie** (ci-dessus) : espace « vivant » — 15 semaines de données,
  série de 23 jours, 412 mots, révisions pleines.
- **Inscription libre** (`/inscription`) : compte neuf → onboarding en 3 étapes
  → espace avec **états vides** soignés.
- L'authentification est **simulée dans localStorage** : rien ne quitte le navigateur.

## Parcours à montrer en démo

1. Accueil → « Essayer une leçon d'occitan » → leçon jouable de 6 exercices (`/demo`).
2. Connexion avec le compte Sylvie → tableau de bord → « Réviser (14) » →
   session de cartes recto/verso (les cartes ratées repassent en fin de session).
3. `/app/progres` : courbe de vocabulaire, minutes/jour, force du vocabulaire.
4. `/app/reglages` : profil, objectif, notifications, abonnement, confidentialité.
5. Inscription d'un compte neuf → onboarding → états vides.

## Routes

**Marketing** — `/`, `/methode`, `/langues`, `/langues/[slug]` (10 langues),
`/tarifs`, `/entreprises`, `/journal`, `/journal/[slug]` (3 articles),
`/a-propos`, `/contact`, `/demo`, `/connexion`, `/inscription`,
`/legal/{mentions-legales,confidentialite,cgv,cookies}`, 404 sur mesure.

**Application** (auth simulée, `noindex`) — `/app` (tableau de bord),
`/app/bienvenue` (onboarding), `/app/lecons`, `/app/lecons/du-jour`
(leçon jouable), `/app/revision`, `/app/progres`, `/app/reglages`.

**Système** — `/sitemap.xml`, `/robots.txt`, `/opengraph-image` (générée),
favicon SVG.

## Stack et choix techniques

- **Next.js 15 (App Router) + React 19 + TypeScript strict** — tout est SSG,
  ~102 kB de JS partagé au premier chargement.
- **Tailwind CSS v4** — design tokens dans `src/app/globals.css` (`@theme`) :
  encre `#17113F`, papier `#F8F7F3`, accent or « lumen », couleurs
  fonctionnelles sauge/garance.
- **Polices auto-hébergées** (Fraunces + Inter, woff2 variables) — zéro requête
  tierce, RGPD-friendly ; pas de bannière cookies car aucun traceur.
- **Aucune dépendance UI/animation** : micro-interactions en CSS
  (`prefers-reduced-motion` respecté), révélation au scroll « fail-open »
  (contenu visible sans JavaScript), graphiques SVG maison avec infobulles et
  tables accessibles en repli.
- **Sécurité** : headers CSP/nosniff/frame-deny (`next.config.ts`), formulaires
  avec validation, anti double-envoi et pot-de-miel anti-spam.
- **SEO** : metadata par page, canonical, Open Graph + image générée, sitemap,
  robots, JSON-LD (Organization, WebSite, FAQPage, Article).
- **Analytics** : couche `track()` documentée dans `docs/analytics.md`
  (événements consultables via `window.__verlumaEvents`).

## Structure

```
site/src
├── app                  # routes (App Router)
│   ├── (marketing)/     # site public + auth + légal
│   └── app/             # application démo (guard AppShell)
├── components
│   ├── ui/              # primitives (Button, Field, Accordion, Reveal…)
│   ├── marketing/       # Header, Footer, sections
│   ├── app/             # AppShell (sidebar + tabs mobiles)
│   ├── charts/          # MinutesChart, VocabChart (SVG maison)
│   ├── forms/           # LeadForm (contact / démo entreprise)
│   └── lesson/          # LessonPlayer (QCM + remise en ordre)
└── lib
    ├── data/            # univers démo : langues, plans, articles, Sylvie…
    ├── auth.tsx         # session simulée (localStorage)
    ├── analytics.ts     # plan de tracking
    └── fonts.ts, cn.ts, types.ts
```

## Tests effectués

Parcours pilotés au navigateur (Playwright + Chromium) : crawl de toutes les
routes internes (0 lien mort), leçon complète jouée (6/6), connexion démo,
session de révision, inscription + onboarding + états vides, validation et
soumission des formulaires, 404, **zéro erreur console**, **zéro débordement
horizontal** de 375 px à 1440 px. Détail : `docs/audit.md`.

## Améliorations futures

- Vrai backend (auth, persistance des révisions) — Postgres + Drizzle ou Supabase.
- Lecture audio des voix studio dans la leçon (les fichiers existent côté produit).
- Paiement Stripe (les CTA d'essai y mènent naturellement).
- Espace manager Équipes (la page `/entreprises` le vend déjà).
- i18n de l'interface (en/es/pt) pour le parcours FLE.
