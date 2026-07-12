"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { LogoMark } from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import { metiers } from "@/lib/data/metiers";
import { cn } from "@/lib/cn";

function Onboarding() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session, completeOnboarding } = useAuth();

  const [step, setStep] = useState(0);
  const [metier, setMetier] = useState<string | null>(searchParams.get("metier"));
  const [company, setCompany] = useState("");

  const totalSteps = 3;
  const chosen = metiers.find((m) => m.slug === metier);

  function finish() {
    completeOnboarding({
      metier: metier ?? "menuisier",
      company: company.trim() || `${session?.firstName ?? "Mon"} — artisan`,
    });
    router.push("/app");
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-5 py-8 sm:px-8">
      {/* Progression */}
      <div className="flex items-center gap-4">
        <LogoMark className="h-9 w-9 shrink-0" />
        <div
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label="Étapes de l'installation"
          className="h-2 flex-1 overflow-hidden rounded-full bg-sand"
        >
          <div
            className="h-full rounded-full bg-lumen-500 transition-all duration-500"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-ink-500">
          {step + 1}/{totalSteps}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-10">
        {step === 0 && (
          <div className="animate-rise">
            <h1 className="display-xl text-ink-900">
              {session?.firstName ? `${session.firstName}, quel` : "Quel"} est votre métier ?
            </h1>
            <p className="mt-3 text-[0.9375rem] text-ink-600">
              Votre bibliothèque d&apos;ouvrages de départ en dépend — unités, TVA,
              libellés. Vous pourrez tout ajuster ensuite.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {metiers.map((m) => {
                const active = metier === m.slug;
                return (
                  <li key={m.slug}>
                    <button
                      type="button"
                      onClick={() => setMetier(m.slug)}
                      aria-pressed={active}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-sm font-medium transition-all",
                        active
                          ? "border-ink-900 bg-ink-900 text-paper"
                          : "border-line bg-card text-ink-900 hover:border-ink-300",
                      )}
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold"
                        style={{ backgroundColor: m.hue, color: m.hueText }}
                        aria-hidden="true"
                      >
                        {m.chip}
                      </span>
                      {m.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-sm text-ink-500">
              Un autre métier du bâtiment ? Choisissez le plus proche — la
              bibliothèque s&apos;adapte à vos ouvrages.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="animate-rise">
            <h1 className="display-xl text-ink-900">Le nom qui figurera sur vos devis</h1>
            <p className="mt-3 text-[0.9375rem] text-ink-600">
              Raison sociale ou nom commercial — c&apos;est ce que vos clients verront
              en haut de chaque document. SIRET et mentions se règlent plus tard.
            </p>
            <div className="mt-7 max-w-md">
              <TextField
                label="Nom de votre entreprise"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={chosen ? `Atelier ${session?.firstName ?? ""} — ${chosen.name.toLowerCase()}` : "Atelier Roubaud"}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-rise text-center">
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lumen-200"
              aria-hidden="true"
            >
              <svg viewBox="0 0 32 32" className="h-8 w-8 text-lumen-700">
                <path d="M6 22h20M9 22V12l7-6 7 6v10M13 22v-5h6v5" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="display-xl mt-6 text-ink-900">L&apos;atelier est monté</h1>
            <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
              {company.trim() || "Votre entreprise"}, {chosen?.name.toLowerCase() ?? "artisan"} :
              votre bibliothèque d&apos;ouvrages est installée et vos 30 jours d&apos;essai
              du plan Artisan commencent maintenant. Premier devis ?
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 pb-4">
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
            Retour
          </Button>
        ) : (
          <span />
        )}
        {step < totalSteps - 1 ? (
          <Button
            size="lg"
            onClick={() => setStep((s) => s + 1)}
            disabled={step === 0 && !metier}
          >
            Continuer
          </Button>
        ) : (
          <Button size="lg" onClick={finish}>
            Entrer dans mon atelier
          </Button>
        )}
      </div>
    </div>
  );
}

export default function BienvenuePage() {
  return (
    <Suspense>
      <Onboarding />
    </Suspense>
  );
}
