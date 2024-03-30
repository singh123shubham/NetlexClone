import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import {useSelector} from 'react-redux'
const VedioBackground = ({movieId}) => {

  const trailerVedio = useSelector((store) => store.movies?.trailerVedio)

  useMovieTrailer(movieId)
  
  return (
    <div className='w-screen'>
      <iframe 
        className='w-screen h-screen aspect-vedio'
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        
        >
          
        </iframe>
    </div>
  )
}

export default VedioBackground



