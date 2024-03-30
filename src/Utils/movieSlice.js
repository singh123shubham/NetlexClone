import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowMoviePlaying: null,
        addMoviesPopular:null,
        addMoviesTopRated:null,
        addMoviesUpComming:null,
        trailerVedio : null,
        searchMovie : null,
        addMovieInfo: null,
        addCastInfo:null,
        addMovieVideos: null,
        addCastMovies: null,

    },
    reducers: {
        addMovies: (state, action) => {
            state.nowMoviePlaying = action.payload;
        },
        addMoviesPopular:(state,action) => {
            state.addMoviesPopular = action.payload
        },
        addMoviesTopRated :(state,action)=> {
            state.addMoviesTopRated = action.payload
        },
        addMoviesUpComming: (state,action) => {
            state.addMoviesUpComming = action.payload
        },
        searchMovie : (state,action) => {
            state.searchMovie= action.payload 
        },
        addMovieInfo:(state,action) =>{
            state.addMovieInfo = action.payload
        },
        addCastInfo: (state, action) => {
            state.addCastInfo = action.payload
        },
        addMovieVideos :(state,action)=>{
            state.addMovieVideos= action.payload
        },
        addCastMovies : (state,action)=>{
            state.addCastMovies = action.payload
        },
        clearCastMovies: (state, action) => {
            state.addCastMovies = null;
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVedio=action.payload;
    }
}
});

export const { addMovies ,addTrailerVedio,addMoviesPopular,addMoviesTopRated,addMoviesUpComming,searchMovie,addMovieInfo ,addCastInfo,addCastMovies,addMovieVideos,clearCastMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
