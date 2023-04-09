import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
import { Character, ResponseCharacters } from '../../utils/interfaces';
import styles from './Main.module.css';
import { Modal } from 'components/Modal/Modal';
import { BASE_PATH } from 'utils/constants';
// import Loading from 'components/Loading/Loading';

export const Main = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [character, setDataModal] = useState<Character>();
  // const [loading, setLoading] = useState(true);

  const closeModal = () => setIsModalVisible(false);
  const searchCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
    return () => {
      localStorage.setItem('searchText', searchText);
    };
  }, [searchText]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${BASE_PATH}`);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      const actualData: ResponseCharacters = await response.json();
      setCharacters(actualData.results);
    };
    getData();
  }, []); // TODO вынести в отдельный файл

  function openModal(character: Character) {
    setDataModal(character);
    setIsModalVisible(true);
  }
  return (
    <>
      <Header />
      <div className={styles.search_bar}>
        <svg
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
        <input
          className={styles.input}
          placeholder="Enter character name"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <h1 className={styles.title}>The Rick and Morty characters</h1>
      <div className={styles.cards_wrap}>
        {searchCharacters &&
          searchCharacters.map(
            ({
              id,
              name,
              status,
              species,
              gender,
              image,
              origin,
              episode,
              location,
              url,
              created,
            }: Character) => {
              return (
                <div
                  key={id}
                  onClick={() =>
                    openModal({
                      id,
                      name,
                      status,
                      species,
                      gender,
                      image,
                      origin,
                      episode,
                      location,
                      url,
                      created,
                    })
                  }
                >
                  <Card
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    image={image}
                    origin={origin}
                    episode={episode}
                    location={location}
                    url={url}
                    created={created}
                  />
                </div>
              );
            }
          )}
      </div>
      {character && isModalVisible && <Modal onClose={closeModal} characterData={character} />}
    </>
  );
};
