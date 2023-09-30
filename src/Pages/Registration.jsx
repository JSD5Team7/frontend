import React from 'react'
import Layout from '../Layout/Layout'
import FormRegistration from '../Components/FormRegistration'

const Registration = () => {
    return(
        <Layout>
            <h1>Welcome to Sport Club!</h1>
            <div className="form-signup">
                <div className="signup-image">
                    <img src="" alt="Image signup page" />
                </div>
                <FormRegistration/>
            </div>
        </Layout>
    )
}

export default Registration