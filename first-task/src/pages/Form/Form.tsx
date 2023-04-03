import { FormBlock } from 'components/FormBlock/FormBlock';
import { Header } from 'components/Header/Header';
import { DataCard } from 'components/interfaces';
import React, { Component } from 'react';
import styles from './Form.module.css';
interface State {
  cards: DataCard[];
}

export class Form extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: [] as DataCard[],
    };
  }
  addData = (card: DataCard) => {
    this.setState(({ cards }) => {
      const oldCards = [...cards];
      return { cards: [...oldCards, card] };
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className={styles.form__wrap}>
          <div className={styles.form__descr}>
            <h1>Team Rick and Morty needs new faces!</h1>
            <p className={styles.subtitle}>
              If you would like to be part of our team and travel with us to distant worlds and
              galaxies, fill in the form on the right-hand side.
            </p>
          </div>

          <FormBlock />
        </div>
      </>
    );
  }
}

export default Form;
