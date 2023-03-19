export interface PropsInput {
  onChange: () => object;
  value: string;
  onKeyPress: () => object;
}
// exp
// export interface APIResponse {

// }
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
