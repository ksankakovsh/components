import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateModal = {
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
    updateCardId(state, action: PayloadAction<InitialStateModal>) {
      const { id, isActive } = action.payload;
      state.id = id;
      state.isActive = isActive;
    },
  },
});

export const { updateCardId } = modalSlice.actions;

export default modalSlice.reducer;
