import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        // console.log(filterData);
        const trailer = filterData.length ? filterData[1] : json.results[0]; //in case there is no movie with a trailer
    
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieTrailer();
      }, []);

}

export default useMovieTrailer;