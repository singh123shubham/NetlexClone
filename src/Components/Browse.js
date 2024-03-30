import React, { useEffect } from "react";
import Header from "./Header";
import useMovie from "../Hooks/useMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMoviePapular from "../Hooks/useMoviePapular";
import useMovieTopRated from "../Hooks/useMovieTopRated";
import useMovieUpComming from "../Hooks/useMovieUpComming";
import { useSelector } from "react-redux";
import MovieSearch from "./MovieSearch";
import Footer from "./Footer";

const Browse = () => {
  const showGptSerach = useSelector((store) => store.gpt.showGptSerach);
  const showMovieSerach  = useSelector((store) => store.moviesearch.showMovieSerach)
  useMovie();
  useMoviePapular();
  useMovieTopRated();
  useMovieUpComming();
  // useMovieSearch()
 
  return (
    <div>
      <Header />
      {showMovieSerach ? (
        <MovieSearch/>
      ) : (
        <>
          <MainContainer /> 
          <SecondaryContainer />
          <Footer/>
        </>
      )}
      
    </div>
  );
};

export default Browse;
