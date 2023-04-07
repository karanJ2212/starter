import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 20,
    total: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    clearall: (state) => {
      state.cartItems = [];
    },
  },
});

console.log(CartSlice);
export const { clearCart, clearall } = CartSlice.actions;
export default CartSlice.reducer;
