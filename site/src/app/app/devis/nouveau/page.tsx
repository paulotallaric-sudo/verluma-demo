"use client";

import { QuoteBuilder } from "@/components/quote/QuoteBuilder";

export default function NouveauDevisPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
      <QuoteBuilder
        context="app"
        exitHref="/app/devis"
        exitLabel="Retour aux devis"
      />
    </div>
  );
}
