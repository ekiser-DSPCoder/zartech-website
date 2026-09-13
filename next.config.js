/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/riskradar',
        destination: '/risqradar',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
