/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'corhexa.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
