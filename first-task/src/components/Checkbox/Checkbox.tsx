import React, { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import styles from './Checkbox.module.css';

interface Props {
  register?: UseFormRegisterReturn;
  name?: string;
  label?: string;
  error?: FieldError;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testid?: string;
}

const Checkbox: FC<Props> = (props) => {
  const { name = 'checkbox', register, errorMessage, label, error, ...restProps } = props;
  const inputId = `${name}-${Math.random()}`;

  return (
    <div className={styles.checkbox__block}>
      <input
        name={name}
        type="checkbox"
        className={styles.checkbox__input}
        id={inputId}
        {...register}
        {...restProps}
      />
      {label && <label htmlFor={inputId}>{label}</label>}
      {error && <span>{error.message || errorMessage}</span>}
    </div>
  );
};

export default Checkbox;
