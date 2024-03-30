import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lang from '../Utils/LanguageTranslater';
import { API_OPTIONS } from './Constants';
import { searchMovie } from '../Utils/movieSlice';

const MovieSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [moviesFound, setMoviesFound] = useState(true); // Assume movies are found initially

    const getMovieList = async (query) => {
        if (query.trim() === '') {
            return;
        }
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        const movies = json.results;
        if (movies.length === 0) {
            setMoviesFound(false);
            toast.error('No movies found');
        } else {
            setMoviesFound(true);
            dispatch(searchMovie(movies));
        }
        setSearchPerformed(true);
    }

    useEffect(() => {
        getMovieList('');
    }, []); 

    const handleSearch = () => {
        getMovieList(searchQuery);
    };

    return (
        <div className='pt-[10%] px-4 md:px-8 lg:px-16 flex justify-center'>
        <form className='w-full sm:w-3/4 mt-20 lg:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                className='col-span-8 p-4 m-2 sm:m-4'
                placeholder={lang[langKey].gptSearchPlaceHolder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type="button"
                className='col-span-4 py-2 m-2 sm:m-4 bg-red-700 text-white rounded-lg'
                onClick={handleSearch}
            >
                {lang[langKey].search}
            </button>
        </form>
        {searchPerformed && !moviesFound && <ToastContainer />}
    </div>
    
    );
}

export default MovieSearchBar;









