import React, { useState } from 'react';
import App from '../App';


const userprofile = [
  {
    id: 1,
    name: "John",
    lastnames: "Doe",
    img: "",
  },
  {
    id: 2,
    name: "Julia",
    lastnames: "loe",
    img: "",
  }
]

const Profile = () => {
  const [showProfile, setShowProfile] = useState(); 

  const profile = () => {
    setShowProfile(
      <div>
        {userprofile.map(user => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Last Name: {user.lastnames}</p>
          </div>
        ))}
      </div>
    );
  }

  
  profile();

  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <h2 className='text-neutral-50'>My Profile</h2>
        </div>
        <div className="profile-content">
          {showProfile}
        </div>
      </div>
    </>
  );
}

export default Profile;


