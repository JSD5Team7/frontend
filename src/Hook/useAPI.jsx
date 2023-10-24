import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;

const useAPI = () => {
  const [user, setUser] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [trainers, setTrainers] = useState([]);

  //--------------------------------------------------------ข้อมูล Coach--------------------------------------------------------//
  useEffect(() => {
    const getDataTrainer = async () => {
      const response = await axios.get(`${baseURL}/coachList/all`);
      setTrainers(response.data);
    };
    getDataTrainer();
  }, []);

  //--------------------------------------------------------ข้อมูล User ที่ล็อคอินเข้ามา--------------------------------------------------------//
  useEffect(() => {
    const getUser = async (authtoken, value) => {
      const userId = value;
      if (userId) {
        const response = await axios.get(`${baseURL}/users/${userId}`, {
          headers: {
            authtoken,
          },
        });
        if (response.status === 200) {
          setUser(response.data);
        }
      }
    };
    const localUserId = window.localStorage.userId;
    const idtoken = window.localStorage.token;
    getUser(idtoken, localUserId);
  }, []);

  //--------------------------------------------------------ข้อมูล User ทั้งหมด--------------------------------------------------------//
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`${baseURL}/users/`);
      if (response.status === 200) {
        setUsersData(response.data);
      }
    };
    getUsers();
  }, []);

  //--------------------------------------------------------Register--------------------------------------------------------//
  const register = async (value) => {
    return await axios.post(`${baseURL}/users/register`, value);
  };

  //--------------------------------------------------------Login--------------------------------------------------------//
  const login = async (value) => {
    return await axios.post(`${baseURL}/users/login`, value);
  };

  //--------------------------------------------------------     --------------------------------------------------------//
  const currentUser = async (authtoken) => {
    await axios.post(
      `${baseURL}/users/current-user`,
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };

  //--------------------------------------------------------Update user--------------------------------------------------------//
  const updateUser = async (authtoken, value) => {
    const userId = value._id;
    return await axios.put(`${baseURL}/users/updateuser/${userId}`, value, {
      headers: {
        authtoken,
      },
    });
  };

  //   const handleSave = async(e) => {
  //     const userId = window.localStorage.userId;
  //     const idtoken = window.localStorage.token
  //     e.preventDefault();
  //     if (userId && idtoken) {
  //       try {
  //           const userDataupdate = {
  //             _id: userId,
  //             fname: 'ใส่ firstname ที่รับเข้ามา',
  //             lname: 'ใส่ lastname ที่รับเข้ามา',
  //             gender: 'ใส่ gender ที่รับเข้ามา',
  //             birthday: 'ใส่ birthday ที่รับเข้ามา',
  //             age: 'ใส่ age ที่รับเข้ามา',
  //             email: 'ใส่ email ที่รับเข้ามา',
  //             phone: 'ใส่ phone number ที่รับเข้ามา'
  //           }
  //           const response = await updateUser(idtoken, userDataupdate)

  //       } catch(err) {
  //         console.log(err)
  //       }
  //     } else {
  //       console.log('Token not found!')
  //     }
  //   }

  const uploadImg = async (value) => {
    return await axios.post(`https://api.cloudinary.com/v1_1/dkjfuys7y/image/upload`, value)
  }

  return {
    trainers,
    user,
    usersData,
    register,
    login,
    currentUser,
    updateUser,
    uploadImg
  };
};

export default useAPI;
