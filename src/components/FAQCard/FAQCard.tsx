import styles from './FAQCard.module.css';
import type { ReactNode } from 'react';

type FAQCardProps = { children?: ReactNode };

const FAQCard = ({ children }: FAQCardProps) => {
  return (
    <div className={styles.card}>
      <IllustrationBG />
      <Illustration />
      <h1 className={styles.title}>FAQ</h1>
      {children}
    </div>
  );
};

export default FAQCard;

const IllustrationBG = () => {
  return (
    <picture>
      <source
        srcSet='/bg-pattern-desktop.svg'
        media='(min-width: 1000px)'
      />

      <img
        className={styles.shadow}
        src='/bg-pattern-mobile.svg'
        alt=''
      />
    </picture>
  );
};

const Illustration = () => {
  return (
    <picture>
      <source
        srcSet='/illustration-woman-online-desktop.svg'
        media='(min-width: 1000px)'
      />

      <img
        className={styles.illustration}
        src='/illustration-woman-online-mobile.svg'
        alt=''
      />
    </picture>
  );
};
