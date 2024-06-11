
import useGetTrailer from "../hooks/useGetTrailer";

function VedioBackground({id}) {
    const trailerVideo = useGetTrailer(id);

    return <div className="aspect-video overflow-x-auto">
        <iframe
            className="w-full h-full "
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1" }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            >
        </iframe>
    </div>;
}

export default VedioBackground;