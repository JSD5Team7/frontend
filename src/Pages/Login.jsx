import React from 'react'
import { useState } from 'react'
import Layout from '../Layout/Layout'

const Login = () => {


  return (
    <Layout>

        <div className='login-container flex-col flex items-center justify-center h-screen'>
            <h1 className='text-7xl m-12'>Sign in</h1>

            <img src="" alt="" />

            <form className='login flex flex-col w-3/12 gap-3'>
                <input 
                    className='border-solid border-2 border-sky-500 rounded-xl p-2'
                    type="text" 
                    name='username'
                    placeholder='Username'

                />
                <input 
                    className='border-solid border-2 border-sky-500 rounded-xl p-2'
                    type='password'
                    name='password'
                    placeholder='*********'

                />
                <div className='flex justify-between'>
                    <p className='px-3'>Remember me</p>
                    <p className='px-3'>Forget password?</p>
                </div>
                <button className='border-solid border-2 border-sky-500 rounded-xl py-2' >Login</button>
            </form>
        </div>
    </Layout>
    
  )
}

export default Login