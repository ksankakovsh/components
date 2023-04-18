import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  id: number;
  isActive: boolean;
};
const modalSlice = createSlice({
  name: 'cardId',
  initialState: {
    id: 1,
    isActive: false,
  },
  reducers: {
    updateCardId(state, action: PayloadAction<InitialState>) {
      state.id = action.payload.id;
      state.isActive = action.payload.isActive;
    },
  },
});

export const { updateCardId } = modalSlice.actions;

export default modalSlice.reducer;
