import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const images = [
    {
        url: 'https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRlbm5pcyUyMGNvdXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVubmlzJTIwY291cnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1664298217898-c62231a2e47b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1664013258777-869e3de822ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxiYWRtaW50b258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://i.pinimg.com/564x/b3/41/a5/b341a545e231a57615a1eeff2ac055d2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1558658862-77693bcc4e97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2253&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://media.istockphoto.com/id/650371904/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B9%8D%E0%B8%B2%E0%B9%81%E0%B8%AD%E0%B9%82%E0%B8%A3%E0%B8%9A%E0%B8%B4%E0%B8%81.jpg?s=612x612&w=0&k=20&c=VXU8_q9_vmYdyyIgkFVQJO5Nmq-T-UOjrXEMWCjL06Y='
    },
    {
        url: 'https://i.pinimg.com/474x/9e/ff/59/9eff59344ce942f96598948c9b0fde64.jpg'
    }
]

const SlideImage = () => {
  
    const [currentIdex, setCurrentIndex] = useState(0)


    const prevSlide = () => {
        const isFirstSlide = currentIdex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIdex - 1;
        setCurrentIndex(newIndex);
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIdex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIdex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
      }, [currentIdex, images.length]);

    return(
        <div className='max-w-[1000px] h-[780px] w-full m-auto mb-20 py-16 px-4 relative group'>
            <div style={{backgroundImage: `url(${images[currentIdex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg shadow-black contrast-175'></div>
            {/* left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white/50 cursor-pointer hover:text-white' >
                <FontAwesomeIcon onClick={prevSlide} icon={faCircleArrowLeft} size='xl' />
            </div>
            {/* right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white/50 cursor-pointer hover:text-white'>
                <FontAwesomeIcon onClick={nextSlide} icon={faCircleArrowRight} size='xl'/>
            </div>
            <div  className='mt-8 flex justify-center py-2'>
                {images.map((image, imageIndex) => (
                    <div key={imageIndex} onClick={() => goToSlide(imageIndex) } className='text-[8px] text-white/30 pl-1 cursor-pointer hover:text-gray-500 '><FontAwesomeIcon icon={faCircle} /></div>
                ))}
            </div>
        </div>
  )
};

export default SlideImage;
