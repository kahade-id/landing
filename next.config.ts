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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/syarat-ketentuan",
        destination: "/syarat-dan-ketentuan",
        permanent: true,
      },
      {
        source: "/karier",
        destination: "https://karir.kahade.id",
        permanent: true,
      },
      {
        source: "/karir",
        destination: "https://karir.kahade.id",
        permanent: true,
      },
      {
        source: "/bantuan/:path*",
        destination: "https://bantuan.kahade.id/:path*",
        permanent: true,
      },
      {
        source: "/artikel/:path*",
        destination: "https://artikel.kahade.id/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
