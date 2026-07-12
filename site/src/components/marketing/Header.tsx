"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navigation = [
  { href: "/produit", label: "Le produit" },
  { href: "/metiers", label: "Métiers" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reseaux", label: "Réseaux" },
  { href: "/journal", label: "Journal" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Referme le menu mobile à chaque navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Établi — accueil" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                      active ? "bg-sand text-ink-900" : "text-ink-600 hover:bg-sand hover:text-ink-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/connexion" variant="ghost" size="sm">
            Connexion
          </ButtonLink>
          <ButtonLink href="/inscription" size="sm">
            Commencer
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-sand lg:hidden"
        >
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
            {open ? (
              <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 flex-col overflow-y-auto bg-paper px-5 pb-8 pt-4 lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col divide-y divide-line">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <ButtonLink href="/inscription" size="lg">
            Essayer gratuitement
          </ButtonLink>
          <ButtonLink href="/connexion" variant="outline" size="lg">
            Connexion
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-ink-500">
          Devis · factures · chantiers · trésorerie — pour les artisans
        </p>
      </div>
    </header>
  );
}
