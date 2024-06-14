import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPopular } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector( store => store.movies.popularMovies)

  useEffect(() => {
    const PopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addPopular(data.results));
    };

    !popularMovies && PopularMovies();
  }, []);
};

export default usePopularMovies;
