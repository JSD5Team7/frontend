import React from 'react'
import { SwiperSlide } from 'swiper/react';
import Slider from '../Layout/Slider'
import useAPI from '../Hook/useAPI'
import TrainerCard from './TrainerCard'
import { Link } from 'react-router-dom'


function SildeTrainer() {
    const { trainers } = useAPI();

  return (
    <section>
      <div className='my-10 p-10 bg-slate-700 rounded-lg shadow-black shadow-md'>
        <h2 className='text-lime-300 text-3xl text-center font-bold mb-5'>Our Specialist</h2>
        <Slider >
        {trainers
        .map((trainer) => (
          <SwiperSlide className='w-80 h-[32rem] mb-5 my-5 '>
            <TrainerCard 
            key={trainer.id} 
            img={trainer.image}
            name={trainer.name}
            activity={trainer.type}
            information={trainer.des}
            />
          </SwiperSlide>))}
        </Slider>
        <div className='flex justify-end mr-10 my-5'>
            <Link to={'/coach'}><button className='rounded-full w-[150px] text-lg font-semibold bg-lime-300 border-2 border-lime-300 hover:bg-lime-400 p-2'>See more</button></Link>
        </div>
      </div>
  </section>
    
  )
}

export default SildeTrainer