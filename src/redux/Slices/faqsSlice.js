import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  loading: false,
  error: null
};
const faqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setFaqsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFaqsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});
export const {
  setFaqs,
  setFaqsLoading,
  setFaqsError
} = faqsSlice.actions;
export default faqsSlice.reducer;
