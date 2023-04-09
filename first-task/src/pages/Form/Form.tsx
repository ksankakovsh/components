import { FormBlock } from 'components/FormBlock/FormBlock';
import { Header } from 'components/Header/Header';
import { useState } from 'react';
import styles from './Form.module.css';
import { DataCard } from 'utils/interfaces';
import { DataForm } from 'components/DataForm/DataForm';

export const Form = () => {
  const [cards, setUpdateCards] = useState<DataCard[]>([]);
  const addCard = (card: DataCard) => {
    setUpdateCards([...cards, card]);
  };
  return (
    <>
      <Header />
      <div className={styles.form__wrap}>
        <div className={styles.form__descr}>
          <h1>Team Rick and Morty needs new faces!</h1>
          <p className={styles.subtitle}>
            If you would like to be part of our team and travel with us to distant worlds and
            galaxies, fill in the form below.
          </p>
          <FormBlock addCard={addCard} />
        </div>
        <DataForm cards={[...cards]} />
      </div>
    </>
  );
};

export default Form;
