import { FormBlock } from 'components/FormBlock/FormBlock';
import { Header } from 'components/Header/Header';
import styles from './Form.module.css';
import { DataForm } from 'components/DataForm/DataForm';

export const Form = () => {
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
          <FormBlock />
        </div>
        <DataForm />
      </div>
    </>
  );
};
