import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUpcoming } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector( store => store.movies.upcoming)

  useEffect(() => {
    const upcomingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcoming(data.results));
    };

    !upcoming && upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
