import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  typescript: {
    // Ignora erros de tipo durante a construção
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora erros de linting durante a construção
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
