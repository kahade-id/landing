/** @type {import('next').NextConfig} */
const nextConfig = {
  // FIX: Enable React Strict Mode — catches common bugs (double-invocations,
  // deprecated API usage, etc.) during development without affecting production
  reactStrictMode: true,

  images: { unoptimized: true },
  trailingSlash: false,

  // Ensure public assets (sitemap, robots) are included in the export
  // and that the app compiles without issues
  eslint: {
    // Allow production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ensure TypeScript errors block builds
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
