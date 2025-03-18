import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import petsReducer from './slices/petsSlice';
import sheltersReducer from './slices/sheltersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    shelters: sheltersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 