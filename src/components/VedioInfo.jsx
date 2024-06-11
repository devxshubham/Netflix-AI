import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


function VedioInfo({movie}) {
    const { title, overview} = movie

    return <div className="flex flex-col max-w-[40%] ml-10 gap-5 absolute top-48 z-5">
        <h1 className="font-bold text-white text-[20px]">{title}</h1>
        <p className="text-white ">{overview}</p>
        <div className="flex gap-5">
            <button className="bg-white hover:bg-opacity-80 flex items-center gap-3 rounded px-5 py-2"> <FaPlay/> Play</button>
            <button className="flex items-center bg-opacity-80 hover:bg-opacity-50 gap-3 bg-gray-300 rounded px-5 py-2"><IoIosInformationCircleOutline size={25}/> More Info</button>
        </div>

    </div>;
}

export default VedioInfo;