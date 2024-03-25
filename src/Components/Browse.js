import React, { useEffect } from 'react'
import Header from './Header'
import useMovie from '../Hooks/useMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useMoviePapular from '../Hooks/useMoviePapular'
import useMovieTopRated from '../Hooks/useMovieTopRated'
import useMovieUpComming from '../Hooks/useMovieUpComming'


const Browse = () => {
  useMovie()
  useMoviePapular()
  useMovieTopRated()
  useMovieUpComming()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse