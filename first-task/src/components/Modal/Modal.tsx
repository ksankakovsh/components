import styles from './Modal.module.css';
import { ModalProps } from 'utils/interfaces';

export const Modal = ({ characterData: data, onClose }: ModalProps) => {
  const { name, gender, species, status, origin, location, image } = data;
  return (
    <div className={styles.modal} onClick={() => onClose(true)}>
      <div className={styles.modal__dialog} onClick={(e) => e.stopPropagation()}>
        <span className={styles.modal__close} onClick={() => onClose(true)}>
          &times;
        </span>
        <div className={styles.wrapper}>
          <div>
            <img src={image} alt="img" className={styles.img} />
          </div>
          <div className={styles.text}>
            <p className={styles.name}>{name}</p>
            <p>
              Status:&nbsp;<b>{status}</b>
            </p>
            <p>
              Gender:&nbsp;<b>{gender}</b>
            </p>
            <p>
              Species:&nbsp;<b>{species}</b>
            </p>
            <p>
              Home planet:&nbsp;<b>{origin.name}</b>
            </p>
            <p>
              Location:&nbsp;<b>{location.name}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
