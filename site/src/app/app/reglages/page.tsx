"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { useAuth } from "@/lib/auth";
import { demoUser } from "@/lib/data/demo-user";
import { cn } from "@/lib/cn";

/** Interrupteur accessible (bouton avec rôle switch). */
function Toggle({
  label,
  help,
  defaultOn = false,
}: {
  label: string;
  help: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div>
        <p className="text-[0.9375rem] font-medium text-ink-900">{label}</p>
        <p className="text-sm text-ink-500">{help}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
          on ? "bg-sauge-600" : "bg-line-strong",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-6 w-6 rounded-full bg-card shadow transition-all duration-200",
            on ? "left-[calc(100%-1.625rem)]" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft)">
      <h2 className="font-semibold text-ink-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ReglagesPage() {
  const { session, logout } = useAuth();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  if (!session) return null;
  const isDemo = session.kind === "demo";

  function handleProfileSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
      <h1 className="display-lg text-ink-900">Réglages</h1>
      <p className="mt-1 text-[0.9375rem] text-ink-600">
        Profil, objectifs, abonnement et confidentialité.
      </p>

      <div className="mt-8 space-y-6">
        {/* Profil */}
        <SectionCard title="Profil">
          <form onSubmit={handleProfileSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Prénom" name="firstName" defaultValue={session.firstName} autoComplete="given-name" />
              <TextField label="Nom" name="lastName" defaultValue={session.lastName} optional autoComplete="family-name" />
            </div>
            <TextField
              label="Adresse e-mail"
              name="email"
              type="email"
              defaultValue={session.email}
              hint={isDemo ? "Compte de démonstration — l'adresse n'est pas modifiable." : undefined}
              disabled={isDemo}
            />
            <div className="flex items-center gap-3">
              <Button type="submit" size="sm">Enregistrer</Button>
              <span role="status" aria-live="polite" className="text-sm font-medium text-sauge-600">
                {saved && "Modifications enregistrées (démo)."}
              </span>
            </div>
          </form>
        </SectionCard>

        {/* Objectif */}
        <SectionCard title="Objectif quotidien">
          <ObjectiveSelector initial={session.dailyGoal ?? 15} />
        </SectionCard>

        {/* Notifications */}
        <SectionCard title="Notifications">
          <div className="divide-y divide-line">
            <Toggle
              label="Rappel de série"
              help="Un rappel discret à 20 h si la leçon du jour n'est pas faite."
              defaultOn
            />
            <Toggle
              label="Révisions prêtes"
              help="Le matin, quand vos cartes du jour sont calibrées."
              defaultOn
            />
            <Toggle
              label="Nouveautés de parcours"
              help="Nouvelles unités et nouvelles voix dans vos langues."
            />
          </div>
        </SectionCard>

        {/* Abonnement */}
        <SectionCard title="Abonnement">
          {isDemo ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-sand p-4">
                <div>
                  <p className="font-semibold text-ink-900">
                    Plan {demoUser.plan.name} · {demoUser.plan.cycle}
                  </p>
                  <p className="text-sm text-ink-600">
                    {demoUser.plan.price} — renouvellement le {demoUser.plan.renewal}
                  </p>
                </div>
                <span className="rounded-full bg-sauge-100 px-3 py-1 text-xs font-semibold text-sauge-600">
                  Actif
                </span>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Moyen de paiement</dt>
                  <dd className="font-medium text-ink-900">{demoUser.plan.paymentMethod}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Membre depuis</dt>
                  <dd className="font-medium text-ink-900">{demoUser.memberSince}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Dernière facture</dt>
                  <dd className="font-medium text-ink-900">79,00 € — 28 mars 2026 (payée)</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/tarifs" variant="outline" size="sm">Changer de plan</ButtonLink>
                <Button variant="ghost" size="sm" className="text-ink-500">
                  Résilier (démo)
                </Button>
              </div>
            </>
          ) : (
            <div className="rounded-xl bg-sand p-4">
              <p className="font-semibold text-ink-900">Plan Découverte · gratuit</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                Une langue, une leçon par jour, 20 cartes de révision. Passez à
                Fluide pour tout débloquer — 14 jours d&apos;essai, sans carte bancaire.
              </p>
              <ButtonLink href="/tarifs" size="sm" className="mt-4">
                Découvrir Fluide
              </ButtonLink>
            </div>
          )}
        </SectionCard>

        {/* Confidentialité */}
        <SectionCard title="Confidentialité et données">
          <p className="text-sm leading-relaxed text-ink-600">
            Vos données d&apos;apprentissage vous appartiennent. Exportez-les en JSON
            lisible, ou supprimez définitivement votre compte — sans nous écrire,
            sans délai caché.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="outline" size="sm">Exporter mes données (démo)</Button>
            <Button
              variant="outline"
              size="sm"
              className="border-garance-600/40 text-garance-600 hover:bg-garance-100"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              {isDemo ? "Réinitialiser la démo" : "Supprimer mon compte"}
            </Button>
          </div>
        </SectionCard>

        {/* Déconnexion (mobile surtout) */}
        <div className="pb-4 text-center lg:hidden">
          <Button
            variant="ghost"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
}

function ObjectiveSelector({ initial }: { initial: number }) {
  const [goal, setGoal] = useState(initial);
  const options = [
    { minutes: 5, label: "Tranquille" },
    { minutes: 15, label: "Régulier" },
    { minutes: 30, label: "Ambitieux" },
  ];
  return (
    <div role="radiogroup" aria-label="Objectif quotidien" className="grid gap-3 sm:grid-cols-3">
      {options.map((option) => {
        const active = goal === option.minutes;
        return (
          <button
            key={option.minutes}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setGoal(option.minutes)}
            className={cn(
              "rounded-xl border px-4 py-3.5 text-left transition-all",
              active
                ? "border-ink-900 bg-ink-900 text-paper"
                : "border-line bg-card text-ink-900 hover:border-ink-300",
            )}
          >
            <span className="display-num block text-2xl">{option.minutes} min</span>
            <span className={cn("text-sm", active ? "text-ink-200" : "text-ink-500")}>
              {option.label} par jour
            </span>
          </button>
        );
      })}
    </div>
  );
}
