import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cartman11.st.nwb.fr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
