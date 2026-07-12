import type { Metadata, Viewport } from "next";
import { bricolage, inter } from "@/lib/fonts";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://etabli.fr"),
  title: {
    default: "Établi — Le back-office des artisans du bâtiment",
    template: "%s — Établi",
  },
  description:
    "Devis en 10 minutes, signature et acompte en ligne, chantiers et trésorerie suivis. Le logiciel des artisans du bâtiment qui rend les soirées à leurs propriétaires.",
  applicationName: "Établi",
  openGraph: {
    siteName: "Établi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#23201A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
