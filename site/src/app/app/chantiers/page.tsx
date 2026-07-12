"use client";

import { ButtonLink } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { chantiers } from "@/lib/data/demo-user";
import { euro } from "@/lib/data/quote-library";

export default function ChantiersPage() {
  const { session } = useAuth();
  if (!session) return null;

  /* --------- État vide : compte neuf --------- */
  if (session.kind !== "demo") {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center sm:px-8">
        <div className="dot-grid mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line" aria-hidden="true">
          <svg viewBox="0 0 32 32" className="h-10 w-10 text-ink-400">
            <path d="M4 26h24M7 26V14l9-7.5 9 7.5v12M13 26v-6h6v6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="display-lg mt-6 text-ink-900">Les chantiers naissent des devis signés</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          Dès qu&apos;un devis est signé, il devient un chantier : avancement,
          situations à facturer, reste dû. Tout commence par un premier devis.
        </p>
        <ButtonLink href="/app/devis/nouveau" size="lg" className="mt-7">
          Créer mon premier devis
        </ButtonLink>
      </div>
    );
  }

  const totalEnCours = chantiers.reduce((sum, c) => sum + c.amountHT, 0);

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-lg text-ink-900">Chantiers</h1>
          <p className="mt-1 text-[0.9375rem] text-ink-600">
            {chantiers.length} chantiers en cours · {euro.format(totalEnCours)} HT au total.
          </p>
        </div>
        <ButtonLink href="/app/devis/nouveau">Nouveau devis</ButtonLink>
      </div>

      <ul className="mt-8 space-y-4">
        {chantiers.map((chantier) => (
          <li key={chantier.id} className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-semibold text-ink-900">{chantier.label}</h2>
                <p className="mt-0.5 text-sm text-ink-500">
                  {chantier.client} · {chantier.city}
                </p>
              </div>
              <p className="display-num text-2xl text-ink-900">
                {euro.format(chantier.amountHT)}
                <span className="ml-1 font-sans text-xs font-medium text-ink-500">HT</span>
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div
                role="progressbar"
                aria-valuenow={chantier.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Avancement — ${chantier.label}`}
                className="h-2 flex-1 overflow-hidden rounded-full bg-sand"
              >
                <div className="h-full rounded-full bg-ink-600" style={{ width: `${chantier.progress}%` }} />
              </div>
              <span className="w-10 shrink-0 text-right text-sm font-semibold text-ink-900">
                {chantier.progress} %
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
              <p className="text-ink-600">
                <span className="font-medium text-ink-900">{chantier.stage}</span> · {chantier.dueLabel}
              </p>
              {chantier.alert && (
                <p className="inline-flex items-center gap-1.5 rounded-full bg-lumen-200 px-2.5 py-0.5 text-xs font-semibold text-lumen-700">
                  <span aria-hidden="true">●</span> {chantier.alert}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 rounded-(--radius-card) bg-sand p-5 text-sm leading-relaxed text-ink-600">
        <strong className="font-semibold text-ink-900">Site de démonstration :</strong>{" "}
        dans l&apos;application complète, chaque chantier détaille ses situations de
        travaux, ses photos, ses avenants et son reste à facturer.
      </p>
    </div>
  );
}
