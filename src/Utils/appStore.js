import {configureStore } from '@reduxjs/toolkit'
import usesReducer from './userSlice'
import moviesReducer from './movieSlice'
const appStore = configureStore(
   {
    reducer :{
        user:usesReducer,
        movies:moviesReducer,     
    }
   }
)

export default appStore 