import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
import { Character, ResponseCharacters } from '../../utils/interfaces';
import styles from './Main.module.css';
import { Modal } from 'components/Modal/Modal';
import { BASE_PATH, localData } from 'utils/constants';
import { Search } from 'components/Search/Search';
import { Loading } from 'components/Loading/Loading';
import { Notfound } from 'pages/NotFound/Notfound';

export const Main = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [character, setDataModal] = useState<Character>();

  const [URL, setURL] = useState(`${BASE_PATH}/?name=${localData || ''}`);
  const [loading, setLoading] = useState(true);

  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL).then((res) => {
        setLoading(true);
        return res;
      });
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      const actualData: ResponseCharacters = await response.json();
      setCharacters(actualData.results);
    };
    getData();
    setLoading(false);
  }, [URL]);
  function openModal(character: Character) {
    setDataModal(character);
    setIsModalVisible(true);
  }
  return (
    <>
      <Header />
      <Search setURL={setURL} />
      <h1 className={styles.title}>The Rick and Morty characters</h1>
      <div className={styles.cards_wrap}>
        {loading ? (
          characters.length > 0 ? (
            characters.map(
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
            )
          ) : (
            <Notfound />
          )
        ) : (
          <Loading />
        )}
      </div>
      {character && isModalVisible && <Modal onClose={closeModal} characterData={character} />}
    </>
  );
};
