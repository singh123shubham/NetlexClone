import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignForm ,setIsSignFrom] = useState(true)



    const handleToggleSignInForm = () => {
        setIsSignFrom(!isSignForm)
    }
  return (
    <div>
        <Header/>
        
        <div className='absolute w-full'>
            <img 
                className='w-full'
                src="https://c4.wallpaperflare.com/wallpaper/192/803/717/stranger-things-netflix-tv-series-fan-art-wallpaper-preview.jpg"/>
        </div>

        <form className=' absolute p-12 bg-black w-4/12 my-40 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className=' font-bold text-3xl text-yellow-50 py-4'>{isSignForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignForm &&(<input type='text ' placeholder='Full Name' className='p-4 my-4 w-full bg-slate-200 rounded-sm' />)}
            <input type='text ' placeholder='Email Address' className='p-4 my-4 w-full bg-slate-200 rounded-sm' />
            <input type='password ' placeholder='Enter password' className='p-4 my-4 w-full bg-slate-200 rounded-sm'/>
            <button className='p-2 my-6 bg-red-600 w-full text-white font-bold rounded-lg'>{isSignForm ? "Sign In" : "Sign Up"}</button>
            <h1 className='text-white'>Forgot Password?</h1>
            <p className='text-white cursor-pointer' onClick={handleToggleSignInForm}>{isSignForm ? "New to Netflix? Sign up now." : "Allready registered? Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login