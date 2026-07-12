import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
    </>
  );
}
