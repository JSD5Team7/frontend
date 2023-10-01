import React from 'react'
import Slider from '../Layout/Slider'
import useAPI from '../Hook/useAPI'
import TrainerCard from './TrainerCard'
import { Link } from 'react-router-dom'

function SildeTrainer() {
    const { trainers } = useAPI();
  return (
    <>
        <Slider>
        {trainers
        .map((trainer) => (
            <TrainerCard 
            key={trainer.id} 
            name={trainer.name}
            activity={trainer.activity}
            information={trainer.information}
            />
        ))}
        </Slider>
        <div className='flex justify-end mr-10'>
            <Link to={'/coach'}><button className='rounded-xl border-2 border-emerald-400 hover:bg-emerald-400 p-2'>See more</button></Link>
        </div>
  </>
    
  )
}

export default SildeTrainer