import { FC } from 'react';
import styles from './Select.module.css';
import { SelectProps } from 'utils/interfaces';

const MySelect: FC<Partial<SelectProps>> = ({
  register,
  label,
  name,
  values,
  value,
  onChange,
  options,
}) => {
  return (
    <div className={styles.Select}>
      {label && <label>{label}</label>}
      <select
        className={styles.selectForm}
        name={name}
        value={value}
        {...register}
        onChange={onChange}
      >
        {values &&
          values.map((value, index) => {
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
