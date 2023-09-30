import React from 'react';

const TrainerCard = ({ key, name, activity, information }) => {
  return (
    <div key={key} className='trainer-card border-solid border-2 border-sky-500 rounded-2xl w-60 cursor-pointer '>
      <h2 className='my-3'>{name}</h2>
      <img className='w-fit m-auto' src="https://v9s7w7m6.rocketcdn.me/wp-content/uploads/2020/07/5f1394569536d5.97818895.jpg" alt="samoyed" style={{ height: '100px' }} />
      <div className='px-6 mt-3 flex'>
        <h2 className='text-start'>Information</h2>
        {/* <button  onClick={() => toggleInfo(trainer.id)}>
            {showInfo[trainer.id] ? 'Hide' : 'Show'}
        </button> */}
      </div>
      <div className='px-6 mb-3'>
        <h3 className='text-start'>Activity: {activity}</h3>
        <p className='text-start'>{information}</p>
      </div>
    </div>
  );
};

export default TrainerCard;