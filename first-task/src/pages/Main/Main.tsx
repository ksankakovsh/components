import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
import styles from './Main.module.css';
import { Search } from 'components/Search/Search';
import { characterApi } from 'app/api';
import { Loading } from 'components/Loading/Loading';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { updateCardId } from 'app/modalSlice';
import { Modal } from 'components/Modal/Modal';
import { useEffect } from 'react';
import { setCharacters } from 'app/searchSlice';
import { Character } from 'utils/interfaces';

export const Main = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const { data, isLoading } = characterApi.useGetCharactersQuery(searchValue);
  const isVisibleModal = useAppSelector((state) => state.modal.isActive);
  const characters = data?.results;

  useEffect(() => {
    dispatch(setCharacters(characters as Character[]));
  }, [characters, dispatch, searchValue]);

  const onUpdateModal = (id: number) => {
    dispatch(updateCardId({ id, isActive: true }));
  };

  return (
    <>
      <Header />
      <Search />
      <h1 className={styles.title}>The Rick and Morty characters</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.cards_wrap}>
          {characters &&
            characters.map((result) => {
              return (
                <div
                  onClick={() => {
                    onUpdateModal(result.id);
                  }}
                  key={result.id}
                  aria-hidden="true"
                >
                  <Card character={result} key={result.id} />
                </div>
              );
            })}
        </div>
      )}
      {isVisibleModal && <Modal />}
    </>
  );
};
