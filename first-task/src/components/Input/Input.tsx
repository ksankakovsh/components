import styles from './Input.module.css';
import { InputProps } from 'utils/interfaces';

const Input = ({ type = 'text', label, register, image }: InputProps) => {
  const inputId = `${type}-${Math.random()}`;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      {type === 'file' && image ? <img src={image} alt="avatar" className={styles.avatar} /> : null}
      <input
        type={type}
        id={inputId}
        {...register}
        className={
          type === 'date' ? `${styles.input__date} ${styles.input__form}` : styles.input__form
        }
      />
    </div>
  );
};

export default Input;
