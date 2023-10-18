import React from 'react'
import { useState } from 'react'
import useAPI from '../Hook/useAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const inpStyle = 'w-full border-b-2 p-2 bg-transparent text-white focus:outline-none focus:border-blue-400 caret-blue-400 placeholder:italic placeholder:text-slate-500'

const FormRegistration = () => {
    const { register } = useAPI()
    const [value, setValue] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        fname: '',
        lname: '',
        age: '',
        email: '',
        phone: ''
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value.password !== value.confirmPassword) {
            alert('Password not match')
        } else {
            register(value)
            .then((res) => {
                console.log(res.data);
                alert(res.data)
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data)
            })
        }
    }

    return(
        <div className='w-2/4 p-5'>
            <h2 className='text-3xl text-white text-center tracking-widest'>Registration</h2>
            <form className='m-6' onSubmit={handleSubmit}>
                <div className="username mt-4 mb-4">
                    <label htmlFor="username" className='mr-3 text-white'>Username <span className='text-red-500'>*</span></label>
                    <input type="text" name='username' id='username' onChange={handleChange} placeholder='Username' className={inpStyle} required/>
                </div>
                <div className="password mt-4 mb-4">
                    <label htmlFor="password" className='mr-3 text-white'>Password <span className='text-red-500'>*</span></label>
                    <div className="inp-toggle flex items-center">
                    <input type="password" name='password' id='password' onChange={handleChange} placeholder='********' className={inpStyle} required/>
                    <FontAwesomeIcon icon={faEye} className='text-gray-600' />
                    <FontAwesomeIcon icon={faEyeSlash} className='text-gray-600'/>
                    </div>
                </div>
                <div className="confirmPassword mt-4 mb-4">
                    <label htmlFor="confirmPassword" className='mr-3 text-white'>Confirm Password <span className='text-red-500'>*</span></label>
                    <div className="inp-toggle flex items-center">
                    <input type="password" name='confirmPassword' onChange={handleChange} id='confirm-password' placeholder='********' className={inpStyle} required/>
                    <FontAwesomeIcon icon={faEye} className='text-gray-600' />
                    <FontAwesomeIcon icon={faEyeSlash} className='text-gray-600'/>
                    </div>
                </div>
                <div className="fname mt-4 mb-4">
                    <label htmlFor="fname" className='mr-3 text-white'>First Name <span className='text-red-500'>*</span></label>
                    <input type="text" name='fname' id='fname' onChange={handleChange} placeholder='First name' className={inpStyle} required/>
                </div>
                <div className="lname mt-4 mb-4">
                    <label htmlFor="lname " className='mr-3 text-white'>Last Name <span className='text-red-500'>*</span></label>
                    <input type="text" name='lname' id='lname' onChange={handleChange} placeholder='John Doe' className={inpStyle} required/>
                </div>
                <div className="birthday mt-4 mb-4">
                    <label htmlFor="birthday" className='mr-3 text-white'>Birth Day <span className='text-red-500'>*</span></label>
                    <input type="number" name='age' id='age' onChange={handleChange} className={inpStyle} required/>
                </div>
                <div className="email mt-4 mb-4">
                    <label htmlFor="email" className='mr-3 text-white'>Email <span className='text-red-500'>*</span></label>
                    <input type="email" name='email' id='email' onChange={handleChange} placeholder='JohnDoe@example.com' className={inpStyle} required/>
                </div>
                <div className="phonenumber mt-4 mb-4">
                    <label htmlFor="phonenumber" className='mr-3 text-white'>Contact Number <span className='text-red-500'>*</span></label>
                    <input type="number" name='phone' id='phone' onChange={handleChange} placeholder='09xxxxxxxx' className={inpStyle} required/>
                </div>
                <div className="btn mt-10 mb-10 flex justify-center">
                <button type='submit' className='w-40 border border-emerald-600 rounded-full bg-emerald-600 p-2 text-lg text-white shadow-md  hover:bg-emerald-500 hover:border-emerald-500 hover:font-bold'>Submit</button>
                <button type="reset" className='w-40 ml-2 border border-red-500 rounded-full bg-red-500 p-2 text-lg text-white shadow-md  hover:bg-red-700 hover:border-red-700 hover:font-bold'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default FormRegistration