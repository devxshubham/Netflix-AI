import { useSelector } from "react-redux";
import VedioInfo from "./VedioInfo";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;

  const mainMovie = movie[0];

  return (
    <div className="mt-0 md:-mt-14">
      <VedioInfo movie={mainMovie}></VedioInfo>
      <VideoBackground id={mainMovie.id}></VideoBackground>
    </div>
  );
};
export default MainContainer;
