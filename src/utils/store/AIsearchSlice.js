import { createSlice } from "@reduxjs/toolkit";

const AIsearchSlice = createSlice({
  name: "AIsearchSlice",
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggleState: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});
export const { toggleState } = AIsearchSlice.actions;

export default AIsearchSlice.reducer;
