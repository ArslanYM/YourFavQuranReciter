/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-domainename.com',
        port: '',
        pathname: '/'
      }
    ]
  }
};

export default nextConfig;