import React from 'react'
import TrainerCard from './TrainerCard';

const Trainerlist = ({ trainers, filterActivity, sortName }) => {
  return (
    <div className='trainers-list flex flex-wrap gap-3 justify-center'>

                {trainers
                    .filter((trainers) => filterActivity === '' || trainers.type === filterActivity)
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
                            key={trainer._id} 
                            name={trainer.name}
                            activity={trainer.type}
                            information={trainer.des}
                        />
                ))}

        </div>
  )
}

export default Trainerlist