import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increseQuantity: (state, action) => {
      state.cart.find((item) => item.id === action.payload).quantity++;
    },
    decreaseQuantity: (state, action) => {
      state.cart.find((item) => item.id === action.payload).quantity--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;