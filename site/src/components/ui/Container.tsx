import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** `narrow` pour les contenus éditoriaux (articles, légal). */
  width?: "default" | "narrow" | "wide";
};

export function Container({ children, className, width = "default" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "default" && "max-w-6xl",
        width === "narrow" && "max-w-3xl",
        width === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
