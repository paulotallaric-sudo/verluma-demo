import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { articles, getArticle } from "@/lib/data/journal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    inLanguage: "fr",
    author: { "@type": "Person", name: article.author.name },
    publisher: { "@type": "Organization", name: "Verluma", url: "https://verluma.app" },
    mainEntityOfPage: `https://verluma.app/journal/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-14 sm:py-20">
        <Container width="narrow">
          <nav aria-label="Fil d'Ariane" className="text-sm text-ink-500">
            <Link href="/journal" className="hover:text-ink-900 hover:underline">Journal</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page" className="text-ink-900">{article.tag}</span>
          </nav>

          <header className="mt-8">
            <div className="flex items-center gap-3">
              <Badge tone="lumen">{article.tag}</Badge>
              <p className="text-sm text-ink-500">
                <time dateTime={article.date}>{dateFormat.format(new Date(article.date))}</time>
                {" · "}{article.readingMinutes} min de lecture
              </p>
            </div>
            <h1 className="display-hero mt-5 text-ink-900">{article.title}</h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-ink-600">{article.excerpt}</p>
            <p className="mt-6 border-b border-line pb-8 text-sm font-semibold text-ink-900">
              {article.author.name}
              <span className="font-normal text-ink-500"> — {article.author.role}</span>
            </p>
          </header>

          <div className="mt-10 space-y-6">
            {article.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="display-lg pt-6 text-ink-900">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={i} className="border-l-2 border-lumen-500 py-1 pl-6">
                    <p className="font-display text-xl italic leading-relaxed text-ink-800">
                      « {block.text} »
                    </p>
                    {block.source && (
                      <footer className="mt-2 text-sm font-medium text-ink-500">— {block.source}</footer>
                    )}
                  </blockquote>
                );
              }
              return (
                <p key={i} className="text-[1.0625rem] leading-[1.8] text-ink-700">
                  {block.text}
                </p>
              );
            })}
          </div>

          <footer className="mt-14 rounded-(--radius-card) bg-sand p-8 text-center">
            <h2 className="display-md text-ink-900">Envie d&apos;entendre ces voix par vous-même ?</h2>
            <p className="mx-auto mt-2 max-w-md text-[0.9375rem] text-ink-600">
              La première leçon prend six minutes, sans compte ni carte bancaire.
            </p>
            <ButtonLink href="/demo" className="mt-5">Essayer une leçon</ButtonLink>
          </footer>
        </Container>

        <Container className="mt-20">
          <h2 className="display-md text-ink-900">À lire ensuite</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/journal/${other.slug}`}
                className="group rounded-(--radius-card) border border-line bg-card p-6 shadow-(--shadow-soft) transition-shadow hover:shadow-(--shadow-lift)"
              >
                <Badge tone="lumen">{other.tag}</Badge>
                <h3 className="display-md mt-3 text-ink-900 group-hover:underline group-hover:decoration-lumen-500 group-hover:decoration-2 group-hover:underline-offset-4">
                  {other.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{other.readingMinutes} min de lecture</p>
              </Link>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
