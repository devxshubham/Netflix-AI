import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addUpcoming } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const upcomingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcoming(data.results));
    };

    upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
