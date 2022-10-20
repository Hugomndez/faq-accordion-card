import styles from './FAQCard.module.css';
import React from 'react';

const FAQCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>FAQ</h1>
      {children}
    </div>
  );
};

export default FAQCard;
