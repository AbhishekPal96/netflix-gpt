import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { GEMINI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give the names of 5 movies comma separated like the given result ahead. Example : Inception, Iron Man, Kill, John Wick, Rocky";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    // console.log(response);
    const gptResults = response.text();
    // console.log(gptResults);
    const gptMovies = gptResults.split(",");
    // console.log(gptMovies);

    // console.log(gptResults.choices?.[0]?.message?.content);
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");


    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const promiseResult = await Promise.all(promiseArray);
    console.log(promiseResult);
    dispatch(addGptMovieResult({movieNames : gptMovies,movieResults : promiseResult}));

  };

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
