import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import BrowseNav from "../components/BrowseNav";
import MainContainer from "../components/MainContainer";


const Browse = () => {

    useNowPlayingMovies()

    
    return <div className="flex relative flex-col">
        <BrowseNav></BrowseNav>
        <MainContainer></MainContainer>
    </div>
}

export default Browse