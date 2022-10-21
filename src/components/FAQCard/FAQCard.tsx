import styles from './FAQCard.module.css';
import React from 'react';

const FAQCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.card}>
      <svg
        className={styles.shadow}
        width='240'
        height='104'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M116.454 102.048L4.667 34.239c-3.56-2.054-6.61-5.42-3.142-7.627l112.184-66.364c1.682-1.07 4.237-1.773 5.951-.75l117.328 69.904c3.559 2.12 4.198 8.028.652 10.17L131.185 101.94a14.53 14.53 0 01-14.731.107z'
          fill='#6862E6'
          fillRule='nonzero'
          opacity='.099'
        />
      </svg>

      <picture>
        <img
          className={styles.illustration}
          src='/illustration-woman-online-mobile.svg'
          width={237}
          alt=''
        />
      </picture>

      <h1 className={styles.title}>FAQ</h1>
      {children}
    </div>
  );
};

export default FAQCard;
