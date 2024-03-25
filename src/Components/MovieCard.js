import React from 'react'
import { IMAGE_CDN_URL } from './Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img
        alt='Movie Card'
        src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard