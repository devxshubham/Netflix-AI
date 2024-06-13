import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import languages from "../utils/languageConstant";
import { useRef } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

function AIsearch() {
  const inputRef = useRef();

  const currLanguage = useSelector((store) => store.language.currLang);

  

  const handleAIsearch = async () => {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Act as a movie recommendation system and suggest some movies based on the queary : "+inputRef.current+". only give me names of 5 movies. return movies separated by commas"
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response)
    const text = response.text();
    console.log(text);
  };

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
          onChange={(e) => (inputRef.current = e.target.value)}
          className="border-none text-black rounded py-2 px-5 w-72 "
          type="text"
          placeholder={languages.AIsearchPlaceholder[currLanguage]}
        />
        <button
          className="bg-[#e80c14] py-2 rounded px-5 text-white"
          onClick={handleAIsearch}
        >
          {languages.AIsearch[currLanguage]}
        </button>
      </div>
      <div className="text-white">recommendations</div>
    </div>
  );
}

export default AIsearch;
