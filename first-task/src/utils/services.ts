import { BASE_PATH } from './constants';
import { ResponseCharacters } from './interfaces';

const getData = async () => {
  const response = await fetch(`${BASE_PATH}`);
  if (!response.ok) {
    throw new Error(`This is an HTTP error: The status is ${response.status}`);
  }
  const actualData: ResponseCharacters = await response.json();
  actualData;
};
