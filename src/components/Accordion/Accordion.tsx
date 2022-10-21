import styles from './Accordion.module.css';
import { Data } from '../../types/data';
import { useState, useEffect, useRef } from 'react';

type AccordionItemProps = {
  isOpen: boolean;
  onClick: () => void;
  question: string;
  answer: string;
};

const Accordion = ({ FAQs }: Data) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <ul className={styles.accordion}>
      {FAQs?.map((faq, idx) => (
        <AccordionItem
          key={idx}
          isOpen={idx === currentIdx}
          onClick={() => setCurrentIdx(idx)}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </ul>
  );
};

export default Accordion;

const AccordionItem = (props: AccordionItemProps) => {
  const { isOpen, onClick, question, answer } = props;
  const elRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = elRef.current as HTMLParagraphElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li
      className={
        isOpen
          ? `${styles.accordionItem} ${styles.active}`
          : styles.accordionItem
      }
      onClick={onClick}
      tabIndex={0}
    >
      <h2 className={styles.question}>
        {question}
        <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 .799l4 4 4-4'
            stroke='#F47B56'
            strokeWidth='2'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      </h2>
      <div className={styles.answerWrapper} style={{ height }}>
        <p className={styles.answer} ref={elRef}>
          {answer}
        </p>
      </div>
    </li>
  );
};
