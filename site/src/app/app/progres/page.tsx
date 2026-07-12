"use client";

import { ButtonLink } from "@/components/ui/Button";
import { MinutesChart } from "@/components/charts/MinutesChart";
import { VocabChart } from "@/components/charts/VocabChart";
import { useAuth } from "@/lib/auth";
import { demoUser } from "@/lib/data/demo-user";

/** Répartition de la force du vocabulaire — barres libellées, teinte unique. */
function StrengthBars() {
  const { wordsFragile, wordsStable, wordsSolid } = demoUser.stats;
  const total = wordsFragile + wordsStable + wordsSolid;
  const rows = [
    { label: "Fragiles", help: "revus souvent, encore hésitants", value: wordsFragile },
    { label: "Stables", help: "sus, intervalles en expansion", value: wordsStable },
    { label: "Solides", help: "mobilisables sans réfléchir", value: wordsSolid },
  ];
  return (
    <dl className="space-y-4">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <dt className="font-medium text-ink-900">
              {row.label} <span className="font-normal text-ink-500">— {row.help}</span>
            </dt>
            <dd className="shrink-0 font-semibold text-ink-900">{row.value}</dd>
          </div>
          <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-ink-600"
              style={{ width: `${(row.value / total) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </dl>
  );
}

export default function ProgresPage() {
  const { session } = useAuth();
  if (!session) return null;

  /* --------- État vide : compte neuf --------- */
  if (session.kind !== "demo") {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center sm:px-8">
        <div className="dot-grid mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line" aria-hidden="true">
          <svg viewBox="0 0 32 32" className="h-10 w-10 text-ink-400">
            <path d="M6 26V15m7 11V6m7 20v-8m7 8V11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="display-lg mt-6 text-ink-900">Vos courbes commencent à la première leçon</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          Minutes de pratique, vocabulaire maîtrisé, précision : tout se
          construira ici, jour après jour. Il n&apos;y a qu&apos;une façon de commencer.
        </p>
        <ButtonLink href="/app/lecons/du-jour" size="lg" className="mt-7">
          Faire ma première leçon
        </ButtonLink>
      </div>
    );
  }

  const { stats, dailyMinutes, vocabularyGrowth } = demoUser;

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
      <h1 className="display-lg text-ink-900">Vos progrès</h1>
      <p className="mt-1 text-[0.9375rem] text-ink-600">
        Quinze semaines d&apos;occitan, sept d&apos;italien — et des chiffres qui ne mentent pas.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: String(stats.totalLessons), label: "leçons terminées" },
          { value: `${stats.longestStreak} j`, label: "record de série" },
          { value: String(stats.wordsMastered), label: "mots maîtrisés" },
          { value: `${stats.accuracy30d} %`, label: "précision (30 j)" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-(--radius-card) border border-line bg-card p-5">
            <dd className="display-num text-3xl text-ink-900 sm:text-4xl">{stat.value}</dd>
            <dt className="mt-1 text-sm font-medium text-ink-500">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <section className="mt-6 rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
        <h2 className="font-semibold text-ink-900">Vocabulaire maîtrisé</h2>
        <p className="mt-0.5 text-sm text-ink-500">
          Relevé hebdomadaire depuis votre inscription, le 28 mars.
        </p>
        <VocabChart data={vocabularyGrowth} className="mt-5" />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
          <h2 className="font-semibold text-ink-900">Minutes par jour</h2>
          <p className="mt-0.5 text-sm text-ink-500">Deux dernières semaines.</p>
          <MinutesChart data={dailyMinutes} goal={15} className="mt-5" />
        </section>

        <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
          <h2 className="font-semibold text-ink-900">Force du vocabulaire</h2>
          <p className="mt-0.5 text-sm text-ink-500">
            {stats.wordsMastered} mots suivis par la répétition espacée.
          </p>
          <div className="mt-5">
            <StrengthBars />
          </div>
          <p className="mt-5 rounded-xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink-600">
            <strong className="font-semibold text-ink-900">Recommandation :</strong>{" "}
            57 mots fragiles, c&apos;est un peu au-dessus de votre moyenne. La session
            de révision du jour les cible en priorité — 5 minutes suffiront.
          </p>
        </section>
      </div>
    </div>
  );
}
