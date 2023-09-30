import React from 'react'
import TrainerCard from './TrainerCard';

const Trainerlist = ({ trainers, filterActivity, sortName }) => {
  return (
    <div className='trainers-list flex flex-wrap m-auto mt-3 gap-2 w-5/6 justify-normal '>

                {trainers
                    .filter((trainers) => filterActivity === '' || trainers.activity === filterActivity)
                    .sort((a, b) => {
                        if (sortName === 'nameAZ') {
                        return a.name.localeCompare(b.name);
                        }
                        if (sortName === 'nameZA') {
                        return b.name.localeCompare(a.name);
                        }
                        return 0;
                    })
                    .slice(0, 10)
                    .map((trainer) => (
                        <TrainerCard 
                            key={trainer.id} 
                            name={trainer.name}
                            activity={trainer.activity}
                            information={trainer.information}
                        />
                ))}

        </div>
  )
}

export default Trainerlist