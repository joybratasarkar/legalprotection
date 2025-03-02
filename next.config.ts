import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Improves debugging and React performance
  swcMinify: true, // Enables faster builds with SWC minification
  images: {
    domains: [], // Add external image domains here if needed
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint errors from blocking production builds
  },
};

export default nextConfig;
