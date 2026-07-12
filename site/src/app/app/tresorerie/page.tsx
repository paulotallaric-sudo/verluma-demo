"use client";

import { ButtonLink } from "@/components/ui/Button";
import { BarsChart } from "@/components/charts/BarsChart";
import { useAuth } from "@/lib/auth";
import { demoUser, encaissements } from "@/lib/data/demo-user";
import { euro } from "@/lib/data/quote-library";
import { cn } from "@/lib/cn";

export default function TresoreriePage() {
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
        <h1 className="display-lg mt-6 text-ink-900">Votre trésorerie s&apos;écrira ici</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          CA facturé, acomptes encaissés, retards relancés : tout se construira
          au fil de vos devis et factures. Il n&apos;y a qu&apos;une façon de commencer.
        </p>
        <ButtonLink href="/app/devis/nouveau" size="lg" className="mt-7">
          Créer mon premier devis
        </ButtonLink>
      </div>
    );
  }

  const { stats, monthlyRevenue } = demoUser;
  const yearTotal = monthlyRevenue.reduce((sum, m) => sum + m.amount, 0);
  const bestMonth = monthlyRevenue.reduce((a, b) => (b.amount > a.amount ? b : a));

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
      <h1 className="display-lg text-ink-900">Trésorerie</h1>
      <p className="mt-1 text-[0.9375rem] text-ink-600">
        La réponse à la vraie question : qui vous doit quoi, et quand ça rentre.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: euro.format(yearTotal), label: "facturé sur 12 mois (HT)" },
          { value: euro.format(stats.toCollect), label: "à encaisser" },
          { value: euro.format(stats.overdue), label: "en retard", alert: true },
          { value: euro.format(stats.quotesPendingAmount), label: "de devis en attente" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-(--radius-card) border p-5",
              stat.alert ? "border-garance-600/30 bg-garance-100/50" : "border-line bg-card",
            )}
          >
            <dd className={cn("display-num text-2xl sm:text-3xl", stat.alert ? "text-garance-600" : "text-ink-900")}>
              {stat.value}
            </dd>
            <dt className="mt-1 text-sm font-medium text-ink-500">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <section className="mt-6 rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold text-ink-900">CA facturé par mois</h2>
          <p className="text-sm text-ink-500">
            Meilleur mois : <strong className="font-semibold text-ink-900">{bestMonth.month}</strong> ({euro.format(bestMonth.amount)})
          </p>
        </div>
        <p className="mt-0.5 text-sm text-ink-500">
          Juillet 2025 → juin 2026 · {euro.format(yearTotal)} HT au total — août, c&apos;est les vacances, et c&apos;est très bien.
        </p>
        <BarsChart
          data={monthlyRevenue.map((m) => ({ label: m.month, value: m.amount }))}
          format={(v) => `${euro.format(v)} HT`}
          caption="Chiffre d'affaires facturé hors taxes par mois, de juillet 2025 à juin 2026"
          className="mt-6"
        />
      </section>

      <section className="mt-6 rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
        <h2 className="font-semibold text-ink-900">Encaissements à suivre</h2>
        <ul className="mt-4 divide-y divide-line">
          {encaissements.map((f) => (
            <li key={f.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3.5">
              <div className="min-w-0 flex-1 basis-52">
                <p className="text-sm font-semibold text-ink-900">
                  {f.client} <span className="font-normal text-ink-500">· {f.ref}</span>
                </p>
                <p className="mt-0.5 text-sm text-ink-600">{f.label}</p>
              </div>
              <p className={cn("text-xs", f.state === "retard" ? "font-semibold text-garance-600" : "text-ink-500")}>
                {f.due}
              </p>
              <p className="display-num w-24 text-right text-lg text-ink-900">{euro.format(f.amountTTC)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink-600">
          <strong className="font-semibold text-ink-900">Recommandation :</strong>{" "}
          la facture Foncia dépasse 15 jours de retard. La mise en demeure
          pré-rédigée est prête dans les relances — l&apos;envoyer maintenant maximise
          vos chances d&apos;être payé avant les congés d&apos;août.
        </p>
      </section>
    </div>
  );
}
