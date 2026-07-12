"use client";

import { useEffect, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";
import { reviewsDue } from "@/lib/data/demo-user";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Result = "known" | "again";

/**
 * Session de révision espacée : carte recto/verso, auto-évaluation,
 * les cartes « à revoir » repassent en fin de session.
 */
export default function RevisionPage() {
  const { session } = useAuth();
  const [queue, setQueue] = useState(() => reviewsDue.map((c) => c.id));
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<Record<string, Result>>({});
  const [reviewed, setReviewed] = useState(0);
  const [started, setStarted] = useState(false);

  const currentId = queue[reviewed];
  const card = reviewsDue.find((c) => c.id === currentId);
  const total = queue.length;
  const knownCount = Object.values(results).filter((r) => r === "known").length;
  const sessionOver = started && !card;

  useEffect(() => {
    if (sessionOver) track("fin_revision", { sues: knownCount, total });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionOver]);

  if (!session) return null;

  /* --------- État vide : compte neuf, rien à réviser --------- */
  if (session.kind !== "demo") {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center sm:px-8">
        <div className="dot-grid mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line" aria-hidden="true">
          <svg viewBox="0 0 32 32" className="h-10 w-10 text-ink-400">
            <path d="M26 13a10 10 0 1 0-18.8 5M6 10v6h7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="display-lg mt-6 text-ink-900">Rien à réviser — pour l&apos;instant</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          Les cartes de révision naissent de vos leçons : chaque mot rencontré
          reviendra ici juste avant que vous ne l&apos;oubliiez. Faites votre première
          leçon et revenez demain.
        </p>
        <ButtonLink href="/app/lecons/du-jour" size="lg" className="mt-7">
          Faire ma première leçon
        </ButtonLink>
      </div>
    );
  }

  function begin() {
    setStarted(true);
    track("demarrage_revision", { cartes: total });
  }

  function answer(result: Result) {
    if (!card) return;
    setResults((r) => ({ ...r, [card.id]: result }));
    if (result === "again" && !queue.slice(reviewed + 1).includes(card.id)) {
      // La carte ratée repasse en fin de session.
      setQueue((q) => [...q, card.id]);
    }
    setFlipped(false);
    setReviewed((n) => n + 1);
  }

  /* --------- Écran d'accueil --------- */
  if (!started) {
    return (
      <div className="mx-auto max-w-xl px-5 py-14 text-center sm:px-8">
        <p className="display-num text-6xl text-ink-900">{reviewsDue.length}</p>
        <h1 className="display-lg mt-2 text-ink-900">cartes vous attendent</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          Occitan et italien mélangés, environ 5 minutes. Soyez honnête avec
          vous-même : c&apos;est vous que l&apos;algorithme calibre.
        </p>
        <Button size="lg" className="mt-7" onClick={begin}>
          Commencer la révision
        </Button>
      </div>
    );
  }

  /* --------- Fin de session --------- */
  if (!card) {
    return (
      <div className="mx-auto max-w-xl px-5 py-14 text-center sm:px-8" role="status">
        <svg viewBox="0 0 48 48" className="mx-auto h-16 w-16 text-sauge-600" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.12" />
          <path d="m14 25 7 7 13-15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h1 className="display-lg mt-5 text-ink-900">Révision terminée</h1>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
          {knownCount} cartes sues du premier coup sur {total}. Les intervalles de
          chaque carte ont été recalculés — la prochaine fournée arrive demain matin.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/app">Retour à mon espace</ButtonLink>
          <ButtonLink href="/app/lecons/du-jour" variant="outline">
            Enchaîner sur la leçon du jour
          </ButtonLink>
        </div>
      </div>
    );
  }

  /* --------- Carte en cours --------- */
  return (
    <div className="mx-auto max-w-xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="flex items-center gap-4">
        <div
          role="progressbar"
          aria-valuenow={reviewed}
          aria-valuemin={0}
          aria-valuemax={queue.length}
          aria-label="Progression de la révision"
          className="h-2.5 flex-1 overflow-hidden rounded-full bg-sand"
        >
          <div
            className="h-full rounded-full bg-lumen-500 transition-all duration-300"
            style={{ width: `${(reviewed / queue.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-ink-500">
          {reviewed + 1}/{queue.length}
        </span>
      </div>

      <div className="mt-8 rounded-(--radius-card) border border-line bg-card p-8 text-center shadow-(--shadow-soft) sm:p-10">
        <p className="flex items-center justify-center gap-2 text-sm font-medium text-ink-500">
          {card.language}
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-semibold",
              card.strength === "fragile"
                ? "bg-garance-100 text-garance-600"
                : card.strength === "stable"
                  ? "bg-ink-100 text-ink-700"
                  : "bg-sauge-100 text-sauge-600",
            )}
          >
            {card.strength}
          </span>
        </p>
        <p className="display-xl mt-6 text-ink-900" lang={card.language === "Occitan" ? "oc" : "it"}>
          {card.front}
        </p>

        <div className="mt-8 min-h-24">
          {flipped ? (
            <div className="animate-fade">
              <p className="text-sm font-medium text-ink-500">Traduction</p>
              <p className="display-md mt-1 text-ink-900">{card.back}</p>
              <p className="mt-2 text-xs text-ink-400">Dernier intervalle : {card.interval}</p>
            </div>
          ) : (
            <Button variant="outline" size="lg" onClick={() => setFlipped(true)}>
              Voir la réponse
            </Button>
          )}
        </div>
      </div>

      {flipped && (
        <div className="mt-5 grid animate-rise grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="lg"
            className="border-garance-600/40 text-garance-600 hover:bg-garance-100"
            onClick={() => answer("again")}
          >
            À revoir
          </Button>
          <Button
            size="lg"
            className="bg-sauge-600 hover:bg-sauge-600/90"
            onClick={() => answer("known")}
          >
            Je savais
          </Button>
        </div>
      )}
      <p className="mt-4 text-center text-xs text-ink-400">
        Les cartes « à revoir » repasseront à la fin de cette session.
      </p>
    </div>
  );
}
