import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center pt-[10%] w-1/2 mx-auto">
      <input
        type="text"
        className="grow py-2 px-2 rounded-s-md"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button className="px-4 py-2 bg-red-700 text-white rounded-e-md">
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
