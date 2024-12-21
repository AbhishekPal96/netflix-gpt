import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovieNames.map((gptMovieName, index) => (
          <MovieList
            key={gptMovieName}
            title={gptMovieName}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
