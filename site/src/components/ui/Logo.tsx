import { cn } from "@/lib/cn";

/**
 * Sigle Établi : un plan de travail stylisé — le plateau, deux pieds,
 * et le clou de cuivre. Dessiné en SVG pur, décliné carbone ou plâtre.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect width="32" height="32" rx="8" className="fill-ink-900" />
      <path
        d="M7 12h18M10 12v9M22 12v9"
        stroke="#F7F5F0"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="8" r="2.3" className="fill-lumen-400" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span
      className={cn(
        "font-display text-[1.3rem] tracking-tight",
        tone === "ink" ? "text-ink-900" : "text-paper",
        className,
      )}
    >
      établi
    </span>
  );
}

export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <Wordmark tone={tone} />
    </span>
  );
}
