import { cn } from "@/lib/cn";

type Item = { question: string; answer: React.ReactNode };

/**
 * Accordéon accessible basé sur <details>/<summary> :
 * fonctionne au clavier et sans JavaScript.
 */
export function Accordion({ items, className }: { items: Item[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-line rounded-(--radius-card) border border-line bg-card", className)}>
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-45"
            >
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="pt-3 text-[0.9375rem] leading-relaxed text-ink-600">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
