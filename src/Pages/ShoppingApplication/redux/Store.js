import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "./slices/cardSlice";

export const store = configureStore({
  reducer: {
    Card: CardSlice.reducer,
  },
});
