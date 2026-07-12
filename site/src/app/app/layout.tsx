import type { Metadata } from "next";
import { AppShell } from "@/components/app/AppShell";

export const metadata: Metadata = {
  title: { default: "Votre espace", template: "%s — Verluma" },
  robots: { index: false, follow: false },
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AppShell>{children}</AppShell>;
}
