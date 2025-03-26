import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: number[];
}

const initialState: FavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.ids = [...state.ids, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

