import React, { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';

interface Props {
  register?: UseFormRegisterReturn;
  type?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  error?: FieldError;
  errorMessage?: string;
  style?: React.CSSProperties;
  image?: string | null;
  ref?: React.MutableRefObject<null>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = (props) => {
  const { type = 'text', name, label, register, image, onChange, ...restProps } = props;

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
        name={name}
        id={inputId}
        {...register}
        onChange={onChange}
        {...restProps}
        className={styles.inputForm}
      />
    </div>
  );
};

export default Input;
