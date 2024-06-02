import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAll } from "../thunks/fetchCoins";

const initialState = {
  dataDataAll: [],
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(fetchDataAll.fulfilled, (state, action) => {
      state.dataDataAll = action.payload;
    });
  },
});

export const coinReducer = coinSlice.reducer;
