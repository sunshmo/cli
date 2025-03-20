import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // 基本重定向
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // 通配符路径匹配
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
