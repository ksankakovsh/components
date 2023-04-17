// import { useState } from 'react';
import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
// import { Character } from '../../utils/interfaces';
import styles from './Main.module.css';
// import { Modal } from 'components/Modal/Modal';
import { Search } from 'components/Search/Search';
import { characterApi } from 'app/api';
import { Loading } from 'components/Loading/Loading';
import { useAppSelector } from 'app/hooks';

export const Main = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [character, setDataModal] = useState<Character>();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const { data, isLoading } = characterApi.useGetCharactersQuery(searchValue);
  if (isLoading) return <Loading />;
  const characters = data?.results;

  // const closeModal = () => setIsModalVisible(false);

  // function openModal(character: Character) {
  //   setDataModal(character);
  //   setIsModalVisible(true);
  // }
  return (
    <>
      <Header />
      <Search />
      <h1 className={styles.title}>The Rick and Morty characters</h1>
      <div className={styles.cards_wrap}>
        {characters &&
          characters.map((result) => {
            return <Card character={result} key={result.id} />;
          })}
      </div>
      {/* {character && isModalVisible && <Modal onClose={closeModal} characterData={character} />} */}
    </>
  );
};
