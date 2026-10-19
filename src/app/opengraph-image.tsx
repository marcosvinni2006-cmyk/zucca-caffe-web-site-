import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { palette } from "@/config/theme";

// TODO: quando houver fotos reais, considerar uma imagem de compartilhamento com foto.
export const alt = "Zuccä Caffè: focaccia, ciabatta, brunch e café especial em São Bernardo do Campo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: palette.azulMarinho,
          color: palette.brancoPerola,
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 96, letterSpacing: 20 }}>ZUCCÄ CAFFÈ</div>
        <div style={{ marginTop: 32, fontSize: 34, opacity: 0.8, letterSpacing: 4 }}>
          {site.tagline}
        </div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.65 }}>São Bernardo do Campo · SP</div>
      </div>
    ),
    size,
  );
}
