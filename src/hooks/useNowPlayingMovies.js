import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addMovies } from "../utils/store/movieSlice"
import { OPTIONS } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        const NowPlayingMovies = async() => {
            
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', 
                OPTIONS)
            const data = await response.json()
            dispatch(addMovies(data.results));
            
        }

        NowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;