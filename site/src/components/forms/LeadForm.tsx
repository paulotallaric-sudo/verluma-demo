"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField, TextAreaField, SelectField } from "@/components/ui/Field";
import { track } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  /** Contexte du formulaire — adapte les champs et l'événement analytics. */
  intent: "contact" | "reseaux";
};

/**
 * Formulaire de prise de contact / demande de démo.
 * Démo : l'envoi est simulé côté client (aucun backend), avec tous les
 * états réels — validation, chargement, succès, erreur, anti-double-envoi,
 * champ pot-de-miel anti-spam.
 */
export function LeadForm({ intent }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData): Record<string, string> {
    const found: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) found.name = "Indiquez votre nom (2 caractères minimum).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      found.email = "Cette adresse e-mail ne semble pas valide.";
    if (intent === "reseaux") {
      const company = String(data.get("company") ?? "").trim();
      if (company.length < 2) found.company = "Indiquez le nom de votre réseau ou groupement.";
    }
    if (message.length < 20)
      found.message = "Dites-nous en un peu plus (20 caractères minimum) — cela nous aide à bien vous répondre.";
    return found;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return; // anti double-envoi

    const data = new FormData(event.currentTarget);

    // Pot de miel : un humain ne remplit jamais ce champ caché.
    if (String(data.get("website") ?? "") !== "") {
      setStatus("success");
      return;
    }

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    track(intent === "reseaux" ? "demande_demo_reseau" : "message_contact", {
      sujet: String(data.get("subject") ?? ""),
    });

    // Simulation d'appel réseau (site de démonstration, aucune donnée envoyée).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-(--radius-card) border border-sauge-600/40 bg-sauge-100 p-8 text-center"
      >
        <svg viewBox="0 0 40 40" className="mx-auto h-12 w-12 text-sauge-600" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="currentColor" opacity="0.15" />
          <path d="m12 21 5.5 5.5L28 15" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="display-md mt-4 text-ink-900">Message bien reçu</h3>
        <p className="mx-auto mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
          {intent === "reseaux"
            ? "Merci ! Un membre de l'équipe vous répond sous un jour ouvré pour organiser votre démonstration réseau. (Site de démonstration : aucun message n'a réellement été envoyé.)"
            : "Merci ! Nous vous répondons sous un jour ouvré. (Site de démonstration : aucun message n'a réellement été envoyé.)"}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setErrors({});
            formRef.current?.reset();
          }}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Votre nom"
          name="name"
          autoComplete="name"
          placeholder="Laurence Pommier"
          error={errors.name}
          required
        />
        <TextField
          label="E-mail professionnel"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="vous@reseau.fr"
          error={errors.email}
          required
        />
      </div>

      {intent === "reseaux" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label="Réseau ou groupement"
            name="company"
            autoComplete="organization"
            placeholder="Coopérative Artibat 17"
            error={errors.company}
            required
          />
          <SelectField label="Nombre d'adhérents" name="teamSize" defaultValue="20-50">
            <option value="20-50">20 à 50 adhérents</option>
            <option value="51-150">51 à 150 adhérents</option>
            <option value="151-300">151 à 300 adhérents</option>
            <option value="300+">Plus de 300 adhérents</option>
          </SelectField>
        </div>
      )}

      {intent === "contact" && (
        <SelectField label="Sujet" name="subject" defaultValue="question">
          <option value="question">Une question sur le produit</option>
          <option value="compte">Mon compte ou mon abonnement</option>
          <option value="presse">Presse et partenariats</option>
          <option value="metier">Demander une bibliothèque métier</option>
          <option value="autre">Autre chose</option>
        </SelectField>
      )}

      <TextAreaField
        label="Votre message"
        name="message"
        placeholder={
          intent === "reseaux"
            ? "Parlez-nous de votre réseau : métiers, nombre d'adhérents, échéances…"
            : "Écrivez-nous — nous lisons tout, et nous répondons vite."
        }
        error={errors.message}
        required
      />

      {/* Pot de miel anti-spam — masqué pour les humains et les lecteurs d'écran */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`website-${intent}`}>Ne pas remplir</label>
        <input id={`website-${intent}`} type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : intent === "reseaux" ? (
            "Demander une démonstration"
          ) : (
            "Envoyer le message"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-ink-500">
          Vos données ne servent qu&apos;à vous répondre.{" "}
          Voir notre <a href="/legal/confidentialite" className="underline hover:text-ink-900">politique de confidentialité</a>.
        </p>
      </div>
    </form>
  );
}
