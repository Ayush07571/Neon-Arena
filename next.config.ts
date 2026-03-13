import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: ['@headlessui/react', 'three', 'framer-motion'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'three'],
  },
  // Ensure strict production builds
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
