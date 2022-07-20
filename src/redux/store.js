import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import loginSlice from './loginSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    loginAuth: loginSlice,
  },
});

export default store;
