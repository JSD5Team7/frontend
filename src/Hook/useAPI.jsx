import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

const useAPI = () => {
    const baseURL = 'http://localhost:3000'

    const [trainers, setTrainers] = useState([]);

    const [user, setUser] = useState(null)

    useEffect(() => {
        const getDataTrainer = async() => {
            const response = await axios.get(`${baseURL}/coachList/all`);
            setTrainers(response.data)
        } 
        getDataTrainer();
    },[])

    useEffect(() => {
        const getUser = async(value) => {
            const userId = value;
            if (userId) {
                const response = await axios.get(`${baseURL}/users/${userId}`)
                if (response.status === 200) {
                    setUser(response.data)
                }
            }
        }
        const localUserId = window.localStorage.userId
        getUser(localUserId);
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

     const editTxActivity = async()=>{
        
     }

  return { trainers, user, register, login, currentUser };
}

export default useAPI