import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import modalReducer from './modalSlice';
import { characterApi } from '../app/api';

export const store = configureStore({
  reducer: {
    cards: formReducer,
    search: searchReducer,
    modal: modalReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(characterApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
