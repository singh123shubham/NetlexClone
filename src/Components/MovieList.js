import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return null; 
  }

  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4 font-bold">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <Link to={"/movieinfo/" + movie?.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
