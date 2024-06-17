import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_BACKGROUND, OPTIONS } from "../utils/constants";
import languages from "../utils/languageConstant";
import { useRef } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { addAImovies } from "../utils/store/AIsearchSlice";
import AIrecommendedMovies from "./showAIrecommendedMoveis";

function AIsearch() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const currLanguage = useSelector((store) => store.language.currLang);

  const TMDBsearchMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      OPTIONS
    );
    const data = await response.json();

    return data.results;
  };

  const filterTMDBresults = (TMDBresult, MovieNameArray) => {
    let x = 0;
    const filteredResults = [];
    TMDBresult?.map((movies) => {
      let flag = 0;
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].title == MovieNameArray[x]) {
          filteredResults.push(movies[i]);
          flag = 1;
          break;
        }
      }
      if (flag == 0) filteredResults.push(movies[0]);
      x++;
    });
    return filteredResults;
  };

  const handleAIsearch = async () => {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a movie recommendation system and suggest some movies based on the queary : " +
      inputRef.current +
      ". only give me names of 5 movies. return movies separated by commas always and nothing else in response";

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const MovieNameArray =
      response?.candidates[0]?.content?.parts[0]?.text?.split(", ");
    const TMDBresultsPromise = MovieNameArray?.map((movie) =>
      TMDBsearchMovie(movie)
    );
  
    const TMDBresult = await Promise.all(TMDBresultsPromise);


    const AIrecommendedMovies = filterTMDBresults(TMDBresult, MovieNameArray);

    dispatch(addAImovies(AIrecommendedMovies));
  };

  return (
    <div className="flex flex-col h-screen bg-black ">
      <div className="absolute  w-screen h-screen">
        <div className="absolute bg-black right-0 bottom-0 w-screen h-screen opacity-60"></div>
        <img
          className="w-screen h-screen z-0 object-cover	"
          src={NETFLIX_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="flex flex-col md:flex-row my-auto mx-auto justify-center items-center px-10 py-20 rounded-lg z-10 bg-black bg-opacity-80  gap-5 ">
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
      
      <div className="relative bottom-10 rounded -left-6 sm:left-0">
      <AIrecommendedMovies />
      </div>
    </div>
  );
}

export default AIsearch;
