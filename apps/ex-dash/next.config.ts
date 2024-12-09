import path from 'node:path';
import { cwd } from 'node:process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/products',
        destination: `http://172.23.255.130:3010/products`,
      },
      {
        source: '/products-static/_next/:path+',
        destination: `http://172.23.255.130:3010/products-static/_next/:path+`,
      },
    ];
  },
  transpilePackages: ['@repo/ui', '@repo/tailwind-config', '@repo/next-lib'],
  output: 'standalone',
  outputFileTracingRoot: path.join(cwd(), '../../'),
};

export default nextConfig;
