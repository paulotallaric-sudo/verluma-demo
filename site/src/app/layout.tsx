import type { Metadata, Viewport } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://verluma.app"),
  title: {
    default: "Verluma — Parlez une langue, vraiment",
    template: "%s — Verluma",
  },
  description:
    "La méthode d'apprentissage des langues pour adultes exigeants : voix enregistrées en studio, répétition espacée, 15 minutes par jour. 10 langues, dont l'occitan et le basque.",
  applicationName: "Verluma",
  openGraph: {
    siteName: "Verluma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17113F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
