import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowMoviePlaying: null,
        addMoviesPopular:null,
        addMoviesTopRated:null,
        addMoviesUpComming:null,
        trailerVedio : null,
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

        addTrailerVedio:(state,action)=>{
            state.trailerVedio=action.payload;
    }
}
});

export const { addMovies ,addTrailerVedio,addMoviesPopular,addMoviesTopRated,addMoviesUpComming } = moviesSlice.actions;

export default moviesSlice.reducer;
