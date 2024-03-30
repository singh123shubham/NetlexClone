import {createSlice} from "@reduxjs/toolkit"

const searchmovieSlice = createSlice({
    name:'moviesearch',
    initialState:{
        showMovieSerach : false
    },
    reducers:{
        toggleMovieSerachView : (state,action) =>{
            state.showMovieSerach =! state.showMovieSerach
        }
    }
})

export const {toggleMovieSerachView} = searchmovieSlice.actions
export default searchmovieSlice.reducer