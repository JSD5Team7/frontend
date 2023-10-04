import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const inpStyle = 'w-full border-b-2 p-2 bg-transparent text-white focus:outline-none focus:border-blue-400 caret-blue-400 placeholder:italic placeholder:text-slate-500'

const FormRegistration = () => {
    return(
        <div className='w-2/4 p-5'>
            <h2 className='text-3xl text-white text-center tracking-widest'>Registration</h2>
            <form className='m-6'>
                <div className="fullname mt-4 mb-4">
                    <label htmlFor="fullname" className='mr-3 text-white'>Full name <span className='text-red-500'>*</span></label>
                    <input type="text" name='fullname' id='fullname' placeholder='John Doe' className={inpStyle} required/>
                </div>
                <div className="email mt-4 mb-4">
                    <label htmlFor="email" className='mr-3 text-white'>Email <span className='text-red-500'>*</span></label>
                    <input type="email" name='email' id='email' placeholder='JohnDoe@example.com' className={inpStyle} required/>
                </div>
                <div className="password mt-4 mb-4">
                    <label htmlFor="password" className='mr-3 text-white'>Password <span className='text-red-500'>*</span></label>
                    <div className="inp-toggle flex items-center">
                    <input type="password" name='password' id='password' placeholder='********' className={inpStyle} required/>
                    <FontAwesomeIcon icon={faEye} className='text-gray-600' />
                    <FontAwesomeIcon icon={faEyeSlash} className='text-gray-600'/>
                    </div>
                </div>
                <div className="confirm-password mt-4 mb-4">
                    <label htmlFor="confirm-password" className='mr-3 text-white'>Confirm Password <span className='text-red-500'>*</span></label>
                    <div className="inp-toggle flex items-center">
                    <input type="password" name='confirm-password' id='confirm-password' placeholder='********' className={inpStyle} required/>
                    <FontAwesomeIcon icon={faEye} className='text-gray-600' onClick={() => alert('this icon was click')}/>
                    <FontAwesomeIcon icon={faEyeSlash} className='text-gray-600'/>
                    </div>
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