import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/auto-minutes-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/auto-minutes-landing/' : '',
};

export default nextConfig;
