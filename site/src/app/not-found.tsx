import Link from "next/link";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 text-center sm:py-32">
          <Container width="narrow">
            <p className="eyebrow text-lumen-700">Erreur 404</p>
            <p className="display-hero mt-4 text-ink-900" lang="oc">
              « Ont es passada, aquela pagina ? »
            </p>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-600">
              « Où est passée cette page ? » — Elle n&apos;existe pas, ou plus.
              Vous venez au moins d&apos;apprendre une phrase d&apos;occitan.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
              <ButtonLink href="/langues" variant="outline">Voir les langues</ButtonLink>
            </div>
            <p className="mt-10 text-sm text-ink-500">
              Un lien cassé sur le site ?{" "}
              <Link href="/contact" className="underline hover:text-ink-900">Signalez-le nous</Link>.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
