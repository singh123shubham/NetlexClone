import React from "react";

import { backGroundImage, BANNER_IMG, profileURL } from "./Constants";
import MovieSearchBar from "./MovieSearchBar";
import MovieSuggestion from "./MovieSuggestion";
import Footer from "./Footer";

const GPTSearch = () => {
  return (
    <>
      <div className=" absolute -z-10">
        <img className="h-screen md:w-screen object-cover" src={BANNER_IMG} alt="Background" />
      </div>
      <div className="">
      <MovieSearchBar/>
      <MovieSuggestion/>
      </div>
    </>
  );
};

export default GPTSearch;
