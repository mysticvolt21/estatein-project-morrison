import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  loading: false,
  error: null
};
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setTeamLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTeamError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});
export const {
  setTeam,
  setTeamLoading,
  setTeamError
} = teamSlice.actions;
export default teamSlice.reducer;
