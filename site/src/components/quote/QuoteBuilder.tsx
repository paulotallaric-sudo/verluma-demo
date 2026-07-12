"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button, ButtonLink } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { track } from "@/lib/analytics";
import {
  computeTotals,
  demoQuoteContext,
  euro,
  euroCents,
  quoteLibrary,
} from "@/lib/data/quote-library";
import type { QuoteLine } from "@/lib/types";

type Step = 0 | 1 | 2;

type Props = {
  /** Où renvoyer l'utilisateur en quittant / terminant. */
  exitHref: string;
  exitLabel: string;
  /** CTA affiché sur l'écran final (mode démo publique). */
  endCta?: { href: string; label: string };
  /** Contexte : démo publique ou application. */
  context: "demo" | "app";
};

const stepTitles = ["Le client", "Les ouvrages", "Le devis"] as const;

/**
 * Créateur de devis interactif en 3 étapes : client → lignes chiffrées
 * depuis la bibliothèque d'ouvrages → aperçu du document final avec
 * acompte. Totaux HT/TVA/TTC calculés en direct. Entièrement au clavier.
 */
export function QuoteBuilder({ exitHref, exitLabel, endCta, context }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [client, setClient] = useState(context === "demo" ? demoQuoteContext.client : "");
  const [project, setProject] = useState(context === "demo" ? demoQuoteContext.project : "");
  const [lines, setLines] = useState<QuoteLine[]>([]);
  const [nextId, setNextId] = useState(1);
  const [sent, setSent] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);

  const totals = useMemo(() => computeTotals(lines), [lines]);

  function addLine(index: number) {
    const item = quoteLibrary[index];
    if (!item) return;
    setLines((current) => [...current, { ...item, id: nextId, quantity: 1 }]);
    setNextId((n) => n + 1);
  }

  function updateQuantity(id: number, quantity: number) {
    setLines((current) =>
      current.map((l) => (l.id === id ? { ...l, quantity: Math.max(0.5, Math.min(999, quantity)) } : l)),
    );
  }

  function removeLine(id: number) {
    setLines((current) => current.filter((l) => l.id !== id));
  }

  function goToLines() {
    if (client.trim().length < 2) {
      setClientError("Indiquez au moins le nom du client.");
      return;
    }
    setClientError(null);
    if (step === 0) track("demarrage_devis_demo", { context });
    setStep(1);
  }

  function send() {
    setSent(true);
    track(context === "demo" ? "fin_devis_demo" : "devis_cree", {
      lignes: lines.length,
      totalTTC: Math.round(totals.totalTTC),
    });
  }

  /* ---------------- écran final ---------------- */
  if (sent) {
    return (
      <div className="mx-auto w-full max-w-xl rounded-(--radius-card) border border-line bg-card p-8 text-center shadow-(--shadow-lift) sm:p-10" role="status">
        <svg viewBox="0 0 48 48" className="mx-auto h-16 w-16 text-sauge-600" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.12" />
          <path d="M14 24.5 21 31l13-14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="display-lg mt-5 text-ink-900">Devis envoyé à {client.trim() || "votre client"}</h2>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
          {context === "demo"
            ? "Dans la vraie application, votre client reçoit un lien propre : il consulte le devis, le signe depuis son téléphone et paie l'acompte de 30 % dans la foulée. Vous êtes prévenu à chaque étape — y compris quand il l'ouvre sans répondre."
            : "Votre client reçoit le lien de consultation. Vous serez notifié à l'ouverture, à la signature et au paiement de l'acompte. La relance douce partira automatiquement à J+5 sans réponse."}
        </p>
        <p className="display-num mt-5 text-3xl text-ink-900">
          {euro.format(totals.totalTTC)} <span className="text-base font-sans font-medium text-ink-500">TTC</span>
        </p>
        <p className="text-sm text-ink-500">dont acompte à la signature : {euro.format(totals.deposit)}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {endCta ? (
            <>
              <ButtonLink href={endCta.href} size="lg">{endCta.label}</ButtonLink>
              <ButtonLink href={exitHref} variant="outline" size="lg">{exitLabel}</ButtonLink>
            </>
          ) : (
            <ButtonLink href={exitHref} size="lg">{exitLabel}</ButtonLink>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Fil d'étapes */}
      <div className="flex items-center gap-4">
        <Link
          href={exitHref}
          aria-label="Quitter le créateur de devis"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500 hover:bg-sand hover:text-ink-900"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Link>
        <ol className="flex flex-1 items-center gap-2" aria-label="Étapes du devis">
          {stepTitles.map((title, i) => (
            <li key={title} className="flex flex-1 items-center gap-2">
              <span
                aria-current={step === i ? "step" : undefined}
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  i < step
                    ? "bg-sauge-100 text-sauge-600"
                    : i === step
                      ? "bg-ink-900 text-paper"
                      : "bg-sand text-ink-400",
                )}
              >
                {i < step ? "✓" : i + 1}
              </span>
              <span className={cn("hidden text-sm font-medium sm:block", i === step ? "text-ink-900" : "text-ink-400")}>
                {title}
              </span>
              {i < 2 && <span className="h-px flex-1 bg-line" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>

      {/* ---------------- Étape 1 : client ---------------- */}
      {step === 0 && (
        <div className="mt-8 animate-rise rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft) sm:p-8">
          <h2 className="display-md text-ink-900">Pour qui est ce devis ?</h2>
          <p className="mt-1.5 text-sm text-ink-500">
            {context === "demo"
              ? "On vous a pré-rempli un client de démonstration — modifiez si le cœur vous en dit."
              : "Client existant ou nouveau : tapez, Établi retrouve ou crée la fiche."}
          </p>
          <div className="mt-6 grid gap-5">
            <TextField
              label="Client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              error={clientError ?? undefined}
              placeholder="M. et Mme Ferrand"
              required
            />
            <TextField
              label="Objet du devis"
              optional
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Dressing chambre principale"
            />
          </div>
          <div className="mt-7 flex justify-end">
            <Button size="lg" onClick={goToLines}>Choisir les ouvrages</Button>
          </div>
        </div>
      )}

      {/* ---------------- Étape 2 : lignes ---------------- */}
      {step === 1 && (
        <div className="mt-8 grid animate-rise gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Bibliothèque */}
          <section className="rounded-(--radius-card) border border-line bg-card p-5 shadow-(--shadow-soft)">
            <h2 className="font-semibold text-ink-900">Bibliothèque menuiserie</h2>
            <p className="mt-0.5 text-sm text-ink-500">Vos ouvrages, à vos prix. Touchez pour ajouter.</p>
            <ul className="mt-4 space-y-2">
              {quoteLibrary.map((item, i) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => addLine(i)}
                    className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5 text-left transition-colors hover:border-ink-400 hover:bg-sand"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-snug text-ink-900">{item.label}</span>
                      <span className="text-xs text-ink-500">
                        {euro.format(item.unitPrice)} / {item.unit} · TVA {item.vat.toLocaleString("fr-FR")} %
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 transition-colors group-hover:bg-ink-900 group-hover:text-paper"
                    >
                      +
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Devis en cours */}
          <section className="flex flex-col rounded-(--radius-card) border border-line bg-card p-5 shadow-(--shadow-soft)">
            <h2 className="font-semibold text-ink-900">
              Devis — {client.trim() || "client"}
            </h2>
            {lines.length === 0 ? (
              <div className="mt-4 flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-line-strong bg-sand/50 px-4 py-10 text-center">
                <p className="text-sm font-medium text-ink-600">Votre devis est vide.</p>
                <p className="mt-1 text-sm text-ink-500">
                  Ajoutez des ouvrages depuis la bibliothèque — les totaux se calculent tout seuls.
                </p>
              </div>
            ) : (
              <ul className="mt-4 flex-1 space-y-3">
                {lines.map((line) => (
                  <li key={line.id} className="rounded-xl border border-line p-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-snug text-ink-900">{line.label}</p>
                      <button
                        type="button"
                        onClick={() => removeLine(line.id)}
                        aria-label={`Retirer « ${line.label} »`}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-ink-400 hover:bg-garance-100 hover:text-garance-600"
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <label className="flex items-center gap-2 text-xs font-medium text-ink-500">
                        Qté ({line.unit})
                        <input
                          type="number"
                          min={0.5}
                          max={999}
                          step={0.5}
                          value={line.quantity}
                          onChange={(e) => updateQuantity(line.id, Number(e.target.value) || 1)}
                          className="w-20 rounded-lg border border-line-strong bg-card px-2 py-1.5 text-sm text-ink-900 focus:border-ink-700 focus:outline-none focus:ring-2 focus:ring-ink-700/60"
                        />
                      </label>
                      <p className="text-sm font-semibold text-ink-900">
                        {euro.format(line.quantity * line.unitPrice)} <span className="font-normal text-ink-500">HT</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Totaux en direct */}
            <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-sm" aria-live="polite">
              <div className="flex justify-between"><dt className="text-ink-500">Total HT</dt><dd className="font-medium text-ink-900">{euroCents.format(totals.totalHT)}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-500">TVA</dt><dd className="font-medium text-ink-900">{euroCents.format(totals.totalVat)}</dd></div>
              <div className="flex justify-between text-base"><dt className="font-semibold text-ink-900">Total TTC</dt><dd className="display-num text-lg text-ink-900">{euroCents.format(totals.totalTTC)}</dd></div>
            </dl>
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button variant="ghost" onClick={() => setStep(0)}>Retour</Button>
              <Button onClick={() => setStep(2)} disabled={lines.length === 0}>
                Voir le devis
              </Button>
            </div>
          </section>
        </div>
      )}

      {/* ---------------- Étape 3 : aperçu ---------------- */}
      {step === 2 && (
        <div className="mt-8 animate-rise">
          {/* Le document */}
          <div className="rounded-(--radius-card) border border-line bg-card shadow-(--shadow-lift)">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line p-6 sm:p-8">
              <div>
                <p className="font-display text-xl text-ink-900">Atelier Roubaud</p>
                <p className="mt-0.5 text-sm text-ink-500">Menuiserie &amp; agencement — Bordeaux<br />SIRET 912 480 335 00027</p>
              </div>
              <div className="text-right">
                <p className="eyebrow text-lumen-700">Devis DE-2026-048</p>
                <p className="mt-1 text-sm text-ink-500">Valable 30 jours</p>
              </div>
            </div>
            <div className="border-b border-line px-6 py-4 sm:px-8">
              <p className="text-sm text-ink-500">Pour</p>
              <p className="font-semibold text-ink-900">{client.trim()}</p>
              {project.trim() && <p className="text-sm text-ink-600">{project.trim()}</p>}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-105 text-sm">
                <caption className="sr-only">Lignes du devis</caption>
                <thead>
                  <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-ink-500">
                    <th scope="col" className="px-6 py-3 font-semibold sm:px-8">Désignation</th>
                    <th scope="col" className="px-2 py-3 text-right font-semibold">Qté</th>
                    <th scope="col" className="px-2 py-3 text-right font-semibold">PU HT</th>
                    <th scope="col" className="px-6 py-3 text-right font-semibold sm:px-8">Total HT</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.map((line) => (
                    <tr key={line.id} className="border-b border-line/60">
                      <td className="px-6 py-3 text-ink-900 sm:px-8">{line.label}</td>
                      <td className="px-2 py-3 text-right text-ink-600">{line.quantity.toLocaleString("fr-FR")} {line.unit}</td>
                      <td className="px-2 py-3 text-right text-ink-600">{euro.format(line.unitPrice)}</td>
                      <td className="px-6 py-3 text-right font-medium text-ink-900 sm:px-8">{euro.format(line.quantity * line.unitPrice)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <p className="max-w-xs text-xs leading-relaxed text-ink-500">
                Acompte de 30 % à la signature, solde à réception de chantier.
                TVA à taux réduit applicable aux travaux dans l&apos;habitat de plus de 2 ans.
              </p>
              <dl className="w-full max-w-56 space-y-1.5 text-sm">
                <div className="flex justify-between"><dt className="text-ink-500">Total HT</dt><dd className="font-medium text-ink-900">{euroCents.format(totals.totalHT)}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-500">TVA</dt><dd className="font-medium text-ink-900">{euroCents.format(totals.totalVat)}</dd></div>
                <div className="flex justify-between border-t border-line pt-1.5 text-base"><dt className="font-semibold text-ink-900">Total TTC</dt><dd className="display-num text-xl text-ink-900">{euroCents.format(totals.totalTTC)}</dd></div>
                <div className="flex justify-between rounded-lg bg-lumen-200/60 px-2 py-1.5"><dt className="font-medium text-lumen-700">Acompte (30 %)</dt><dd className="font-semibold text-lumen-700">{euro.format(totals.deposit)}</dd></div>
              </dl>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Button variant="ghost" onClick={() => setStep(1)}>Modifier les lignes</Button>
            <Button size="lg" onClick={send}>
              Envoyer pour signature et acompte
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
