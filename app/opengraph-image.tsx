import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "96",
              height: "96",
              borderRadius: "24",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 64 64">
              <path d="M24 17v30" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
              <path d="M27 33L45 17" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
              <path d="M30 37l16 11" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", fontSize: "76px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-2px" }}>
          <div>Jual beli di feed,</div>
          <div>aman dengan escrow.</div>
        </div>
        <div style={{ marginTop: "32px", fontSize: "28px", color: "#525252" }}>kahade.id</div>
      </div>
    ),
    { ...size }
  );
}
