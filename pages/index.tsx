import { useEffect } from 'react';
import { Fragment } from 'react';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import { Store } from '../types/store';
import { NextPage } from 'next';
import useStores from '../hooks/useStores';
import DetailSection from '@/components/home/DetailSection';
import { NextSeo } from 'next-seo';

interface HomeProps {
  stores: Store[];
}

const Home: NextPage<HomeProps> = ({ stores }) => {
  const initializeStores = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);
  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스입니다."
        canonical="https://inflearn-nextjs.vercel.app"
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/store.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
