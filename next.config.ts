import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Permite imagens do domínio localhost
    // Se você estiver usando imagens locais, adicione também:
    deviceSizes: [320, 420, 768, 1024, 1200], // Tamanhos de dispositivos para imagens responsivas
    imageSizes: [16, 32, 48, 64, 96], // Tamanhos de imagens para srcset
  },
};

export default nextConfig;
