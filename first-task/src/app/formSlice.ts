import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataCard, FormData } from 'utils/interfaces';
interface CardSatate {
  cards: DataCard[];
}
const initialState: CardSatate = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<DataCard>) {
      state.cards.push({
        name: action.payload.name,
        date: action.payload.date,
        species: action.payload.species,
        img: action.payload.img,
        approval: action.payload.approval,
      });
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
