import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "lumen" | "outline" | "ghost" | "on-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 select-none " +
  "disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-paper hover:bg-ink-700 shadow-[0_2px_12px_rgba(23,17,63,0.25)] hover:shadow-[0_4px_20px_rgba(23,17,63,0.3)]",
  lumen:
    "bg-lumen-400 text-ink-900 hover:bg-lumen-300 shadow-[0_2px_12px_rgba(224,156,32,0.35)]",
  outline:
    "border border-line-strong text-ink-900 bg-transparent hover:bg-sand hover:border-ink-300",
  ghost: "text-ink-900 hover:bg-sand",
  "on-dark":
    "border border-ink-500/60 text-paper bg-white/5 hover:bg-white/10 hover:border-ink-400",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonLinkProps = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}
