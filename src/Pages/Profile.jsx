import React, { useState } from 'react';
import Layout from '../Layout/Layout';


const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Tom',
    lastName: 'cruise',
    email: 'cruise@example.com',
    address: '123 Syracuse, New York, USA',
    gender: 'Male',
    weight: '70',
    height: '175',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const saveButtonClass = isEditing
  
    ? 'block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
    : 'hidden';

  const editButtonClass = isEditing
    ? 'hidden'
    : 'block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded';

  return (
    <Layout>
      <div className="flex-col justify-center gap-10">
        <img
          className="drop-shadow-lg h-40 w-40 rounded-full m-auto"
          src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-center m-auto font-bold text-2xl">MY PROFILE</h1>
        <p className='text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem libero asperiores.
        </p>
      </div>
      <div className="p-4 w-2/3 mx-auto">
        <form>
          <div className="mb-4">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-field rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-field rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-field rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Edit your address here"
              className="input-field rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-field rounded-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={profileData.weight}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-field rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              value={profileData.height}
              onChange={handleInputChange}
              disabled={!isEditing}
              className=" rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={handleEditClick}
            className={editButtonClass}
          >
            Edit
          </button>
          <button type="submit" className={saveButtonClass}>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserProfile;
