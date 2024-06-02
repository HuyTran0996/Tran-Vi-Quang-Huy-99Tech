import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movieSlice";
import { tvReducer } from "./slices/tvSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    tvs: tvReducer,
  },
});
