import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addTopRated } from "../utils/store/movieSlice"
import { OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        const topRatedMovies = async() => {
            
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', 
                OPTIONS)
            const data = await response.json();
            console.log( "top -> ",data.results)
            dispatch(addTopRated(data.results));
            
        }

        topRatedMovies();
    },[])
}

export default useTopRatedMovies;