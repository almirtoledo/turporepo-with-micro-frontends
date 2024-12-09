import { NextConfig } from 'next';
import path from 'node:path';
import { cwd } from 'node:process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/products-static',
  transpilePackages: ['@repo/ui', '@repo/tailwind-config', '@repo/next-lib'],
  output: 'standalone',
  outputFileTracingRoot: path.join(cwd(), '../../'),
} as NextConfig

export default nextConfig;
