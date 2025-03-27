import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      if (
        state.items.filter((item) => item.id === action.payload).length === 0
      ) {
        state.items = [...state.items, { id: action.payload, count: 1 }];
      } else {
        state.items = state.items.map((item) => {
          if (action.payload === item.id) {
            item.count += 1;
          }
          return item;
        });
      }
      console.log(
        "shoppings: ",
        state.items.map((item) => item.id)
      );
    },
    decrement: (state, action: PayloadAction<number>) => {
      if (
        state.items.filter((item) => item.id === action.payload)[0].count === 1
      ) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items = state.items.map((item) => {
          if (action.payload === item.id) {
            item.count -= 1;
          }
          return item;
        });
      }
      console.log(
        "shoppings: ",
        state.items.map((item) => item.id)
      );
    },
  },
});

export const { increment, decrement } = shoppingSlice.actions;
export default shoppingSlice.reducer;
