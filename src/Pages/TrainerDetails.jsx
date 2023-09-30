import React from 'react'
import { useState } from 'react';
import Layout from '../Layout/Layout';
import Trainerlist from '../Components/Trainerlist';
import Slider from '../Layout/Slider';
import useAPI from '../Hook/useAPI';


const TrainerDetails = () => {

    const { trainers } = useAPI();

        const [filterActivity, setFilterActivity] = useState('')
        const [sortName, setSortName] = useState('')
        // const [showInfo, setShowInfo] = useState({});

        // const toggleInfo = (id) => {
        //     console.log(id)
        //     setShowInfo((prevInfo) => ({
        //       ...prevInfo,
        //       [id]: !prevInfo[id], // เปลี่ยนสถานะการแสดงข้อมูลของ ID นี้
        //     }));
        //   };
     

  return (

    <Layout>


        <div className='trainers-container text-center my-12 flex-col justify-center'>

            <h1 className='text-7xl my-5 pt-10'>Trainer</h1>

            <div className='activity-list flex flex-wrap gap-3 justify-center py-5 min-w-full'>
    
                <button className='activity-tennis p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('Tennis')}>Tennis</button>

                <button className='activity-badminton p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('Badminton')}>Badminton</button>

                <button className='activity-tabletennis p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('Table Tennis')}>Table Tennis</button>

                <button className='activity-yoga p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('Yoga')}>Yoga</button>

                <button className='activity-aerobicdance p-3 bg-emerald-400 rounded-xl w-40' onClick={() => setFilterActivity('Aerobic Dance')}>Aerobic Dance</button>
            
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

        </div>
    </Layout>
  )
}

export default TrainerDetails