import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  if (!posterPath) return;
  return (
    <div className="shrink-0 w-32 md:w-auto">
      <img src={IMG_CDN_URL + posterPath} alt={movieTitle + " poster"} />
    </div>
  );
};

export default MovieCard;
