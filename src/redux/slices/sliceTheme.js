import { createSlice } from "@reduxjs/toolkit";

const SliceTheme = createSlice({
  name: "theme",
  initialState: {
    theme: "dark"
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = SliceTheme.actions;
export default SliceTheme.reducer;
