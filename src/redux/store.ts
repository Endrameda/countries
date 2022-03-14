import { configureStore } from '@reduxjs/toolkit';
import {countriesApi} from "./api";

export const store = configureStore({
  reducer: {
      [countriesApi.reducerPath]: countriesApi.reducer
  },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
