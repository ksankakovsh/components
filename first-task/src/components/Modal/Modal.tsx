import { useAppDispatch, useAppSelector } from 'app/hooks';
import styles from './Modal.module.css';
import { characterApi } from 'app/api';
import { updateCardId } from 'app/modalSlice';
import { Loading } from 'components/Loading/Loading';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector((state) => state.modal.id);
  const { data, isFetching } = characterApi.useGetCharacterQuery(cardId);
  return (
    <div
      className={styles.modal__overlay}
      onClick={() => {
        dispatch(updateCardId({ id: cardId, isActive: false }));
      }}
    >
      {isFetching ? (
        <Loading />
      ) : (
        <div className={styles.modal__dialog} onClick={(e) => e.stopPropagation()}>
          <span
            className={styles.modal__close}
            onClick={() => {
              dispatch(updateCardId({ id: cardId, isActive: false }));
            }}
          >
            &times;
          </span>
          <div className={styles.wrapper}>
            <div>
              <img src={data?.image} alt="img" className={styles.img} />
            </div>
            <div className={styles.text}>
              <p className={styles.name}>{data?.name}</p>
              <p>
                Status:&nbsp;<b>{data?.status}</b>
              </p>
              <p>
                Gender:&nbsp;<b>{data?.gender}</b>
              </p>
              <p>
                Species:&nbsp;<b>{data?.species}</b>
              </p>
              <p>
                Home planet:&nbsp;<b>{data?.origin.name}</b>
              </p>
              <p>
                Location:&nbsp;<b>{data?.location.name}</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
