/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['s.gravatar.com']
  },
  swcMinify: true,
};

module.exports = nextConfig;
