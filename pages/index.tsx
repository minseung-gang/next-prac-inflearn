import HeaderButton from '../components/common/HeaderButton';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Header from '../components/common/HeaderComponent';
import MapSection from '../components/home/MapSection';
import { Store } from '../types/store';
import { NextPage } from 'next';
import useStores from '../hooks/useStores';
import Markers from '../components/home/Markers';

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
      <Header rightElements={<HeaderButton />} />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
        <Markers />
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
