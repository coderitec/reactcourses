/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'robohash.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'static.tvmaze.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }