import React from 'react'

const FormRegistration = () => {
    return(
            <form >
                <div className="fullname">
                    <label htmlFor="fullname">Full name:</label>
                    <input type="text" name='fullname' id='fullname' placeholder='John Doe' />
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' id='email' placeholder='JohnDoe@example.com' />
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' id='password' placeholder='********' />
                </div>
                <div className="confirm-password">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name='confirm-password' id='confirm-password' placeholder='********' />
                </div>
                <button type='submit'>Submit</button>
                <button type="reset">Clear</button>
            </form>
    )
}

export default FormRegistration