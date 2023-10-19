import React from 'react'
import { useState } from 'react';
import useAPI from '../Hook/useAPI';

import Layout from '../Layout/Layout';
import Trainerlist from '../Components/Trainerlist';




const TrainerDetails = () => {

    const { trainers } = useAPI();

        const [filterActivity, setFilterActivity] = useState('')
        const [sortName, setSortName] = useState('')
     

  return (

    <Layout>


        <div className='trainers-container text-center flex-col pb-40 justify-center'>

            <h1 className='text-7xl my-5 pt-10'>Trainer</h1>

            <div className='activity-list flex flex-wrap gap-3 justify-center py-5 min-w-full'>
    
                <button className='activity-tennis p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('tennis')}>Tennis</button>

                <button className='activity-badminton p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('badminton')}>Badminton</button>

                <button className='activity-tabletennis p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('table_tennis')}>Table Tennis</button>

                <button className='activity-yoga p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('yoga')}>Yoga</button>

                <button className='activity-aerobicdance p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('aerobic_dance')}>Aerobic Dance</button>
            
                <button className='activity-all p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('')}>All</button>
                
            </div>

            <div className='active-btn flex justify-end mr-10'>
                <select 
                    className='w-15 border-solid border-2 border-sky-500'
                    value={sortName}
                    onChange={(e) => setSortName(e.target.value)}>
                        <option value=""> </option>
                        <option value="nameAZ">A-Z</option>
                        <option value="nameZA">Z-A</option>
                </select>
            </div>
            
            <Trainerlist trainers={trainers} filterActivity={filterActivity} sortName={sortName}/>

            {/* <div className='trainer-card max-w-xs h-[32rem] overflow-hidden shadow-lg'>
                <h2 className='font-bold text-xl mb-2 text-center'>name</h2>
                <img className='w-full h-[24rem]' src="https://www.perfectpedigreethailand.com/uploads/5/2/5/4/52548193/samoyed-p_1_orig.jpg" alt="samoyed"/>
                <div className='px-6 pt-4 flex justify-between'>
                    <h2 className='font-bold text-l'>activity</h2>
                    <button>see more</button>
                </div>
                <div className='px-6'>
                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi pariatur officia vero tenetur quas sequi nisi aut nulla asperiores. Beatae nesciunt hic dolorem quae sint quas dolores libero, voluptatibus aperiam?</p>
                </div>
            </div> */}

        </div>
    </Layout>
  )
}

export default TrainerDetails