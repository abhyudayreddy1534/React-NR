import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //   add a remove at index logic when implementing card
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
      // we don't need action as no payload is required to perform the operation.
      // state.items.removeAll(); //stata.items.length = 0 anything is fine. basically remove all logic.
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
