import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { QuoteBuilder } from "@/components/quote/QuoteBuilder";

export const metadata: Metadata = {
  title: "Créer un devis d'essai",
  description:
    "Testez Établi sans compte : créez un vrai devis de menuiserie en 3 étapes, avec bibliothèque d'ouvrages, totaux en direct et acompte de 30 %. Deux minutes chrono.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="eyebrow animate-fade text-lumen-700">Démonstration libre</p>
          <h1 className="display-xl mt-3 animate-rise text-ink-900">
            Faites un devis. Là, maintenant.
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
            Sans compte, sans carte bancaire : la bibliothèque d&apos;ouvrages d&apos;un
            menuisier bordelais, un client qui attend son dressing, et deux minutes
            devant vous. Les totaux se calculent tout seuls — comme dans la vraie vie
            avec Établi.
          </p>
        </div>
        <QuoteBuilder
          context="demo"
          exitHref="/"
          exitLabel="Retour à l'accueil"
          endCta={{ href: "/inscription", label: "Créer mon compte gratuit" }}
        />
      </Container>
    </section>
  );
}
