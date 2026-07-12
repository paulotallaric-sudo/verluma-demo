import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace Verluma pour retrouver vos leçons, vos révisions et votre série.",
  alternates: { canonical: "/connexion" },
  robots: { index: false },
};

export default function ConnexionPage() {
  return <LoginForm />;
}
