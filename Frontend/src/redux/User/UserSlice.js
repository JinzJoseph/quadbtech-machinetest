import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },

    signoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
  },
});

export const { signInSuccess, signoutSuccess } = userSlice.actions;

export default userSlice.reducer;
