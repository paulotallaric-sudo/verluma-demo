"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button, ButtonLink } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import type { Exercise, Lesson } from "@/lib/types";

type Phase = "idle" | "checked";

type Props = {
  lesson: Lesson;
  /** Où renvoyer l'utilisateur en quittant / terminant. */
  exitHref: string;
  exitLabel: string;
  /** CTA affiché sur l'écran de fin (mode démo publique). */
  endCta?: { href: string; label: string };
};

/**
 * Lecteur de leçon interactif : QCM et remise en ordre, avec correction
 * immédiate, barre de progression, score final. Entièrement au clavier.
 */
export function LessonPlayer({ lesson, exitHref, exitLabel, endCta }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [selected, setSelected] = useState<number | null>(null);
  const [built, setBuilt] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const exercise = lesson.exercises[index];
  const total = lesson.exercises.length;

  const isCorrect = useMemo(() => {
    if (!exercise) return false;
    if (exercise.type === "choice") return selected === exercise.answer;
    return (
      built.map((i) => exercise.words[i]).join(" ").trim() === exercise.answer.trim()
    );
  }, [exercise, selected, built]);

  if (!exercise) return null;

  function begin() {
    setStarted(true);
    track("demarrage_lecon", { lecon: lesson.id });
  }

  function check() {
    if (phase === "checked") return;
    setPhase("checked");
    if (isCorrect) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
      track("fin_lecon", { lecon: lesson.id, score: correctCount, total });
      return;
    }
    setIndex((i) => i + 1);
    setPhase("idle");
    setSelected(null);
    setBuilt([]);
  }

  const canCheck =
    exercise.type === "choice" ? selected !== null : built.length === exercise.words.length;

  /* ---------------- écran d'accueil ---------------- */
  if (!started) {
    return (
      <div className="mx-auto w-full max-w-xl rounded-(--radius-card) border border-line bg-card p-8 text-center shadow-(--shadow-lift) sm:p-10">
        <span
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
          style={{ backgroundColor: "#F9E9CC", color: "#7A5410" }}
          aria-hidden="true"
        >
          Oc
        </span>
        <p className="eyebrow mt-5 text-lumen-700">{lesson.unit}</p>
        <h2 className="display-lg mt-2 text-ink-900">{lesson.title}</h2>
        <p className="mx-auto mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          {total} exercices · environ 6 minutes. Répondez, trompez-vous, recommencez :
          c&apos;est exactement comme ça qu&apos;on apprend.
        </p>
        <Button size="lg" className="mt-7" onClick={begin}>
          Commencer la leçon
        </Button>
        <p className="mt-4">
          <Link href={exitHref} className="text-sm text-ink-500 underline-offset-2 hover:underline">
            {exitLabel}
          </Link>
        </p>
      </div>
    );
  }

  /* ---------------- écran de fin ---------------- */
  if (finished) {
    const perfect = correctCount === total;
    return (
      <div className="mx-auto w-full max-w-xl rounded-(--radius-card) border border-line bg-card p-8 text-center shadow-(--shadow-lift) sm:p-10" role="status">
        <p className="display-num text-6xl text-ink-900">
          {correctCount}
          <span className="text-3xl text-ink-400"> / {total}</span>
        </p>
        <h2 className="display-lg mt-3 text-ink-900">
          {perfect ? "Sans faute. Plan mercés !" : correctCount >= total - 1 ? "Très belle leçon !" : "Leçon terminée — et c'est ce qui compte"}
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          {perfect
            ? "Chaque mot rencontré a maintenant son calendrier de révision. Rendez-vous demain pour le premier rappel."
            : "Les réponses hésitantes ou manquées reviendront plus tôt dans vos révisions : c'est l'algorithme qui s'en charge, pas votre mémoire."}
        </p>
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

  /* ---------------- exercice ---------------- */
  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Barre de progression */}
      <div className="flex items-center gap-4">
        <Link
          href={exitHref}
          aria-label="Quitter la leçon"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500 hover:bg-sand hover:text-ink-900"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Link>
        <div
          role="progressbar"
          aria-valuenow={index + (phase === "checked" ? 1 : 0)}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label="Progression de la leçon"
          className="h-2.5 flex-1 overflow-hidden rounded-full bg-sand"
        >
          <div
            className="h-full rounded-full bg-lumen-500 transition-all duration-500"
            style={{ width: `${((index + (phase === "checked" ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-ink-500">
          {index + 1}/{total}
        </span>
      </div>

      <div className="mt-8 rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft) sm:p-8">
        <p className="text-sm font-medium text-ink-500">{exercise.prompt}</p>
        {exercise.sentence !== "—" && (
          <p className="display-md mt-2 text-ink-900" lang={exercise.type === "arrange" ? "fr" : "oc"}>
            {exercise.type === "choice" ? `« ${exercise.sentence} »` : exercise.sentence}
          </p>
        )}

        {exercise.type === "choice" ? (
          <ChoiceBody
            exercise={exercise}
            selected={selected}
            phase={phase}
            onSelect={(i) => phase === "idle" && setSelected(i)}
          />
        ) : (
          <ArrangeBody
            exercise={exercise}
            built={built}
            phase={phase}
            onBuild={setBuilt}
          />
        )}

        {/* Feedback */}
        <div aria-live="polite" className="min-h-6 mt-6">
          {phase === "checked" && (
            <div
              className={cn(
                "animate-fade rounded-xl px-4 py-3 text-sm leading-relaxed",
                isCorrect ? "bg-sauge-100 text-sauge-600" : "bg-garance-100 text-garance-600",
              )}
            >
              <p className="font-bold">
                {isCorrect ? "Exact !" : exercise.type === "arrange" ? `La bonne réponse : « ${exercise.answer.replace(" .", ".").replace(" ?", " ?")} »` : `La bonne réponse : « ${exercise.options[exercise.answer]} »`}
              </p>
              {exercise.note && <p className="mt-1 font-medium">{exercise.note}</p>}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          {phase === "idle" ? (
            <Button onClick={check} disabled={!canCheck}>
              Vérifier
            </Button>
          ) : (
            <Button onClick={next} variant={isCorrect ? "primary" : "outline"}>
              {index + 1 >= total ? "Voir le résultat" : "Continuer"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ChoiceBody({
  exercise,
  selected,
  phase,
  onSelect,
}: {
  exercise: Extract<Exercise, { type: "choice" }>;
  selected: number | null;
  phase: Phase;
  onSelect: (i: number) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Réponses possibles" className="mt-6 grid gap-2.5">
      {exercise.options.map((option, i) => {
        const isSelected = selected === i;
        const showCorrect = phase === "checked" && i === exercise.answer;
        const showWrong = phase === "checked" && isSelected && i !== exercise.answer;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={phase === "checked"}
            onClick={() => onSelect(i)}
            className={cn(
              "rounded-xl border px-4 py-3 text-left text-[0.9375rem] font-medium transition-all duration-150",
              "disabled:cursor-default",
              showCorrect
                ? "border-sauge-600 bg-sauge-100 text-sauge-600"
                : showWrong
                  ? "border-garance-600 bg-garance-100 text-garance-600"
                  : isSelected
                    ? "border-ink-900 bg-ink-100 text-ink-900"
                    : "border-line bg-card text-ink-700 hover:border-ink-300 hover:bg-sand",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function ArrangeBody({
  exercise,
  built,
  phase,
  onBuild,
}: {
  exercise: Extract<Exercise, { type: "arrange" }>;
  built: number[];
  phase: Phase;
  onBuild: (next: number[]) => void;
}) {
  return (
    <div className="mt-6">
      {/* Zone de construction */}
      <div
        className="flex min-h-14 flex-wrap items-center gap-2 rounded-xl border-2 border-dashed border-line-strong bg-sand/50 p-3"
        aria-label="Votre phrase"
      >
        {built.length === 0 && (
          <span className="px-1 text-sm text-ink-400">Touchez les mots pour construire la phrase…</span>
        )}
        {built.map((wordIndex, position) => (
          <button
            key={`${wordIndex}-${position}`}
            type="button"
            disabled={phase === "checked"}
            onClick={() => onBuild(built.filter((_, p) => p !== position))}
            aria-label={`Retirer « ${exercise.words[wordIndex]} »`}
            className="rounded-lg border border-ink-900 bg-ink-900 px-3 py-1.5 text-[0.9375rem] font-medium text-paper transition-transform hover:scale-105 disabled:cursor-default"
          >
            {exercise.words[wordIndex]}
          </button>
        ))}
      </div>

      {/* Mots disponibles */}
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Mots disponibles">
        {exercise.words.map((word, i) => {
          const used = built.includes(i);
          return (
            <button
              key={`${word}-${i}`}
              type="button"
              disabled={used || phase === "checked"}
              onClick={() => onBuild([...built, i])}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-[0.9375rem] font-medium transition-all duration-150",
                used
                  ? "border-line bg-sand text-ink-300"
                  : "border-line-strong bg-card text-ink-900 hover:border-ink-900 hover:-translate-y-0.5",
                "disabled:cursor-default",
              )}
            >
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
}
