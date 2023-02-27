import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-11/12 xl:w-1/2 p-5 space-y-5'>
                <h1 className='text-5xl font-semibold'>Encuentra lo que necesitas</h1>
                <div className='bg-white flex items-center space-x-2 px-5 py-2 rounded-full'>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <input className='outline-0 w-full' type="text" name="" id="" placeholder='Search...' />
                </div>
            </div>
            <div className='hidden md:flex p-5'>
                <img className='w-[400px] h-[300px] border-8 border-gray-500' src="https://i.imgur.com/0kUKnnF.jpg" alt="Plantillas de finanzas personales" />
            </div>
        </div>
    </div>
  )
}

export default Hero;