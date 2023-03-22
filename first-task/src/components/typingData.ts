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
