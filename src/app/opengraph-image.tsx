import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #dce8d0 0%, #b8cfa8 42%, #3d5c48 100%)",
          color: "#1a2e22",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2f5a3a",
            }}
          >
            Développeur web · Toulouse
          </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#24382c",
            }}
          >
            Sites &amp; applications React / Next.js / TypeScript — disponible
            pour vos projets
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#24382c",
          }}
        >
          <span>Toulouse · Ynov Campus · Chariot</span>
          <span style={{ fontWeight: 600 }}>piedanna.dev</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
