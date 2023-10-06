import '@/styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PGGY2X86EE');
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PGGY2X86EE`}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
