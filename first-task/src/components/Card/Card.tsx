import styles from './Card.module.css';
import { Character } from '../../utils/interfaces';
import { FC } from 'react';

interface CardProps {
  character: Character;
}

export const Card: FC<CardProps> = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt="avatar characters" className={styles.card_img} />
      <div className={styles.description}>
        <h2 className={styles.name}>
          {character.id}. {character.name}
        </h2>
        <p className={styles.card_text}>Status: {character.status}</p>
        <p className={styles.card_text}>Species: {character.species}</p>
        <p className={styles.card_text}>Gender: {character.gender}</p>
      </div>
    </div>
  );
};
