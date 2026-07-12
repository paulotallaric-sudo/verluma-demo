import localFont from "next/font/local";

/**
 * Polices auto-hébergées (aucune requête tierce, RGPD-friendly).
 * Bricolage Grotesque : voix de la marque (titres, chiffres clés) —
 * une grotesque de caractère, côté atelier.
 * Inter : interface et textes courants.
 */
export const bricolage = localFont({
  src: [
    { path: "../fonts/bricolage-normal-latin.woff2", style: "normal" },
    { path: "../fonts/bricolage-normal-latin-ext.woff2", style: "normal" },
  ],
  weight: "200 800",
  display: "swap",
  variable: "--font-display-src",
});

export const inter = localFont({
  src: [
    { path: "../fonts/inter-normal-latin.woff2", style: "normal" },
    { path: "../fonts/inter-normal-latin-ext.woff2", style: "normal" },
    { path: "../fonts/inter-italic-latin.woff2", style: "italic" },
    { path: "../fonts/inter-italic-latin-ext.woff2", style: "italic" },
  ],
  weight: "400 700",
  display: "swap",
  variable: "--font-inter",
});
