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
  name: string;
  surname: string;
  date: string;
  species: SpeciesEnum;
  file: string;
  approval: boolean;
}
/* eslint-disable prettier/prettier */
// export enum Types {
//   AddCard = 'ADD_FORM_CARD',
//   ChangeForm = 'CHANGE_FORM_VALUES',
//   DisableSubmit = 'DISABLE_SUBMIT_BUTTON',
//   EnableSubmit = 'ENABLE_SUBMIT_BUTTON',
// }

// // FormPage
// export interface IFormPage {
//   personCards: PersonCard[];
//   form: IFormInput;
//   submitBtnDisable: boolean,
// }

// export type FormPageActions = { type: Types.AddCard; payload: PersonCard; } |
// { type: Types.ChangeForm; payload: IFormInput; } | { type: Types.DisableSubmit; } | { type: Types.EnableSubmit; };

// export const formPageReducer = (state: IFormPage, action: FormPageActions) => {
//   switch (action.type) {
//     case Types.AddCard:
//       return ({
//         ...state,
//         personCards: [...state.personCards, action.payload]
//       }
//       );
//     case Types.ChangeForm:
//       return ({
//         ...state,
//         form: action.payload
//       }
//       );
//     case Types.DisableSubmit:
//       return ({
//         ...state,
//         submitBtnDisable: true
//       }
//       );
//     case Types.EnableSubmit:
//       return ({
//         ...state,
//         submitBtnDisable: false
//       }
//       );
//     default:
//       return state;
//   }
// };
