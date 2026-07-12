"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { demoUser, devisList, chantiers, encaissements, recentActivity } from "@/lib/data/demo-user";
import { euro } from "@/lib/data/quote-library";
import { getMetier } from "@/lib/data/metiers";
import { cn } from "@/lib/cn";
import type { DevisStatus } from "@/lib/types";

const statusStyles: Record<DevisStatus, string> = {
  brouillon: "bg-sand text-ink-600",
  envoyé: "bg-ink-100 text-ink-700",
  vu: "bg-lumen-200 text-lumen-700",
  signé: "bg-sauge-100 text-sauge-600",
  refusé: "bg-garance-100 text-garance-600",
};

const activityIcons: Record<string, React.ReactNode> = {
  devis: <path d="M6 3h6l3 3v11H6V3Zm6 0v3h3M8.5 10h4M8.5 13h4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  paiement: <path d="M3 6.5h14v9H3v-9Zm0 3h14M6 12.5h3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  chantier: <path d="M3 16h14M4.5 16V9L10 4.5 15.5 9v7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  signature: <path d="M3.5 14c2.5-.5 3.2-4.7 5-4.3 1.5.4.3 3.7 1.9 4 1.4.2 2-2 3.2-2 1 0 1.1 1.2 2.4 1.2.6 0 1-.2 1.2-.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />,
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
    const chosen = getMetier(session.metier ?? "");
    return (
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <h1 className="display-lg text-ink-900">
          {greeting}, {session.firstName} !
        </h1>
        <p className="mt-2 text-[0.9375rem] text-ink-600">
          {session.company ? `${session.company} a` : "Vous avez"} désormais un
          back-office. Tout commence par un premier devis.
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
          <h2 className="display-md mt-4 text-ink-900">Votre premier devis</h2>
          <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
            {chosen
              ? `Votre bibliothèque ${chosen.name.toLowerCase()} est prête, avec des ouvrages pré-chiffrés à ajuster à vos prix.`
              : "Votre bibliothèque d'ouvrages est prête, avec des prix à ajuster aux vôtres."}{" "}
            Comptez deux minutes.
          </p>
          <ButtonLink href="/app/devis/nouveau" size="lg" className="mt-6">
            Créer mon premier devis
          </ButtonLink>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { value: "0 €", label: "de devis en attente — plus pour longtemps" },
            { value: "0 €", label: "à encaisser — tout est à jour, forcément" },
            { value: "0", label: "relance à faire — et ça ne changera pas" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-(--radius-card) border border-line bg-card p-5">
              <p className="display-num text-3xl text-ink-900">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-500">
          Envie de voir un espace qui tourne à plein régime ? Déconnectez-vous puis
          utilisez le{" "}
          <Link href="/connexion" className="underline hover:text-ink-900">compte de démonstration</Link>{" "}
          de Denis : 10 mois d&apos;activité, chantiers en cours et trésorerie vivante.
        </p>
      </div>
    );
  }

  /* --------- Compte démo : l'atelier de Denis --------- */
  const { stats } = demoUser;
  const hotDevis = devisList.filter((d) => d.status === "vu" || d.status === "envoyé").slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-lg text-ink-900">
            {greeting}, {session.firstName} !
          </h1>
          <p className="mt-1 text-[0.9375rem] text-ink-600">
            Le devis Ferrand a été <strong className="font-semibold text-ink-900">consulté hier soir</strong> pour
            la 3ᵉ fois — c&apos;est le moment d&apos;appeler.
          </p>
        </div>
        <ButtonLink href="/app/devis/nouveau">Nouveau devis</ButtonLink>
      </div>

      {/* Tuiles de statistiques */}
      <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: euro.format(stats.quotesPendingAmount), label: `Devis en attente (${stats.quotesPending})`, accent: true },
          { value: euro.format(stats.toCollect), label: "À encaisser" },
          { value: `${stats.signatureRate3m} %`, label: "Devis signés (3 mois)" },
          { value: `${stats.medianSignatureDays} j`, label: "Délai médian de signature" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-(--radius-card) border p-5",
              stat.accent ? "border-lumen-300 bg-lumen-200/40" : "border-line bg-card",
            )}
          >
            <dd className="display-num text-2xl text-ink-900 sm:text-3xl">{stat.value}</dd>
            <dt className="mt-1 text-sm font-medium text-ink-500">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Colonne principale (min-w-0 : autorise les enfants à tronquer) */}
        <div className="min-w-0 space-y-6">
          {/* Devis à suivre */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink-900">Devis à suivre</h2>
              <ButtonLink href="/app/devis" size="sm" variant="outline">
                Tous les devis
              </ButtonLink>
            </div>
            <ul className="mt-4 divide-y divide-line">
              {hotDevis.map((devis) => (
                <li key={devis.id} className="flex items-center gap-4 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink-900">
                      {devis.client} — {devis.label}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-500">{devis.ref} · {devis.statusDetail}</p>
                  </div>
                  <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", statusStyles[devis.status])}>
                    {devis.status}
                  </span>
                  <span className="display-num w-20 shrink-0 text-right text-lg text-ink-900">
                    {euro.format(devis.amountHT)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Chantiers en cours */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink-900">Chantiers en cours</h2>
              <ButtonLink href="/app/chantiers" size="sm" variant="outline">
                Voir les chantiers
              </ButtonLink>
            </div>
            <ul className="mt-4 space-y-4">
              {chantiers.map((chantier) => (
                <li key={chantier.id}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <p className="min-w-0 truncate font-medium text-ink-900">
                      {chantier.label} <span className="text-ink-500">· {chantier.client}</span>
                    </p>
                    <span className="shrink-0 text-ink-500">{chantier.progress} %</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={chantier.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Avancement — ${chantier.label}`}
                    className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-sand"
                  >
                    <div className="h-full rounded-full bg-ink-600" style={{ width: `${chantier.progress}%` }} />
                  </div>
                  {chantier.alert && (
                    <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-lumen-200 px-2.5 py-0.5 text-xs font-semibold text-lumen-700">
                      <span aria-hidden="true">●</span> {chantier.alert}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Colonne latérale */}
        <div className="min-w-0 space-y-6">
          {/* À encaisser */}
          <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink-900">À encaisser</h2>
              <Link href="/app/tresorerie" className="text-sm font-medium text-ink-600 underline-offset-2 hover:text-ink-900 hover:underline">
                Trésorerie
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {encaissements.map((f) => (
                <li key={f.id} className="rounded-xl border border-line p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="min-w-0 truncate text-sm font-medium text-ink-900">{f.client}</p>
                    <p className="display-num shrink-0 text-base text-ink-900">{euro.format(f.amountTTC)}</p>
                  </div>
                  <p className={cn("mt-0.5 text-xs", f.state === "retard" ? "font-semibold text-garance-600" : "text-ink-500")}>
                    {f.due}
                  </p>
                </li>
              ))}
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
                      event.kind === "signature" || event.kind === "paiement"
                        ? "bg-sauge-100 text-sauge-600"
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
