import React from 'react'
import {useSelector} from "react-redux"
import VedioTittle from './VedioTittle'
import VedioBackground from './VedioBackground'
const MainContainer = () => {
    const movie = useSelector(store => store.movies?.nowMoviePlaying)

    if(movie === null) return 

    const mainMovie = movie[1]
    console.log(mainMovie)

    const {original_title,original_language ,overview, id} = mainMovie
  return (
    <div>
        <VedioTittle tittle={original_title} overview= {overview} />
        <VedioBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer