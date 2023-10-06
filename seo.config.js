// seo meta 정리
export default {
    titleTemplate: '%s - Next.js 시작하기',
    openGraph: {
      type: 'website',
      site_name: 'Next.js 시작하기',
      images: [
        { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
      ],
    },
    additionalLinkTags: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
    ],
    additionalMetaTags: [
      {
        name: 'naver-site-verification',
        content: 'eb9a58b1ad9fe9c0bca4f4afb75124c853a90a7f',
      },
      {
        name: 'google-site-verification',
        content: 'UvdiUBusgw89NIHdGLI9UuYfLu9uatA2-n_WhlC8D-w',
      },
    ], 

  };
  