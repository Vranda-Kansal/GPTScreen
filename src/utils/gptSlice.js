import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptScreen: false,
  },
  reducers: {
    toggleGptScreen: (state, action) => {
      state.showGptScreen = !state.showGptScreen;
    },
  },
});

export const { toggleGptScreen } = gptSlice.actions;
export default gptSlice.reducer;
