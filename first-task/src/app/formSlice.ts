import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from 'utils/interfaces';
interface Cards {
  cards: CardData[];
}
const initialState: Cards = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardData>) {
      const { name, date, species, img, approval } = action.payload;
      state.cards.push({
        name,
        date,
        species,
        img,
        approval,
      });
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
