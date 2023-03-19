import { Card } from 'components/Card/Card';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import { SateCharacters, Character } from '../typingData';
import styles from './Main.module.css';

const BASE_PATH = 'https://rickandmortyapi.com/api/character';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

export class Main extends Component {
  state: SateCharacters = {
    searchText: '',
    result: [],
  };

  fetchData(searchText: string) {
    fetch(`${BASE_PATH}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setNews(result.results);
      })
      .catch((error) => error);
  }
  componentDidMount() {
    const { searchText } = this.state;
    this.fetchData(searchText);
  }
  setNews(result: Character[]) {
    this.setState((prevState) => ({ ...prevState, result }));
  }
  render() {
    const { searchText, result } = this.state;
    return (
      <div>
        <Header />
        <h1 className={styles.title}>The Rick and Morty characters</h1>
        <div className={styles.cards_wrap}>
          {result &&
            result.map(({ id, name, status, species, gender, image }: Character) => {
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
}
