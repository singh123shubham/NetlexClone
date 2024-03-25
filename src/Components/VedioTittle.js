import React from 'react'
import { FaPlay } from "react-icons/fa";


const VedioTittle = ({tittle , overview}) => {
  return (
    <div className=' w-screen h-screen aspect-vedio pt-36 px-16 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-6xl font-bold'>{tittle}</h2>
        <p className='w-1/3 py-6 text-lg'>{overview}</p>

       <div className=''>
       <button className=' bg-white text-black font-bold p-2 w-32 rounded-lg hover:bg-opacity-50'> play</button>
        <button  className='mx-2 bg-slate-500 text-black font-bold p-2 w-36 rounded-lg'> moreInfo</button>
       </div>
    </div>
  )
}

export default VedioTittle