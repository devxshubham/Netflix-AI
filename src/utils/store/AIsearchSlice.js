import { createSlice } from "@reduxjs/toolkit";

const AIsearchSlice = createSlice({
  name: "AIsearchSlice",
  initialState: {
    showSearch: false,
    AImovies : [],
  },
  reducers: {
    toggleState: (state) => {
      state.showSearch = !state.showSearch;
    },
    addAImovies : (state,action)=>{
      state.AImovies = action.payload;
    }
  },
});
export const { toggleState, addAImovies } = AIsearchSlice.actions;

export default AIsearchSlice.reducer;
