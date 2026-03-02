import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  images: {
    qualities: [70, 75],
  },
};

export default nextConfig;
