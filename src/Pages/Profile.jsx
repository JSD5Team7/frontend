import React, { useState } from 'react';
import Layout from '../Layout/Layout';

function Profile() {
  const [userList, setUsers] = useState([
    {
      id: 1,
      name: "John Son",
      description: 'Play tennis with Friends',
      date: '1/01/2023',
      time: '10:00 AM',
      location: 'Courts 1',
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit:${id}`);

    const updatedData = userList.map((user) => {
      if (user.id === id) {
        return { ...user, name: "Alia", description: "Clay", time: "99:99 AM" };
      }
      return user;
    });

    console.log(updatedData);

    setUsers(updatedData);
  };

  const handleDelete = (id) => {
    console.log(id);
    const filtered = userList.filter((user) => user.id !== id);

    setUsers(filtered);
  };

  return (
    <Layout>
      <div>
        <div className='flex justify-between gap-10'>
          <img className="drop-shadow-lg flex flex-col h-40 w-40 rounded-full" src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618" alt="" />
          <div>
            <h1 className='font-bold text-xl'>MY PROFILE</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem libero asperiores. Hic optio eius porro exercitationem sunt rem excepturi possimus quia? Quae omnis corrupti deleniti accusantium dicta, molestias error.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {userList.map((user) => (
            <div
              key={user.id}
              className="drop-shadow-lg m-5 w-1/2 border-2 border-indigo-500/100 rounded-lg">
              <div className="m-5">
                    <div className ="flex justify-start">
                       <div className='font-bold gap-3'><p1>Name: </p1></div> 
                        <span> {user.name} </span> 
                    </div>
                    <div className ="flex justify-start">
                        <div className='font-bold gap-3'><p1>Description: </p1></div> 
                        <span>{user.description}</span>
                    </div>
                    <div className ="flex justify-start">
                        <div className='font-bold gap-3'><p1>Date: </p1></div> 
                        <span>{user.date}</span>
                    </div>
                    <div className ="flex justify-start">
                        <div className='font-bold gap-3'><p1 >Time: </p1></div>
                        <span>{user.time}</span>
                    </div>
                    <div className ="flex justify-start">
                        <div className='font-bold gap-3'><p1 >Location: </p1></div>
                        <span>{user.location}</span>
                    </div>
                    </div>

              <div className="flex justify-center gap-5 p-3">
                <button
                  className="drop-shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="drop-shadow-lg bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
