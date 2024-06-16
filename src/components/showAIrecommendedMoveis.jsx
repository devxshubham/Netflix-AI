import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function AIrecommendedMovies() {
    const movies = useSelector(store => store?.AIshow?.AImovies);
    console.log(movies.title)
    if(movies[0]) return ( 
        <MovieList title={"AI recommended movies"} movies={movies} />
     );
    return<></>
}

export default AIrecommendedMovies;