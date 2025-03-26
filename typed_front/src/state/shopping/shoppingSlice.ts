import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface ShoppingItem {
  id: number;
  count: number;
}

interface ShoppingState {
  items: ShoppingItem[];
}

const initialState: ShoppingState = {
  items: [],
};

const shoppingSlice = createSlice({
  name: "shoppings",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      if (state.items.find((item) => item.id == action.payload) === null) {
        state.items.push({ id: action.payload, count: 1 });
      } else {
        state.items = state.items.map((item) => {
          if (action.payload == item.id) {
            item.count += 1;
          }
          return item;
        });
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      if (state.items.find((item) => item.id == action.payload)?.count === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items = state.items.map((item) => {
          if (action.payload == item.id) {
            item.count -= 1;
          }
          return item;
        });
      }
    },
  },
});

export const { increment, decrement } = shoppingSlice.actions;
export default shoppingSlice.reducer;
