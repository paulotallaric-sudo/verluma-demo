"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { useAuth } from "@/lib/auth";
import { getMetier } from "@/lib/data/metiers";
import { plans } from "@/lib/data/pricing";

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signup } = useAuth();

  const wantedPlan = plans.find((p) => p.id === searchParams.get("plan"));
  const wantedMetier = getMetier(searchParams.get("metier") ?? "");

  const [values, setValues] = useState({ firstName: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function set(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const found: Record<string, string> = {};
    if (values.firstName.trim().length < 2) found.firstName = "Votre prénom (2 caractères minimum).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      found.email = "Cette adresse e-mail ne semble pas valide.";
    if (values.password.length < 8)
      found.password = "8 caractères minimum — ce sont vos devis et vos clients que vous protégez.";
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 450));
    signup(values);
    router.push(wantedMetier ? `/app/bienvenue?metier=${wantedMetier.slug}` : "/app/bienvenue");
  }

  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-md">
        <h1 className="display-xl text-center text-ink-900">
          {wantedMetier ? `Établi pour les ${wantedMetier.plural}` : "Créer votre compte"}
        </h1>
        <p className="mt-3 text-center text-[0.9375rem] leading-relaxed text-ink-600">
          {wantedPlan
            ? `Plan ${wantedPlan.name} — vos 30 jours d'essai commencent après l'onboarding, sans carte bancaire aujourd'hui.`
            : "Gratuit, sans carte bancaire. Votre premier devis est à deux minutes d'ici."}
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5">
          <TextField
            label="Prénom"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={set("firstName")}
            error={errors.firstName}
            placeholder="Denis"
            required
          />
          <TextField
            label="Adresse e-mail"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            error={errors.email}
            placeholder="vous@exemple.fr"
            required
          />
          <TextField
            label="Mot de passe"
            type="password"
            name="password"
            autoComplete="new-password"
            value={values.password}
            onChange={set("password")}
            error={errors.password}
            hint="8 caractères minimum."
            required
          />
          <Button type="submit" size="lg" disabled={submitting}>
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper" aria-hidden="true" />
                Création du compte…
              </>
            ) : (
              "Créer mon compte gratuit"
            )}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs leading-relaxed text-ink-500">
          En créant un compte, vous acceptez nos{" "}
          <Link href="/legal/cgv" className="underline hover:text-ink-900">conditions générales</Link> et notre{" "}
          <Link href="/legal/confidentialite" className="underline hover:text-ink-900">politique de confidentialité</Link>.
          Site de démonstration : le compte n&apos;existe que dans votre navigateur.
        </p>

        <p className="mt-8 text-center text-sm text-ink-600">
          Déjà inscrit·e ?{" "}
          <Link href="/connexion" className="font-semibold text-ink-900 underline decoration-lumen-500 decoration-2 underline-offset-2">
            Connectez-vous
          </Link>
        </p>
      </Container>
    </section>
  );
}
