/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable optimization (auto WebP/AVIF conversion, resizing, caching)
    unoptimized: false,
    // Allowed external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io',
      },
      {
        protocol: 'https',
        hostname: '**.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
    // Responsive breakpoints used for srcset generation
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Prefer AVIF → WebP → original fallback
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
}

export default nextConfig
