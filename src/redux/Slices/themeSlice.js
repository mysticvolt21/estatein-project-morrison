import { createSlice } from "@reduxjs/toolkit";
const savedTheme = localStorage.getItem("darkMode");
const initialState = {
  darkMode: savedTheme ? JSON.parse(savedTheme) : true
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    }
  }
});
export const {
  toggleTheme,
  setTheme
} = themeSlice.actions;
export default themeSlice.reducer;
