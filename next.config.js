/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image domains configuration - common pattern that should remain stable
  images: {
    domains: ['images.unsplash.com'],
  },
  // Keep experimental features commented out by default to prevent breaking changes
  // Uncomment and modify as needed based on available features in current Next.js version
  /*
  experimental: {
    // serverActions: true,
    // appDir: true,
  },
  */
};

module.exports = nextConfig;
