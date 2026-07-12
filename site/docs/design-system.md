# Design system Établi

Univers : **l'atelier** — robuste, net, chaleureux. L'identité tient sur trois
matières : le carbone (l'outil, le sérieux), le plâtre (le chantier propre,
la lumière) et le cuivre (le clou, l'accent du geste précis).

Tous les tokens vivent dans `src/app/globals.css` (`@theme`, Tailwind v4).
Les noms de tokens sont **sémantiques** et stables : `ink` (texte/surfaces
sombres), `paper` (fond), `lumen` (accent), `sauge` (succès), `garance`
(erreur) — les valeurs portent la marque.

## Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `ink-900` | `#23201A` | Carbone — textes, boutons primaires, sections sombres |
| `ink-950 … ink-100` | échelle | Profondeurs, textes secondaires (`ink-600`, `ink-500`) |
| `paper` | `#F7F5F0` | Plâtre — fond principal |
| `sand` | `#EDE9E0` | Surface secondaire, fonds de section |
| `card` | `#FFFFFF` | Cartes |
| `line` / `line-strong` | `#E2DDD1` / `#CBC4B2` | Bordures |
| `lumen-200 … 700` | cuivre | Accent. Décoratif en 400/500 ; texte sur plâtre en 700 (AA) |
| `sauge-600/100` | `#2F7A5C` | Succès (signé, encaissé) |
| `garance-600/100` | `#B23D35` | Erreur, retard de paiement |

Règles : le cuivre ne porte jamais un texte long ; jamais de couleur seule
pour signifier un état (statut toujours libellé) ; graphiques en série unique
= encre (`ink-600` barres), contraste ≥ 3:1 sur plâtre vérifié.

## Typographie

- **Bricolage Grotesque** (variable, opsz) — voix de la marque : titres
  (`.display-hero`, `.display-xl`, `.display-lg`, `.display-md`), chiffres
  (`.display-num`). Graisses 560-640, axe optique selon le corps.
- **Inter** (variable) — interface et paragraphes.
- `.eyebrow` : surtitres capitales espacées, lumen-700 sur plâtre / lumen-400 sur carbone.

## Formes et matières

- Rayons : cartes `1rem`, champs `0.625rem`, boutons pill.
- Ombres chaudes teintées carbone : `--shadow-soft` / `--shadow-lift` / `--shadow-deep`.
- Motifs de marque : `.lumen-glow` (halo cuivre sur carbone — la forge ;
  sections sombres, footer), `.dot-grid` (trame pointillée sur plâtre),
  `.rule-lumen` (filet cuivre sous les titres de section).

## Motion

- Transitions 150–650 ms, courbe `cubic-bezier(0.22, 1, 0.36, 1)`.
- `Reveal` (apparition au scroll) est **fail-open** : contenu visible sans JS,
  masquage/animation seulement après hydratation et seulement sous le pli.
- `prefers-reduced-motion: reduce` neutralise toutes les animations.

## Composants

`Button/ButtonLink` (5 variantes × 3 tailles), `TextField/TextAreaField/SelectField`
(label, hint, erreur `role=alert`), `Accordion` (`<details>`, sans JS),
`Badge`, `Logo/LogoMark` (l'établi stylisé : plateau, pieds, clou de cuivre),
`Container`, `SectionHeading`, `Toggle` (role=switch), pastilles de métier
(teinte + monogramme, définies dans `lib/data/metiers.ts`), `QuoteBuilder`
(le créateur de devis, pièce interactive maîtresse), `BarsChart`.

## Accessibilité

Focus visible global (variante cuivre sur fond sombre), skip-link, navigation
clavier sur tous les parcours (créateur de devis et onboarding inclus),
`aria-current`, `role=progressbar` sur les avancements de chantier, tables
`sr-only` en repli des graphiques, contrastes AA (texte le plus clair sur
plâtre : `ink-500`).
