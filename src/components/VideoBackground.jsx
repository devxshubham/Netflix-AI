import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

function VedioBackground({id}) {
    
    useEffect( () => {
        const getMovieVedio = async() => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, 
                OPTIONS)
            const data = await response.json()
            console.log(data);

            const trailer = data?.results.filter( video => video.type === "Trailer")
            console.log(trailer[0]);
        }
        getMovieVedio();
    },[])

    return <div>
        
    </div>;
}

export default VedioBackground;