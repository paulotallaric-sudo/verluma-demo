import type { Metadata } from "next";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Créez votre compte Établi gratuit : 3 devis et 3 factures par mois, conformes et propres. Essai Artisan de 30 jours inclus, sans carte bancaire.",
  alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
