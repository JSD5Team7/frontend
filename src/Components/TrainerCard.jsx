import React from 'react';
import { useState } from 'react';

import { UilAngleDown } from '@iconscout/react-unicons'


const TrainerCard = ({ key, name, activity, information }) => {
  const [isOverflowVisible, setOverflowVisible] = useState(false);
  const [rotate , setRotate] = useState(false);

  const toggleOverflow = () => {
    setOverflowVisible(!isOverflowVisible);
    setRotate(!rotate)
  };

  const overflowStyle = isOverflowVisible ? 'overflow-none min-h-fit' : 'overflow-hidden h-[29rem]';
  const rotateStyle = rotate ? 'rotate-0' : 'rotate-180';

  return (
    <div key={key} className={`trainer-card w-80 ${overflowStyle} shadow-lg`}>
      <h2 className='font-bold text-xl mb-2 text-center'>{name}</h2>
      <img className='w-full h-96' src="https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/samoyed-p_1_orig.jpg" alt="samoyed"/>
      <div className='px-6 pt-2 flex justify-between items-center'>
        <h2 className='font-bold text-l capitalize space-x-1'>
          {activity.replace(/_/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())}
        </h2>
        <button onClick={toggleOverflow}><UilAngleDown size= '2rem' className={`${rotateStyle}`} /></button>
      </div>
      <div className='px-6'>
        <p className='text-start'>{information}</p>
      </div>
    </div>
  );
};

export default TrainerCard;