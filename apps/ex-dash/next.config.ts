import path from 'node:path';
import { cwd } from 'node:process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/products',
        destination: `${process.env.PUBLIC_EX_PRODUCTS_URL}/products`,
      },
      {
        source: '/products-static/_next/:path+',
        destination: `${process.env.PUBLIC_EX_PRODUCTS_URL}/products-static/_next/:path+`,
      },
    ];
  },
  transpilePackages: ['@repo/ui', '@repo/tailwind-config', '@repo/next-lib'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(cwd(), '../../'),
  },
};

export default nextConfig;
