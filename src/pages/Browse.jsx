import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import BrowseNav from "../components/BrowseNav";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";


const Browse = () => {

    useNowPlayingMovies()

    
    return <div className="flex relative flex-col">
        <BrowseNav></BrowseNav>
        <MainContainer></MainContainer>
        <SecondaryContainer/>
    </div>
}

export default Browse