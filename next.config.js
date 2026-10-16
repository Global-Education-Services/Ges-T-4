/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/schools.php',
        destination: '/schools',
        permanent: true,
      },
      {
        source: '/operational.php',
        destination: '/operational',
        permanent: true,
      },
      {
        source: '/partner.php',
        destination: '/partner',
        permanent: true,
      },
      {
        source: '/careers.php',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/news.php',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/contact.php',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
