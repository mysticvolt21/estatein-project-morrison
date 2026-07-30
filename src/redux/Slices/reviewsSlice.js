import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  loading: false,
  error: null
};
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});
export const {
  setReviews,
  setLoading,
  setError
} = reviewsSlice.actions;
export default reviewsSlice.reducer;
