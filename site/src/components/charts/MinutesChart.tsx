"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Datum = { day: string; label: string; minutes: number };

/**
 * Barres « minutes par jour » — série unique (encre), objectif en filet,
 * infobulle au survol/focus et table accessible en repli.
 */
export function MinutesChart({
  data,
  goal,
  className,
}: {
  data: Datum[];
  goal: number;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(goal, ...data.map((d) => d.minutes)) * 1.15;
  const plotHeight = 132;

  return (
    <div className={className}>
      <div className="relative" style={{ height: plotHeight + 26 }}>
        {/* Filet objectif (libellé en légende, sous le graphique) */}
        <div
          className="absolute inset-x-0 border-t border-dashed border-lumen-600/70"
          style={{ bottom: 26 + (goal / max) * plotHeight }}
          aria-hidden="true"
        />

        {/* Infobulle */}
        {active !== null && data[active] && (
          <div
            role="status"
            className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink-900 px-2.5 py-1.5 text-xs font-medium text-paper shadow-(--shadow-lift)"
            style={{ left: `${((active + 0.5) / data.length) * 100}%` }}
          >
            {data[active].day} · {data[active].minutes} min
          </div>
        )}

        <div className="absolute inset-0 flex items-end gap-[3%]" aria-hidden="true">
          {data.map((d, i) => (
            <button
              key={d.day}
              type="button"
              tabIndex={-1}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group flex h-full flex-1 cursor-default flex-col justify-end"
            >
              <div
                className={cn(
                  "w-full rounded-t-[4px] transition-colors",
                  d.minutes === 0 ? "bg-line" : active === i ? "bg-ink-900" : "bg-ink-600",
                )}
                style={{ height: `${Math.max(3, (d.minutes / max) * plotHeight)}px` }}
              />
              <span className="mt-1.5 block h-5 text-center text-[0.65rem] font-medium text-ink-400">
                {d.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-1 flex items-center gap-2 text-xs text-ink-500">
        <span className="inline-block w-5 border-t border-dashed border-lumen-600" aria-hidden="true" />
        objectif quotidien : {goal} min
      </p>

      {/* Version accessible (div englobant : un <table> ne peut pas rétrécir sous sa largeur de contenu) */}
      <div className="sr-only">
        <table>
        <caption>Minutes de pratique par jour, quatorze derniers jours</caption>
        <thead>
          <tr>
            <th scope="col">Jour</th>
            <th scope="col">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.day}>
              <th scope="row">{d.day}</th>
              <td>{d.minutes}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
