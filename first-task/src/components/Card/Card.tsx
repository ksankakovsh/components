import React from 'react';
import styles from './Card.module.css';
import { Character } from '../interfaces';

export const Card = (props: Character) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="avatar characters" className={styles.card_img} />
      <div className={styles.description}>
        <h2 className={styles.name}>
          {props.id}. {props.name}
        </h2>
        <p className={styles.card_text}>Status: {props.status}</p>
        <p className={styles.card_text}>Species: {props.species}</p>
        <p className={styles.card_text}>Gender: {props.gender}</p>
      </div>
    </div>
  );
};
