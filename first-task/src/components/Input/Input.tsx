import styles from './Input.module.css';
import { PropsInput } from 'utils/interfaces';

const Input = ({ type = 'text', label, register, image }: PropsInput) => {
  const inputId = `${type}-${Math.random()}`;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      {type === 'file' && image ? <img src={image} alt="avatar" className={styles.avatar} /> : null}
      <input type={type} id={inputId} {...register} className={styles.inputForm} />
    </div>
  );
};

export default Input;
