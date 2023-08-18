import React from 'react';
import styles from '../../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
export default function HeaderButton() {
  return (
    <div className={styles.flexItem}>
      <button
        onClick={() => alert('복사')}
        className={styles.box}
        style={{ marginRight: 8 }}
      >
        <AiOutlineShareAlt size={20} />
      </button>
      <Link href="/feedback" className={styles.box}>
        <VscFeedback size={20} />
      </Link>
    </div>
  );
}
