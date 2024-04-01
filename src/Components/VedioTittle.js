import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  const [error, setError] = useState(false);

  const handlePlayClick = () => {
    if (!id) {
      setError(true);
      console.log(setError)
    } else {
      // Handle play functionality
    }
  };

  return (
    <div className='w-screen h-screen aspect-video pt-36 px-8 sm:px-16 absolute text-white bg-gradient-to-r from-black'>
      <h2 className='text-4xl sm:text-6xl font-bold'>{title}</h2>
      <p className='w-full sm:w-1/2 py-6 text-lg'>{overview}</p>

      <div className='flex flex-col sm:flex-row items-center'>
        <button className='bg-white text-black font-bold p-2 w-32 sm:w-20 rounded-lg mb-4 sm:mb-0 sm:mr-2 hover:bg-opacity-50' onClick={handlePlayClick}>Play</button>
        {error ? (
          <Link to={"/error"}>
            <button className='bg-slate-500 text-black font-bold p-2 w-32 sm:w-36 rounded-lg hover:bg-opacity-50'>More Info</button>
          </Link>
        ) : (
          <Link to={id ? "/movieinfo/" + id : "#"}>
            <button className='bg-slate-500 text-black font-bold p-2 w-32 sm:w-36 rounded-lg hover:bg-opacity-50'>More Info</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default VideoTitle;
