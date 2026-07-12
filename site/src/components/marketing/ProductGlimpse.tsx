import { cn } from "@/lib/cn";

/**
 * Composition « produit » du hero : un devis en cours de signature,
 * la notification d'acompte encaissé et le suivi de consultation —
 * rendus en HTML/CSS (pas d'images), légèrement superposés.
 */
export function ProductGlimpse({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {/* Carte devis */}
      <div className="relative z-10 w-full max-w-105 rounded-2xl border border-line bg-card p-5 shadow-(--shadow-lift)">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-bold"
              style={{ backgroundColor: "#F1E4D2", color: "#7A4E14" }}
            >
              Me
            </span>
            Devis DE-2026-047
          </span>
          <span className="rounded-full bg-sauge-100 px-2.5 py-0.5 text-xs font-bold text-sauge-600">
            Vu hier, 21 h 12
          </span>
        </div>
        <p className="mt-4 text-sm font-medium text-ink-500">M. et Mme Ferrand — Bordeaux</p>
        <p className="display-md mt-0.5 text-ink-900">Dressing chambre principale</p>
        <div className="mt-4 space-y-2 border-t border-line pt-3 text-sm">
          {[
            ["Façade coulissante 3 vantaux · 6,2 m²", "2 604 €"],
            ["Aménagement tiroirs et penderie · 4,4 ml", "814 €"],
            ["Dépose et évacuation existant", "380 €"],
          ].map(([label, price]) => (
            <div key={label} className="flex items-baseline justify-between gap-3">
              <span className="text-ink-700">{label}</span>
              <span className="font-medium text-ink-900">{price}</span>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-3 border-t border-line pt-2">
            <span className="font-semibold text-ink-900">Total TTC</span>
            <span className="display-num text-xl text-ink-900">7 524 €</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-ink-900 px-4 py-2.5 text-center text-sm font-semibold text-paper">
          Signer et payer l&apos;acompte de 30 %
        </div>
      </div>

      {/* Carte acompte encaissé */}
      <div className="absolute -top-8 right-0 z-20 hidden rotate-2 rounded-2xl border border-line bg-card px-5 py-4 shadow-(--shadow-soft) sm:block">
        <p className="flex items-center gap-2 text-sm font-semibold text-sauge-600">
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <circle cx="8" cy="8" r="7.2" fill="currentColor" opacity="0.15" />
            <path d="m4.8 8.4 2.2 2.2 4.4-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Acompte encaissé
        </p>
        <p className="display-num mt-0.5 text-3xl text-ink-900">2 257 €</p>
        <p className="mt-0.5 text-xs text-ink-500">Mme Lacoste · carte bancaire</p>
      </div>

      {/* Carte signature */}
      <div className="absolute -bottom-9 -left-3 z-20 hidden -rotate-2 items-center gap-3 rounded-2xl border border-line bg-ink-900 px-5 py-4 shadow-(--shadow-lift) sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lumen-400">
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path d="M2.5 11.5c2-.4 2.6-3.8 4-3.5 1.2.3.2 3 1.5 3.2 1.1.2 1.6-1.6 2.6-1.6.8 0 .9 1 1.9 1 .5 0 .8-.2 1-.4" stroke="#23201A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        <span>
          <span className="block text-sm font-semibold text-paper">Signé électroniquement</span>
          <span className="block text-xs text-ink-300">Fenêtres Lacoste · en 2 jours, sans imprimante</span>
        </span>
      </div>
    </div>
  );
}
