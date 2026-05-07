import { createSlice } from "@reduxjs/toolkit";

export interface QueryPayload {
  query: string;
}

const initialQuery: QueryPayload = {
  query: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState: initialQuery,
  reducers: {
    update: (state, action) => action.payload,
  },
});

export const { update } = querySlice.actions;
export default querySlice.reducer;
