import type { Metadata } from "next";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Créez votre compte Verluma gratuit : une langue, une leçon par jour, les mêmes voix studio que les abonnés. Sans carte bancaire.",
  alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
