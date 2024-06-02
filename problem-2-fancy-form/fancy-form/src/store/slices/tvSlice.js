import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularTV, fetchOnTheAirTV } from "../thunks/fetchTV";

const initialState = {
  dataPopularTV: [],
  dataOnTheAir: [],
};

const tvSlice = createSlice({
  name: "tvs",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(fetchPopularTV.fulfilled, (state, action) => {
      state.dataPopularTV = action.payload;
    });
    builder.addCase(fetchOnTheAirTV.fulfilled, (state, action) => {
      state.dataOnTheAir = action.payload;
    });
  },
});

export const tvReducer = tvSlice.reducer;
