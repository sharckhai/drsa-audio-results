/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES ? '/drsa-audio-results' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/drsa-audio-results/' : '',
};

module.exports = nextConfig;
