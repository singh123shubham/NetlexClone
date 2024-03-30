import {configureStore } from '@reduxjs/toolkit'
import usesReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'
import searchMovieReducer from './searchmovieSlice' 
import configReducer from './configSlice'
const appStore = configureStore(
   {
    reducer :{
        user:usesReducer,
        movies:moviesReducer,  
        gpt: gptReducer,
        moviesearch:searchMovieReducer,
        config:configReducer, 
    }
   }
)

export default appStore 