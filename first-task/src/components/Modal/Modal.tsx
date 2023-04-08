import React, { FC, useEffect } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from 'components/interfaces';

const Modal: FC<ModalProps> = ({ visible = false, onClose }) => {
  //   const onKeydown = ({ key }: KeyboardEvent) => {
  //     switch (key) {
  //       case 'Escape':
  //         onClose();
  //         break;
  //     }
  //   };
  //   useEffect(() => {
  //     document.addEventListener('keydown', onKeydown);
  //     return () => document.removeEventListener('keydown', onKeydown);
  //   });
  if (!visible) return null;
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__dialog} onClick={(e) => e.stopPropagation()}>
        <span className={styles.modal__close} onClick={onClose}>
          &times;
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis fugiat consequatur sunt
        quasi ducimus eaque qui maxime ipsam? Similique eaque molestiae maiores, ipsa suscipit
        nostrum aliquid quasi praesentium id.
      </div>
    </div>
  );
};

export default Modal;
