import { configureStore } from '@reduxjs/toolkit';
import  formSlice  from '../slice/formSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>