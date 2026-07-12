import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur Établi, votre compte, la presse ou votre métier ? Écrivez-nous — réponse humaine sous 4 heures ouvrées, par des gens qui connaissent le bâtiment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow animate-fade text-lumen-700">Contact</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Une vraie question mérite une vraie réponse
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            Pas de chatbot qui tourne en rond : votre message arrive dans la boîte
            de l&apos;équipe, à Nantes, et quelqu&apos;un qui connaît le bâtiment vous
            répond sous 4 heures ouvrées.
          </p>
          <dl className="mt-10 space-y-6 text-[0.9375rem]">
            <div>
              <dt className="font-semibold text-ink-900">Vous êtes un réseau ou un groupement ?</dt>
              <dd className="mt-1 text-ink-600">
                Passez plutôt par la{" "}
                <Link href="/reseaux#contact" className="font-medium text-ink-900 underline decoration-lumen-500 decoration-2 underline-offset-2">
                  demande de démonstration Réseaux
                </Link>{" "}
                — vous gagnerez un aller-retour.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Presse et partenariats</dt>
              <dd className="mt-1 text-ink-600">
                Sélectionnez le sujet « Presse » : votre message est routé directement
                vers les cofondateurs.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Votre métier n&apos;a pas encore sa bibliothèque ?</dt>
              <dd className="mt-1 text-ink-600">
                Plaquiste, serrurier, cuisiniste : nous construisons chaque
                bibliothèque avec des artisans du métier. Dites-nous qui vous êtes —
                les pilotes sont équipés gratuitement un an.
              </dd>
            </div>
          </dl>
        </div>
        <Reveal className="rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft) sm:p-9">
          <LeadForm intent="contact" />
        </Reveal>
      </Container>
    </section>
  );
}
