/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume-analyzer/:path*",
        destination: "https://resume-analyzer.jeffrey-ross.me/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
