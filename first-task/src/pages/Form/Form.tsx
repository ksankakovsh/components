import { FormBlock } from 'components/FormBlock/FormBlock';
import { Header } from 'components/Header/Header';
import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
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
};

export default Form;
