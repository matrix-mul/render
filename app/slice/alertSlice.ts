import { createSlice } from "@reduxjs/toolkit";

export interface alertData {
  visible: boolean;
}

const initialState: alertData = {
  visible: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.visible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = alertSlice.actions;

export default alertSlice.reducer;