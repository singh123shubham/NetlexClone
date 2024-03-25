import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className=' bg-black'>
      <div className=' -mt-40 relative z-20'>
        
      <MovieList title={"Now Playing "} movies={movies.nowMoviePlaying} />
      <MovieList title={"Top Rated "} movies={movies.addMoviesTopRated} />

      <MovieList title={"Popular "} movies={movies.addMoviesPopular} />
      <MovieList title={"UpComming... "} movies={movies.addMoviesUpComming} />
      </div>
    </div>
  )
}

export default SecondaryContainer


// movielist - papoular
// movielist - tranding
// movielist - hrror