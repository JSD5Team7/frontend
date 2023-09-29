import React from 'react'
import { useState } from 'react';
import Layout from '../Layout/Layout';


const TrainerDetails = () => {

    const trainers = [
        {
            id: 1,
            name: "John",
            activity: "Tennis",
            information: "Professional tennis player with multiple championships.",
            img: "https://example.com/john.jpg"
        },
        {
            id: 2,
            name: "Alice",
            activity: "Badminton",
            information: "Enjoys playing badminton in the local club.",
            img: "https://example.com/alice.jpg"
        },
        {
            id: 3,
            name: "Bob",
            activity: "Table Tennis",
            information: "Loves table tennis and participates in table tennis competitions.",
            img: "https://example.com/bob.jpg"
        },
        {
            id: 4,
            name: "Eva",
            activity: "Yoga",
            information: "Dedicated yogi with a daily practice.",
            img: "https://example.com/eva.jpg"
        },
        {
            id: 5,
            name: "Grace",
            activity: "Aerobic Dance",
            information: "Teaches aerobic dance classes at the gym.",
            img: "https://example.com/grace.jpg"
        },
        {
            id: 6,
            name: "Michael",
            activity: "Tennis",
            information: "Competitive tennis player in regional tournaments.",
            img: "https://example.com/michael.jpg"
        },
        {
            id: 7,
            name: "Sophia",
            activity: "Table Tennis",
            information: "Table tennis enthusiast and lifeguard.",
            img: "https://example.com/sophia.jpg"
        },
        {
            id: 8,
            name: "David",
            activity: "Badminton",
            information: "Badminton player who enjoys friendly matches.",
            img: "https://example.com/david.jpg"
        },
        {
            id: 9,
            name: "Olivia",
            activity: "Yoga",
            information: "Certified yoga instructor and mindfulness advocate.",
            img: "https://example.com/olivia.jpg"
        },
        {
            id: 10,
            name: "William",
            activity: "Tennis",
            information: "Tennis coach and former professional player.",
            img: "https://example.com/william.jpg"
        }
      ];

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
                        <div key={trainer.id} className='trainer-card border-solid border-2 border-sky-500 rounded-2xl w-60 cursor-pointer '>

                            <h2 className='my-3'>{trainer.name}</h2>

                            <img className='w-fit m-auto' src="https://v9s7w7m6.rocketcdn.me/wp-content/uploads/2020/07/5f1394569536d5.97818895.jpg" alt="samoyed" style={{height: '100px'}}/>

                            <div className='px-6 mt-3 flex'>
                                <h2 className='text-start'>Information</h2>
                                {/* <button  onClick={() => toggleInfo(trainer.id)}>
                                    {showInfo[trainer.id] ? 'Hide' : 'Show'}
                                </button> */}
                            </div>
                            

                            {/* <div className={`px-4 my-3 object-cover ${showInfo[trainer.id] ? 'block' : 'hidden'}`}> */}
                            <div className='px-6 mb-3'>
                                <h3 className='text-start'>Activity: {trainer.activity}</h3>
                                <p className='text-start'>{trainer.information}</p>
                            </div>
                            
                        </div>
                ))}

            </div>

        </div>
    </Layout>
  )
}

export default TrainerDetails