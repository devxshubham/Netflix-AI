import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    currLang: "english",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currLang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
