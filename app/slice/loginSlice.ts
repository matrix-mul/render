import { createSlice } from "@reduxjs/toolkit";

export interface loginDataPayload {
  email: string;
  password: string;
}

const initialState: loginDataPayload = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    submit: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return initialState
    }
  },
});

export const { submit , logout} = loginSlice.actions;

export default loginSlice.reducer;
