import { cn } from "@/lib/cn";

type Tone = "ink" | "lumen" | "sauge" | "garance" | "neutral";

const tones: Record<Tone, string> = {
  ink: "bg-ink-100 text-ink-800",
  lumen: "bg-lumen-200 text-lumen-700",
  sauge: "bg-sauge-100 text-sauge-600",
  garance: "bg-garance-100 text-garance-600",
  neutral: "bg-sand text-ink-600",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
