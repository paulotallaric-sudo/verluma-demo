"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { MinutesChart } from "@/components/charts/MinutesChart";
import { useAuth } from "@/lib/auth";
import { demoUser, recentActivity, reviewsDue } from "@/lib/data/demo-user";
import { getLanguage } from "@/lib/data/languages";
import { cn } from "@/lib/cn";

const activityIcons: Record<string, React.ReactNode> = {
  lesson: <path d="M4 4.5h5.5a2 2 0 0 1 2 2V16a2 2 0 0 0-2-2H4V4.5Zm12 0h-4.5v9.5H16V4.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />,
  review: <path d="M16 8A6 6 0 1 0 4.7 11M4 6.5V11h4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  milestone: <path d="m10 3 2 4.3 4.7.6-3.4 3.2.9 4.6L10 13.5l-4.2 2.2.9-4.6L3.3 7.9 8 7.3 10 3Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />,
  streak: <path d="M10 3c1 2.5-.5 4-1.5 5C7.5 9 7 10 7 11.5a3.5 3.5 0 0 0 7 0c0-1.5-.5-3-1.5-4.5.2 1-.3 2-1.5 2.5.8-2.5-.5-5-1-6.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />,
};

/** Tableau de bord — l'écran « Aujourd'hui ». */
export default function DashboardPage() {
  const { session } = useAuth();
  if (!session) return null;

  const isDemo = session.kind === "demo";
  const hour = new Date().getHours();
  const greeting = hour < 5 ? "Bonne nuit" : hour < 18 ? "Bonjour" : "Bonsoir";

  /* --------- État vide : compte fraîchement créé --------- */
  if (!isDemo) {
    const chosen = getLanguage(session.language ?? "");
    return (
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <h1 className="display-lg text-ink-900">
          {greeting}, {session.firstName} !
        </h1>
        <p className="mt-2 text-[0.9375rem] text-ink-600">
          Votre espace est prêt. Tout commence par une première leçon.
        </p>

        <div className="mt-8 rounded-(--radius-card) border border-line bg-card p-8 text-center shadow-(--shadow-soft)">
          {chosen && (
            <span
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
              style={{ backgroundColor: chosen.hue, color: chosen.hueText }}
              aria-hidden="true"
            >
              {chosen.chip}
            </span>
          )}
          <h2 className="display-md mt-4 text-ink-900">
            {chosen ? `Première leçon ${chosen.withArticle === "l'occitan" ? "d'occitan" : `de ${chosen.name.toLowerCase()}`}` : "Votre première leçon"}
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
            Six minutes, correction immédiate. Sur ce site de démonstration, la
            leçon jouable est celle d&apos;occitan — le parcours fondateur de Verluma.
          </p>
          <ButtonLink href="/app/lecons/du-jour" size="lg" className="mt-6">
            Commencer ma première leçon
          </ButtonLink>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { value: "0", label: "jour de série — ça commence aujourd'hui" },
            { value: "0", label: "mot appris — plus pour longtemps" },
            { value: `${session.dailyGoal ?? 15} min`, label: "votre objectif quotidien" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-(--radius-card) border border-line bg-card p-5">
              <p className="display-num text-3xl text-ink-900">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-500">
          Envie de voir un espace vivant ? Déconnectez-vous puis utilisez le{" "}
          <Link href="/connexion" className="underline hover:text-ink-900">compte de démonstration</Link>{" "}
          de Sylvie : 15 semaines d&apos;apprentissage, statistiques et révisions pleines.
        </p>
      </div>
    );
  }

  /* --------- Compte démo : l'espace de Sylvie --------- */
  const { stats, dailyMinutes, languages: userLanguages } = demoUser;
  const goalRatio = Math.min(1, stats.minutesThisWeek / stats.weeklyGoalMinutes);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-lg text-ink-900">
            {greeting}, {session.firstName} !
          </h1>
          <p className="mt-1 text-[0.9375rem] text-ink-600">
            Votre leçon du jour n&apos;est pas encore faite — votre série de{" "}
            <strong className="font-semibold text-ink-900">{stats.streakDays} jours</strong> compte sur vous.
          </p>
        </div>
        <ButtonLink href="/app/lecons/du-jour">Faire ma leçon du jour</ButtonLink>
      </div>

      {/* Tuiles de statistiques */}
      <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: String(stats.streakDays), unit: "jours", label: "Série en cours", accent: true },
          { value: String(stats.wordsMastered), unit: "mots", label: "Vocabulaire maîtrisé" },
          { value: String(stats.reviewsDueToday), unit: "cartes", label: "À réviser aujourd'hui" },
          { value: `${stats.accuracy30d} %`, unit: "", label: "Précision sur 30 jours" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-(--radius-card) border p-5",
              stat.accent ? "border-lumen-300 bg-lumen-200/40" : "border-line bg-card",
            )}
          >
            <dd className="display-num text-3xl text-ink-900 sm:text-4xl">
              {stat.value}
              {stat.unit && <span className="ml-1 font-sans text-sm font-medium text-ink-500">{stat.unit}</span>}
            </dd>
            <dt className="mt-1 text-sm font-medium text-ink-500">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Colonne principale */}
        <div className="space-y-6">
          {/* Objectif hebdomadaire + graphique */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-semibold text-ink-900">Votre semaine</h2>
              <p className="text-sm text-ink-500">
                <strong className="font-semibold text-ink-900">{stats.minutesThisWeek} min</strong>{" "}
                sur {stats.weeklyGoalMinutes} min visées
              </p>
            </div>
            <div
              role="progressbar"
              aria-valuenow={Math.round(goalRatio * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Objectif hebdomadaire de pratique"
              className="mt-3 h-2 overflow-hidden rounded-full bg-sand"
            >
              <div className="h-full rounded-full bg-sauge-600" style={{ width: `${goalRatio * 100}%` }} />
            </div>
            <MinutesChart data={dailyMinutes} goal={15} className="mt-6" />
          </section>

          {/* Révisions dues */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink-900">Révisions du jour</h2>
              <ButtonLink href="/app/revision" size="sm" variant="outline">
                Réviser ({stats.reviewsDueToday})
              </ButtonLink>
            </div>
            <p className="mt-1 text-sm text-ink-500">
              Environ 5 minutes — ces cartes arrivent à échéance aujourd&apos;hui.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {reviewsDue.slice(0, 6).map((card) => (
                <li
                  key={card.id}
                  className={cn(
                    "rounded-full border px-3 py-1 text-sm font-medium",
                    card.strength === "fragile"
                      ? "border-garance-600/30 bg-garance-100 text-garance-600"
                      : "border-line bg-sand text-ink-700",
                  )}
                >
                  {card.front}
                </li>
              ))}
              {reviewsDue.length > 6 && (
                <li className="rounded-full border border-line px-3 py-1 text-sm font-medium text-ink-500">
                  +{reviewsDue.length - 6} autres
                </li>
              )}
            </ul>
          </section>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-6">
          {/* Parcours */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <h2 className="font-semibold text-ink-900">Vos parcours</h2>
            <ul className="mt-4 space-y-4">
              {userLanguages.map((lang) => {
                const meta = getLanguage(lang.slug === "italien" ? "italien" : lang.slug);
                const ratio = lang.unitsDone / lang.unitsTotal;
                return (
                  <li key={lang.slug}>
                    <Link href="/app/lecons" className="group block">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-ink-900">
                          {meta && (
                            <span
                              className="flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-bold"
                              style={{ backgroundColor: meta.hue, color: meta.hueText }}
                              aria-hidden="true"
                            >
                              {meta.chip}
                            </span>
                          )}
                          {lang.name}
                          <span className="rounded bg-ink-100 px-1.5 py-0.5 text-[0.7rem] font-bold text-ink-700">{lang.level}</span>
                        </span>
                        <span className="text-ink-500">
                          {lang.unitsDone}/{lang.unitsTotal} unités
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sand">
                        <div className="h-full rounded-full bg-ink-600 transition-all group-hover:bg-ink-900" style={{ width: `${ratio * 100}%` }} />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Activité récente */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <h2 className="font-semibold text-ink-900">Activité récente</h2>
            <ol className="mt-4 space-y-4">
              {recentActivity.slice(0, 5).map((event) => (
                <li key={event.label + event.date} className="flex gap-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      event.kind === "milestone" || event.kind === "streak"
                        ? "bg-lumen-200 text-lumen-700"
                        : "bg-ink-100 text-ink-700",
                    )}
                  >
                    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" aria-hidden="true">
                      {activityIcons[event.kind]}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug text-ink-900">{event.label}</p>
                    <p className="text-xs text-ink-500">{event.date} · {event.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
