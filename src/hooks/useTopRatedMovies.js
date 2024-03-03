import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    //dispatch
    dispatch(addTopRatedMovies(json.results));
  };

  //run only once after the initial render of Browse component
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
