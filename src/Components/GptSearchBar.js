import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Openai from '../Utils/Openai';
import lang from '../Utils/LanguageTranslater';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    // This function is called when the API call fails
    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleGPTSearchClick = async () => {
        try {
            // Adjusted the query to correctly use searchText's value
            const GptQuery = "Act as a Movies Recommendation system and suggest some movies for the query " + (searchText.current.value || "Enter your query") + ". Only give me the names of 10 movies, comma-separated. Example Result: Gader, Don, Sholay, Golmaal, Koi Mil Gaya";
            
            const gptresults = await Openai.chat.completions.create({
                messages: [{ role: 'user', content: GptQuery }],
                model: 'gpt-3.5-turbo',
            });
        } catch (error) {
            showErrorToast(error.message);
        }
    };

    return (
        <div className='pt-[10%] flex justify-center'>
            <ToastContainer />
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='col-span-8 p-4 m-4' placeholder={lang[langKey].gptSearchPlaceHolder}/>
                <button type="button" className='col-span-4 py-2 m-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;



