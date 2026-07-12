import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Établi — Le back-office des artisans du bâtiment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Satori exige un TTF/OTF (le woff2 du site ne convient pas ici).
  const bricolage = await readFile(
    join(process.cwd(), "src/fonts/bricolage-og.ttf"),
  ).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#23201A",
          backgroundImage:
            "radial-gradient(800px 400px at 80% -10%, rgba(222,159,93,0.28), transparent 60%)",
          color: "#F7F5F0",
          fontFamily: bricolage ? "Bricolage" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#F7F5F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              color: "#23201A",
            }}
          >
            é
          </div>
          <div style={{ fontSize: 44 }}>établi</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 66, lineHeight: 1.08, maxWidth: 980 }}>
            Le devis part ce soir. L&apos;acompte arrive avec la signature.
          </div>
          <div style={{ fontSize: 30, color: "#B5AE9E" }}>
            Le back-office des artisans du bâtiment
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: bricolage
        ? [{ name: "Bricolage", data: bricolage, style: "normal" as const }]
        : undefined,
    },
  );
}
