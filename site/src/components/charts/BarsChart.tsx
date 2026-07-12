"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Datum = { label: string; value: number };

/**
 * Barres série unique (encre), infobulle au survol et table accessible
 * en repli. `format` met en forme la valeur (euros, minutes…).
 */
export function BarsChart({
  data,
  format,
  caption,
  className,
}: {
  data: Datum[];
  format: (value: number) => string;
  caption: string;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value)) * 1.12;
  const plotHeight = 132;

  return (
    <div className={className}>
      <div className="relative" style={{ height: plotHeight + 26 }}>
        {/* Infobulle */}
        {active !== null && data[active] && (
          <div
            role="status"
            className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink-900 px-2.5 py-1.5 text-xs font-medium text-paper shadow-(--shadow-lift)"
            style={{ left: `${((active + 0.5) / data.length) * 100}%` }}
          >
            {data[active].label} · {format(data[active].value)}
          </div>
        )}

        <div className="absolute inset-0 flex items-end gap-[3%]" aria-hidden="true">
          {data.map((d, i) => (
            <button
              key={d.label + i}
              type="button"
              tabIndex={-1}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group flex h-full min-w-0 flex-1 cursor-default flex-col justify-end"
            >
              <div
                className={cn(
                  "w-full rounded-t-[4px] transition-colors",
                  d.value === 0 ? "bg-line" : active === i ? "bg-ink-900" : "bg-ink-600",
                )}
                style={{ height: `${Math.max(3, (d.value / max) * plotHeight)}px` }}
              />
              <span className="mt-1.5 block h-5 truncate text-center text-[0.65rem] font-medium text-ink-400">
                {d.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Version accessible (div englobant : un <table> ne peut pas rétrécir sous sa largeur de contenu) */}
      <div className="sr-only">
        <table>
          <caption>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Période</th>
              <th scope="col">Valeur</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.label + i}>
                <th scope="row">{d.label}</th>
                <td>{format(d.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
