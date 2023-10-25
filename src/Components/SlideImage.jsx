import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const images = [
  {
    url: "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1634840542403-1a9b1067aaa0?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1508954528226-0b941060b8bf?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxlJTIwdGVubmlzfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/flagged/photo-1572987337946-de0a00159d91?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://media.istockphoto.com/id/670724074/photo/exercising-at-the-gym.webp?b=1&s=170667a&w=0&k=20&c=toNOAVgLzQfhA7jVQRsOg3B1oiOXQLZakpG4YwrPToQ=",
  },
  {
    url: "https://media.istockphoto.com/id/650371904/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B9%8D%E0%B8%B2%E0%B9%81%E0%B8%AD%E0%B9%82%E0%B8%A3%E0%B8%9A%E0%B8%B4%E0%B8%81.jpg?s=612x612&w=0&k=20&c=VXU8_q9_vmYdyyIgkFVQJO5Nmq-T-UOjrXEMWCjL06Y=",
  },
  {
    url: "https://media.istockphoto.com/id/485457702/photo/kickboxing-class.webp?b=1&s=170667a&w=0&k=20&c=WNY5eqc5-232UmEE3EiniSh5mCrGBy7MqWUagQKE9o4=",
  },
];

const SlideImage = () => {
  const [currentIdex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIdex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIdex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIdex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIdex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIdex, images.length]);

  return (
    <section>
      <div className="flex items-center justify-center">
        <div className=" h-[800px] w-full mb-20 py-16 px-4 relative group ">
          <div
            style={{ backgroundImage: `url(${images[currentIdex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg shadow-black contrast-175"
          ></div>
          {/* left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white/50 cursor-pointer hover:text-white">
            <FontAwesomeIcon
              onClick={prevSlide}
              icon={faCircleArrowLeft}
              size="xl"
            />
          </div>
          {/* right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white/50 cursor-pointer hover:text-white">
            <FontAwesomeIcon
              onClick={nextSlide}
              icon={faCircleArrowRight}
              size="xl"
            />
          </div>
          <div className="mt-8 flex justify-center py-2 ">
            {images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                onClick={() => goToSlide(imageIndex)}
                className="text-[8px] text-slate-400  pl-1 cursor-pointer hover:text-gray-500 "
              >
                <FontAwesomeIcon icon={faCircle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideImage;
