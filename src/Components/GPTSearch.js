import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backGroundImage, profileURL } from "./Constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img className="w-full" src={backGroundImage} alt="Background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
