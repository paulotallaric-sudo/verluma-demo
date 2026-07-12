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
        Entreprise, relances, abonnement et confidentialité.
      </p>

      <div className="mt-8 space-y-6">
        {/* Entreprise */}
        <SectionCard title="Votre entreprise">
          <form onSubmit={handleProfileSubmit} className="grid gap-4">
            <TextField
              label="Raison sociale"
              name="company"
              defaultValue={isDemo ? demoUser.company : session.company ?? ""}
              autoComplete="organization"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Prénom" name="firstName" defaultValue={session.firstName} autoComplete="given-name" />
              <TextField
                label="SIRET"
                name="siret"
                defaultValue={isDemo ? demoUser.siret : ""}
                hint="Affiché sur vos devis et factures."
              />
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

        {/* Relances */}
        <SectionCard title="Relances automatiques">
          <div className="divide-y divide-line">
            <Toggle
              label="Relance des devis sans réponse"
              help="Un rappel poli à J+5 puis J+12 après l'envoi."
              defaultOn
            />
            <Toggle
              label="Relance des factures échues"
              help="À J+3 et J+10, puis mise en demeure proposée (jamais envoyée sans vous)."
              defaultOn
            />
            <Toggle
              label="Alerte consultation de devis"
              help="Notification quand un client ouvre un devis — le bon moment pour appeler."
              defaultOn
            />
            <Toggle
              label="Résumé du lundi matin"
              help="Un e-mail : ce qui a bougé, ce qui bloque, ce qui rentre cette semaine."
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
                  <dt className="text-ink-500">Client depuis</dt>
                  <dd className="font-medium text-ink-900">{demoUser.memberSince}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Dernière facture</dt>
                  <dd className="font-medium text-ink-900">240,00 € HT — 8 sept. 2025 (payée)</dd>
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
              <p className="font-semibold text-ink-900">Plan Établi · gratuit</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                3 devis et 3 factures par mois. Passez au plan Artisan pour les
                devis illimités, la signature avec acompte en ligne et les relances
                automatiques — 30 jours d&apos;essai, sans carte bancaire.
              </p>
              <ButtonLink href="/tarifs" size="sm" className="mt-4">
                Découvrir Artisan
              </ButtonLink>
            </div>
          )}
        </SectionCard>

        {/* Confidentialité */}
        <SectionCard title="Confidentialité et données">
          <p className="text-sm leading-relaxed text-ink-600">
            Vos documents et vos clients vous appartiennent. Exportez tout en un
            clic (CSV, PDF, FEC), ou supprimez définitivement votre compte — sans
            nous écrire, sans délai caché.
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
