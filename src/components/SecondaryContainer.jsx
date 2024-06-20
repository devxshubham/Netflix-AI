import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black ">
      <div className="flex flex-col gap-6 -mt-16 pb-20 md:-mt-32 -ml-5 md:ml-0  bg-transparent z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcoming} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
