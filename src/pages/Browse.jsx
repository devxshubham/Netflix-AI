import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import BrowseNav from "../components/BrowseNav";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import AIsearch from "../components/AIsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showAIsearch = useSelector((store) => store.AIshow.showSearch);

  return (
    <div className="">
      <BrowseNav></BrowseNav>
      {showAIsearch ? (
        <AIsearch />
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
