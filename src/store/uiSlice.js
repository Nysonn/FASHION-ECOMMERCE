import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isHome: true,   
  },
  reducers: {
    setIsHome(state, action) {
      state.isHome = action.payload;
    },
  },
});

export const { setIsHome } = uiSlice.actions;
export default uiSlice.reducer;
