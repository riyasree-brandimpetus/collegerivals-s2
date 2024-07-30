/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['college-rivals-prod.s3.ap-south-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/**',
      },
    ]
},
};

module.exports = nextConfig
