import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: 'app',
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: true,
  },
  transpilePackages: ['@headlessui/react'],
};
