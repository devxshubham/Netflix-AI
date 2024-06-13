import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addPopular } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const popularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addPopular(data.results));
    };

    popularMovies();
  }, []);
};

export default usePopularMovies;
