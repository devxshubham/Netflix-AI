import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


function VedioInfo({movie}) {
    const { title, overview} = movie

    return <div className="z-5">
        <h1 className="font-bold text-[20px]">{title}</h1>
        <p>{overview}</p>
        <div className="flex gap-5">
            <button className="bg-white flex items-center gap-3 rounded px-5 py-2"> <FaPlay/> Play</button>
            <button className="flex items-center gap-3 bg-gray-300 rounded px-5 py-2"><IoIosInformationCircleOutline size={25}/> More Info</button>
        </div>

    </div>;
}

export default VedioInfo;