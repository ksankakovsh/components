import styles from './DataForm.module.css';
import { useAppSelector } from '../../app/hooks';
import { FC } from 'react';

export const DataForm: FC = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  return (
    <div>
      {cards.map((card, index) => {
        return (
          <div className={styles.card} key={index} {...card}>
            {card.img && <img src={card.img} alt="avatar" className={styles.card_img} />}
            <div className={styles.description}>
              <h2 className={styles.name}>{card.name}</h2>
              <p className={styles.card_text}>Birth date: {card.date}</p>
              <p className={styles.card_text}>Species: {card.species}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
