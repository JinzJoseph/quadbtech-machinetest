import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter(item => item._id !== itemId);
    }
  },
});

export const { addTocart, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
