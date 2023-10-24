import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";


const backendURL = process.env.VITE_BACKEND_URL;

const useAPI = () => {
    

    const [trainers, setTrainers] = useState([]);
    const [user, setUser] = useState({})
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        const getDataTrainer = async() => {
            const response = await axios.get(`${backendURL}/coachList/all`);
            setTrainers(response.data)
        } 
        getDataTrainer();
    },[])

    useEffect(() => {
        const getUser = async(authtoken,value) => {
            const userId = value;
            if (userId) {
                const response = await axios.get(`${baseURL}/users/${userId}`,{
                    headers: {
                        authtoken
                    }
                })
                if (response.status === 200) {
                    setUser(response.data)
                }
            }
        }
        const localUserId = window.localStorage.userId
        const idtoken = window.localStorage.token
        getUser(idtoken,localUserId);
    },[])

    useEffect(() => {
        const getUsers = async() => {
            const response = await axios.get(`${baseURL}/users/`)
            if (response.status === 200) {

                setUsersData(response.data)
            }
        }
        getUsers();
    },[])
    
    const register = async(value) => {
        console.log(value)
    return await axios.post(`${baseURL}/users/register`, value)
    }

    const login = async(value) => {
       return await axios.post(`${baseURL}/users/login`, value)
    }
    
    const currentUser = async(authtoken) => {
        await axios.post(`${baseURL}/users/current-user`, {},
        {
            headers: {
                authtoken
            }
        })
     }

     

  return { trainers, user, usersData, register, login, currentUser };
}

export default useAPI