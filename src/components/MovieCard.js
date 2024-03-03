import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  return (
    <div className="shrink-0">
      <img src={IMG_CDN_URL + posterPath} alt={movieTitle + " poster"} />
    </div>
  );
};

export default MovieCard;
