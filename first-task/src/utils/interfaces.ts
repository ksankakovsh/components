import { UseFormRegisterReturn } from 'react-hook-form';

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Origin {
  name: string;
  url: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface ResponseCharacters {
  info: Info;
  results: Character[];
}

export interface SearchCharacters {
  searchText: string;
  result: Character[];
}
export interface InputProps {
  register: UseFormRegisterReturn;
  type: string;
  name: string;
  label: string;
  image?: string | null;
}
export interface SelectProps {
  name: string;
  value: string;
  values: string[];
  options: string[];
  label: string;
  register: UseFormRegisterReturn;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export interface CardData {
  name: string;
  date: string;
  species: string;
  approval: boolean | string;
  img: string;
}
export interface ModalProps {
  onClose: (visible: boolean) => void;
  characterData: Character;
}

export interface FormData extends Omit<CardData, 'img'> {
  img: FileList;
}
export interface SearchValue {
  search: string;
}
