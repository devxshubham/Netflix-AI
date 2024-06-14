import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function AIrecommendedMovies() {
    const movies = useSelector(store => store?.AIshow?.AImovies);
    console.log(movies)
    if(movies) return ( 
        <MovieList title={"AI recommended movies"} movies={movies} />
     );
}

export default AIrecommendedMovies;