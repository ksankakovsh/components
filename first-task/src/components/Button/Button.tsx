import React, { FC } from 'react';
import styles from './Button.module.css';
import { PropsBtn } from 'components/interfaces';

const Button: FC<PropsBtn> = (props) => {
  const { disable, type = 'button', className, ...restProps } = props;
  const cls = [styles.Button];
  if (className) {
    cls.push(className);
  }
  if (disable) {
    cls.push(styles.disable);
  }

  return (
    <button className={cls.join(' ')} type={type} disabled={disable} {...restProps}>
      {props.children}
    </button>
  );
};

export default Button;
