/** @type {import('next').NextConfig} */
const nextConfig = {
  // next build's worker-based ESLint step cannot serialize the flat-config
  // parser (Next 15 + FlatCompat bug); lint separately via `pnpm lint`.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
