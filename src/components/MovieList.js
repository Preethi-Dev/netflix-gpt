import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-2 md:px-6">
        <h1 className="text-xl md:text-3xl py-3 md:py-6">{title}</h1>
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
    )
  );
};

export default MovieList;
