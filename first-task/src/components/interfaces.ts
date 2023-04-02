export interface Input {
  handleChange: () => object;
  value: string;
}
export interface InfoAPI {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface DescriptionSomFieldResult {
  name: string;
  url: string;
}
export interface ResultsAPI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: DescriptionSomFieldResult;
  location: DescriptionSomFieldResult;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface ResponseAPI {
  info: InfoAPI;
  results: ResultsAPI;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface SateCharacters {
  searchText: string;
  result: Character[];
}

export interface DataCard {
  name: string;
  surname: string;
  date: string;
  species: string;
  approval: boolean;
  img: string | null;
}
export enum SpeciesEnum {
  human = 'Human',
  alien = 'Alien',
  elf = 'Elf',
  animal = 'Animal',
  oleg = 'Oleg',
}
export interface StateInput {
  name: boolean;
  surname: boolean;
  date: boolean;
  file: boolean;
  species: boolean;
  approval: boolean;
  img: string | null;
}
export interface PropsInput {
  addData: (data: DataCard) => void;
}
