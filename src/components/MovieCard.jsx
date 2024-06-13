import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ movieData }) {
  const { backdrop_path } = movieData;
  return (
    <div className="flex rounded min-w-[200px]">
      <img
        className="rounded"
        src={IMG_CDN_URL + backdrop_path}
        alt="movie card"
      />
    </div>
  );
}

export default MovieCard;
