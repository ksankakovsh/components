import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from 'utils/interfaces';

const Button: FC<ButtonProps> = (props) => {
  const { type } = props;

  return (
    <button className={styles.button} type={type}>
      {props.children}
    </button>
  );
};

export default Button;
