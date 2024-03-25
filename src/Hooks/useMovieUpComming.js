import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../Components/Constants'
import { addMoviesUpComming } from '../Utils/movieSlice'

const useMovieUpComming = () => {
      // fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const getUpCommingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
  
      const json = await data.json()
      //console.log(json.results)
      dispatch(addMoviesUpComming(json.results))
    }
  
    useEffect(()=>{
        getUpCommingMovies()
    },[])

}

export default useMovieUpComming
