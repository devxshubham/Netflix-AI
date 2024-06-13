import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import languages from "../utils/languageConstant";

function AIsearch() {
  const currLanguage = useSelector( store => store.language.currLang);

  return (
    <div className="flex flex-col h-screen bg-black items-center justify-center">
      <div className="absolute z-5 w-screen h-screen">
        <div className="absolute z-5 bg-black bottom-0 w-screen h-screen opacity-60"></div>
        <img
          className="w-screen h-screen z-0 object-cover	"
          src={NETFLIX_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="flex justify-center rounded-lg z-10 bg-black bg-opacity-80 h-[30%] w-[40%] gap-5 items-center">
        <input
          className="border-none rounded py-2 px-5 w-72 text-white"
          type="text"
          placeholder={languages.AIsearchPlaceholder[currLanguage]}
        />
        <button className="bg-[#e80c14] py-2 rounded px-5 text-white">
          {languages.AIsearch[currLanguage]}
        </button>
      </div>
      <div className="text-white">recommendations</div>
    </div>
  );
}

export default AIsearch;
