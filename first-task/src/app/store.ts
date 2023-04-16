import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import { characterApi } from '../app/api';

export const store = configureStore({
  reducer: {
    cards: formReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(characterApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
