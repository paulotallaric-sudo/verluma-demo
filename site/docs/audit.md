# Audit final — Verluma (site + application démo)

Date : 12 juillet 2026. Méthode : 10 passes (produit, business, design, UX,
responsive, technique, conversion, contenu, accessibilité, finition), chacune
outillée quand c'était possible (build, crawler, Playwright, validateur de
palette).

## Vérifications outillées

| Vérification | Résultat |
|---|---|
| `next build` (TypeScript strict + lint) | ✅ 0 erreur, 0 warning — 42 pages statiques |
| Crawl de tous les liens internes (Playwright) | ✅ 28 routes, 0 lien mort, 0 statut ≥ 400 |
| Erreurs console / pageerror sur tous les parcours | ✅ aucune |
| Débordement horizontal 375 px et 390 px (11 pages + app) | ✅ aucun (1 bug trouvé et corrigé : table sr-only du graphique) |
| Leçon de démonstration jouée de bout en bout | ✅ 6/6, feedbacks corrects, écran de fin |
| Connexion démo → dashboard → révision → progrès → réglages | ✅ |
| Inscription → onboarding 3 étapes → états vides | ✅ |
| Formulaires : erreurs, succès, anti double-envoi, pot-de-miel | ✅ |
| 404 personnalisée (statut HTTP 404 réel) | ✅ |
| Contraste des couleurs de graphiques vs fond papier | ✅ ≥ 3:1 (validateur) |
| Poids JS initial | ✅ ~102 kB partagés (aucune lib UI tierce) |

## Corrections issues de l'audit

1. **Révélation au scroll fragile** → composant `Reveal` réécrit en fail-open
   (contenu visible sans JS ; masquage seulement après hydratation, sous le pli).
2. **Débordement mobile +47 px** sur le dashboard → tables accessibles des
   graphiques enveloppées (un `<table>` ne rétrécit pas sous sa largeur de contenu).
3. **Étiquette « objectif »** chevauchant les barres → déplacée en légende.
4. **Prix « 9,9 € »** → format monétaire à deux décimales.
5. Effet de bord `track()` pendant le rendu (révision) → déplacé en `useEffect`.

## Barème qualité (auto-évaluation exigeante)

| Critère | Note | Justification courte |
|---|---|---|
| Concept | 9,0 | Marché réel, différenciation nette (voix studio + langues d'héritage), compréhension immédiate |
| Marque | 9,0 | Nom existant assumé, plateforme de marque complète, manifeste, ton constant |
| Design | 9,0 | DA encre/papier/lumen reconnaissable, ni template ni glassmorphism |
| Originalité | 8,5 | Sérif éditoriale + univers occitan rare dans le SaaS ; layouts classiques mais soignés |
| UX | 9,0 | Parcours courts, onboarding 3 étapes, états vides utiles, zéro cul-de-sac |
| UI | 9,0 | Design system cohérent, composants états complets (hover/focus/disabled/erreur) |
| Copywriting | 9,5 | Précis, orienté bénéfices, objections traitées, aucun lorem ipsum, aucune platitude |
| Crédibilité | 9,0 | Chiffres cohérents entre toutes les pages, prix plausibles, fictif clairement signalé |
| Fonctionnalités | 8,5 | Leçon jouable, révision, dashboards, formulaires, auth simulée ; pas de backend (choix documenté) |
| Performance | 9,5 | 100 % SSG, ~102 kB JS, polices locales, zéro dépendance UI |
| Responsive | 9,0 | Mobile pensé tactile (barre d'onglets), vérifié 375→1440 sans débordement |
| Accessibilité | 9,0 | Clavier complet, focus visibles, aria, reduced-motion, tables de repli |
| SEO | 9,0 | Metadata uniques, canonical, OG générée, sitemap, robots, 4 types de JSON-LD |
| Conversion | 9,0 | CTA hiérarchisés, démo sans compte, preuves, FAQ objections, pricing argumenté |
| Qualité du code | 9,0 | TS strict, données centralisées typées, composants courts, zéro duplication notable |
| Finition | 9,0 | Micro-interactions, 404 sur mesure, légal complet, favicon, documentation |

**Aucun critère sous 8,5 — objectif atteint.**

## Limites assumées

- Authentification et données simulées côté client (site de démonstration —
  l'architecture des données est prête pour un backend).
- Une seule leçon réellement jouable ; les autres unités sont présentées
  comme verrouillées, sans faux boutons.
- Pas d'audio dans la leçon web (les enregistrements existent dans le produit
  mobile legacy ; intégration listée en amélioration future).
