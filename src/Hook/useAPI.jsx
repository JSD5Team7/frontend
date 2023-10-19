import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

const useAPI = () => {
    const baseURL = 'http://localhost:3000'

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const getDataTrainer = async() => {
            const response = await axios.get(`${baseURL}/coachList/all`);
            setTrainers(response.data)
        } 
        getDataTrainer();
    },[])
    
    const register = async(value) => {
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

  return { trainers , register , login, currentUser };
}

export default useAPI