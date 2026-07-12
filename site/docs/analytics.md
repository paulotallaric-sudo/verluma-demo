# Plan de tracking Verluma

Implémentation : `src/lib/analytics.ts`. En production, `track()` pousserait
vers un outil RGPD-friendly sans cookie (Plausible auto-hébergé ou Matomo).
Sur cette démo, les événements s'accumulent dans `window.__verlumaEvents`
(et en console en développement) — ouvrez la console et tapez
`__verlumaEvents` pour les voir.

## Événements instrumentés

| Événement | Déclencheur | Propriétés |
|---|---|---|
| `demarrage_lecon` | Bouton « Commencer la leçon » (démo publique et app) | `lecon` |
| `fin_lecon` | Dernier exercice validé | `lecon`, `score`, `total` |
| `demarrage_revision` | Début d'une session de cartes | `cartes` |
| `fin_revision` | Dernière carte traitée | `sues`, `total` |
| `inscription` | Compte créé | — |
| `connexion` | Connexion réussie | `kind` |
| `deconnexion` | Déconnexion | — |
| `fin_onboarding` | Fin des 3 étapes | `language`, `dailyGoal` |
| `message_contact` | Formulaire contact soumis | `sujet` |
| `demande_demo_entreprise` | Formulaire Équipes soumis | `sujet` |

## Funnels de référence

1. **Acquisition B2C** : page vue `/` → `demarrage_lecon` (démo) → `fin_lecon`
   → `inscription` → `fin_onboarding` → `demarrage_lecon` (app, J+1 = activation).
2. **Conversion abonnement** : `fin_onboarding` → sélection d'offre (`/tarifs`)
   → essai → paiement (à instrumenter avec Stripe en production).
3. **B2B** : page vue `/entreprises` → `demande_demo_entreprise`.

## Indicateurs produit à suivre

Rétention J7/J30, taux de complétion de la leçon du jour, longueur médiane de
série, ratio mots fragiles/solides, minutes quotidiennes médianes. Le tableau
de bord de Sylvie illustre chacun de ces indicateurs côté apprenant.
