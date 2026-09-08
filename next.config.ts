import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXUS_BASE_PATH || '',
  images: { unoptimized: true },
};
export default nextConfig;
