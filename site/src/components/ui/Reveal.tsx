"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Décalage d'apparition en ms, pour orchestrer une série d'éléments. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

type Mode = "static" | "waiting" | "visible";

/**
 * Révèle son contenu à l'entrée dans le viewport — en « fail-open » :
 * le contenu est visible par défaut (SSR, absence de JS, lecteurs,
 * prefers-reduced-motion). Ce n'est qu'après hydratation, et seulement
 * si l'élément est sous le pli, que l'état masqué + animation s'activent.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [mode, setMode] = useState<Mode>("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Déjà à l'écran : on n'anime pas, on ne masque surtout pas.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) return;

    setMode("waiting");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMode("visible");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref générique selon la balise rendue
      ref={ref}
      className={cn(mode !== "static" && "reveal", mode === "visible" && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
