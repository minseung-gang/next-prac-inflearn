import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '@/types/store';
import styles from '../styles/detail.module.scss';
import DetailHeader from '@/components/home/DetailHeader';
import DetailContent from '@/components/home/DetailContent';
import { useRouter } from 'next/router';
import useCurrentStore from '@/hooks/useCurrentStore';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();
  const expanded = true;
  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };
  return (
    <div className={`${styles.detailSection}  ${styles.expanded}`}>
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/store.json')).default;

  const paths = stores.map((store) => ({
    params: {
      name: store.name,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/store.json')).default;

  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
