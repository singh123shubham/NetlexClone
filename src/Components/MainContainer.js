import React from "react";
import { useSelector } from "react-redux";
import VedioTittle from "./VedioTittle";
import VedioBackground from "./VedioBackground";
import Loader from "./Loader";
const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowMoviePlaying);

  const movieInfo = useSelector((store) => store.movies.movieInfo);
  console.log("hgjhghj");
  console.log(movieInfo);

  if (movie === null) return <Loader />;

  const mainMovie = movie[1];

  const { original_title, original_language, overview, id } = mainMovie;
  return (
    <div>
      <VedioTittle tittle={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
