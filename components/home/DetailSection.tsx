import styles from '../../styles/detail.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import useSWR from 'swr';
import { Store } from '@/types/store';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  return (
    <div className={styles.detailSection}>
      <div className={styles.header}>
        <button className={styles.arrowButton} disabled>
          <IoIosArrowUp size={20} color="#666666" />
        </button>

        {!currentStore && <p className={styles.title}>매장을 선택하세요</p>}
        {currentStore && <p className={styles.title}>{currentStore.name}</p>}
      </div>
    </div>
  );
};
export default DetailSection;
