import React from 'react'

export const OpenTime = ()=> {
    return (
        <div className="opentime-container w-full h-[200px] bg-slate-700 rounded-xl mt-10 shadow-black shadow-md flex flex-col gap-4 justify-center items-center">
            <h2 className='font-bold text-4xl text-white '>We Are Open <span className='text-lime-300 font-bold italic'>EVERYDAY</span></h2>
            <h2 className='font-bold text-4xl text-white '>Time 6 AM - 11 PM</h2>
            <a href="/booking" className='bg-lime-300 pt-[8px] pb-[8px] pl-5 pr-5  w-fit text-center text-2xl font-bold rounded-full hover:bg-lime-400 hover:shadow-md hover:shadow-black'>Let's Play Together</a>
        </div>
    )
}