import React, { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
import { Character } from '../../components/interfaces';
import styles from './Main.module.css';

const BASE_PATH = 'https://rickandmortyapi.com/api/character';

export function Main() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('request', JSON.stringify(searchText));
  }, [searchText]);

  useEffect(() => {
    const getData = async () => {
      // try {
      const response = await fetch(`${BASE_PATH}`);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      const actualData = await response.json();
      setCharacters(actualData.results);
      // setError(null);
      // } catch (err: unknown) {
      //   setError(err);
      //   setCharacters(null);
      // } finally {
      //   setLoading(false);
      // }
    };
    getData();
  }, []);
  return (
    <div>
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

      {/* {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>} */}
      <h1 className={styles.title}>The Rick and Morty characters</h1>
      <div className={styles.cards_wrap}>
        {characters &&
          characters.map(({ id, name, status, species, gender, image }: Character) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
              />
            );
          })}
      </div>
    </div>
  );
}
