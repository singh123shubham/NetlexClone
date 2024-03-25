import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {API_OPTIONS} from '../Components/Constants'
import { addMovies } from '../Utils/movieSlice'

const useMovie = () => {
      // fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const getMovieList = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  
      const json = await data.json()
      //console.log(json.results)
      dispatch(addMovies(json.results))
    }
  
    useEffect(()=>{
      getMovieList()
    },[])

}

export default useMovie
