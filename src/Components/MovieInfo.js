import React from "react";
import useMovieInfo from "../Hooks/useMovieInfo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setOtherURL } from "../Utils/configSlice";
import { BANNER_IMG_CDN_URL } from "./Constants";
import MovieInfoContainer from "./MovieInfoContainer";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useMovieInfo(id);

  const movieInfo = useSelector((store) => store.movies.addMovieInfo);

  if (!movieInfo) {
    return <Loader/>;
  }

  const { overview, backdrop_path, original_title } = movieInfo || {};

  dispatch(setOtherURL(true));

  return (
    <div>
      <Header />
      <div className="w-full min-h-[110vh] md:min-h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="h-[110vh] md:h-auto object-cover mx-auto brightness-[.3]"
          src={BANNER_IMG_CDN_URL + movieInfo.backdrop_path}
          alt="moviebg"
        />
      </div>

      <MovieInfoContainer movieInfo={movieInfo} />

      <MovieCast id={movieInfo?.id} />

      <MovieVideos id={movieInfo?.id} />

      <Footer />
    </div>
  );
};

export default MovieInfo;
