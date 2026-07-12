"use client";

import { useMemo, useState } from "react";

/**
 * Courbe « mots maîtrisés » — série unique, trait 2 px animé au premier
 * rendu, points survolables, table accessible en repli.
 */
export function VocabChart({
  data,
  className,
}: {
  /** Relevés hebdomadaires, du plus ancien au plus récent. */
  data: number[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const width = 560;
  const height = 190;
  const pad = { top: 16, right: 14, bottom: 24, left: 38 };
  const max = Math.max(...data) * 1.1;

  const points = useMemo(
    () =>
      data.map((value, i) => ({
        x: pad.left + (i / (data.length - 1)) * (width - pad.left - pad.right),
        y: pad.top + (1 - value / max) * (height - pad.top - pad.bottom),
        value,
        week: i + 1,
      })),
    [data, max, pad.left, pad.right, pad.top, pad.bottom],
  );

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `${path} L${points[points.length - 1]!.x.toFixed(1)},${height - pad.bottom} L${pad.left},${height - pad.bottom} Z`;

  const gridValues = [100, 200, 300, 400];

  return (
    <div className={className}>
      <div className="relative">
        {active !== null && points[active] && (
          <div
            role="status"
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-ink-900 px-2.5 py-1.5 text-xs font-medium text-paper shadow-(--shadow-lift)"
            style={{
              left: `${(points[active].x / width) * 100}%`,
              top: `${(points[active].y / height) * 100}%`,
              marginTop: -8,
            }}
          >
            Semaine {points[active].week} · {points[active].value} mots
          </div>
        )}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label={`Mots maîtrisés : de ${data[0]} à ${data[data.length - 1]} en ${data.length} semaines`}
        >
          {/* Grille horizontale discrète */}
          {gridValues.map((v) => {
            const y = pad.top + (1 - v / max) * (height - pad.top - pad.bottom);
            return (
              <g key={v}>
                <line x1={pad.left} x2={width - pad.right} y1={y} y2={y} stroke="#E4E1D6" strokeWidth="1" />
                <text x={pad.left - 8} y={y + 3.5} textAnchor="end" fontSize="10.5" fill="#837BAC">
                  {v}
                </text>
              </g>
            );
          })}
          <line
            x1={pad.left}
            x2={width - pad.right}
            y1={height - pad.bottom}
            y2={height - pad.bottom}
            stroke="#CFCABA"
            strokeWidth="1"
          />
          {/* Aire discrète sous la courbe */}
          <path d={area} fill="#17113F" opacity="0.06" />
          {/* Courbe */}
          <path
            d={path}
            fill="none"
            stroke="#17113F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-line"
            style={{ "--line-length": 800 } as React.CSSProperties}
          />
          {/* Dernier point mis en valeur + étiquette directe */}
          <circle cx={points[points.length - 1]!.x} cy={points[points.length - 1]!.y} r="4.5" fill="#17113F" stroke="#F8F7F3" strokeWidth="2" />
          <text
            x={points[points.length - 1]!.x - 8}
            y={points[points.length - 1]!.y - 10}
            textAnchor="end"
            fontSize="12"
            fontWeight="700"
            fill="#17113F"
          >
            {data[data.length - 1]} mots
          </text>
          {/* Zones de survol (plus larges que les points) */}
          {points.map((p, i) => (
            <rect
              key={p.week}
              x={p.x - (width / data.length) / 2}
              y={0}
              width={width / data.length}
              height={height}
              fill="transparent"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            />
          ))}
        </svg>
      </div>

      <div className="sr-only">
        <table>
        <caption>Mots maîtrisés, relevé hebdomadaire depuis l&apos;inscription</caption>
        <thead>
          <tr>
            <th scope="col">Semaine</th>
            <th scope="col">Mots maîtrisés</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, i) => (
            <tr key={i}>
              <th scope="row">Semaine {i + 1}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
