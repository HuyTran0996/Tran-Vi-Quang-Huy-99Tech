import { configureStore } from "@reduxjs/toolkit";
import { coinReducer } from "./slices/coinSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});
