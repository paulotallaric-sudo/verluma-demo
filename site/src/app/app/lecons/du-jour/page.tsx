"use client";

import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { demoLesson } from "@/lib/data/lesson";

export default function LeconDuJourPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
      <LessonPlayer
        lesson={demoLesson}
        exitHref="/app"
        exitLabel="Retour à mon espace"
      />
    </div>
  );
}
