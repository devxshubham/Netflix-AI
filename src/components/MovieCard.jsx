import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ movieData }) {
  const { backdrop_path,title } = movieData;
  return (
    <div className="flex relative rounded min-w-[200px]">
      <h1 className="absolute pl-2 bg-gradient-to-t from-black to-transparent left-0 right-0 text-white bottom-0 text-[15px]">{title}</h1>
      <img
        className="rounded"
        src={IMG_CDN_URL + backdrop_path}
        alt="movie card"
      />
    </div>
  );
}

export default MovieCard;
