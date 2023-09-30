import React, { useState } from 'react';


function Profile(){

    const [userList,setusers] = useState([
        {
            id: 1,
            name:"jonh son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 1',
        },
        {
            id: 2,
            name:"Mare son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 5',
        },
        {
            id: 3,
            name:"janny son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 2',
        },
        {
            id: 4,
            name:"janny son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 2',
        },
    ])

    const handleEdit=(id)=>{
        console.log(`Edit:${id}`);

        const newdata = userList.map((user)=>{
            if(user.id == id){
                return {...user,name:"pp",description:"rama2",time:"99:99 AM"}
            }
            return user;
        });

        console.log(newdata);

        setusers(newdata);
    }

    const handleDelete=(id)=>{
        console.log(id);
        var filtered = userList.filter(function(user) { return user.id != id }); 
                                                                                
        setusers(filtered);
    }

    return(
        <div>
            <div className='flex flex-col'>
                <img className="flex flex-col h-40 w-40 rounded-full" src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618" alt="" />
                <h1>PROFILE</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem libero asperiores. Hic optio eius porro exercitationem sunt rem excepturi possimus quia? Quae omnis corrupti deleniti accusantium dicta, molestias error.</p>
            </div>

            <div>
                {userList.map((user)=>(
                    <div className='m-5 w-1/2 border-4 border-indigo-500/100 rounded-lg'>
                        <div className='m-3'>
                            <h1>Name: {user.name}</h1>
                            <h1>Description: {user.description}</h1>
                            <h1>Date: {user.date}</h1>
                            <h1>Time: {user.time}</h1>
                            <h1>Location: {user.location}</h1>
                        </div>

                        <div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>handleEdit(user.id)}>Edit</button>
                            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>handleDelete(user.id)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default Profile





