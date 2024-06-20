import { useSelector } from "react-redux";
import VedioInfo from "./VedioInfo";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const mainMovie = useSelector( store => store.movies?.trailerVedioInfo);

  if (!mainMovie ) return;
  
  return (
    <div className="mt-0 md:-mt-20">
      <VedioInfo movie={mainMovie}></VedioInfo>
      <VideoBackground id={mainMovie.id}></VideoBackground>
    </div>
  );
};
export default MainContainer;
