import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  //searchTerm
  const searchTerm = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();

    const query =
      "Act as a movie recommendation system and suggest some movie for query : " +
      searchTerm.current.value +
      ' only give me names of 5 movies. comma separated and put it an array like the example result given ahead. Example: ["Remo", "Rajini Murugan", "Singapore Saloon", "Love Today", "Maveeran"] ';

    //made an OpenAI API call
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    //convert string to array
    const gptMovies = JSON.parse(gptResults.choices[0].message.content);

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <form className="flex justify-center pt-[60%] md:pt-[20%] md:w-1/2 mx-auto">
      <input
        ref={searchTerm}
        type="text"
        className="grow py-2 px-2 rounded-s-md text-black"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="px-4 py-2 bg-red-700 text-white rounded-e-md"
        onClick={handleGptSearch}
      >
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
