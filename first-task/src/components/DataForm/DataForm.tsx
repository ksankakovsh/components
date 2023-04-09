import styles from './DataForm.module.css';
import { DataCard } from '../../utils/interfaces';
interface Props {
  cards: DataCard[];
}

export const DataForm = ({ cards }: Props) => {
  return (
    <div>
      {cards.length > 0 &&
        cards.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              {card.img && <img src={card.img} alt="avatar" className={styles.card_img} />}
              <div className={styles.description}>
                <h2 className={styles.name}>
                  {card.name} {card.surname}
                </h2>
                <p className={styles.card_text}>Birth date: {card.date}</p>
                <p className={styles.card_text}>Species: {card.species}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
