import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import formSlice from "../slice/formSlice";
import alertSlice from "../slice/alertSlice";
import loginSlice from "../slice/loginSlice";
import querySlice from "../slice/querySlice";
import boardSlice from "../slice/boardSlice";

const rootReducer = combineReducers({
  form: formSlice,
  alert: alertSlice,
  login: loginSlice,
  query: querySlice,
  board: boardSlice,
});

// 2. Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["login"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
