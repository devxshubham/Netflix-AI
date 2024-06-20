import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { useNavigate } from 'react-router-dom'

function MovieCard({ movieData }) {
  const { backdrop_path,title} = movieData;
  
  const disptach = useDispatch()
  const navigate = useNavigate()

  function handleClick(){
    disptach(addTrailerVideo(movieData));
    navigate('/browse')
  }

  return (
    <div className="flex relative rounded min-w-[200px]" onClick={handleClick}>
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
