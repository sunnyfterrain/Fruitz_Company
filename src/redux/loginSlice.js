import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLogin: false,
};

let loginAuth = createSlice({
  name: 'loginAuth',
  initialState: INITIAL_STATE,
  reducers: {
    logIn(state, action) {
      state.isLogin = true;
    },
    logOut(state, action) {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginAuth.actions;
export default loginAuth.reducer;
