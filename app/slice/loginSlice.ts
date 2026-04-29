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
  },
});

export const { submit } = loginSlice.actions;

export default loginSlice.reducer;
