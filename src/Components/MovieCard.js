import React from 'react'
import { IMAGE_CDN_URL } from './Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 mb-5'>
      <img
        className='rounded-md transition-transform duration-300 transform hover:scale-90 cursor-pointer'
        alt='Movie Card'
        src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard