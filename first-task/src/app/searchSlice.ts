import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'utils/interfaces';

type SearchState = {
  searchValue: string;
  characters: Character[];
};

const initialState: SearchState = {
  searchValue: '',
  characters: [],
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { setSearchValue, setCharacters } = searchSlice.actions;

export default searchSlice.reducer;
