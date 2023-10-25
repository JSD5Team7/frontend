import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Sky from "../assets/images/sky.jpg";
import useAPI from "../Hook/useAPI";


const UserProfile = () => {
  const { user, updateUser } = useAPI();
  console.log(user);
  const [isEditing, setIsEditing] = useState(true);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("1995-10-14");
  const [ageUser, setAgeUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = async (e) => {
    const userId = window.localStorage.userId;
    const idtoken = window.localStorage.token;
    e.preventDefault();
    if (userId && idtoken) {
      try {
        const userDataupdate = {
          _id: userId,
          fname: fname  || user.fname,
          lname: lname || user.lname,
          gender: gender || user.gender,
          birthday: birthday || user.birthday,
          age: ageUser || user.ageUser,
          email: email || user.email,
          phone: phoneNumber || user.phoneNumber,
        };
        const response = await updateUser(idtoken, userDataupdate);
        
        window.location.reload();
      } catch (err) {
        console.log(response.data)
        console.log(err);
      }
    } else {
      console.log("Token not found!");
    }
  };

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
            />
            <p className="ml-5 text-slate-700 font-semibold text-4xl ">
              {" "}
              {user.fname}
              {user.lname}
            </p>
          </div>
        </div>

        <div className="p-5 w-full mt-6 mx-auto text-center bg-slate-800 border-indigo-200 rounded-md drop-shadow">
          <div className="bg-blue-100 bg-opacity-20">
          <p className="text-2xl text-white font-semibold">My Profle</p>
          <p className="text-left text-xl font-semibold text-white ">
            Email :{" "}
            <span className="text-lg text-white font-medium">{user.email}</span>
          </p>
          <p className="text-left text-xl font-semibold text-white ">
            Birthday :{" "}
            <span className="text-lg text-white font-medium">
              {user.birthday}
            </span>
          </p>
          <p className="text-left text-xl font-semibold text-white">
            Gender :{" "}
            <span className="text-lg text-white font-medium">
              {user.gender}
            </span>
          </p>
          <p className="text-left text-xl font-semibold text-white">
            Age :{" "}
            <span className="text-lg text-white font-medium">{user.age}</span>
          </p>
          <p className="text-left text-xl font-semibold text-white">
            Phonenumber :{" "}
            <span className="text-lg text-white font-medium">{user.phone}</span>
          </p>
          <button
            className="font-bold text-slate-800 border-solid border-2 border-lime-200 rounded-full p-1  drop-shadow-md w-20 bg-lime-300 hover:bg-lime-400"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit{" "}
          </button>

          {!isEditing ? (
            <form action="" className=" w-full my-3 flex justify-around ">
              <div className="space-y-3 my-3 ">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor=""
                      className="font-bold flex rounded-lg leading-10 text-white"
                    >
                      FirstName :
                    </label>
                    <input
                      className="border-3 rounded-lg border-slate-500 bg-slate-200 "
                      type="text"
                      placeholder="Tom"
                      onChange={(e) => setFname(e.target.value)}
                      
                    />
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="font-bold flex rounded-lg leading-10 text-white"
                    >
                      LastName :
                    </label>
                    <input
                      placeholder="Cruise"
                      className="border-3 rounded-lg border-slate-500 bg-slate-200 "
                      type="text"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor=""
                      className="font-bold flex rounded-lg leading-10 text-white"
                    >
                      Email Adress:
                    </label>
                    <input
                      placeholder="Tom@example.com"
                      id="helper-text"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="font-semibold flex rounded-lg leading-10 text-white"
                    >
                      Birthday :
                    </label>
                    <input
                      placeholder="123 Syracuse, New York, USA"
                      type="date"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="text-white font-semibold leading-10">
                      Gender :
                      <select
                        className="p-1"
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
                    </label>
                   
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="font-semibold flex rounded-lg leading-10 text-white"
                    >
                      Age :
                    </label>
                    <input
                      type="number"
                      onChange={(e) => setAgeUser(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor=""
                      className="font-semibold flex rounded-lg leading-10 text-white"
                    >
                      PhoneNumber :
                    </label>
                    <input
                      type="number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
              
                </div>

                <br></br>
                <button
                  onClick={handleSave}
                  className="font-bold text-slate-800 border-solid border-2 border-lime-200 rounded-full p-1  drop-shadow-md w-20 bg-lime-300 hover:bg-lime-400"
                >
                  Update
                </button>
              </div>
            </form>
          ) : null}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
