import React, { Component } from 'react';
import { Card } from 'components/Card/Card';
import { Header } from 'components/Header/Header';
import { SateCharacters, Character } from '../typingData';
import styles from './Main.module.css';

const BASE_PATH = 'https://rickandmortyapi.com/api/character';

export class Main extends Component {
  state: SateCharacters = {
    searchText: '',
    result: [],
  };
  componentDidMount() {
    fetch(`${BASE_PATH}`)
      .then((res) => res.json())
      .then((result) => {
        this.setCharacters(result.results);
      })
      .catch((error) => error);
    const searchText = localStorage.getItem('searchText');
    this.setState({ searchText });
  }

  componentDidUpdate() {
    const { searchText } = this.state;
    localStorage.setItem('searchText', searchText);
  }

  componentWillUnmount() {
    const { searchText } = this.state;
    localStorage.setItem('searchText', searchText);
  }

  setCharacters(result: Character[]) {
    this.setState((prevState) => ({ ...prevState, result }));
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  render() {
    const { result } = this.state;
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
            onChange={this.handleChange}
            value={this.state.searchText}
            name="searchText"
          />
        </div>
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
