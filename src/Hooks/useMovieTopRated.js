import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../Components/Constants'
import {  addMoviesTopRated } from '../Utils/movieSlice'

const useMovieTopRated = () => {
      // fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const getTopRatedMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
  
      const json = await data.json()
      //console.log(json.results)
      dispatch(addMoviesTopRated(json.results))
    }
  
    useEffect(()=>{
      getTopRatedMovies()
    },[])

}

export default useMovieTopRated
