# Design system Verluma

Univers : **« vers la lumière »** — éditorial, calme, précis. L'identité tient
sur trois matières : l'encre (la nuit, la concentration), le papier (la chaleur,
le livre) et le lumen (le point de lumière du sigle, l'or du progrès).

Tous les tokens vivent dans `src/app/globals.css` (`@theme`, Tailwind v4).

## Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `ink-900` | `#17113F` | Couleur signature — textes, boutons primaires, sections sombres |
| `ink-950 … ink-100` | échelle | Profondeurs de l'encre, textes secondaires (`ink-600`, `ink-500`) |
| `paper` | `#F8F7F3` | Fond principal (hérité du produit Verluma existant) |
| `sand` | `#EFECE3` | Surface secondaire, fonds de section |
| `card` | `#FFFFFF` | Cartes |
| `line` / `line-strong` | `#E4E1D6` / `#CFCABA` | Bordures |
| `lumen-200 … 700` | or | Accent. Décoratif en 400/500 ; texte sur papier en 700 (AA) |
| `sauge-600/100` | `#2F7A5C` | Succès |
| `garance-600/100` | `#B23D35` | Erreur |

Règles : le lumen ne porte jamais un texte long ; jamais de couleur seule pour
signifier un état (icône ou libellé associé) ; graphiques en série unique =
encre (`#443A7E` barres, `#17113F` traits), validés ≥ 3:1 sur papier.

## Typographie

- **Fraunces** (variable, opsz) — voix éditoriale : titres (`.display-hero`,
  `.display-xl`, `.display-lg`, `.display-md`), chiffres clés (`.display-num`).
  L'axe optique monte avec le corps (144 en hero, 40 en carte).
- **Inter** (variable) — interface et paragraphes.
- `.eyebrow` : surtitres en capitales espacées, lumen-700 sur papier / lumen-400 sur encre.

## Formes et matières

- Rayons : cartes `1rem`, champs `0.625rem`, boutons pill.
- Ombres chaudes teintées d'encre : `--shadow-soft` / `--shadow-lift` / `--shadow-deep`.
- Motifs de marque : `.lumen-glow` (halo or + violet sur encre — sections
  sombres, footer), `.dot-grid` (trame pointillée sur papier), `.rule-lumen`
  (filet or sous les titres de section).

## Motion

- Transitions 150–650 ms, courbe `cubic-bezier(0.22, 1, 0.36, 1)`.
- `Reveal` (apparition au scroll) est **fail-open** : contenu visible sans JS,
  masquage/animation seulement après hydratation et seulement sous le pli.
- `prefers-reduced-motion: reduce` neutralise toutes les animations, y compris
  le tracé des courbes.

## Composants

`Button/ButtonLink` (5 variantes × 3 tailles), `TextField/TextAreaField/SelectField`
(label, hint, erreur `role=alert`, aria-describedby), `Accordion`
(`<details>`, fonctionne sans JS), `Badge`, `Logo/LogoMark`, `Container`
(3 largeurs), `SectionHeading`, `Toggle` (role=switch), pastilles de langue
(teinte + monogramme par langue, définies dans `lib/data/languages.ts`).

## Accessibilité

Focus visible global (`:focus-visible`, variante or sur fond sombre), skip-link,
navigation clavier sur tous les parcours (leçon, révision, onboarding inclus),
`aria-current` sur la navigation, `role=progressbar` sur les progressions,
tables `sr-only` en repli des graphiques, contrastes AA (texte le plus clair
sur papier : `ink-500`).
