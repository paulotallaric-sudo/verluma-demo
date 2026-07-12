import localFont from "next/font/local";

/**
 * Polices auto-hébergées (aucune requête tierce, RGPD-friendly).
 * Fraunces : voix éditoriale de la marque (titres, chiffres clés).
 * Inter : interface et textes courants.
 */
export const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-normal-latin.woff2", style: "normal" },
    { path: "../fonts/fraunces-normal-latin-ext.woff2", style: "normal" },
    { path: "../fonts/fraunces-italic-latin.woff2", style: "italic" },
    { path: "../fonts/fraunces-italic-latin-ext.woff2", style: "italic" },
  ],
  weight: "300 700",
  display: "swap",
  variable: "--font-fraunces",
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
