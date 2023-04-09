import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Select.module.css';

interface Props {
  name?: string;
  value?: string;
  values: string[];
  options?: string[];
  label?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MySelect: React.FC<Props> = (props) => {
  const { register, label, name, values, value, onChange, options, ...rest } = props;

  return (
    <div className={styles.Select}>
      {label && <label>{label}</label>}
      <select
        className={styles.selectForm}
        name={name}
        value={value}
        {...register}
        onChange={onChange}
        {...rest}
      >
        {values.map((value, index) => {
          return (
            <option key={value} value={value}>
              {options ? options[index] : value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
