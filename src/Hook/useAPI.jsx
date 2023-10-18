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
    return await axios.post(`${baseURL}/api/register`, value)
    }

    const login = async(value) => {
       return await axios.post(`${baseURL}/api/login`, value)
    }

  return { trainers , register , login };
}

export default useAPI