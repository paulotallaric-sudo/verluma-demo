"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { useAuth } from "@/lib/auth";
import { demoUser } from "@/lib/data/demo-user";

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    // Petite latence simulée pour un ressenti réaliste.
    await new Promise((r) => setTimeout(r, 450));
    const result = login(email, password);
    if (result.ok) {
      router.push("/app");
    } else {
      setError(result.error);
      setSubmitting(false);
    }
  }

  function fillDemo() {
    setEmail(demoUser.email);
    setPassword(demoUser.password);
    setError(null);
  }

  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-md">
        <h1 className="display-xl text-center text-ink-900">Bon retour à l&apos;atelier</h1>
        <p className="mt-3 text-center text-[0.9375rem] text-ink-600">
          Vos devis n&apos;attendent que vous — et l&apos;un d&apos;eux a peut-être été signé cette nuit.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5">
          <TextField
            label="Adresse e-mail"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@exemple.fr"
            required
          />
          <TextField
            label="Mot de passe"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <p role="alert" className="rounded-xl bg-garance-100 px-4 py-3 text-sm font-medium text-garance-600">
              {error}
            </p>
          )}
          <Button type="submit" size="lg" disabled={submitting}>
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper" aria-hidden="true" />
                Connexion…
              </>
            ) : (
              "Se connecter"
            )}
          </Button>
        </form>

        <div className="mt-8 rounded-(--radius-card) border border-lumen-300 bg-lumen-200/40 p-5">
          <p className="text-sm font-semibold text-ink-900">Compte de démonstration</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
            E-mail : <code className="rounded bg-card px-1.5 py-0.5 font-mono text-[0.8125rem]">{demoUser.email}</code>
            <br />
            Mot de passe : <code className="rounded bg-card px-1.5 py-0.5 font-mono text-[0.8125rem]">{demoUser.password}</code>
          </p>
          <Button variant="outline" size="sm" className="mt-3" onClick={fillDemo}>
            Remplir automatiquement
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-ink-600">
          Pas encore de compte ?{" "}
          <Link href="/inscription" className="font-semibold text-ink-900 underline decoration-lumen-500 decoration-2 underline-offset-2">
            Inscrivez-vous gratuitement
          </Link>
        </p>
      </Container>
    </section>
  );
}
