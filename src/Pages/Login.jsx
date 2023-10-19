import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom' 
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../Layout/Layout'
import useAPI from '../Hook/useAPI'

const Login = () => {
    const { login } = useAPI()
    const [valueLogin, setValueLogin] = useState({
        username: '',
        password: ''
    });


    const dispatch = useDispatch()

    const navigete = useNavigate()

    const handleChange = (e) => {
        setValueLogin({
            ...valueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await login(valueLogin)
            alert("Login Success")
            
            dispatch({
                type: 'LOGIN',
                payload: {
                    token: response.data.token,
                    userId: response.data.payload.user.userId,
                    username : response.data.payload.user.username,
                    role: response.data.payload.user.role
                }
            });
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('userId',response.data.payload.user.userId)

            const idtoken = localStorage.token

            if (idtoken) {
                navigete('/')
            } 

        } catch(err) {
            console.error(err)
            alert(err.response.data)
        }        
    }
  return (
    <Layout>

        <div className='login-container flex-col flex items-center justify-center h-screen'>
            
            <h1 className='text-7xl mb-12'>LOG IN</h1>

            <img src="" alt="" />

            <form className='login flex flex-col w-[300px] gap-3' onSubmit={handleSubmit}>

                <input 
                    className='border-solid border-2 border-sky-500 rounded-xl p-2'
                    type="text" 
                    name='username'
                    placeholder='Username'
                    onChange={handleChange}
                />
                <input 
                    className='border-solid border-2 border-sky-500 rounded-xl p-2'
                    type='password'
                    name='password'
                    placeholder='*********'
                    onChange={handleChange}
                />
                <div className='flex justify-between'>
                    <p className='px-3'>Remember me</p>
                    <p className='px-3'>Forget password?</p>
                </div>
                <button 
                    className='border-solid border-2 border-sky-500 rounded-xl py-2' >Login
                </button>

            </form>
            <div className='w-[300px] mt-5'>
                <NavLink 
                    to={'/register'} 
                    activeClassName='active'>
                        <button 
                            className='border-solid border-2 w-full border-sky-500 rounded-xl py-2'>Sign Up
                        </button>
                </NavLink>
            </div >            
        </div>
    </Layout>
    
  )
}

export default Login