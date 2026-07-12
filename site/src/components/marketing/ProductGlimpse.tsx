import { cn } from "@/lib/cn";

/**
 * Composition « produit » du hero : trois cartes réelles de l'application,
 * rendues en HTML/CSS (pas d'images), légèrement superposées.
 */
export function ProductGlimpse({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {/* Carte exercice */}
      <div className="relative z-10 w-full max-w-105 rounded-2xl border border-line bg-card p-5 shadow-(--shadow-lift)">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-bold"
              style={{ backgroundColor: "#F9E9CC", color: "#7A5410" }}
            >
              Oc
            </span>
            Occitan · Unité 1
          </span>
          <span className="text-sm font-medium text-ink-400">3 / 6</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand">
          <div className="h-full w-1/2 rounded-full bg-lumen-500" />
        </div>
        <p className="mt-5 text-sm font-medium text-ink-500">Que veut dire :</p>
        <p className="display-md mt-1 text-ink-900">« Cossí vas ? »</p>
        <div className="mt-4 grid gap-2">
          {["Où vas-tu ?", "Comment vas-tu ?", "Qui es-tu ?"].map((option, i) => (
            <div
              key={option}
              className={cn(
                "rounded-xl border px-4 py-2.5 text-[0.9375rem] font-medium",
                i === 1
                  ? "border-sauge-600 bg-sauge-100 text-sauge-600"
                  : "border-line bg-card text-ink-700",
              )}
            >
              {option}
              {i === 1 && <span className="float-right">✓</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Carte série */}
      <div className="absolute -top-8 right-0 z-20 hidden rotate-2 rounded-2xl border border-line bg-card px-5 py-4 shadow-(--shadow-soft) sm:block">
        <p className="text-sm font-medium text-ink-500">Série en cours</p>
        <p className="display-num mt-0.5 text-3xl text-ink-900">
          23 <span className="text-base font-sans font-medium text-ink-500">jours</span>
        </p>
        <div className="mt-2 flex gap-1">
          {[1, 1, 1, 1, 1, 1, 0].map((done, i) => (
            <span
              key={i}
              className={cn(
                "h-2 w-4 rounded-full",
                done ? "bg-lumen-400" : "bg-sand",
              )}
            />
          ))}
        </div>
      </div>

      {/* Carte voix */}
      <div className="absolute -bottom-9 -left-3 z-20 hidden -rotate-2 items-center gap-3 rounded-2xl border border-line bg-ink-900 px-5 py-4 shadow-(--shadow-lift) sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lumen-400">
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path d="M4 3.5v9l8-4.5-8-4.5Z" fill="#17113F" />
          </svg>
        </span>
        <span>
          <span className="block text-sm font-semibold text-paper">Miquèla — Toulouse</span>
          <span className="mt-0.5 flex items-end gap-0.5" aria-hidden="true">
            {[5, 9, 14, 8, 12, 6, 10, 13, 7, 4, 9, 11].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-ink-400"
                style={{ height: `${h}px` }}
              />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
