import React, { Component } from 'react';
import styles from './Card.module.css';
import { Character } from '../typingData';

export class Card extends Component<Character> {
  constructor(props: Character) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.image} alt="avatar characters" className={styles.card_img} />
        <div className={styles.description}>
          <h2 className={styles.name}>
            {this.props.id} {this.props.name}
          </h2>
          <p className={styles.card_text}>Status: {this.props.status}</p>
          <p className={styles.card_text}>Species: {this.props.species}</p>
          <p className={styles.card_text}>Gender: {this.props.gender}</p>
        </div>
      </div>
    );
  }
}
