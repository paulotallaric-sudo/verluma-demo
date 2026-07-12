import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "ink",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", tone === "ink" ? "text-lumen-700" : "text-lumen-400")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("display-xl mt-3", tone === "ink" ? "text-ink-900" : "text-paper")}>
        {title}
      </h2>
      <div className={cn("rule-lumen mt-5", align === "center" && "mx-auto")} aria-hidden="true" />
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "ink" ? "text-ink-600" : "text-ink-200",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
