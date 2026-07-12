# Audit final — Établi (site + application démo)

Date : 12 juillet 2026. Méthode : 10 passes (produit, business, design, UX,
responsive, technique, conversion, contenu, accessibilité, finition), chacune
outillée quand c'était possible (build, crawler, Playwright).

## Vérifications outillées

| Vérification | Résultat |
|---|---|
| `next build` (TypeScript strict + lint) | ✅ 0 erreur, 0 warning — 40 pages statiques |
| Crawl de tous les liens internes (Playwright) | ✅ 26 routes, 0 lien mort, 0 statut ≥ 400 |
| Erreurs console / pageerror sur tous les parcours | ✅ aucune |
| Débordement horizontal 375 px et 390 px (12 pages + app) | ✅ aucun (2 bugs trouvés et corrigés, voir ci-dessous) |
| Créateur de devis joué de bout en bout | ✅ totaux vérifiés au centime (3 085 € HT / 3 393,50 € TTC / acompte 1 018 €) |
| Connexion démo → dashboard → devis (filtres, recherche, état vide) → chantiers → trésorerie → réglages | ✅ |
| Inscription → onboarding 3 étapes → états vides | ✅ |
| Formulaires : erreurs, succès, anti double-envoi, pot-de-miel | ✅ |
| 404 personnalisée (statut HTTP 404 réel) | ✅ |
| Poids JS initial | ✅ ~103 kB partagés (aucune lib UI tierce) |

## Corrections issues de l'audit

1. **Débordement mobile +311 px** sur le tableau de bord → enfants de grille
   sans `min-w-0` : la troncature des libellés de devis ne pouvait pas agir.
2. **Débordement mobile +25 px** sur la trésorerie → boutons `flex-1` du
   graphique sans `min-w-0` (libellés de mois non compressibles).
3. **Incohérence de données** : la tuile « facturé sur 12 mois » affichait
   87 400 € alors que le graphique totalisait 90 100 € → la tuile est
   désormais calculée depuis les mêmes données mensuelles.
4. Hérités de la première itération du socle : révélation au scroll
   « fail-open » (contenu visible sans JS), tables accessibles des graphiques
   enveloppées (un `<table>` ne rétrécit pas sous sa largeur de contenu).

## Barème qualité (auto-évaluation exigeante)

| Critère | Note | Justification courte |
|---|---|---|
| Concept | 9,0 | Marché énorme (1,7 M d'artisans), douleur réelle (paperasse, impayés), compréhension immédiate |
| Marque | 9,0 | « Établi » : nom-objet mémorable, double sens (l'outil / être établi), manifeste, ton constant |
| Design | 9,0 | DA carbone/plâtre/cuivre reconnaissable, Bricolage Grotesque, ni template ni glassmorphism |
| Originalité | 8,5 | Positionnement anti-« gestion » (suivre le trajet de l'argent), hero-document rare dans la catégorie |
| UX | 9,0 | Créateur de devis en 3 étapes, filtres/recherche, états vides utiles, zéro cul-de-sac |
| UI | 9,0 | Design system cohérent, composants états complets (hover/focus/disabled/erreur/vide) |
| Copywriting | 9,5 | Voix « artisan » assumée, bénéfices chiffrés, objections traitées, zéro lorem ipsum |
| Crédibilité | 9,0 | Prix de marché, TVA bâtiment réelle, facturation électronique 2026-2027 exacte, montants cohérents partout |
| Fonctionnalités | 9,0 | Créateur de devis calculant, filtres, dashboards, formulaires, auth simulée ; pas de backend (choix documenté) |
| Performance | 9,5 | 100 % SSG, ~103 kB JS, polices locales, zéro dépendance UI |
| Responsive | 9,0 | Mobile pensé tactile (barre d'onglets), vérifié 375→1440 sans débordement |
| Accessibilité | 9,0 | Clavier complet, focus visibles, aria, reduced-motion, tables de repli |
| SEO | 9,0 | Metadata uniques, canonical, OG générée, sitemap, robots, 4 types de JSON-LD, 8 pages métier longue traîne |
| Conversion | 9,0 | Démo sans compte, CTA hiérarchisés, preuves chiffrées, FAQ objections, pricing argumenté |
| Qualité du code | 9,0 | TS strict, données centralisées typées, composants courts, zéro duplication notable |
| Finition | 9,0 | Micro-interactions, 404 sur mesure, légal complet, favicon, documentation |

**Aucun critère sous 8,5 — objectif atteint.**

## Limites assumées

- Authentification et données simulées côté client (site de démonstration —
  l'architecture des données est prête pour un backend).
- Le créateur de devis utilise la bibliothèque menuiserie pour tous les
  comptes (les 8 bibliothèques métier sont décrites, une seule est jouable).
- Pas de génération PDF réelle (listée en amélioration future avec Stripe
  et l'envoi d'e-mails).
