import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);

    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
      !upcomingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies; 
