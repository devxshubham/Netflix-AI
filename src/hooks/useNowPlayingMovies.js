import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMovies, addTrailerVideo } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

  useEffect(() => {
    const NowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addMovies(data.results));
      dispatch(addTrailerVideo(data.results[0]));
    };

    !nowPlayingMovies && NowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
