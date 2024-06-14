import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTopRated } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector( store => store.movies.topRatedMovies)

  useEffect(() => {
    const TopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        OPTIONS
      );
      const data = await response.json();
      console.log("top -> ", data.results);
      dispatch(addTopRated(data.results));
    };

    !topRatedMovies && TopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
