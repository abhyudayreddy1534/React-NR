import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const theStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default theStore;
