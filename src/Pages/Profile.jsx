import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Sky from "../assets/images/sky.jpg";
const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;
const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
import axios from "axios";
import useAPI from "../Hook/useAPI";

  const UserProfile = () => {
    const { user, updateUser } = useAPI();
  
    const [isEditing, setIsEditing] = useState(true);
  
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("1995-10-14");
    const [image, setImage] = useState('http://res.cloudinary.com/dkjfuys7y/image/upload/v1698169857/GrootClub/gudcicufoqowoi9j9edv.png');
    const [imagePreview, setImagePreview] = useState();
    const [ageUser, setAgeUser] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("file", imagePreview);
      formData.append("upload_preset", cloudinaryPreset);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
        formData
      );
      setImage(response.data.url);
    };
  
    useEffect(() => {
      uploadImage();
    }, [imagePreview]);

  const handleSave = async (e) => {
    const userId = window.localStorage.userId;
    const idtoken = window.localStorage.token;
    e.preventDefault();
    if (userId && idtoken) {
      try {
        const userDataupdate = {
          _id: userId,
          fname: fname || user.fname,
          lname: lname || user.lname,
          gender: gender || user.gender,
          birthday: birthday || user.birthday,
          img: image || user.img,
          age: ageUser || user.ageUser,
          email: email || user.email,
          phone: phoneNumber || user.phoneNumber,
        };
        const response = await updateUser(idtoken, userDataupdate);

        window.location.reload();
      } catch (err) {
        console.log(response.data);
        console.log(err);
      }
    } else {
      console.log("Token not found!");
    }
  };

  return (
    <Layout>
      
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
            />
            <p className="ml-5 text-slate-700 font-semibold text-4xl ">
              {" "}
              {user.fname}
              {user.lname}
            </p>
          </div>
        </div>

        <div className="p-5 pl-20  pr-20 ">
          <div className="p-7  mt-6 text-center bg-slate-800 border-indigo-200 rounded-md drop-shadow-2xl ">
            <p className="text-4xl text-white font-semibold">My Profle</p>
              <div className="w-72 bg-white rounded-lg shadow-lg p-4 mx-auto mt-8">
              <p className="text-lg text-white">
                <span className="text-lime-600 font-bold">Email:</span>{" "}
                <span className="text-gray-800">{user.email}</span>
              </p>
              <p className="text-lg text-white">
                <span className="text-lime-600 font-bold">Birthday:</span>{" "}
                <span className="text-gray-800 ">{user.birthday}</span>
              </p>
              <p className="text-lg text-white">
                <span className="text-lime-600 font-bold">Gender:</span>{" "}
                <span className="text-gray-800">{user.gender}</span>
              </p>
              <p className="text-lg text-white">
                <span className="text-lime-600 font-bold">Age:</span>{" "}
                <span className="text-gray-800">{user.age}</span>
              </p>
              <p className="text-lg text-white">
                <span className="text-lime-600 font-bold">
                  Phone number:
                </span>{" "}
                <span className="text-gray-800">{user.phone}</span>
              </p>
              <button
                className="mt-4 py-2 px-4 font-bold text-white bg-lime-500 hover:bg-lime-600 rounded-full shadow-md"
                onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </button>
            </div>

            {!isEditing ? (
              <form action="" className="w-full my-3 flex justify-around">
                <div className="my-3 bg-white rounded-lg p-6">
                  {/* Box1 */}
                  <div className="grid gap-6 grid-cols-2">
                  <div>
                      <img
                        className="border-slate-400 drop-shadow-lg h-40 w-40 rounded-full ml-10"
                        src={image}
                        alt="ProfileImage"
                      />
                      <input
                        type="file"
                        onChange={(e) => setImagePreview(e.target.files[0])}
                      />
                      <button
                        className="w-20 font-bold p-1 drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
                        onClick={uploadImage}
                      >
                        Upload
                      </button>
                    </div>
                    <div>
                      <label
                        htmlFor="fname"
                        className="font-bold text-gray-800"
                      >
                        First Name:
                      </label>
                      <input
                        id="fname"
                        className="border border-gray-300 rounded p-2"
                        type="text"
                        placeholder="Tom"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lname"
                        className="font-bold text-gray-800"
                      >
                        Last Name:
                      </label>
                      <input
                        id="lname"
                        placeholder="Cruise"
                        className="border border-gray-300 rounded p-2"
                        type="text"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Box2 */}
                  <div className="grid gap-6 grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="font-bold text-gray-800"
                      >
                        Email Address:
                      </label>
                      <input
                        id="email"
                        placeholder="Tom@example.com"
                        type="email"
                        className="border border-gray-300 rounded p-2"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="birthday"
                        className="font-bold text-gray-800"
                      >
                        Birthday:
                      </label>
                      <input
                        id="birthday"
                        type="date"
                        className="border border-gray-300 rounded p-2"
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 grid-cols-2">
                    <div>
                      <label className="font-bold text-gray-800">Gender:</label>
                      <select
                        className="border border-gray-300 rounded p-2"
                        name="gender"
                        id="gender"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        required
                      >
                        <option value="">Gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="prefernottosay">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="font-bold text-gray-800"
                      >
                        Phone Number:
                      </label>
                      <input
                        id="phoneNumber"
                        type="number"
                        className="border border-gray-300 rounded p-2"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    onClick={handleSave}
                    className="font-bold text-slate-700 bg-lime-300 border border-lime-400 rounded-full p-2 w-20 hover:bg-lime-400"
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      
    </Layout>
  );
};

export default UserProfile;
