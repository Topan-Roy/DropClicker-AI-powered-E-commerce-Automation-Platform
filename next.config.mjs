/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/how-it-works', destination: '/' },
      { source: '/features', destination: '/' },
      { source: '/explore-categories', destination: '/' },
      { source: '/trending-marketplace', destination: '/' },
      { source: '/pricing', destination: '/' },
      { source: '/faq', destination: '/' },
    ];
  },
};

export default nextConfig;
