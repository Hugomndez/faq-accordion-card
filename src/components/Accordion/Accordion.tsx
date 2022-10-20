import styles from './Accordion.module.css';
import { Data } from '../../types/data';

const Accordion = ({ FAQs }: Data) => {
  return (
    <ul className={styles.accordion}>
      {FAQs?.map(faq => (
        <AccordionItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </ul>
  );
};

export default Accordion;

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <li>
      <button>{question}</button>
      <div>{answer}</div>
    </li>
  );
};
