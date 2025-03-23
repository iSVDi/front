import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

export type FavoriteState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
