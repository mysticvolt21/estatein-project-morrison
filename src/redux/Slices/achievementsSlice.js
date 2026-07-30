import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  loading: false,
  error: null
};
const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    setAchievements: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setAchievementsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAchievementsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});
export const {
  setAchievements,
  setAchievementsLoading,
  setAchievementsError
} = achievementsSlice.actions;
export default achievementsSlice.reducer;
