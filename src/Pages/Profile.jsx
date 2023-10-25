import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Sky from "../assets/images/sky.jpg";
const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;
const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
import axios from "axios";
import useAPI from "../Hook/useAPI";

import { ToastContainer, toast } from "react-toastify";
import ProfileBanner from "../assets/images/Profilebanner.jpg";

const UserProfile = () => {
  const { user, updateUser } = useAPI();

  const [isEditing, setIsEditing] = useState(true);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState();
  const [ageUser, setAgeUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getFullYear() - 1970);
    // การใช้ Math.abs(ageDate.getUTCFullYear() - 1970) เป็นการคำนวณอายุจากวันเกิดในหนึ่งลำดับการทำงานต่อไปนี้:
    // ageDate.getUTCFullYear() คำนวณปีปัจจุบัน (ปีที่ผู้ใช้กรอกวันเกิด) ในรูปแบบ UTC (Universal Coordinated Time) โดยเริ่มนับจาก 1970 ปี (Unix Epoch) และส่งค่าอายุที่ได้กลับมาในรูปของจำนวนเต็มบวกหรือลบ ซึ่งบ่งบอกว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี.
    // Math.abs() ถูกใช้เพื่อแปลงค่าที่ได้ให้เป็นค่าบวกเสมอ โดยไม่คำนึงถึงว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี.
    // ข้อสรุปคือการใช้ Math.abs(ageDate.getUTCFullYear() - 1970) คือวิธีในการคำนวณอายุจากวันเกิดและทำให้ค่าอายุเป็นค่าบวกเสมอ ไม่คำนึงถึงว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี (Unix Epoch). การใช้ Math.abs ทำให้ค่าที่คำนวณได้มีความบวกเสมอหลังจากคำนวณจาก UTC และ 1970 ปี.
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imagePreview);
    formData.append("upload_preset", cloudinaryPreset);
    console.log(formData);
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
        const ageCalculate = calculateAge(birthday);
        const userDataupdate = {
          _id: userId,
          fname: fname || user.fname,
          lname: lname || user.lname,
          gender: gender || user.gender,
          birthday: birthday || user.birthday,
          img: image || user.img,
          age: ageCalculate || user.ageUser,
          email: email || user.email,
          phone: phoneNumber || user.phone,
        };

        const validationEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!validationEmail.test(userDataupdate.email)) {
          toast.error("Invalid email format", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          const response = await updateUser(idtoken, userDataupdate);
          window.location.reload();
          setIsEditing(isEditing);
        }
      } catch (err) {
        toast.error(err.response.data, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      console.log("Token not found!");
    }
  };

  return (
    <Layout>
      <div className="absolute w-full xl:w-[1440px] -z-5">
        <img src={Sky} alt="CoverImage" className="w-full h-fit opacity-70" />
      </div>
      <div className="w-full h-fit pt-10 my-10">
        {/* Image */}
        <div>
          <div className="flex items-center ml-10">
            <img
              className="border-slate-400 drop-shadow-xl bg-blue-400 h-[225px] w-[225px] rounded-full ml-10"
              src={user.img}
            />
            <p className="ml-5 text-slate-700 font-semibold text-4xl z-10">
              {user.fname} {user.lname}
            </p>
          </div>
        </div>

        <div className="m-auto max-w-[1200px] min-w-[300px]">
          <div className="flex flex-col justify-center items-center gap-3 p-7 mt-6 text-center bg-emerald-200 border-indigo-200 rounded-2xl drop-shadow-2xl ">
            <p className="text-4xl text-white font-semibold">My Profle</p>

            {isEditing ? (
              <div>
                <div className="w-[650px] h-[300px] flex justify-between items-start bg-white rounded-xl shadow-xl mx-auto my-5">
                  <div>
                    <img
                      src={ProfileBanner}
                      alt="ProfileBanner"
                      className="rounded-l-xl"
                    />
                  </div>

                  <div>
                    <div className="flex flex-col py-10 pr-[50px] gap-2 justify-center items-start ">
                      <p className="text-lg text-white">
                        <span className="text-lime-600 font-bold">Email:</span>{" "}
                        <span className="text-gray-800">{user.email}</span>
                      </p>
                      <p className="text-lg text-white">
                        <span className="text-lime-600 font-bold">Gender:</span>{" "}
                        <span className="text-gray-800">{user.gender}</span>
                      </p>
                      <p className="text-lg text-white">
                        <span className="text-lime-600 font-bold">
                          Phone number:
                        </span>{" "}
                        <span className="text-gray-800">{user.phone}</span>
                      </p>
                      <p className="text-lg text-white">
                        <span className="text-lime-600 font-bold">
                          Birthday:
                        </span>{" "}
                        <span className="text-gray-800 ">{user.birthday}</span>
                      </p>
                      <p className="text-lg text-white">
                        <span className="text-lime-600 font-bold">Age:</span>{" "}
                        <span className="text-gray-800">{user.age}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="w-20 p-1 font-bold drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit
                </button>
              </div>
            ) : (
              <form className="w-[600px] min-w-[300px]">
                <div className="my-3 bg-white rounded-lg p-6">
                  {/* Box1 */}
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start gap-1 p-5">
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
                        placeholder={user.fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                      <label
                        htmlFor="lname"
                        className="font-bold text-gray-800"
                      >
                        Last Name:
                      </label>
                      <input
                        id="lname"
                        placeholder={user.lname}
                        className="border border-gray-300 rounded p-2"
                        type="text"
                        onChange={(e) => setLname(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        className="font-bold text-gray-800"
                      >
                        Email Address:
                      </label>
                      <input
                        id="email"
                        placeholder={user.email}
                        type="email"
                        className="border border-gray-300 rounded p-2"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        htmlFor="birthday"
                        className="font-bold text-gray-800"
                      >
                        Birthday:
                      </label>
                      <input
                        id="birthday"
                        type="date"
                        className="border border-gray-300 rounded p-2 w-full"
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                      <label htmlFor="age " className="mr-3 font-semibold">
                        Age <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        onChange={(e) => setAgeUser}
                        placeholder={user.age}
                        className="border border-gray-300 rounded p-2 w-full"
                        value={ageUser}
                        disabled
                        required
                      />
                      <label className="font-bold text-gray-800">Gender:</label>
                      <select
                        className="border border-gray-300 rounded p-2 w-full"
                        name="gender"
                        id="gender"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                      >
                        <option value="">Gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="prefernottosay">
                          Prefer not to say
                        </option>
                      </select>
                      <label
                        htmlFor="phoneNumber"
                        className="font-bold text-gray-800"
                      >
                        Phone Number:
                      </label>
                      <input
                        id="phoneNumber"
                        placeholder={user.phone}
                        type="number"
                        className="border border-gray-300 rounded p-2"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">
                      <img
                        className="border-slate-400 bg-black drop-shadow-lg h-40 w-40 rounded-full"
                        src={image}
                      />
                      <div className="flex justify-center items-center w-[300px]">
                        <input
                          type="file"
                          onChange={(e) => setImagePreview(e.target.files[0])}
                        />
                        {/* <button
                          className="w-20 font-bold p-1 drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
                          onClick={uploadImage}
                        >
                          Upload
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div></div>
                  {/* Box2 */}
                  <div className="grid gap-6 grid-cols-2">
                    <div></div>

                    <div></div>
                  </div>

                  <div className="grid gap-6 grid-cols-2">
                    <div></div>
                    <div></div>
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
            )}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};

export default UserProfile;
