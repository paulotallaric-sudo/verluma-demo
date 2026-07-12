import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace Établi pour retrouver vos devis, chantiers et encaissements.",
  alternates: { canonical: "/connexion" },
  robots: { index: false },
};

export default function ConnexionPage() {
  return <LoginForm />;
}
