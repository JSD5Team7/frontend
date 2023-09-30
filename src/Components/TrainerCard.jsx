import React from 'react';

const TrainerCard = ({ key, name, activity, information }) => {
  return (
    <div key={key} className='trainer-card max-w-xs max-h-[32rem] overflow-hidden shadow-lg'>
      <h2 className='font-bold text-xl mb-2 text-center'>{name}</h2>
      <img className='w-full' src="https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/samoyed-p_1_orig.jpg" alt="samoyed"/>
      <div className='px-6 pt-4 flex justify-between'>
        <h2 className='font-bold text-l'>{activity}</h2>
        <button>see more</button>
      </div>
      <div className='px-6'>
        <p className='text-start'>{information}</p>
      </div>
    </div>
  );
};

export default TrainerCard;