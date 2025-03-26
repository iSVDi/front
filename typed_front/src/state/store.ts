import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites/favoriteSlice";
import shoppingReducer from "./shopping/shoppingSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    shoppings: shoppingReducer
  },
});

export type StoreState = ReturnType<typeof store.getState>;
