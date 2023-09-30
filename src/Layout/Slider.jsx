import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

import TrainerCard from '../Components/TrainerCard';


const Slider = ({trainer}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        draggable={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        customTransition="transform 500ms ease-in-out"
      >
          {trainer
            .map((trainer) => (
              <TrainerCard 
                key={trainer.id} 
                name={trainer.name}
                activity={trainer.activity}
                information={trainer.information}
              />
          ))}
      </Carousel>
      <div className='flex justify-end mr-10'>
        <Link to={'/coach'}><button className='rounded-xl border-2 border-emerald-400 hover:bg-emerald-400 p-2'>See more</button></Link>
      </div>
      
    </>
    
  )
}

export default Slider