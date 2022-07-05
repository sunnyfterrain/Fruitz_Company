import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cart_list: [],
  total_price: 0,
};

let carts = createSlice({
  name: 'carts',
  initialState: INITIAL_STATE,
  reducers: {
    addCart(state, action) {
      const targetId = action.payload.id;
      const index = state.cart_list.findIndex(item => item.id === targetId);
      if (index >= 0) {
        state.cart_list[index].quantity += action.payload.quantity;
      } else {
        state.cart_list.push(action.payload);
      }
    },
    delete(state, action) {
      const targetId = action.payload;
      const index = state.cart_list.findIndex(item => item.id === targetId);
      state.cart_list.splice(index, 1);
    },
    deleteAll(state, action) {
      state.cart_list.splice(0, state.cart_list.length);
    },
  },
});

export const cartActions = carts.actions;
export default carts.reducer;
