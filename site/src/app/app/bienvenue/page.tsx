"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import { languages } from "@/lib/data/languages";
import { cn } from "@/lib/cn";

const goals = [
  { minutes: 5, label: "Tranquille", help: "5 min par jour — l'habitude d'abord" },
  { minutes: 15, label: "Régulier", help: "15 min par jour — le rythme recommandé" },
  { minutes: 30, label: "Ambitieux", help: "30 min par jour — départ imminent ?" },
];

function Onboarding() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session, completeOnboarding } = useAuth();

  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<string | null>(searchParams.get("langue"));
  const [dailyGoal, setDailyGoal] = useState<number | null>(null);

  const totalSteps = 3;

  function finish() {
    completeOnboarding({ language: language ?? "occitan", dailyGoal: dailyGoal ?? 15 });
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
          aria-label="Étapes de l'onboarding"
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
              {session?.firstName ? `${session.firstName}, quelle` : "Quelle"} langue voulez-vous habiter ?
            </h1>
            <p className="mt-3 text-[0.9375rem] text-ink-600">
              Vous pourrez en ajouter d&apos;autres à tout moment — beaucoup mènent deux
              parcours de front.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {languages.map((lang) => {
                const active = language === lang.slug;
                return (
                  <li key={lang.slug}>
                    <button
                      type="button"
                      onClick={() => setLanguage(lang.slug)}
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
                        style={{ backgroundColor: lang.hue, color: lang.hueText }}
                        aria-hidden="true"
                      >
                        {lang.chip}
                      </span>
                      {lang.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {step === 1 && (
          <div className="animate-rise">
            <h1 className="display-xl text-ink-900">Quel rythme tiendra dans votre vie ?</h1>
            <p className="mt-3 text-[0.9375rem] text-ink-600">
              Soyez réaliste plutôt qu&apos;héroïque : c&apos;est la régularité qui fabrique
              une langue. Vous pourrez ajuster ensuite.
            </p>
            <ul className="mt-7 grid gap-3">
              {goals.map((goal) => {
                const active = dailyGoal === goal.minutes;
                return (
                  <li key={goal.minutes}>
                    <button
                      type="button"
                      onClick={() => setDailyGoal(goal.minutes)}
                      aria-pressed={active}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all",
                        active
                          ? "border-ink-900 bg-ink-900 text-paper"
                          : "border-line bg-card text-ink-900 hover:border-ink-300",
                      )}
                    >
                      <span>
                        <span className="block font-semibold">{goal.label}</span>
                        <span className={cn("text-sm", active ? "text-ink-200" : "text-ink-500")}>
                          {goal.help}
                        </span>
                      </span>
                      <span className="display-num text-2xl">{goal.minutes}&#8239;min</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {step === 2 && (
          <div className="animate-rise text-center">
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lumen-200"
              aria-hidden="true"
            >
              <svg viewBox="0 0 32 32" className="h-8 w-8 text-lumen-700">
                <path d="M16 4c1.6 4-1 6.5-2.5 8S11 15 11 17.5a5 5 0 0 0 10 0c0-2.5-1-5-2.5-7 .3 1.6-.5 3-2 3.5 1.3-4-1-8-.5-10Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="display-xl mt-6 text-ink-900">Tout est prêt</h1>
            <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
              {languages.find((l) => l.slug === language)?.name ?? "Votre langue"},{" "}
              {dailyGoal ?? 15} minutes par jour. Votre série commence à la première
              leçon — elle est à un clic.
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
            disabled={(step === 0 && !language) || (step === 1 && !dailyGoal)}
          >
            Continuer
          </Button>
        ) : (
          <Button size="lg" onClick={finish}>
            Entrer dans mon espace
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
