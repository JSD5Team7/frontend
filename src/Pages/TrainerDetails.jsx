import React, { useState, useEffect } from "react";
import useAPI from '../Hook/useAPI';

import Layout from '../Layout/Layout';
import Trainerlist from '../Components/Trainerlist';

import LoadingGif from "../assets/gif/Ripple-2.6s-204px.gif";

const TrainerDetails = () => {
    const { trainers } = useAPI();

    const [filterActivity, setFilterActivity] = useState('')
    const [sortName, setSortName] = useState('')
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(loadingTimeout);
    }, []);

  return (

    <Layout>


        <div className='trainers-container text-center flex-col pb-40 justify-center'>

            <h1 className='text-7xl my-5 pt-10'>Trainer</h1>

            <div className='activity-list flex flex-wrap gap-3 justify-center py-5 min-w-full'>
    
                <button className='activity-tennis p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('tennis')}>Tennis</button>

                <button className='activity-badminton p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('badminton')}>Badminton</button>

                <button className='activity-tabletennis p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('table_tennis')}>Table Tennis</button>

                <button className='activity-yoga p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('yoga')}>Yoga</button>

                <button className='activity-aerobicdance p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('aerobic_dance')}>Aerobic Dance</button>
            
                <button className='activity-all p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900' onClick={() => setFilterActivity('')}>All</button>
                
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

            {loading ? ( // Display the loading spinner when loading is true
                <img
                src={LoadingGif}
                alt="Loading"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            ) : (
                <Trainerlist trainers={trainers} filterActivity={filterActivity} sortName={sortName}/>
            )}
            

        </div>
    </Layout>
  )
}

export default TrainerDetails