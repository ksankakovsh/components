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
export interface PropsBtn {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export interface DataCard {
  name: string;
  surname: string;
  date: string;
  species: string;
  approval: boolean;
  img?: string | null;
}
export enum SpeciesEnum {
  human = 'Human',
  alien = 'Alien',
  elf = 'Elf',
  animal = 'Animal',
  oleg = 'Oleg',
}
export interface StateInput {
  name: string;
  surname: string;
  date: string;
  species: SpeciesEnum;
  file: string;
  approval: boolean;
}
export interface FormProps {
  cards: DataCard[];
  updateData: (value: DataCard[]) => void;
}
