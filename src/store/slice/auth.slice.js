import { createSlice } from "@reduxjs/toolkit";

{
  /*
  name:
  initialState = store
  reducer
  use immer so no need return  
*/
}

const initialState = {
  data: null,
  auth: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    login: (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.auth = true;
      state.error = null;
    },
    logout: (state) => {
      state.auth = false;
      state.data = null;
    },
  },
});

export const { processing, error, login, logout } = authSlice.actions;

export default authSlice.reducer;
