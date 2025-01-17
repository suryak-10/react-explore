import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/solution-providers',
        // destination: 'https://api.example.com/:path*',
        destination: 'https://uk.bettshow.com/*',
      }
    ];
  },
};

export default nextConfig;
