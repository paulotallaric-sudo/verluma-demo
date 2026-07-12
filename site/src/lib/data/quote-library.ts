import type { QuoteLine } from "@/lib/types";

/**
 * Bibliothèque d'ouvrages utilisée par le créateur de devis interactif
 * (démo publique et application). Extrait de la bibliothèque menuiserie,
 * prix « atelier bordelais » réalistes, en euros HT.
 */
export const quoteLibrary: Array<Omit<QuoteLine, "id" | "quantity">> = [
  { label: "Agencement dressing — façade coulissante (le m²)", unit: "m²", unitPrice: 420, vat: 10 },
  { label: "Aménagement intérieur tiroirs et penderie (le ml)", unit: "ml", unitPrice: 185, vat: 10 },
  { label: "Fenêtre bois double vitrage, pose comprise", unit: "u", unitPrice: 1180, vat: 10 },
  { label: "Plan de travail massif, façonnage + pose (le ml)", unit: "ml", unitPrice: 340, vat: 10 },
  { label: "Bloc-porte intérieur, pose comprise", unit: "u", unitPrice: 465, vat: 10 },
  { label: "Escalier droit hêtre, fabrication et pose", unit: "u", unitPrice: 6900, vat: 10 },
  { label: "Dépose et évacuation existant", unit: "forfait", unitPrice: 380, vat: 10 },
  { label: "Déplacement et protection de chantier", unit: "forfait", unitPrice: 120, vat: 10 },
];

/** Scénario pré-rempli de la démo : le dressing des Ferrand. */
export const demoQuoteContext = {
  client: "M. et Mme Ferrand",
  address: "27 rue Mandron, 33000 Bordeaux",
  project: "Dressing chambre principale",
  suggestedLines: [0, 1, 6] as const, // façade + aménagement + dépose
};

export function computeTotals(lines: QuoteLine[]) {
  const totalHT = lines.reduce((sum, l) => sum + l.quantity * l.unitPrice, 0);
  const totalVat = lines.reduce((sum, l) => sum + l.quantity * l.unitPrice * (l.vat / 100), 0);
  return {
    totalHT,
    totalVat,
    totalTTC: totalHT + totalVat,
    deposit: (totalHT + totalVat) * 0.3,
  };
}

export const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export const euroCents = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
