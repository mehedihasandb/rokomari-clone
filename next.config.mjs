/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com', 'ds.rokomari.store'],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;

