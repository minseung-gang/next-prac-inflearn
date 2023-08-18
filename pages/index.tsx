import HeaderButton from '../components/common/HeaderButton';
import { Fragment } from 'react';
import Header from '../components/common/HeaderComponent';
import MapSection from '../components/home/MapSection';

export default function Home() {
  return (
    <Fragment>
      <Header rightElements={<HeaderButton />} />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
}
