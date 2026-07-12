"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { devisList } from "@/lib/data/demo-user";
import { euro } from "@/lib/data/quote-library";
import { cn } from "@/lib/cn";
import type { DevisStatus } from "@/lib/types";

const filters: Array<{ id: "tous" | DevisStatus; label: string }> = [
  { id: "tous", label: "Tous" },
  { id: "envoyé", label: "Envoyés" },
  { id: "vu", label: "Vus" },
  { id: "signé", label: "Signés" },
  { id: "refusé", label: "Refusés" },
];

const statusStyles: Record<DevisStatus, string> = {
  brouillon: "bg-sand text-ink-600",
  envoyé: "bg-ink-100 text-ink-700",
  vu: "bg-lumen-200 text-lumen-700",
  signé: "bg-sauge-100 text-sauge-600",
  refusé: "bg-garance-100 text-garance-600",
};

export default function DevisPage() {
  const { session } = useAuth();
  const [filter, setFilter] = useState<"tous" | DevisStatus>("tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return devisList.filter(
      (d) =>
        (filter === "tous" || d.status === filter) &&
        (query === "" ||
          `${d.client} ${d.label} ${d.ref}`.toLowerCase().includes(query)),
    );
  }, [filter, search]);

  if (!session) return null;

  /* --------- État vide : compte neuf --------- */
  if (session.kind !== "demo") {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center sm:px-8">
        <div className="dot-grid mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line" aria-hidden="true">
          <svg viewBox="0 0 32 32" className="h-10 w-10 text-ink-400">
            <path d="M10 5h9l5 5v17H10V5Zm9 0v5h5M14 16h8M14 20h8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="display-lg mt-6 text-ink-900">Aucun devis — pour l&apos;instant</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          Votre premier devis prend deux minutes avec la bibliothèque d&apos;ouvrages.
          Et dès qu&apos;il part, vous saurez quand votre client l&apos;ouvre.
        </p>
        <ButtonLink href="/app/devis/nouveau" size="lg" className="mt-7">
          Créer mon premier devis
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-lg text-ink-900">Devis</h1>
          <p className="mt-1 text-[0.9375rem] text-ink-600">
            {devisList.length} devis ce trimestre · les relances douces s&apos;occupent des silencieux.
          </p>
        </div>
        <ButtonLink href="/app/devis/nouveau">Nouveau devis</ButtonLink>
      </div>

      {/* Filtres + recherche */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filtrer par statut" className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                filter === f.id ? "bg-ink-900 text-paper" : "bg-sand text-ink-600 hover:text-ink-900",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-64">
          <span className="sr-only">Rechercher un devis</span>
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400">
            <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.7" fill="none" />
            <path d="m13.5 13.5 3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Client, référence, objet…"
            className="w-full rounded-full border border-line-strong bg-card py-2 pl-9 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ink-700 focus:outline-none focus:ring-2 focus:ring-ink-700/60"
          />
        </label>
      </div>

      {/* Liste */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-(--radius-card) border-2 border-dashed border-line-strong bg-sand/50 p-10 text-center">
          <p className="font-medium text-ink-700">Aucun devis ne correspond.</p>
          <p className="mt-1 text-sm text-ink-500">
            Essayez un autre statut, ou effacez la recherche.
          </p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {filtered.map((devis) => (
            <li
              key={devis.id}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-(--radius-card) border border-line bg-card p-5 shadow-(--shadow-soft)"
            >
              <div className="min-w-0 flex-1 basis-56">
                <p className="font-semibold text-ink-900">
                  {devis.client}
                  <span className="ml-2 text-sm font-normal text-ink-500">{devis.ref} · {devis.date}</span>
                </p>
                <p className="mt-0.5 truncate text-sm text-ink-600">{devis.label}</p>
                <p className="mt-1 text-xs text-ink-500">{devis.statusDetail}</p>
              </div>
              <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", statusStyles[devis.status])}>
                {devis.status}
              </span>
              <span className="display-num w-24 text-right text-xl text-ink-900">
                {euro.format(devis.amountHT)}
                <span className="block text-right font-sans text-[0.65rem] font-medium text-ink-500">HT</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
