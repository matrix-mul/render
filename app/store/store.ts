import { configureStore } from '@reduxjs/toolkit';
import  formSlice  from '../slice/formSlice';
import alertSlice  from '../slice/alertSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formSlice,
      alert: alertSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>