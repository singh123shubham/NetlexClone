import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../Components/Constants'
import { addMoviesPopular } from '../Utils/movieSlice'

const useMoviePapular = () => {
      // fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const getPopularMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  
      const json = await data.json()
      //console.log(json.results)
      dispatch(addMoviesPopular(json.results))
    }
  
    useEffect(()=>{
      getPopularMovies()
    },[])

}

export default useMoviePapular
