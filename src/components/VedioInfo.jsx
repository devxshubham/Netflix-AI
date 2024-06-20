import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function VedioInfo({ movie }) {

  const { title, overview } = movie;

  return (
    <div className="flex flex-col h-screen text-[10px] sm:text-[15px] md:text-[20px] ml-10 gap-5 absolute top-16 md:top-32 lg:top-48 z-5">
      <h1 className="font-bold text-white ">{title}</h1>
      <p className="hidden lg:flex text-[15px] text-white max-w-[40%] ">{overview}</p>
      <div className="flex gap-2 md:gap-5 ">
        <button className="bg-white hover:bg-opacity-80 flex items-center gap-1 md:gap-3 rounded px-2 md:px-5 py-1 md:py-2">
          {" "}
          <FaPlay /> Play
        </button>
        <button className="flex items-center bg-opacity-80 hover:bg-opacity-50 gap-1 md:gap-3 bg-gray-300 rounded px-2 md:px-5 py-1 md:py-2">
          <IoIosInformationCircleOutline size={25} /> More Info
        </button>
      </div>
    </div>
  );
}

export default VedioInfo;
