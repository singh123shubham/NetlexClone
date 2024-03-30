import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { API_OPTIONS } from "./Constants";
import Header from "./Header";
import Footer from "./Footer";

const MoviesByActor = () => {
  const location = useLocation();

  const actorName = location?.state?.actorName;

  const [castMovie , setCastMovie] = useState([])
  const { id } = useParams();
  const getCastMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/person/"+id+"/movie_credits",API_OPTIONS)
    const json = await data.json()
    console.log(json)
    const castMovies = json.cast.filter((movie) => movie?.poster_path != null);
    setCastMovie(castMovies)
  }
  useEffect(() => {
    getCastMovies()
  },[])
  
  return (
    <div>
      <Header/>
      <div className="bg-black text-white md:px-16 px-5 min-h-screen">
        <div className="pt-28">
          <h1 className="md:text-4xl text-xl">Discover Movies Starring <b>{actorName}</b></h1>
        </div>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {castMovie.map((movie) => (
            <div>
              <Link to={"/movieinfo/" + movie?.id}>
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MoviesByActor;
