import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Components/Constants'
import {useDispatch} from "react-redux"
import { addTrailerVedio } from '../Utils/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMoviesVedios = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json)
    
        const filterData = json.results.filter((vedio) => vedio.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVedio(trailer))
      }
    
    
      useEffect(()=>{
        getMoviesVedios()
      },[])
    
}

export default useMovieTrailer