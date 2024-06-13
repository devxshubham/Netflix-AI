import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/store/movieSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useGetTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVedio = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        OPTIONS
      );
      const data = await response.json();

      const trailer = data?.results.filter((video) => video.type === "Trailer");
      dispatch(addTrailer(trailer[0]));
    };
    getMovieVedio();
  }, []);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return trailerVideo;
};

export default useGetTrailer;
