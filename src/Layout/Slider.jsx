import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrainerCard from '../Components/TrainerCard';


const Slider = ({trainer}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel responsive={responsive}>
      {trainer.map((trainer) => (
        <TrainerCard 
          key={trainer.id} 
          name={trainer.name}
          activity={trainer.activity}
          information={trainer.information}
        />
      ))}
    </Carousel>
  )
}

export default Slider