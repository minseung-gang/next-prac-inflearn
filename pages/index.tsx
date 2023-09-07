import HeaderButton from '../components/home/Header';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import { Store } from '../types/store';
import { NextPage } from 'next';
import useStores from '../hooks/useStores';

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
      <Header />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
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
