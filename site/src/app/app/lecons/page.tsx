"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { getLanguage } from "@/lib/data/languages";
import { demoUser } from "@/lib/data/demo-user";
import { cn } from "@/lib/cn";

/** Unités du parcours occitan affichées dans la démo. */
const occitanUnits = [
  { number: 7, title: "La famille", lessons: 5, status: "done" as const },
  { number: 8, title: "Les repas", lessons: 6, status: "done" as const },
  { number: 9, title: "Au marché", lessons: 5, status: "current" as const, progress: 3 },
  { number: 10, title: "Demander son chemin", lessons: 6, status: "locked" as const },
  { number: 11, title: "Le temps qu'il fait", lessons: 5, status: "locked" as const },
  { number: 12, title: "Parler du passé", lessons: 7, status: "locked" as const },
];

export default function LeconsPage() {
  const { session } = useAuth();
  if (!session) return null;

  const isDemo = session.kind === "demo";
  const fresh = !isDemo;
  const chosen = fresh ? getLanguage(session.language ?? "occitan") : getLanguage("occitan");

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-lg text-ink-900">Leçons</h1>
          <p className="mt-1 text-[0.9375rem] text-ink-600">
            {isDemo
              ? "Parcours occitan — unité 9 en cours. L'italien vous attend aussi."
              : chosen
                ? `Parcours ${chosen.name} — tout commence à l'unité 1.`
                : "Votre parcours commence ici."}
          </p>
        </div>
        <ButtonLink href="/app/lecons/du-jour">
          {isDemo ? "Leçon du jour" : "Première leçon"}
        </ButtonLink>
      </div>

      {/* Leçon du jour mise en avant */}
      <Link
        href="/app/lecons/du-jour"
        className="mt-8 flex items-center gap-5 rounded-(--radius-card) border-2 border-ink-900 bg-card p-6 shadow-(--shadow-lift) transition-transform hover:-translate-y-0.5"
      >
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold"
          style={{ backgroundColor: "#F9E9CC", color: "#7A5410" }}
          aria-hidden="true"
        >
          Oc
        </span>
        <span className="min-w-0 flex-1">
          <span className="eyebrow block text-lumen-700">
            {isDemo ? "Leçon du jour · Unité 1 (révision découverte)" : "Leçon du jour · Unité 1"}
          </span>
          <span className="display-md mt-1 block text-ink-900">Premiers échanges</span>
          <span className="mt-1 block text-sm text-ink-500">6 exercices · ≈ 6 minutes</span>
        </span>
        <svg viewBox="0 0 20 20" className="h-6 w-6 shrink-0 text-ink-900" aria-hidden="true">
          <path d="m7.5 5 5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Liste des unités */}
      <h2 className="mt-10 font-semibold text-ink-900">
        {fresh ? "Les premières unités" : "Votre progression dans le parcours"}
      </h2>
      <ol className="mt-4 space-y-3">
        {(fresh
          ? [
              { number: 1, title: "Se saluer", lessons: 4, status: "current" as const, progress: 0 },
              { number: 2, title: "Se présenter", lessons: 5, status: "locked" as const },
              { number: 3, title: "Compter et payer", lessons: 5, status: "locked" as const },
              { number: 4, title: "Le café et la table", lessons: 6, status: "locked" as const },
            ]
          : occitanUnits
        ).map((unit) => (
          <li
            key={unit.number}
            className={cn(
              "flex items-center gap-4 rounded-(--radius-card) border p-5",
              unit.status === "current"
                ? "border-lumen-500 bg-lumen-200/30"
                : unit.status === "done"
                  ? "border-line bg-card"
                  : "border-line bg-sand/50",
            )}
          >
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-base",
                unit.status === "done"
                  ? "bg-sauge-100 text-sauge-600"
                  : unit.status === "current"
                    ? "bg-ink-900 text-paper"
                    : "bg-line text-ink-400",
              )}
              aria-hidden="true"
            >
              {unit.status === "done" ? (
                <svg viewBox="0 0 16 16" className="h-4 w-4">
                  <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                unit.number
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className={cn("font-semibold", unit.status === "locked" ? "text-ink-400" : "text-ink-900")}>
                Unité {unit.number} — {unit.title}
              </p>
              <p className="text-sm text-ink-500">
                {unit.status === "done" && `${unit.lessons} leçons terminées`}
                {unit.status === "current" &&
                  `${"progress" in unit ? unit.progress : 0}/${unit.lessons} leçons — en cours`}
                {unit.status === "locked" && `${unit.lessons} leçons — se débloque avec l'unité précédente`}
              </p>
            </div>
            {unit.status === "locked" && (
              <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-ink-300" aria-hidden="true">
                <rect x="5" y="9" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-8 rounded-(--radius-card) bg-sand p-5 text-sm leading-relaxed text-ink-600">
        <strong className="font-semibold text-ink-900">Site de démonstration :</strong>{" "}
        seule la leçon « Premiers échanges » est jouable ici. Dans l&apos;application
        complète, chaque unité contient ses leçons, ses dialogues audio et ses dictées.
      </p>
    </div>
  );
}
