import React from "react";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "./Constants";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const MovieSuggestion = () => {
  const movies = useSelector((store) => store.movies?.searchMovie);
  const isLoading = useSelector((store) => store.movies.isLoading); 
    if (isLoading) {
    return <Shimmer />;
  }
  if (!movies || movies.length === 0) {
    return null;
  }

  // Filter movies where poster_path is not null
  const filteredMovies = movies.filter((movie) => movie.poster_path !== null);

  if (filteredMovies.length === 0) {
    return <p>No movies with poster available.</p>;
  }

  return (
<div className="flex flex-wrap justify-center mt-10 px-4 py-2 md:py-5 md:pt-5 md:pb-10 mx-10 lg:mx-10 lg:my-10 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-30">
    {filteredMovies.map((movie) => (
      <div key={movie.id} className="w-48 sm:w-20 md:w-20 lg:w-48 m-4 xl:w-48 px-2 pt-2">
        <Link to={`/movieinfo/${movie.id}`}>
          <img
            className="rounded-md transition-transform duration-300 transform hover:scale-110"
            alt="Movie Card"
            src={IMAGE_CDN_URL + movie.poster_path}
          />
        </Link>
      </div>
    ))}
  </div>
  );
};

export default MovieSuggestion;
