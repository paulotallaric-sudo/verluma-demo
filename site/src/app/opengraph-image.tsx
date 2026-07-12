import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Verluma — Apprenez une langue avec de vraies voix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Satori exige un TTF/OTF (le woff2 du site ne convient pas ici).
  const fraunces = await readFile(
    join(process.cwd(), "src/fonts/fraunces-og.ttf"),
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
          backgroundColor: "#17113F",
          backgroundImage:
            "radial-gradient(800px 400px at 80% -10%, rgba(238,182,84,0.25), transparent 60%)",
          color: "#F8F7F3",
          fontFamily: fraunces ? "Fraunces" : "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#F8F7F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              color: "#17113F",
            }}
          >
            v
          </div>
          <div style={{ fontSize: 44 }}>verluma</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 950 }}>
            Apprenez une langue avec de vraies voix.
          </div>
          <div style={{ fontSize: 30, color: "#ACA6C9" }}>
            10 langues · voix studio · 15 minutes par jour
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, style: "normal" as const }]
        : undefined,
    },
  );
}
