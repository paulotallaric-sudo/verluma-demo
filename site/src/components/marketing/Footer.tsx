import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Produit",
    links: [
      { href: "/produit", label: "Fonctionnalités" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/demo", label: "Créer un devis d'essai" },
      { href: "/journal/facturation-electronique-artisans", label: "Facturation électronique" },
    ],
  },
  {
    title: "Métiers",
    links: [
      { href: "/metiers/menuisier", label: "Menuisiers" },
      { href: "/metiers/electricien", label: "Électriciens" },
      { href: "/metiers/plombier", label: "Plombiers-chauffagistes" },
      { href: "/metiers", label: "Tous les métiers" },
    ],
  },
  {
    title: "Établi",
    links: [
      { href: "/a-propos", label: "Manifeste" },
      { href: "/journal", label: "Journal" },
      { href: "/reseaux", label: "Offre Réseaux" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/legal/mentions-legales", label: "Mentions légales" },
      { href: "/legal/confidentialite", label: "Confidentialité" },
      { href: "/legal/cgv", label: "CGV" },
      { href: "/legal/cookies", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="lumen-glow on-dark mt-24 text-paper">
      <Container width="wide" className="py-14 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Logo tone="paper" />
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-300">
              Le back-office des artisans du bâtiment : devis en 10 minutes,
              acomptes encaissés en ligne, chantiers et trésorerie suivis.
            </p>
            <p className="mt-6 text-sm text-ink-400">
              Fait à Nantes. <span aria-hidden="true">◆</span> Données hébergées dans l&apos;Union européenne.
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-ink-400">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-ink-200 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-700/60 pt-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Établi SAS — Tous droits réservés.</p>
          <p>
            Site de démonstration : les témoignages et chiffres présentés sont fictifs.
          </p>
        </div>
      </Container>
    </footer>
  );
}
