import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import BrowseNav from "../components/BrowseNav";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import AIsearch from "../components/AIsearch";


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    
    return <div className="">
        <AIsearch></AIsearch>
        <BrowseNav></BrowseNav>
        <MainContainer></MainContainer>
        <SecondaryContainer/>
    </div>
}

export default Browse