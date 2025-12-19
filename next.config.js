/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/drsa-audio-results' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/drsa-audio-results/' : '',
};

module.exports = nextConfig;
