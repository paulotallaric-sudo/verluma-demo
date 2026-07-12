import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/lib/data/journal";

export const metadata: Metadata = {
  title: "Le journal",
  description:
    "Méthode, langues d'héritage, coulisses des studios : le journal de Verluma raconte comment se fabrique une plateforme d'apprentissage qui respecte votre intelligence.",
  alternates: { canonical: "/journal" },
};

const dateFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="eyebrow animate-fade text-lumen-700">Le journal</p>
          <h1 className="display-hero mt-4 animate-rise text-ink-900">
            Les coulisses d&apos;une méthode qui ne triche pas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            Pas de « 7 astuces pour devenir bilingue » : nous racontons ce que nous
            fabriquons, ce que nous mesurons, et ce que nous ratons parfois.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {featured && (
            <Reveal as="article" className="mb-12">
              <Link
                href={`/journal/${featured.slug}`}
                className="group grid gap-8 rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft) transition-shadow hover:shadow-(--shadow-lift) sm:p-10 lg:grid-cols-[1fr_16rem]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Badge tone="lumen">{featured.tag}</Badge>
                    <span className="text-sm text-ink-500">
                      {dateFormat.format(new Date(featured.date))} · {featured.readingMinutes} min de lecture
                    </span>
                  </div>
                  <h2 className="display-lg mt-4 text-ink-900 group-hover:underline group-hover:decoration-lumen-500 group-hover:decoration-2 group-hover:underline-offset-4">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
                    {featured.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-medium text-ink-500">
                    {featured.author.name} — {featured.author.role}
                  </p>
                </div>
                <div className="dot-grid hidden rounded-xl border border-line lg:block" aria-hidden="true" />
              </Link>
            </Reveal>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((article, i) => (
              <Reveal key={article.slug} as="article" delay={i * 80}>
                <Link
                  href={`/journal/${article.slug}`}
                  className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-card p-7 shadow-(--shadow-soft) transition-shadow hover:shadow-(--shadow-lift)"
                >
                  <div className="flex items-center gap-3">
                    <Badge tone="lumen">{article.tag}</Badge>
                    <span className="text-sm text-ink-500">
                      {dateFormat.format(new Date(article.date))} · {article.readingMinutes} min
                    </span>
                  </div>
                  <h2 className="display-md mt-4 flex-1 text-ink-900 group-hover:underline group-hover:decoration-lumen-500 group-hover:decoration-2 group-hover:underline-offset-4">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{article.excerpt}</p>
                  <p className="mt-5 text-sm font-medium text-ink-500">
                    {article.author.name} — {article.author.role}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
