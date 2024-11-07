/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "college-rivals-prod.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/lottie',
        destination: 'https://college-rivals-prod.s3.ap-south-1.amazonaws.com/lottie/truck_lottie.json',
      },{
        source: '/api/finalist',
        destination: 'https://college-rivals-prod.s3.ap-south-1.amazonaws.com/finalists/data.json',
      }
    ];
  },
};

module.exports = nextConfig;
