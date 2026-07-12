import { cn } from "@/lib/cn";

/**
 * Sigle Verluma : un « V » dont s'élève un point de lumière — le lumen.
 * Dessiné en SVG pur, monochrome, décliné encre ou papier.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect width="32" height="32" rx="9" className="fill-ink-900" />
      <path
        d="M9 12.5 16 25l7-12.5"
        stroke="#F8F7F3"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8.4" r="2.5" className="fill-lumen-400" />
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
        "font-display text-[1.35rem] font-medium tracking-tight",
        tone === "ink" ? "text-ink-900" : "text-paper",
        className,
      )}
    >
      verluma
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
