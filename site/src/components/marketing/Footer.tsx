import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Produit",
    links: [
      { href: "/methode", label: "La méthode" },
      { href: "/langues", label: "Les 10 langues" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/demo", label: "Essayer une leçon" },
    ],
  },
  {
    title: "Verluma",
    links: [
      { href: "/a-propos", label: "Manifeste" },
      { href: "/journal", label: "Journal" },
      { href: "/entreprises", label: "Offre entreprises" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Langues d'héritage",
    links: [
      { href: "/langues/occitan", label: "Apprendre l'occitan" },
      { href: "/langues/basque", label: "Apprendre le basque" },
      { href: "/journal/occitan-langue-vivante", label: "Pourquoi ces langues" },
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
              La méthode d&apos;apprentissage des langues pour adultes exigeants.
              Voix enregistrées en studio, répétition espacée, quinze minutes par jour.
            </p>
            <p className="mt-6 text-sm text-ink-400">
              Fait à Toulouse. <span aria-hidden="true">◆</span> Hébergé dans l&apos;Union européenne.
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
          <p>© 2026 Verluma SAS — Tous droits réservés.</p>
          <p>
            Site de démonstration : les témoignages et chiffres présentés sont fictifs.
          </p>
        </div>
      </Container>
    </footer>
  );
}
