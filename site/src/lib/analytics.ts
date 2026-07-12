/**
 * Couche de tracking d'Établi.
 *
 * En production, `track` pousserait vers l'outil d'analytics (par ex.
 * Plausible ou Matomo, choisis pour leur conformité RGPD sans bannière).
 * Sur ce site de démonstration, les événements sont poussés dans
 * `window.__etabliEvents` et visibles en console en développement.
 *
 * Le plan de taggage complet est documenté dans docs/analytics.md.
 */

export type AnalyticsEvent =
  | "demarrage_devis_demo"
  | "fin_devis_demo"
  | "devis_cree"
  | "connexion"
  | "inscription"
  | "deconnexion"
  | "fin_onboarding"
  | "selection_offre"
  | "message_contact"
  | "demande_demo_reseau";

declare global {
  interface Window {
    __etabliEvents?: Array<{ event: string; props?: Record<string, unknown>; at: string }>;
  }
}

export function track(event: AnalyticsEvent, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const entry = { event, props, at: new Date().toISOString() };
  window.__etabliEvents = window.__etabliEvents ?? [];
  window.__etabliEvents.push(entry);
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", entry);
  }
}
