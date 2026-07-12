# Plan de tracking Établi

Implémentation : `src/lib/analytics.ts`. En production, `track()` pousserait
vers un outil RGPD-friendly sans cookie (Plausible auto-hébergé ou Matomo).
Sur cette démo, les événements s'accumulent dans `window.__etabliEvents`
(et en console en développement) — ouvrez la console et tapez
`__etabliEvents` pour les voir.

## Événements instrumentés

| Événement | Déclencheur | Propriétés |
|---|---|---|
| `demarrage_devis_demo` | Étape 1 validée dans le créateur (démo ou app) | `context` |
| `fin_devis_demo` | Devis « envoyé » depuis la démo publique | `lignes`, `totalTTC` |
| `devis_cree` | Devis « envoyé » depuis l'application | `lignes`, `totalTTC` |
| `inscription` | Compte créé | — |
| `connexion` | Connexion réussie | `kind` |
| `deconnexion` | Déconnexion | — |
| `fin_onboarding` | Fin des 3 étapes | `metier`, `company` |
| `message_contact` | Formulaire contact soumis | `sujet` |
| `demande_demo_reseau` | Formulaire Réseaux soumis | — |

## Funnels de référence

1. **Acquisition artisan** : page vue `/` → `demarrage_devis_demo` →
   `fin_devis_demo` → `inscription` → `fin_onboarding` → `devis_cree`
   (J+1 = activation).
2. **Conversion abonnement** : `fin_onboarding` → sélection d'offre (`/tarifs`)
   → essai 30 j → paiement (à instrumenter avec Stripe en production).
3. **B2B2B Réseaux** : page vue `/reseaux` → `demande_demo_reseau`.

## Indicateurs produit à suivre

Taux de signature des devis, délai médian envoi→signature, part des acomptes
encaissés en ligne, délai moyen de paiement des factures, taux d'usage des
relances automatiques. Le tableau de bord de Denis illustre chacun de ces
indicateurs côté artisan.
