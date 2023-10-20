import React from 'react'
import Layout from '../Layout/Layout'
import FormRegistration from '../Components/FormRegistration'

const Registration = () => {
    return(
        <Layout>
            <div className='w-full h-full m-auto'>
            <h1 className='text-center text-white text-4xl p-5'>Welcome to Sport Club!</h1>
            <div className="form-signup w-full flex items-center gap-3 mt-5 bg-emerald-200 bg-opacity-10 shadow-md shadow-black rounded-lg">
                <div className="signup-image w-2/4 order-1">
                    <img src="/src/assets/images/sign-up-photo.jpeg" alt="Image signup page" className='rounded-e-lg contrast-125'/>
                </div>
                <FormRegistration />
            </div>
            </div>
        </Layout>
    )
}

export default Registration