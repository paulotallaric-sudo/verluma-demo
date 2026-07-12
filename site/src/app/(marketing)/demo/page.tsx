import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { demoLesson } from "@/lib/data/lesson";

export const metadata: Metadata = {
  title: "Essayer une leçon",
  description:
    "Testez la méthode Verluma sans compte : une vraie leçon d'occitan de six minutes, avec correction immédiate. « Adiu » vous attend.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="eyebrow animate-fade text-lumen-700">Démonstration libre</p>
          <h1 className="display-xl mt-3 animate-rise text-ink-900">
            Une vraie leçon, sans compte
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
            Six minutes d&apos;occitan, la langue avec laquelle Verluma est né. Dans
            l&apos;application complète, chaque phrase est portée par une voix studio
            et chaque mot rejoint votre calendrier de révision.
          </p>
        </div>
        <LessonPlayer
          lesson={demoLesson}
          exitHref="/"
          exitLabel="Retour à l'accueil"
          endCta={{ href: "/inscription", label: "Créer mon compte gratuit" }}
        />
      </Container>
    </section>
  );
}
