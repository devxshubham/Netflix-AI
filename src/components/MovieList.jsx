import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="flex ml-10 flex-col z-20 gap-4">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <div className="flex gap-10 overflow-x-scroll no-scrollbar cursor-pointer">
        {movies?.map((movie) => {
          return <MovieCard movieData={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
