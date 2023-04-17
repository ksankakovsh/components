import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  searchValue: string;
};

const initialState: SearchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
