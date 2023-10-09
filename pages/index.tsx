import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import DetailSection from '../components/home/DetailSection';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import { NextSeo } from 'next-seo';
import axios from 'axios';
interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
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
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
    );
    const stores = response.data;

    return {
      props: { stores },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { stores: [] }, // 에러 발생 시 빈 배열 반환 또는 다른 오류 처리 방식 선택
    };
  }
}
