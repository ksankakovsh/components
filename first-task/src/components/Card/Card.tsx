import styles from './Card.module.css';
import { Character } from '../../utils/interfaces';

export const Card = ({ image, id, name, status, species, gender }: Character) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="avatar characters" className={styles.card_img} />
      <div className={styles.description}>
        <h2 className={styles.name}>
          {id}. {name}
        </h2>
        <p className={styles.card_text}>Status: {status}</p>
        <p className={styles.card_text}>Species: {species}</p>
        <p className={styles.card_text}>Gender: {gender}</p>
      </div>
    </div>
  );
};
