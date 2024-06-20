import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    trailerVideoData: null,
    trailerVedioInfo : null,
    popularMovies: null,
    topRatedMovies: null,
    upcoming: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailerVideoData = action.payload;
    },
    addTrailerVideo: (state,action) => {
      state.trailerVedioInfo = action.payload;
    }
  },
});

export const { addMovies, addTrailerData, addPopular, addTopRated, addUpcoming, addTrailerVideo } =
  movieSlice.actions;

export default movieSlice.reducer;
