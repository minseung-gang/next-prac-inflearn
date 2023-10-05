/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lecture-1.vercel.app', 'search.pstatic.net'],
  },
  i18n: {
      /** 국제화 관련 속성 추가 https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    /** 사이트 언어의 후보를 배열로 나타냄 */
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
