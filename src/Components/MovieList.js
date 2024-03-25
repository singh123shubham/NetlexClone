import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log("Movie list");
    console.log(movies);

    // Check if movies is null or undefined
    if (!movies) {
        return null; // or you can return some default message or component
    }

    return (
        <div className='px-6'>
            <h1 className='text-2xl text-white py-4 font-bold'>{title}</h1>

            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
