"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Logo, LogoMark } from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/cn";

const navigation = [
  {
    href: "/app",
    label: "Aujourd'hui",
    exact: true,
    icon: (
      <path d="M3 10.5 10 4l7 6.5M5 9v7h10V9" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/app/lecons",
    label: "Leçons",
    icon: (
      <path d="M4 4.5h5.5a2 2 0 0 1 2 2V16a2 2 0 0 0-2-2H4V4.5Zm12 0h-4.5v9.5H16V4.5Z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/app/revision",
    label: "Révision",
    icon: (
      <path d="M16 8A6 6 0 1 0 4.7 11M4 6.5V11h4.5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/app/progres",
    label: "Progrès",
    icon: (
      <path d="M4 16V9m4 7V4m4 12v-5m4 5V7" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" />
    ),
  },
  {
    href: "/app/reglages",
    label: "Réglages",
    icon: (
      <>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M10 3v2m0 10v2m7-7h-2M5 10H3m11.6-4.6-1.4 1.4M6.8 13.2l-1.4 1.4m9.2 0-1.4-1.4M6.8 6.8 5.4 5.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
];

/**
 * Coquille de l'application : garde d'authentification, barre latérale
 * (desktop) et barre d'onglets (mobile).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { session, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isOnboarding = pathname === "/app/bienvenue";
  const isLessonPlayer = pathname === "/app/lecons/du-jour";

  useEffect(() => {
    if (loading) return;
    if (!session) {
      router.replace("/connexion");
      return;
    }
    if (!session.onboarded && !isOnboarding) {
      router.replace("/app/bienvenue");
    }
  }, [loading, session, isOnboarding, router]);

  if (loading || !session || (!session.onboarded && !isOnboarding)) {
    return (
      <div className="flex min-h-dvh items-center justify-center" role="status" aria-label="Chargement de votre espace">
        <LogoMark className="h-12 w-12 animate-pulse" />
      </div>
    );
  }

  // Onboarding et lecteur de leçon : plein écran, sans navigation.
  if (isOnboarding || isLessonPlayer) {
    return <main className="min-h-dvh">{children}</main>;
  }

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[16rem_1fr]">
      {/* Barre latérale desktop */}
      <aside className="hidden border-r border-line bg-card lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-line px-6">
          <Link href="/app" aria-label="Verluma — votre espace">
            <Logo />
          </Link>
        </div>
        <nav aria-label="Navigation de l'application" className="flex-1 p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-2.5 text-[0.9375rem] font-medium transition-colors",
                      active ? "bg-ink-900 text-paper" : "text-ink-600 hover:bg-sand hover:text-ink-900",
                    )}
                  >
                    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                      {item.icon}
                    </svg>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-line p-4">
          <p className="px-2 text-sm font-semibold text-ink-900">{session.firstName} {session.lastName}</p>
          <p className="px-2 text-xs text-ink-500">{session.email}</p>
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="mt-3 w-full rounded-xl px-4 py-2 text-left text-sm font-medium text-ink-600 hover:bg-sand hover:text-ink-900"
          >
            Se déconnecter
          </button>
        </div>
      </aside>

      {/* En-tête mobile */}
      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-paper/90 px-5 backdrop-blur-md lg:hidden">
          <Link href="/app" aria-label="Verluma — votre espace">
            <Logo />
          </Link>
          <Link
            href="/app/reglages"
            aria-label="Réglages"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-sand font-semibold text-ink-900"
          >
            {session.firstName.charAt(0)}
          </Link>
        </header>

        <main className="flex-1 pb-24 lg:pb-10">{children}</main>

        {/* Barre d'onglets mobile */}
        <nav
          aria-label="Navigation de l'application"
          className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-card/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto flex max-w-lg items-stretch justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5">
            {navigation.map((item) => {
              const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-[0.6875rem] font-medium",
                      active ? "text-ink-900" : "text-ink-400",
                    )}
                  >
                    <svg viewBox="0 0 20 20" className="h-6 w-6" aria-hidden="true">
                      {item.icon}
                    </svg>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
