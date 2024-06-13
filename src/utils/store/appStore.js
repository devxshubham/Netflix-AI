import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import AIreducer from "./AIsearchSlice";
import languageReducer from './languageSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    AIshow: AIreducer,
    language : languageReducer,
  },
});

export default appStore;
