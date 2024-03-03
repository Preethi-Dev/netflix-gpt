import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex gap-4 overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieTitle={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
