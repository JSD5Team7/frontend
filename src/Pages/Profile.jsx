import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Sky from "../assets/images/sky.jpg";



const UserProfile = () => {
<<<<<<< HEAD
  const [isEditing, setIsEditing] = useState(true);
=======
  const { user , updateUser ,usersData } = useAPI();
  const [isEditing, setIsEditing] = useState(false);
>>>>>>> 0e84ca7 (add icon)
  const [profileData, setProfileData] = useState({
    firstName: "Tom ",
    lastName: "Cruise",
    email: "cruise@example.com",
    address: "123 Syracuse, New York, USA",
    gender: "Male",
    weight: "70",
    height: "175",
    Birtdate: "30/01/1998"
  });
<<<<<<< HEAD
  
  console.log(isEditing);
  console.log(profileData);

  return (
    <Layout>
      <div className="">
        {/* Image */}
        <div className="">
          <div>
            <img src={Sky} alt="CoverImage" className="w-full h-60 p-3" />
          </div>

          <div className="flex items-center   ">
            <img
              className="border-slate-400 drop-shadow-lg h-40 w-40 rounded-full ml-10  "
              src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618"
              alt="ProfileImage"
=======

const [fname , setFname] = useState(user.fname)
const [lname , setLname] = useState(user.lname)
  
  // console.log(user)

  const handleEditClick = () => {

    // setIsEditing(!isEditing);
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
        <form onClick={handleEditClick}>
          <div className="mb-4">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // value={user.fname}
              onChange={(e) => setFname(e.target.value)}
              disabled={!isEditing}
              className="input-field rounded-md"
>>>>>>> 0e84ca7 (add icon)
            />
            <p className="ml-5 text-slate-700 font-semibold text-4xl ">
              {" "}
              {profileData.firstName}
              {profileData.lastName}
            </p>
          </div>
        </div>

<<<<<<< HEAD
       
        <div className="p-5 w-full mt-6 mx-auto text-center bg-slate-700 border-indigo-200 rounded-md drop-shadow">
            <p className="text-2xl text-white font-semibold" >My Profle</p>
          <p className="text-left text-xl font-semibold text-white ">Email :  <span className="text-lg text-white font-medium">{profileData.email}</span></p>
          <p className="text-left text-xl font-semibold text-white ">Adress :  <span className="text-lg text-white font-medium">{profileData.address}</span></p>
          <p className="text-left text-xl font-semibold text-white">Gender :  <span className="text-lg text-white font-medium">{profileData.gender}</span></p>
          <p className="text-left text-xl font-semibold text-white">Weight (kg) :  <span className="text-lg text-white font-medium">{profileData.weight}</span></p>
          <p className="text-left text-xl font-semibold text-white">Height (cm) :  <span className="text-lg text-white font-medium">{profileData.height}</span></p>
          <button className="font-bold text-slate-800 border-solid border-2 border-lime-200 rounded-full p-1  drop-shadow-md w-20 bg-lime-300 hover:bg-lime-400" 
                  onClick={() => setIsEditing(!isEditing)}>Edit </button>
=======
          <div className="mb-4">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              // value={user.lname}
              onChange={(e) => setLname(e.target.value)}
              disabled={!isEditing}
              className="input-field rounded-md"
            />
          </div>
>>>>>>> 0e84ca7 (add icon)

{!isEditing ? (
          <form action="" className=" w-full my-3 flex justify-around ">

            <div className="space-y-3 my-3 ">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div >
                    <label htmlFor="" className="font-bold flex rounded-lg leading-10 text-white">
                      FirstName : 
                    </label>
                      <input
                        className="border-3 rounded-lg border-slate-500 bg-slate-200 "
                        type="text"
                        placeholder="Tom"
                        onChange={(e) =>

                          setProfileData({ ...profileData, firstName: e.target.value })
                        }
                      />
                      </div>

                      <div>
                        <label htmlFor="" className="font-bold flex rounded-lg leading-10 text-white">
                          LastName :
                        </label>
                          <input
                          placeholder="Cruise"
                          className="border-3 rounded-lg border-slate-500 bg-slate-200 "
                            type="text"
                            onChange={(e) =>
                              setProfileData({ ...profileData, lastName: e.target.value })
                            }
                          />
                      </div>
                  </div>
                
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="" className="font-bold flex rounded-lg leading-10 text-white">
                        Email Adress:
                      </label>
                      <input 
                        placeholder="Tom@example.com"
                        id="helper-text"
                        type="email"
                        onChange={(e) =>
                          setProfileData({ ...profileData, email: e.target.value })
                        }
                      />
                  </div>
                  <div>
                  <label htmlFor="" className="font-semibold flex rounded-lg leading-10 text-white">
                    Address :
                  </label>
                  <input
                  placeholder="123 Syracuse, New York, USA"
                  
                    type="text"
                    onChange={(e) =>
                      setProfileData({ ...profileData, address: e.target.value })
                    }
                  />
                  </div>
                  </div>

                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label className="text-white font-semibold leading-10">
                        Gender :
                        <select className="bg-slate-800"
                        name="selectedGender">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          onChange={(e) =>
                          setProfileData({ ...profileData, gender: e.target.value })
                        }
                        </select>
                      </label>
                      {/* <input
                        type="text"
                        onChange={(e) =>
                          setProfileData({ ...profileData, gender: e.target.value })
                        }
                      /> */}
                    </div>
                    <div>
                    <label htmlFor="" className="font-semibold flex rounded-lg leading-10 text-white">
                      Birthdate :
                    </label>
                    <input
                      type="number"
                      onChange={(e) =>
                        setProfileData({ ...profileData, Birthdate: e.target.value })
                      }
                    />
                  </div>
                  
                  </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2" >
                  <div>
                    <label htmlFor="" className="font-semibold flex rounded-lg leading-10 text-white">
                      Height :
                    </label>
                    <input
                      type="number"
                      onChange={(e) =>
                        setProfileData({ ...profileData, height: e.target.value })
                      }
                    />
                  </div>
                  <div>
                  <label htmlFor="" className="font-semibold flex rounded-lg leading-10 text-white">
                    Weight :
                  </label>
                  <input
                    type="number"
                    onChange={(e) =>
                      setProfileData({ ...profileData, weight: e.target.value })
                    }
                  />
                  </div>
                  </div>

<<<<<<< HEAD
                  <br></br>
                  <button className="font-bold text-slate-800 border-solid border-2 border-lime-200 rounded-full p-1  drop-shadow-md w-20 bg-lime-300 hover:bg-lime-400">Update</button>
            </div>
          </form>
        ) : null}
        </div>

        
=======
          <button
            type="button"
            className={editButtonClass}
          >
            Edit
          </button>
          <button 
          type="submit" className={saveButtonClass}>
            Save
          </button>
        </form>
>>>>>>> 0e84ca7 (add icon)
      </div>
    </Layout>
  );
};

export default UserProfile;
