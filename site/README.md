# Établi — plateforme web premium (concept original)

Site marketing complet + application interactive de démonstration pour
**Établi**, un SaaS fictif inventé pour ce projet : le back-office des
artisans du bâtiment — devis en 10 minutes, signature électronique avec
acompte en ligne, suivi de chantiers et trésorerie.

> Production de niveau agence : concept, marque, direction artistique,
> copywriting, design system, application démo, SEO, accessibilité et tests.
> La marque, les témoignages et les chiffres sont fictifs (démonstration).
> Aucun lien avec le produit historique du dépôt : le projet vit dans `site/`
> et n'y touche pas.

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
| E-mail | `denis@demo.etabli.fr` |
| Mot de passe | `chantier2026` |

- **Compte Denis** (menuisier-agenceur à Bordeaux) : espace « vivant » —
  10 mois d'activité, 7 devis avec statuts, 3 chantiers, trésorerie et
  encaissements, activité récente.
- **Inscription libre** (`/inscription`) : compte neuf → onboarding en 3 étapes
  (métier, entreprise) → espace avec **états vides** soignés.
- L'authentification est **simulée dans localStorage** : rien ne quitte le navigateur.

## Parcours à montrer en démo

1. Accueil → « Créer un devis d'essai » (`/demo`) : le créateur de devis en
   3 étapes — bibliothèque d'ouvrages, quantités, totaux HT/TVA/TTC en direct,
   aperçu du document final avec acompte de 30 %.
2. Connexion avec le compte Denis → tableau de bord (devis « vu hier soir »,
   chantiers, à encaisser) → `/app/devis` : filtres par statut + recherche.
3. `/app/tresorerie` : CA mensuel (graphique interactif), retards, recommandation.
4. `/app/reglages` : entreprise, relances automatiques, abonnement, RGPD.
5. Inscription d'un compte neuf → onboarding → états vides.

## Routes

**Marketing** — `/`, `/produit`, `/metiers`, `/metiers/[slug]` (8 métiers),
`/tarifs`, `/reseaux` (offre B2B2B pour coopératives/franchises), `/journal`,
`/journal/[slug]` (3 articles de fond), `/a-propos` (manifeste), `/contact`,
`/demo`, `/connexion`, `/inscription`,
`/legal/{mentions-legales,confidentialite,cgv,cookies}`, 404 sur mesure.

**Application** (auth simulée, `noindex`) — `/app` (tableau de bord),
`/app/bienvenue` (onboarding), `/app/devis` (+ `/nouveau`, le créateur),
`/app/chantiers`, `/app/tresorerie`, `/app/reglages`.

**Système** — `/sitemap.xml`, `/robots.txt`, `/opengraph-image` (générée),
favicon SVG.

## Stack et choix techniques

- **Next.js 15 (App Router) + React 19 + TypeScript strict** — tout est SSG,
  ~103 kB de JS partagé au premier chargement.
- **Tailwind CSS v4** — tokens sémantiques dans `src/app/globals.css`
  (`@theme`) : `ink` = carbone `#23201A`, `paper` = plâtre `#F7F5F0`,
  `lumen` = cuivre, `sauge`/`garance` fonctionnels.
- **Polices auto-hébergées** (Bricolage Grotesque + Inter, woff2 variables) —
  zéro requête tierce ; pas de bannière cookies car aucun traceur.
- **Aucune dépendance UI/animation** : micro-interactions en CSS
  (`prefers-reduced-motion` respecté), révélation au scroll « fail-open »
  (contenu visible sans JavaScript), graphiques SVG/HTML maison avec
  infobulles et tables accessibles en repli.
- **Sécurité** : headers CSP/nosniff/frame-deny (`next.config.ts`), formulaires
  avec validation, anti double-envoi et pot-de-miel anti-spam.
- **SEO** : metadata par page, canonical, Open Graph + image générée, sitemap,
  robots, JSON-LD (Organization, WebSite, FAQPage, Article).
- **Analytics** : couche `track()` documentée dans `docs/analytics.md`
  (événements consultables via `window.__etabliEvents`).

## Structure

```
site/src
├── app                  # routes (App Router)
│   ├── (marketing)/     # site public + auth + légal
│   └── app/             # application démo (garde AppShell)
├── components
│   ├── ui/              # primitives (Button, Field, Accordion, Reveal…)
│   ├── marketing/       # Header, Footer, sections
│   ├── app/             # AppShell (sidebar + tabs mobiles)
│   ├── charts/          # BarsChart (SVG/HTML maison)
│   ├── forms/           # LeadForm (contact / démo réseaux)
│   └── quote/           # QuoteBuilder (créateur de devis 3 étapes)
└── lib
    ├── data/            # univers démo : métiers, plans, articles, Denis…
    ├── auth.tsx         # session simulée (localStorage)
    ├── analytics.ts     # plan de tracking
    └── fonts.ts, cn.ts, types.ts
```

## Tests effectués

Parcours pilotés au navigateur (Playwright + Chromium) : crawl de toutes les
routes internes (0 lien mort), devis complet créé et « envoyé » (totaux
vérifiés au centime), connexion démo, filtres et recherche de devis (y compris
état « aucun résultat »), inscription + onboarding + états vides, formulaires
(erreurs et succès), 404, **zéro erreur console**, **zéro débordement
horizontal** de 375 px à 1440 px. Détail : `docs/audit.md`.

## Améliorations futures

- Vrai backend (auth, persistance des devis) — Postgres + Drizzle ou Supabase.
- Génération PDF réelle des devis/factures et envoi e-mail (Resend).
- Paiement Stripe pour les acomptes (le parcours de signature y mène).
- Tableau de bord Réseaux (la page `/reseaux` le vend déjà).
- Import de bibliothèques d'ouvrages (BatiChiffrage, tarifs fournisseurs).
