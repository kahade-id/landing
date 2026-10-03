import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Deeplink ala Instagram (Okt 2026): format lama → format baru, 301 permanen.
      { source: "/user/:username", destination: "/:username", permanent: true },
      { source: "/user/:username/:path*", destination: "/:username", permanent: true },
      { source: "/profile/:id", destination: "/p/:id", permanent: true },
      { source: "/products/:id", destination: "/p/:id", permanent: true },
      { source: "/showcase/:id", destination: "/p/:id", permanent: true },
      {
        source: "/syarat-ketentuan",
        destination: "/syarat-dan-ketentuan",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apple mewajibkan content-type application/json untuk file ini
        // (tanpa ekstensi, server bisa menebak octet-stream).
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
      { source: "/:path*", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
